import websiteImage from '../assets/Littlelemon.png'


function CardTwo() {
    return(
        <div>
            <h1>Little Lemon Website</h1>
            <img src={websiteImage} alt="Little Lemon Restaurant" className="projects__row-img"/>
            <div className="card__buttons">
                <a href="https://lemonwebsite.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn--live">Live Link</a>
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="btn btn--github">GitHub Repo</a>
            </div>
            <p>Built for both desktop and mobile users, the Little Lemon Website showcases a responsive and user-centric design. The platform features online ordering for food, easy reservation systems, and a clean layout. It demonstrates my skills in creating dynamic, user-friendly experiences with a focus on accessibility and performance.</p>
            <h3>Skills Used</h3>
            <ul className="skills">
                <li className="skills__skill">JavaScript</li>
                <li className="skills__skill">HTML</li>
                <li className="skills__skill" >CSS</li>
                <li className="skills__skill">React</li> 
                <li className="skills__skill">Figma</li>
                <li className="skills__skill">UX/UI</li>
            </ul>
        </div>
    )
}

export default CardTwo;