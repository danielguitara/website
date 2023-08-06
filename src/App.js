import daniel from './assets/daniel.svg'
import linkedin from './assets/linkedin.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'
import youtube from './assets/youtube.png'
import tiktok from './assets/tiktok.png'
import apple from './assets/apple.png'
import './App.css';

function App() {
  return (
    <div className="container">
      <section className="header">DG</section>
      <section className="content">
        <div className="profile">
          <div className="profile-picture"><img src={daniel} width="125px" height="125px" alt="Daniel"/></div>
          <div className="profile-desc">
            <div className="profile-desc__title">I'm Daniel Guitara</div>
            <div className="profile-desc__sub">a software developer, designer and creator.</div>
            <div className="profile-desc__sub">business enquires/collaboration: danielguitara4@gmail.com</div>
          </div>
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/danielguitara" className="link"><img src={linkedin} width="30px" alt="Linkedin"/><span>My Linkedin</span></a>
          <a href="https://www.instagram.com/danielguitara" className="link"><img src={instagram} width="30px" alt="Instagram"/><span>My Instagram</span></a>
          <a href="https://www.tiktok.com/@danielguitara" className="link"><img src={tiktok} width="30px" alt="Tiktok"/><span>My Tiktok</span></a>
          <a href="https://music.apple.com/profile/danielguitara" className="link"><img src={apple} height="30px" alt="Apple"/><span>My Apple Music</span></a>
          <a href="https://www.twitter.com/danielguitara" className="link"><img src={twitter} width="30px" alt="Twitter"/><span>My Twitter</span></a>
          <a href="https://www.youtube.com/@danielguitara" className="link"><img src={youtube} width="30px" alt="Youtube"/><span>My Youtube</span></a>
        </div>
      </section>
      <section className="footer">Copyright © {(new Date().getFullYear())} Daniel Guitara. All rights reserved.</section>
    </div>
  );
}

export default App;
