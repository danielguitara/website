import daniel from './assets/daniel.jpg'
import linkedin from './assets/linkedin.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import tiktok from './assets/tiktok.svg'
import link from './assets/link.svg'
import './App.css';

function App() {
  return (
    <div className="container">
      <div></div>
      <div>
        <section className="content">
          <div className="block">
            <div className="block-picture"><img src={daniel} width="100px" height="100px" alt="Daniel"/></div>
            <div className="block-desc">
              <div className="block-desc__title">I'm Daniel - a designer and creator.</div>
              <div className="block-desc__sub">I started as a software developer making website in several companies, but now interested in design and do anything related. Design app, build website, running e-commerce stores and I also make Youtube videos. I'm from West Java, Indonesia.</div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="block">
            <div className="block-title">Creating</div>
          </div>
          <div className="block half">
            <div className="block-list">
              <div className="block-list__title">
                <a href="https://daniels-portofolio-3e259e.webflow.io" className="link-create">Portfolio<img src={link} width="12px" alt="Lightroom Presets"/></a>
              </div>
              <div className="block-list__sub">Design and build beautiful websites for businesses around the globe.</div>
            </div>
            {/* <div className="block-list">
              <div className="block-list__title">
                <a href="https://store.danielguitara.com/collection/all" className="link-create">Lightroom Presets<img src={link} width="12px" alt="Lightroom Presets"/></a>
              </div>
              <div className="block-list__sub">A series of Lightroom presets custom made from years of editing photos.</div>
            </div> */}
            <div className="block-list">
              <div className="block-list__title">
                <a href="https://store.danielguitara.com/collection/all" className="link-create">Wallpapers<img src={link} width="12px" alt="Wallpapers"/></a>
              </div>
              <div className="block-list__sub">Designing and making premium wallpapers for desktops and mobile.</div>
            </div>
            <div className="block-list">
              <div className="block-list__title">
                <a href="https://www.youtube.com/@danielguitara" className="link-create">Youtube<img src={link} width="12px" alt="Youtube"/></a>
              </div>
              <div className="block-list__sub">Uploading videos covering music, tech, design and lifestyle.</div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="block">
            <div className="block-title">Elsewhere</div>
            <div className="block-links">
              <a href="https://www.linkedin.com/in/danielguitara" className="link"><img src={linkedin} width="18px" alt="Linkedin"/><span>danielguitara</span></a>
              <a href="https://www.instagram.com/danielguitara" className="link"><img src={instagram} width="18px" alt="Instagram"/><span>danielguitara</span></a>
              <a href="https://www.twitter.com/danielguitara" className="link"><img src={twitter} width="18px" alt="Twitter"/><span>danielguitara</span></a>
              <a href="https://www.tiktok.com/@danielguitara" className="link"><img src={tiktok} width="18px" alt="Tiktok"/><span>danielguitara</span></a>
            </div>
          </div>
        </section>
      </div>
      <div className="footer">
          <div className="footer-desc">
            <div className="block">© 2025 danielguitara. All rights reserved.</div>
          </div>
      </div>
    </div>
  );
}

export default App;
