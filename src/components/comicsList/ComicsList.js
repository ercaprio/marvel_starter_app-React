/* eslint-disable react-hooks/exhaustive-deps */

import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition,  TransitionGroup} from 'react-transition-group';

import useVisibleItems from '../../hooks/useVisibleItemsDelay.hook';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(285);
    const [comicsEnded, setComicsEnded] = useState(false);

    const visibleItems = useVisibleItems(comicsList);
    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    console.log(offset);

    const onComicsListLoaded = (newComicsList) => {
        let ended =  false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8)
        setComicsEnded(ended);
    }

    function renderItems(arr) {
        const duration = 300;

        return (
            <TransitionGroup component="ul" className="comics__grid">
                {arr.map((item, i) => {
                    const {title, thumbnail, price, id} = item;
                    return (
                        <CSSTransition key={id} timeout={duration} classNames="comics">
                            <li className="comics__item" key={i}>
                                <Link to={`/comics/${id}`}>
                                    <img src={thumbnail} alt="ultimate war" className="comics__item-img"/>
                                    <div className="comics__item-name">{title}</div>
                                    <div className="comics__item-price">{price}</div>
                                </Link>
                            </li>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        )
    }

    const items = renderItems(visibleItems);
    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button className="button button__main button__long"
                     disabled={newItemLoading}
                     style={{'display': comicsEnded ? 'none' : 'block'}}
                     onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;