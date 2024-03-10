import React from "react";
import { FaLinkedin, FaGithubSquare, FaHackerrank  } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className="social">
        <div className="v1"></div>
        <a href="https://www.linkedin.com/in/amanda-senevirathna-575b78279/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ACSENEVIRATHNA">
          <FaGithubSquare />
        </a>
        <a href="https://www.hackerrank.com/profile/Amanda4206">
          <FaHackerrank />
        </a>
        <div className="v2"></div>
      </div>
    </>
  );
};

export default Social;
