/* eslint-disable no-unused-vars */
import './charList.scss';

import { Component } from 'react/cjs/react.production.min';
import MarvelService from '../../services/MarvelService';

import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component{
    state = {
        chars: []
    };

    marvelService = new MarvelService();

    onCharsLoaded = () => {
        this.marvelService
            .getAllCharacters()
            .then(res => {
                const chars = res.map((char, id) => {
                    const {name, thumbnail, ...itemProps} = char;
                    return (
                        <li className="char__item" key={id}>
                            <img src={thumbnail} 
                                alt="thumbnail"
                                style={{objectFit: thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? 'contain' : 'cover'}}
                            />
                            <div className="char__name">{name}</div>
                        </li>
                    )
                })
                this.setState({ chars });
            })
            .catch(error => console.error('Error loading characters:', error));
    }

    componentDidMount () {
        this.onCharsLoaded();
    }

    render () {
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {this.state.chars}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;