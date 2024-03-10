import React from "react";
import { FaReact, FaBootstrap, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiPostman,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <>
      <div className="container-xl">
        <div className="skills">
          <div className="skill-card">
            <div className="skill-title ">
              <h3>Front End Web Development</h3>
            </div>
            <ul className="skill-details">
              <li className="point _1">
                <div className="icon">
                  <FaReact />
                </div>
                <h3>React</h3>
              </li>
              <li className="point _2">
                <div className="icon">
                  <FaBootstrap />
                </div>
                <h3>Bootstrap</h3>
              </li>
              <li className="point _3">
                <div className="icon">
                  <FaCss3Alt />
                </div>
                <h3>CSS</h3>
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-title ">
              <h3>Back End Web Development</h3>
            </div>
            <ul className="skill-details">
              <li className="point _1">
              <div className="icon">
                  <SiExpress />
                </div>
                <h3>Express</h3>
              </li>
              <li className="point _2">
              <div className="icon">
                  <FaNodeJs />
                </div>
                <h3>Node</h3>
              </li>
              <li className="point _3">
              <div className="icon">
                  <SiPostman />
                </div>
                <h3>Postman</h3>
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-title ">
              <h3>Mobile Application Development</h3>
            </div>
            <ul className="skill-details">
              <li className="point _1">
              <div className="icon">
                  <SiFlutter />
                </div>
                <h3>Flutter</h3>
              </li>
              <li className="point _2">
              <div className="icon">
                  <SiDart />
                </div>
                <h3>Dart</h3>
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <div className="skill-title ">
              <h3>Data Base Management</h3>
            </div>
            <ul className="skill-details">
              <li className="point _1">
              <div className="icon">
                  <SiMongodb />
                </div>
                <h3>Mogodb</h3>
              </li>
              <li className="point _2">
              <div className="icon">
                  <SiMysql />
                </div>
                <h3>MySQL</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
