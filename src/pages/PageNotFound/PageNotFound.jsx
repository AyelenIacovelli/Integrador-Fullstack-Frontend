import Link from '../../components/UI/Link/Link';

import "./pageNotFound.css"

const PageNotFound = () => {
    return (
        <div>
            <div className='found-container'>
                <div className='found-text'>
                    <h1 className='found-title'>404 Error</h1>
                    <h2 className='found-subtitle'>¡UPS! ALGO SUCEDIÓ</h2>
                    <p>Parece que la página que buscas no existe o fue removida</p>
                    <Link />
                </div>
                <img
                    src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/404_qgsxpa.png'
                    alt=''
                    className='imgNotFound'
                />
            </div>
        </div>
    );
};

export default PageNotFound;