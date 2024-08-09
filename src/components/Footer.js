import githubImage from '../assets/github-ico.png';
import instagramImage from '../assets/insta-ico.png';
import linkedinImage from '../assets/linkedin-ico.png';
import twitterImage from '../assets/twitter-ico.png';

function Footer() {
    return(
        <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/heather-goodwin-264157302">
                <img
                  class="main-footer__icon"
                  src={linkedinImage}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/HGoodwin415">
                <img
                  class="main-footer__icon"
                  src={githubImage}
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://x.com/HeidiDevereux">
                <img
                  class="main-footer__icon"
                  src={twitterImage}
                  alt="icon"
                />
              </a>
              
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/heididev2014">
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src={instagramImage}
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Heather Goodwin</h4>
            <p class="main-footer__short-desc">
              Frontend Software Developer. 
            </p>
          </div>
        </div>

    
      </div>
    </footer>
    )
}

export default Footer;