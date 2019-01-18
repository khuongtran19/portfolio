import React from "react";
import "./css/Resume.css";
import Fade from "react-reveal";

class Resume extends React.Component {
  render() {
    return (
      <div style={{ fontFamily: "Arial", fontSize: "12pt" }}>
        <div className="box">
          <h1>RESUME</h1>
          <Fade bottom>
            <h2>KHUONG TRAN</h2>
          </Fade>
          <Fade bottom>
            <h3>Full-Stack Developer</h3>
            <h4>
              Phone: <a href="(424) 397-4132">(424) 397-4132</a> | Email:{" "}
              <a href="tranvinhkhuong@gmail.com">tranvinhkhuong@gmail.com</a>
            </h4>
            <h4>
              GitHub:{" "}
              <a href="https://github.com/khuongtran19">
                https://github.com/khuongtran19
              </a>{" "}
              | LinkedIn:{" "}
              <a href="www.linkedin.com/in/khuong-tran-2a6326176">
                www.linkedin.com/in/khuong-tran-2a6326176
              </a>
            </h4>
          </Fade>
          <hr align="center" width="50%" className="line" />
          <Fade bottom>
            <h2>Skills</h2>
            <p>
              <b>Front End:</b> JavaScript, ReactJs, jQuery, CSS3, Twitter
              Bootstrap, HTML5, AJAX
            </p>
            <p>
              <b>Middle Tier:</b> NodeJS, Express, Tedious
            </p>
            <p>
              <b>Back End:</b> Microsoft SQL Server, Transact-SQL, SQL Server
              Management Studio
            </p>
            <p>
              <b>Other Technical:</b> VS Code, TFS, Git, Trello
            </p>
          </Fade>
          <hr align="center" width="50%" className="line" />
          <Fade bottom>
            <h2>Experience</h2>
            <div>
              <h3>
                <b>Grolo, Culver City CA</b> - Full Stack JavaScript Developer
              </h3>
              <h5 className="timestyle">AUG 2018 - PRESENT</h5>
              <p>
                Grolo is a multi-tenant software-as-a-service white label
                platform for marketing agencies. Agencies subscribe to Grolo and
                use it to provide a branded application for small and medium
                local businesses to implement social media marketing campaigns
                and customer loyalty programs. The agency, in turn, may
                configure subscription levels for their business clients from
                freemium minimal support to more full-service support where
                agency representatives actively manage campaigns and loyalty
                programs.
              </p>
              <p>
                Personally designed and implemented the subsystem which allow
                businesses to create social media posts, including database
                design and stored procedures, implementing mid-tier Web API
                endpoints and services in C#, and the sser interface using
                custom react components. Also implemented business rewards which
                allow businesses to print out all information of the business
                and reward type with QR code that allow customer to scan and
                register to become regular customer.
              </p>
              <p>
                Technologies include Visual Studio, VS Code, SQL Server
                Management Studio, Git source control on TFS, Chrome Developer
                Tools, JSON Lint, Transact-SQL, JavaScript, ASP.Net Web Api,
                JSON Serialization, AJAX, jQuery, React, Redux, Twitter
                Bootstrap, CSS, AWS S3, MVC Attribute Routing and Trello.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <h3>
                <b>AutoMobility LA Hackathon</b>
              </h3>
              <h5 className="timestyle">NOV 25-26, 2018</h5>
              <p>
                Along with my colleagues, created a working in-console
                application for General Motors using GM, Visa, and Google APIs.{" "}
              </p>
              <p>
                Github for hackathon:{" "}
                <a href="https://github.com/tramduc1996/hackathon">
                  https://github.com/tramduc1996/hackathon
                </a>
              </p>
            </div>
          </Fade>
          <hr align="center" width="50%" className="line" />
          <Fade bottom>
            <h2>Education</h2>
            <p>California State University Northridge (Computer Science)</p>
          </Fade>
        </div>
      </div>
    );
  }
}
export default Resume;
