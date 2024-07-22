import {useNavigate } from 'react-router-dom';

import './singleCharacterPage.scss';

const SingleCharacterPage  = ({data}) => {
    const {name, thumbnail, description} = data;

    const navigate = useNavigate();

    return (
        <>
            <div className="single-character">
                <img src={thumbnail} alt={name} className="single-character__char-img"/>
                <div className="single-character__info">
                    <h2 className="single-character__name">{name}</h2>
                    <p className="single-character__descr">{description}</p>
                </div>
                <div onClick={() => navigate(-1)} className="single-character__back">Back to all</div>
            </div>
        </>
    )
}

export default SingleCharacterPage;