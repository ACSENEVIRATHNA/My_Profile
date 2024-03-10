import React from "react";

const cv_url = "cv/ACSenevirathna.pdf";
const Home = () => {
  const download = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  };

  return (
    <>
      <div className="container-xl mt-3">
        <div className="row home">
          <div className=" my-details col-6 d-flex flex-column justify-content-center">
            <h2>It's Me</h2>
            <h1>Amanda C. Senevirathna</h1>
            <p>
              An enthusiastic explorer in the realm of Computer Engineering, I'm
              a third-year undergraduate with a fervent passion for unraveling
              the mysteries of software engineering and the allure of DevOps.
              Always hungry for new challenges and eager to pave my path in the
              world of technology.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-dark w-30"
                onClick={() => {
                  download(cv_url);
                }}
              >
                Download Cv
              </button>
            </div>
          </div>
          <div className="col-6 profile-image">
            <img className="img-fluid" src="images/profile_2.png" alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
