import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="side-bar">
          <h5 className="tittle">Professional Details</h5>
          <img src="images/avatar.jpg" className="img-responsive" alt="" />
          <ul className="personal-info">
            <li>
              <p> <span> Name</span> Permpoon Chao </p>
            </li>
            <li>
              <p> <span> Location</span> Bangkok </p>
            </li>
            <li>
              <p> <span> Experience</span> 2 Years </p>
            </li>
            <li>
              <p> <span> Degree</span> MSc. </p>
            </li>
            <li>
              <p> <span> Career Level</span> Beginner </p>
            </li>
            <li>
              <p> <span> Github</span><a href="https://github.com/mossnana"> mossnana</a></p>
            </li>
          </ul>
          <h5 className="tittle">Attachments</h5>
          <div className="attach bor-btm padding-25">
            <ul>
              <li>
                <p><img src="https://i.imgur.com/ldgHfAU.jpg" alt="" /> My Official Resume.pdf <a href="https://drive.google.com/file/d/1Tbb_MhCD0ZRcHV8H5nnLzH_-bkds63Ed"><i className="fas fa-eye social-mystyle"></i></a></p>
              </li>
            </ul>
          </div>
          <h5 className="tittle">Social Profiles</h5>
          <div className="social-icon bor-btm padding-25">
            <ul>
              <li>
                <a href="https://www.facebook.com/facepermpoon"> <i className="fab fa-facebook social-mystyle"></i></a>
              </li>
              <li>
                <a href="https://github.com/mossnana"> <i className="fab fa-github social-mystyle"></i></a>
              </li>
              <li>
                <a href="https://twitter.com/permpoonchao"> <i className="fab fa-twitter social-mystyle"></i></a>
              </li>
              <li>
                <a href="linkedin.conm/in/permpoonchao"> <i className="fab fa-linkedin social-mystyle"></i></a>
              </li>
              <li>
                <a href="mailto:samurai.hanso@gmail.com"> <i className="fab fa-google social-mystyle"></i></a>
              </li>
            </ul>
          </div>
          <h5 className="tittle">Contact Me</h5>
          <div className="contact padding-25">
            <ContactForm sm={{ set1: "col-sm-12", set2: "col-sm-12" }} />
            {/*}
            <form role="form" id="contact_form" className="contact-form">
              <ul className="row">
                <li className="col-sm-12">
                  <label>
                    <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                  </label>
                </li>
                <li className="col-sm-12">
                  <label>
                    <input type="text" className="form-control" name="company" id="company" placeholder="Subject" />
                  </label>
                </li>
                <li className="col-sm-12">
                  <label>
                    <textarea className="form-control" name="message" id="message" rows="5" placeholder="Message"></textarea>
                  </label>
                </li>
                <li className="col-sm-12">
                  <button type="submit" value="submit" id="btn_submit" >Send Message</button>
                </li>
              </ul>
            </form>
            {*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;