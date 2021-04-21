import React from "react";
import MainLayout from "../MainLayout";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <MainLayout>
      <div role="tabpanel" className="tab-pane fade in active" id="contact">
        <div className="inside-sec">
          <h5 className="tittle">CONTACT ME</h5>
          <section>
            <div className="padding-left-30 padding-right-30 padding-top-50 padding-bottom-50">
              <div className="row ">
                <div className="col-md-4 text-center">
                  <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-xlarge dark-text">
                    <div className="ib-icon">
                      {" "}
                      <i className="fa fa-mobile text-primary"></i>{" "}
                    </div>
                    <div className="ib-info text-dark">
                      <p>062 393 6600</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                    <div className="ib-icon">
                      {" "}
                      <i className="fa fa-map-marker text-primary"></i>{" "}
                    </div>
                    <div className="ib-info text-dark">
                      <p>Voranan Apt., Chatuchak, Bangkok</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-center">
                  <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                    <div className="ib-icon">
                      {" "}
                      <i className="fas fa-envelope text-primary"></i>{" "}
                    </div>
                    <div className="ib-info text-dark">
                      <p className="no-margin-bottom">
                        <a href="#." className="text-white">
                          samurai.hanso@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="tittle">My Workplace</h5>
            <section className="map-block">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=magic%20box%20asia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </section>
            <br />
            <h5 className="tittle">SAY HELLO</h5>
            <div className="contact style-3 light-border padding-top-50 padding-bottom-50 padding-left-20 padding-right-20">
              <div className="contact-right">
                <ContactForm sm={{ set1: "col-sm-4", set2: "col-sm-12" }} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
