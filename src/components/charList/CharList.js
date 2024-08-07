/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { CSSTransition,  TransitionGroup} from 'react-transition-group';

import useVisibleItems from '../../hooks/useVisibleItemsDelay.hook';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const setContent = (process, Component, newItemLoading) => {
    switch(process) {
        case 'waiting': 
            return <Spinner/>;
            break;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
            break;
        case 'confirmed':
            return <Component/>;
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default: 
            throw new Error('Unexpected process state');
    }
}

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(285);
    const [charEnded, setCharEnded] = useState(false);
  
    const visibleItems = useVisibleItems(charList);
    // const {loading, error, getAllCharacters, process, setProcess} = useMarvelService();
    const {getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharListLoaded = (newCharList) => {
        let ended =  false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 9)
        setCharEnded(ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    function renderItems(arr) {
        const duration = 300;

        return (
            <TransitionGroup component="ul" className="char__grid">
                {arr.map((item, i) => {
                    const {name, thumbnail, id} = item;
                    return (
                        <CSSTransition key={id} timeout={duration} classNames="char">
                            <li tabIndex={0}
                                className="char__item"
                                key={id}
                                ref={el => itemRefs.current[i] = el}
                                onClick={() => {
                                    props.onCharSelected(id)
                                    focusOnItem(i);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === ' ' || e.key === "Enter") {
                                        props.onCharSelected(item.id);
                                    focusOnItem(i);
                                    }
                                }}>
                                    <img 
                                        src={thumbnail} 
                                        alt={name} 
                                        style={{objectFit: thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' || thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif' ? 'fill' : 'cover'}}
                                    />
                                    <div className="char__name">{item.name}</div>
                            </li>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        )
    }
     
    // const items = renderItems(visibleItems);

    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return ( 
        <div className="char__list">
            {/* {errorMessage}
            {spinner}
            {items} */}
            {setContent(process, () => renderItems(visibleItems), newItemLoading)}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
    
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
}

export default CharList;