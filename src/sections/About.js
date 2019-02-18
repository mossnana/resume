import React from 'react';
import MainLayout from '../MainLayout';

const About = () => {


  return (
    <MainLayout>
      <div role="tabpanel" className="tab-pane fade in active" id="about-me">
        <div className="inside-sec">
          <h5 className="tittle">About Me</h5>
          <section className="about-me padding-top-10">
            <ul className="personal-info">
              <li>
                <p> <span> Name</span> Permpoon Chaowanaphunphon </p>
              </li>
              <li>
                <p> <span> Age</span> 25 Years </p>
              </li>
              <li>
                <p> <span> Location</span> BKK, Thailand </p>
              </li>
              <li>
                <p> <span> Experience</span> 1 Years </p>
              </li>
              <li>
                <p> <span> Degree</span> BSc. </p>
              </li>
              <li>
                <p> <span> Career Level</span> Beginner-Level </p>
              </li>
              <li>
                <p> <span> Phone</span> (080) 677-5134 </p>
              </li>
              <li>
                <p> <span> E-mail</span> <a href="#."> samurai.hanso@gmail.com</a> </p>
              </li>
              <li>
                <p> <span> Github</span><a href="https://github.com/mossnana"> mossnana</a></p>
              </li>
            </ul>
            <h5 className="tittle">I wanna be Full Stack Developer</h5>
            <div className="padding-20">
              <p>
                After I graduated from a bachelor degrese, I started working. Almost a year that I had to find yourself. Today, I think I found that I wanna be a programmer or developer. So, I decided to study in IT, master degree. And I hope I will have a programmer or developer job. Betweeen studying in master degree, I'm learning more knowledge by yourself from youtube, udemy, coursera, etc. A thing that I want is IT jobs experience.
                <br />
              </p>
            </div>
            <h5 className="tittle">my hobbies and interests</h5>
            <div className="row padding-20 margin-top-50">
              <div className="col-md-4 text-center">
                <div className="icon-box i-large ib-black">
                  <div className="ib-icon"> <i id="react" className="fab fa-react"></i> </div>
                  <div className="ib-info">
                    <h4 className="h6">Full stack development</h4>
                    <p>HTML, CSS, Javascript, JS Frameworks, etc.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="icon-box i-large ib-black">
                  <div className="ib-icon"> <i className="fab fa-android faa-vertical animated"></i> </div>
                  <div className="ib-info">
                    <h4 className="h6">Android Development</h4>
                    <p>Native Android Development : Android Studio, Kotlin</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="icon-box i-large ib-black">
                  <div className="ib-icon"> <i className="fab fa-apple faa-falling animated"></i> </div>
                  <div className="ib-info">
                    <h4 className="h6">iOS development</h4>
                    <p>Native iOS Development : Xcode, Swift</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row padding-20 margin-bottom-50">
              <div className="col-md-4">
                <div className="icon-box i-large ib-black">
                  <div className="ib-icon"> <i className="far fa-chart-bar faa-passing animated"></i> </div>
                  <div className="ib-info">
                    <h4 className="h6">Data Science Field</h4>
                    <p>Machine Learning</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-box i-large ib-black">
                  <div className="ib-icon"> <i class="fas fa-film faa-tada animated"></i> </div>
                  <div className="ib-info">
                    <h4 className="h6">Watch movies</h4>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="icon-box i-large ib-black">
                  <div className="ib-icon"> <i className="fa fa-music faa-pulse animated"></i> </div>
                  <div className="ib-info">
                    <h4 className="h6">listen musics</h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="tittle">Skills</h5>
            <div className="panel-group accordion padding-20" id="accordion">
              <div className="panel panel-default">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel-heading">
                      <h4 className="panel-title"> <i data-toggle="" data-parent="" href="" className="fab fa-html5"></i>  Basic HTML5, CSS3</h4>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div id="collapseOne" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel-heading">
                      <h4 className="panel-title"> <i class="fab fa-js"></i> Basic Javascript </h4>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div id="collapsetwo" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel-heading">
                      <h4 className="panel-title"> <i class="fab fa-python"></i> Basic Python</h4>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div id="collapsethree" className="panel-collapse collapse">
                      <div className="panel-body">
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  )
}

export default About;