import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Thankyou! i'll get back to you soon.");
    emailjs.sendForm(
      "service_bsj4ubf",
      "template_c8atqpi",
      e.target,
      "MdDCDcW8jIsi7XS--"
    );
    const form = e.target;
    form.reset();
  };
  return (
    <>
      <div id="contact" className="container-xl contact">
        <div className="row">
          <div className="contact-form col-6">
            <h3 className="contact-title my-3">Contact</h3>
            <form onSubmit={sendEmail} className="d-flex flex-column gap-15">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />

              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                id="emailFrom"
                name="email_from"
              />
              <textarea
                name="message"
                type="text"
                className="form-control message"
                placeholder="Message"
              />
              <button type="submit" className=" mt-3 button border-0 mb-3">
                Submit
              </button>
            </form>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="information">
              <h3 className="mx-4">Reach Me At</h3>
              <ul>
                <li className="mt-3 d-flex align-items-center">
                  <span>
                    <FaPhoneAlt className="con-icon" />
                    (+94) 76 88 58 292
                  </span>
                </li>
                <li className="mt-3 d-flex align-items-center">
                  <span>
                    <MdEmail className="con-icon" />
                    <a href="mailto:acsenevirathne@gmail.com">
                      acsenevirathne@gmail.com
                    </a>
                  </span>
                </li>
                <li className="mt-3  d-flex align-items-center">
                  <span>
                    <FaLocationDot className="con-icon" />
                  </span>
                  <p>
                    Charith Sewana , <br /> Hapathgamuwa, <br /> Bandarawela
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
