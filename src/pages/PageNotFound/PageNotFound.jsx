import Link from '../../components/UI/Link/Link';

import "./pageNotFound.css"

const PageNotFound = () => {
    return (
        <div>
            <div className='found-container'>
                <div className='found-text'>
                    <h1>404 Error</h1>
                    <h2>¡UPS! ALGO SUCEDIÓ</h2>
                    <p>Parece que la página que buscas no existe o fue removida</p>
                    <Link />
                </div>

            </div>
        </div>
    );
};

export default PageNotFound;