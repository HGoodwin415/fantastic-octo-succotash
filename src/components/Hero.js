import profile from '../assets/card-photo.jpg';

function Hero() {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
               <div className="home-hero__info">
                    <h1 className="home-hero__title">Frontend Software Developer</h1>
                    <img
                        src={profile}
                        alt="Heather Goodwin"
                        className="home-hero__profile-image"
                    />
                    <h1 className="home-hero__name">Heather Goodwin</h1>
                </div>
                <div className="home-hero__cta">
                    <button className="btn btn--bg">See my projects</button>
                    <button href="https://github.com/HGoodwin415" target="_blank" rel="noopener noreferrer" className="btn btn--bg">Github</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;