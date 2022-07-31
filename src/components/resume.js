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
            <h4 style={{ color: "grey" }}>Lead Front End Developer</h4>
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
              jobDescription={`Cackebox Middleware
              https://cakeboxsolutions.com/

              Project description:
              · Created admin panel for user to see statistical data and customers
              information.
              · This web can track users location inside the building on the heat
              map.
              · This web can check users information from the users panel.
              · This web connected to Cisco devices such as CMX and Meraki via
              the APIs.
              
              My responsibilities:
              · Create a new website with a focus on server-side and user-facing features
              · Develop reusable, high-quality code that can be used in multiple projects
              · Build a scalable, highly responsive user interface
              · Accept responsibility for tasks and sub-features
              
              The tech stacks: AngularJS, MySQL, MongoDB, JavaScript, HTML, and CSS
              
              Outcome of the project are: Admin able to see statistical data, Admin able to manage users information, Admin able to connect more cisco product in the web by using few steps, and Admin able to see customer location inside the building.
              `}
            />

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Raimon Land Public Company Limited"
              jobDescription={`Livvz
              https://play.google.com/store/apps/details?id=com.rml.livvz
              
              Project description:
              · Created mobile application and admin control panel website
              · The mobile application is use for sell and buy property
              · In mobile you have so many feature such as refer a friend, social
              feeds, friend system, chat system etc.
              · In admin control panel you have chart to see the statistical
              information and manage users system
              · For authentication system I implemented Livvz id, Gmail, and Facebook id
              · I also implemented google maps to show property in users selected area
              
              My responsibilities:
              · Design, build and maintain React Native applications on multiple platforms
              · Integrate mobile applications with native APIs
              · Analyze and enhance the performance of the applications
              · Diagnose and fix bugs in the application
              · Build pixel-perfect user interfaces across multiple platforms
              
              Tech stacks are: React Native, React, Next.js, Node.js, JavaScript, Typescript, HTML, CSS, Firebase
              
              Outcome of the project are: Customer should be able the sell the property by create an ads, Customer should be able to search for the property then want by matching system, and Admin should be able to see user information and statistical data.`}
            />
            <Experience
              startYear={2020}
              endYear={2022}
              jobName="Tata Consultancy Services (Thailand) Limited"
              jobDescription={`
              ttb one app (ttb touch)

Project description:
· Created auto lending module of this app as a WebView
· This module is for customer to use to pay car loan, close account, car details, check payment history, and etc.

My responsibilities:
· Create an internal reusable React-based component in storybook.
· Implement a design and review process for front-end features in collaboration with the design team
· Implement a Unit test
· Create an informal front-end group to discuss new technology, best practices, and share knowledge
· Work with members of a cross-functional team to build the front-end software features using requirements, design mockups, and iterative design reviews
· Work actively to meet upcoming deadlines and launch products
· Iterate and develop new features and frameworks
· Troubleshoot data and other system issues
· Review code for the developers.

The most challenges thing of this project was "How to make
webpage smooth as mobile application ?" We have optimize many thing connect with mobile application via JS bridge create many functions that mobile and web can talk to each other and also handle the safe area for IOS and back button for Android. This project also concern about security in very high level.

**More than 900K people using Auto Loan module on ttb touch**

Tech stacks are: React, Next.js, Node.js, Redux, JavaScript, Typescript, React Native, HTML and CSS

Outcome of the project are: Customer can use the app to pay car loan, close account, car details, check payment history and close account.`}
            />
                        <Experience
              startYear={2022}
              endYear={"Present"}
              jobName="Cenergy Innovation Ltd."
              jobDescription={`Officemate
              https://www.officemate.co.th/
              
              Project description:
              · E-commerce website
              · User can buy many product from this website
              · Have Authentication system (normal username and Facebook login)
              · Have many layers of API
              · Have payment system
              · Integrated with Google maps
              
              My responsibilities:
              · Create a reusable React-based component
              · Implement a design and review process for front-end features in collaboration with the design team
              · Implement a Unit test
              · Create an informal front-end group to discuss new technology, best practices, and share knowledge
              · Work with members of a cross-functional team to build the front-end software features using requirements, design mockups, and iterative design reviews
              
              The most existing thing about this project is we have to handle the API from many thirds party into one API projects named "Falcon" and then we connected every Web with "Falcon" . So when we have to call any API we should add it in Falcon first then create GraphQL to call that at the Front End side.
              
              **More than 3 millions people using Officemate **
              
              Using many technologies behind it such as React, Next.js, Redux, Node.js, GraphQL, Firebase, Redis,React Native, HTML, CSS, Typescript and, JavaScript.
              
              Outcome of the project are: Create website for Officemate to sell their product on website and customer and buy and made the payment on website, Customer can track their orders, and Customer can track the order history.
              -----------------------------
              
              Rinascente
              https://www.rinascente.it/en/
              
              Project description:
              · E-commerce website
              · User can buy many product from this website
              · Have Authentication system
              · Have payment system
              
              My responsibilities:
              · Create a reusable React-based component
              · Implement a design and review process for front-end features in collaboration with the design team
              · Implement a Unit test
              · Create an informal front-end group to discuss new technology, best practices, and share knowledge
              · Work with members of a cross-functional team to build the front-end software features using requirements, design mockups, and iterative design reviews
              
              Using many technologies behind it such as React, Next.js, Redux, Node.js, GraphQL, Firebase, Redis, HTML, CSS, Typescript and, JavaScript.
              
              Outcome of the project are: Create website for Rinascente to sell their product on website and customer and buy and made the payment on website, Customer can track their orders, and Customer can track the order history.`}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={90} />
            <Skills skill="ReactJS" progress={80} />
            <Skills skill="React-Native" progress={70} />
            <Skills skill="Firebase" progress={60} />
            <Skills skill="Node.js" progress={60} />
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
