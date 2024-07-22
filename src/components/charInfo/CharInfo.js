/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const skeleton =  char || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char} show={props.charId}/> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )

}

const View = ({char, show}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    const duration = 300;

    return (
        <CSSTransition
            in={show} 
            timeout={duration} 
            classNames={'char__info'}
        >
            <div>
                <div className="char__basics">
                        <img 
                            src={thumbnail} 
                            alt={name}
                            style={{objectFit: thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? 'fill' : 'cover'}}
                        />
                        <div>
                            <div className="char__info-name">{name}</div>
                            <div className="char__btns">
                                <a href={homepage} className="button button__main">
                                    <div className="inner">homepage</div>
                                </a>
                                <a href={wiki} className="button button__secondary">
                                    <div className="inner">Wiki</div>
                                </a>
                            </div>
                        </div>
                    </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {
                        comics.length > 0 ? comics.map((item, i) => {
                            if (i > 9) return null;
                            return (
                                <li key={i} className="char__comics-item">
                                    <Link to={`/comics/${item.resourceURI.slice(-5)}`}>{item.name}</Link>
                                </li>

                            )
                        }) : 'There are no comics for this character.'
                    }
                </ul>
            </div>
        </CSSTransition>  
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;