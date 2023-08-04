import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Signin } from './components/signin/signin';
import { Register } from './components/signup/signup';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HomePage } from './components/home/home';


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
      <header className="d-flex mt-1 justify-content-between p-2 bg-dark text-white ">
            <div>
                <h1 className=" heading" >TalentTech</h1>
                <p className="tag">Welcome to TalentTech: Your Gateway to Exceptional Talent!</p>
            </div>
            <div className="mt-4">
            <nav className="navi">
            <Link to="/">Home</Link>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
            </nav>
            </div>
            <div>
                <div className="input-group">
                <select className="form-select me-3 mt-3">
                    <option>Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
                <button className="loginp mt-3 "><Link className='text-white text-decoration-none' to="/signin">Signin</Link></button>
                </div>
            </div>
        </header>
        <section>
          <div>
            <Routes>
            <Route path='/' element={<HomePage/>}/> 
            <Route path='/signin' element={<Signin/>} />
            <Route path='/signup' element={<Register/>}/>
            </Routes>
          </div>
        </section>
      </BrowserRouter>
      <footer>
        <div className="button-container">
          <a href="#" className="continue-with-google-button">
          <img src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png" alt="Google Logo" className="google-logo" />
          Continue with Google
        </a>
        </div>
        <section className="stay-connected">
            <h2>Stay Connected</h2>
            <p>Follow us on social media to stay up-to-date with the latest tech industry trends, hiring tips, and more.</p>
            <div className="social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
        </section>
        <section className="contact-us">
            <br/>
            <br/>
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? Our dedicated support team is here to help. Reach out to us via email or phone.</p>
            <button className="contact-cta">Contact Us</button>
        </section>
        <section className="location">
            <h2>Location</h2>
            <p>TechTalent Connect HQ</p>
            <p>123, Tech Park Street,</p>
            <p>City, State, Country - XXXXXXX</p>
        </section>
        </footer>
    </div>
  );
}

export default App;
