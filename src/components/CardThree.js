import generatorImage from '../assets/password.jpg';

function CardThree() {
    return (
        <div className="card">
            <h1 className="card__title">Password Generator</h1>
            <img src={generatorImage} alt="Password Generator" className="projects__row-img"/>
            <div className="card__buttons">
                <a href="https://github.com/HGoodwin415/supreme-succotash" target="_blank" rel="noopener noreferrer" className="btn btn--live">Live Link</a>
                <a href="https://github.com/HGoodwin415/supreme-succotash.git" target="_blank" rel="noopener noreferrer" className="btn btn--github">GitHub Repo</a>
            </div>
            <p className="card__description">
                This Password Generator app is crafted with a focus on usability and security. Users can generate robust passwords based on customizable criteria, such as length and character types. The project highlights my proficiency in JavaScript and frontend technologies, delivering a practical tool with a polished, interactive interface.
            </p>
            <h3>Skills Used</h3>
            <ul className="skills">
                <li className="skills__skill">JavaScript</li>
                <li className="skills__skill">HTML</li>
                <li className="skills__skill" >CSS</li>
                <li className="skills__skill">React</li> 
            </ul>
        </div>
    );
}

export default CardThree;