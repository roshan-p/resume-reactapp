import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
const myAvatar = process.env.PUBLIC_URL + "/my-avatar-2.png";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={myAvatar} alt="avatar" style={{ height: "200px" }} />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Roshan Pandey</h2>
            <h5 style={{ color: "grey" }}>** Thai Nationality **</h5>
            <h4 style={{ color: "grey" }}>
              Full Stack Developer (React-Ntive)
            </h4>
            <hr style={{ borderTop: "3px solid #00d2ff", width: "50%" }} />
            <p>
              To take a challenging and managerial role in the field of computer
              programming and implement the expertise and experience gained in
              this field to develop complex project with efficiency and quality.
            </p>
            <hr style={{ borderTop: "3px solid #00d2ff", width: "50%" }} />
            <h5>Address</h5>
            <p>
              90/416 Soi Watluang Wognsawang Road Bangsue District Bangkok 10800
              Thailand
            </p>
            <h5>Phone</h5>
            <p>(+66) 832-360-493</p>
            <h5>Email</h5>
            <p>roshan007191@gmail.com</p>
            <h5>Web</h5>
            <a
              href="https://roshan-p.github.io/resume-reactapp/#/"
              target="_blank"
            >
              roshan-p.github.io
            </a>
            <hr style={{ borderTop: "3px solid #00d2ff", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2011}
              endYear={2016}
              schoolName="ASSUMPTION UNIVERSITY OF THAILAND"
              schoolDescription="BACHELOR OF SCIENCE AND TECHNOLOGY
              MAJOR IN COMPUTER SCIENCE
              "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="CAKEBOX SOLUTIONS"
              jobDescription="My key responsibilities was to develop a front-end for the web application by using JavaScript, HTML, CSS, and
              AngularJS for the web application.
              "
            />

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Raimon Land Public Company Limited"
              jobDescription="My key responsibilities was to be a part of team developing mobile application and web application."
            />
            <Experience
              startYear={2020}
              endYear={"Present"}
              jobName="Tata Consultancy Services (Thailand) Limited"
              jobDescription="My key responsibilities is to be a part of team developing web application for mobile and lead the front end team."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={90} />
            <Skills skill="ReactJS" progress={80} />
            <Skills skill="React-Native" progress={70} />
            <Skills skill="Firebase" progress={60} />
            <Skills skill="NodeJS" progress={60} />
            <Skills skill="MySQL" progress={50} />
            <Skills skill="HTML/CSS" progress={50} />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Languages</h2>
            <h4>Thai (Native)</h4>
            <h4>English</h4>
            <h4>Hindi</h4>
            <h4>Japanese ( Just a bit )</h4>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
