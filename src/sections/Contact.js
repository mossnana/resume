import React from 'react';
import MainLayout from '../MainLayout';
import ContactForm from '../ContactForm';

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
                  <div className="ib-icon"> <i className="fa fa-mobile text-primary"></i> </div>
                  <div className="ib-info text-dark">
                    <p>+66 8 0677 5134</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                  <div className="ib-icon"> <i className="fa fa-map-marker text-primary"></i> </div>
                  <div className="ib-info text-dark">
                    <p>37/37 Chokchai 4, Soi 58, Ladprao, BKK 10230</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="icon-box ib-style-1 ib-circle ib-bordered ib-bordered-white ib-bordered-thin ib-medium ib-text-alt i-large">
                  <div className="ib-icon"> <i className="fas fa-envelope text-primary"></i> </div>
                  <div className="ib-info text-dark">
                    <p className="no-margin-bottom"><a href="#." className="text-white">samurai.hanso@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="map-block">
            <img className="img-responsive" src="https://lh3.googleusercontent.com/1txDY5TlAjGbdbwgX9DCKhP-oHRB1ZVmgZrmhxwleDV7GG0HJkyc-hTaPDVMOXHVNqAnvDLzPQpfcVTL7ghe56lueDR75ezTHGjS9KRb6MdgWaI19LKxc-c7eUlsWuOPjbfLzcbUahg_WJTlATlKV5C8dCgq9TDDz0JC6xj3Kjwq_ptt2AHGVRHxD61ZrfdPI-8rVH9-SOYM7xRyS5HAIj5BQq8iLQxT035DQeJH0EDpCtu2Mnllv1izY4uO322maIrDfTPyDiX1oEkMOzU5EKzmmBBIjybkAOw5Cbpi8khyDkix8WlpNWQtUaDdh4psU5fsY8RZlBlD8YpKAEczQy9_ga3zb0so9fE0IT7yaREGxZsq3YKZWtCZIyGlDk3Se-9bCoIdq_SXKV70g_-Pr9XKiY_YaUvNhxCJIPtYScpMfFO9e40OD6bjcE5esipU-7JZMN2qsvTnsYzla8YknNyx3BUYR4eRTt-_IqyuTfdPy6bIWIetAim1ABZP6De6TwOdNwxKCneEPtfx0MBnleWqmK8zsbyRyle6rnWxzFVVug_5dPcyR4XZdX-YaSyE6ZokjgpyBQe6TX2y770lHn1OGGJRqm-uCG5oiq_QoV0lZuHlqXyEdzQVeylKxRHbJvKEIMqlD82L3H0gCymqeJDYzT-K1PR-qJHTG3EFcQKjndCDOvOvqfsnifR_KLCJ5X3jLYvpDUQ_YbY6AwP9M2sS=w735-h490-no" alt="map" />
          </section>
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
  )
}

export default Contact;