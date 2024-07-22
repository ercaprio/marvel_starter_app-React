/* eslint-disable no-unused-vars */
import img from './error.png';

const ErrorMessage = () => {
    return (
        // <img src={process.env.PUBLIC_URL + '/error.gif'} alt="error" />
        <div>
            <img style={
                {
                    display: 'block',
                    width: '200px',
                    height: '200px',
                    objectFit: 'contain',
                    margin: '0 auto'
                }
            } 
            src={img} 
            alt="error" 
            />
            <div className='pulse' style={{textAlign: 'center', fontWeight: 'bold', fontSize: '25px', marginTop: '-15px'}}>Error!</div>
        </div>

    )
}

export default ErrorMessage;