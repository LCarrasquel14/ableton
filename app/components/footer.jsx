import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="title">Ableton</h1>
      <div className="nav-container">
        <div>
          {" "}
          <div className="colums">
            <a className="link" href="">
              Register Live or Push
            </a>
            <a className="link" href="">
              About Ableton
            </a>
            <a className="link" href="">
              Jobs
            </a>
          </div>
          <div className="row socials">
            <a className="link facebook" href="">
              <i class="bx bxl-facebook icon "></i>
            </a>
            <a className="link twitter" href="">
              <i class="bx bxl-twitter icon "></i>
            </a>
            <a className="link youtube" href="">
              <i class="bx bxl-youtube icon "></i>
            </a>
            <a className="link instagram" href="">
              <i class="bx bxl-instagram  icon"></i>
            </a>
          </div>
        </div>
        <div className="colums">
          <h4>Education</h4>
          <a className="link" href="">
            Offers for students and teachers
          </a>
          <a className="link" href="">
            Ableton for the Classroom
          </a>
          <a className="link" href="">
            Ableton for Colleges and Universities
          </a>
        </div>
        <div>
          <h4>Sign up to our newsletter</h4>
          <p>
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <form>
            <input type="text" placeholder="Email Address" />
            <input type="submit" value="Sing up" />
          </form>
        </div>
        <div className="colums">
          <h4>Community</h4>
          <a className="link" href="">
            Find Ableton User Groups
          </a>
          <a className="link" href="">
            Find Certified Training
          </a>
          <a className="link" href="">
            Become a Certified Trainer
          </a>
        </div>
        <div>
          <h4>Language and Location</h4>
          <div>
            <select name="" id="">
              <option value="">English</option>
            </select>
            <select name="" id="">
              <option value="">venezuela</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
