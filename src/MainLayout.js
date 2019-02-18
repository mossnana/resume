import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Sidebar from './Sidebar';
import Footer from './Footer';

class MainLayout extends Component {
  render() {
    return (
      <div className="wrap">
        <main className="cd-main-content">
          <div id="content">
            <div className="resume">
              <div className="container">
                <div className="row">
                  <Sidebar />
                  <div className="col-md-8">
                    <nav>
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-tabis" aria-expanded="false"> <span className="tittle">MENU</span> <span className="fas fa-ellipsis-v icon-nav"></span> </button>
                      <div className="navbar-collapse collapse in" id="nav-tabis">
                        <ul className="isop-filter nav nav-pills">
                          <li role="presentation"><Link to="/about"><i className="fas fa-user"></i> ABOUT ME</Link></li>
                          <li role="presentation"><Link to="/resume"><i className="fas fa-book-open"></i>RESUME</Link></li>
                          <li role="presentation"><Link to="/blog"><i className="fab fa-blogger"></i>BLOG</Link></li>
                          <li role="presentation"><Link to="/contact"><i className="fas fa-at"></i>CONTACT ME</Link></li>
                        </ul>
                      </div>
                    </nav>
                    <div className="tab-content">
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default MainLayout;