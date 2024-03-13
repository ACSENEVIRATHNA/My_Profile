import React from "react";

const Contact = () => {
  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
    alert("Thankyou! i'll get back to you soon.");
  };
  return (
    <>
      <div id="contact" className="container-xl contact">
        <div className="row">
          <div className="contact-form col-6">
            <h3 className="contact-title my-3">Contact</h3>
            <form
              onSubmit={(e) => {
                submit(e);
              }}
              className="d-flex flex-column gap-15"
            >
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
              </div>
              <div>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Mobile Number"
                />
              </div>
              <div>
                <button className="button border-0 mb-3"> Submit</button>
              </div>
            </form>
          </div>
          <div className="col-6 3d-model"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
