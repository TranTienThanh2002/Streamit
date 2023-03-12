import React from "react";
import "./formContact.css";
export const FormContact = () => {
  return (
    <div className="form-content-area">
      <div className="main">
        <div className="container">
          <div className="row ">
            <div className="info-contact">
              <div className="address box-info">
                <i class="fa fa-location-dot"></i>
                <h4 className="title">Address</h4>
                <p className="description">Brooklyn, New York</p>
              </div>
              <div className="phones box-info">
                <i class="fa fa-phone-volume"></i>
                <h4 className="title">Anytime Call</h4>
                <p className="description">012346789</p>
              </div>
              <div className="email box-info">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <h4 className="title">Email Us</h4>
                <p className="description">nkocbabi@gmail.com</p>
              </div>
            </div>
            <div className="form-info">
              <div className="box-form">
                <div className="form">
                  <div className="title-form">
                    <h2 className="title">Say Hello..!</h2>
                    <p>
                      Fill up this form to reach our stunning Streamit team and
                      click on send message.{" "}
                    </p>
                  </div>
                </div>
                <div className="input-form">
                  <div className="row">
                    <div className="box-input">
                      <div className="your-name input">
                        <p>
                          <input
                            type="text "
                            name="your-name"
                            placeholder="Your Name*"
                          />
                        </p>
                      </div>
                      <div className="last-name input">
                        <p>
                          <input
                            type="text"
                            name="last-name"
                            placeholder="Last Name*"
                          />
                        </p>
                      </div>
                      <div className="phone-number input">
                        <p>
                          <input
                            type="text"
                            name="phone-number"
                            placeholder="Phone Number*"
                          />
                        </p>
                      </div>
                      <div className="your-email input">
                        <p>
                          <input
                            type="email"
                            name="your-email"
                            placeholder="Your Email*"
                          />
                        </p>
                      </div>
                    </div>

                    <div className="your-message">
                      <p>
                        <textarea
                          name="your-message"
                          typeof="input"
                          cols="40"
                          rows="10"
                          placeholder="Your Message*"
                        ></textarea>
                      </p>
                    </div>
                    <div className="send-message">
                      <button className="btn-send-message">SEND MESSAGE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
