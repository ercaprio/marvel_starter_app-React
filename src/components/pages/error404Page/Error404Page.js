import {Link, useNavigate} from 'react-router-dom';

import './error404Page.scss';

const Error404Page = () => {
	const navigate = useNavigate();
	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<div></div>
					<h1>404</h1>
				</div>
				<h2>Page not found</h2>
				<p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
				<button onClick={() => navigate(-1)} className="button button__secondary" >
					<div className="inner">Back</div>
				</button>
			</div>
		</div>
	);
}

export default Error404Page;
