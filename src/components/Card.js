import colorImage from "../assets/color.png";

function Card() {
    return (
        <div>
        <h2>Color Scheme</h2>
        <img src={colorImage} alt="color generator" className="projects__row-img"/>
        <div className="card__buttons">
                <a href="https://thunderous-druid-4e8a87.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn--live">Live Link</a>
                <a href="https://github.com/HGoodwin415/legendary-carnival.git" target="_blank" rel="noopener noreferrer" className="btn btn--github">GitHub Repo</a>
            </div>
        <p>Designed with a sleek and intuitive interface, this Color Scheme Generator allows users to effortlessly create and customize color palettes. Leveraging modern frontend technologies, the app provides real-time previews of color schemes, making it an essential tool for designers and developers to find the perfect colors for their projects.</p>
        <h3>Skills Used</h3>
            <ul className="skills">
                <li className="skills__skill">JavaScript</li>
                <li className="skills__skill">HTML</li>
                <li className="skills__skill" >CSS</li>
                <li className="skills__skill">React</li> 
            </ul>
        </div>
        
    )
}

export default Card;