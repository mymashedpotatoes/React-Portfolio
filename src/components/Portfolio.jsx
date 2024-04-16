import React from 'react';
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// portfolio component
const Portfolio = () => {
    return (
        <>
            <h2>Portfolio</h2>

            <div className="box-grid">
                <div className="box-flex box-flex-center">
                    <img className="box-img" src="./images/1.png" alt="Data Dish homepage" title="Data Dish"></img>
                    <div className="box-caption">
                        <a href='https://agile-hollows-63324-0df4568dcdbc.herokuapp.com/'>Data Dish</a>
                        <a href="https://github.com/mymashedpotatoes/Data-Dish" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="box-flex box-flex-center">
                    <img className="box-img" src="./images/2.png" alt="Foodr homepage" title="Foodr"></img>
                    <div className="box-caption">
                        <a href='https://camwhritenour.github.io/Foodr/'>Foodr</a>
                        <a href="https://github.com/camwhritenour/Foodr" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="box-flex box-flex-center">
                <img className="box-img" src="./images/3.png" alt="homepage of weather dashboard" title="Weather Dashboard"></img>
                    <div className="box-caption">
                        <a href='https://mymashedpotatoes.github.io/Weather-Dashboard/'>Weather Dashboard</a>
                        <a href="https://github.com/mymashedpotatoes/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="box-flex box-flex-center">
                <img className="box-img" src="./images/4.png" alt="password generator" title="password generator"></img>
                    <div className="box-caption">
                        <a href='https://mymashedpotatoes.github.io/Password-Generator/'>Password Generator</a>
                        <a href="https://github.com/mymashedpotatoes/Password-Generator" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="box-flex box-flex-center">
                <img className="box-img" src="./images/5.png" alt="PWA text editor" title="PWA text editor"></img>
                    <div className="box-caption">
                        <a href='https://pwa-text-editor-fkx5.onrender.com/'>PWA Text Editor</a>
                        <a href="https://github.com/mymashedpotatoes/PWA-Text-Editor" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="box-flex box-flex-center">
                <img className="box-img" src="./images/6.png" alt="Portfolio Page" title="Portfolio Page"></img>
                    <div className="box-caption">
                        <a href='https://mymashedpotatoes.github.io/Portfolio-page/'>Portfolio Page</a>
                        <a href="https://github.com/mymashedpotatoes/Portfolio-page" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;