const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="185" height="185" style={{ margin: '0 auto', shapeRendering: 'auto', display: 'block', background: 'rgb(255, 255, 255)' }}>
            <g>
                <circle strokeLinecap="round" fill="none" strokeDasharray="42.411500823462205 42.411500823462205" stroke="#9f0013" strokeWidth="7" r="27" cy="50" cx="50">
                    <animateTransform values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6944444444444444s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                </circle>
                <g></g>
            </g>
        </svg>
    );
};

export default Spinner;



