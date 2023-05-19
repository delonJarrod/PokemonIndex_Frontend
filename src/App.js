import logo from "./logo.svg";
import "./App.css";
import img from "../src/Components/Loader/DP.jpg";

function App() {
  return (
    <div className="App">
      <div className="border-t-2 font-Nunito">
        <div className="m-10">
          <div>
            <div className="container block flex flex-row float-left">
              <div className="flex-col">
                <img
                  src={img}
                  alt="Display_Picture"
                  className="rounded-full h-52 w-42"
                />
              </div>
              <div className="flex-col float-right ml-52 font-Nunito font-bold subpixel-antialiased mt-20">
                <h1 className="text-4xl">Delon Jarrod Naidoo</h1>
                <h1>SOFTWARE DEVELOPMENT GRADUATE</h1>
              </div>
            </div>

            <div className="flex-col">
              <div>
                <div
                  className="container block flex flex-row pt-10 gap-20 "
                  style={{ width: "950px" }}
                >
                  <div className="flex-col text-left ">
                    <h1 className="font-bold subpixel-antialiased text-2xl text-blue-400">
                      EDUCATION
                    </h1>
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      DEGREE IN APPLICATION DEVELOPMENT AND COMPUTER SCIENCE
                    </h1>
                    <h1> The Independent Institute of Education</h1>
                    <h1>Varsity College</h1>
                    <h1> 2017-2019</h1>
                    <h1>Graduated</h1>
                  </div>

                  <div className="flex-col text-left float-right">
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      {" "}
                      CONTACTS
                    </h1>
                    <h1>
                      <b>Email: </b>delonjarrod1307@gmail.com
                    </h1>
                    <h1>
                      <b>Cell: </b> 071 196 8195
                    </h1>
                    <h1>
                      <b>linked in: </b>{" "}
                      https://linkedin.com/in/delon-jarrod-naidoo-131299191
                    </h1>
                    <h1>
                      {" "}
                      <b>Git Hub: </b> https://github.com/delonJarrod
                    </h1>
                  </div>
                </div>

                <div className="container flex flex-row mt-10 gap-20">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-2xl subpixel-antialiased ">
                      NATIONAL SENIOR CERTIFICATE
                    </h1>
                    <h1>Kharwastan Secondary School</h1>
                    <h1>Completed ( Matric - bachelors pass )</h1>
                  </div>
                  <div
                    className="flex-col text-left float-right ml-36 text-3md "
                    style={{ width: "300px" }}
                  >
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      {" "}
                      WHY ME?
                    </h1>
                    <p className="text-sm">
                      I am a hardworking and diligent young man with a positive
                      outlook. I work well as part of a team or individually. I
                      am motivated, proactive and passionate about programming,
                      application development and solving problems.
                    </p>
                  </div>
                </div>

                <div className="container block flex flex-row gap-20">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      {" "}
                      WORK EXPERIENCE
                    </h1>
                  </div>
                </div>

                <div className="container block flex flex-row pt-3">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      WEB APPLICATION & SOFTWARE DEVELOPER
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2021 November - Current)
                    </h1>
                    <h1>
                      <em>Voice Contact Solutions</em>
                    </h1>
                    <h1>
                      - Development of <b>Web applications,</b>{" "}
                      <b> Windows applications</b>, <b>Websites</b>,{" "}
                      <b>Web based CRMs</b>
                    </h1>
                    <h1>
                      - Developing, Maintaining and Enhancing
                      <b> {"{Asp .net} and {. Net Core 6} APIs"}</b>
                    </h1>
                    <h1>
                      - Integrating <b>C# and VB APIS</b>
                    </h1>
                    <h1>
                      - Database administration with{" "}
                      <b>SQL server management,</b> using <b>tiggers</b> and{" "}
                      <b>stored procedures.</b>
                    </h1>
                    <h1>
                      - Developing front end projects with
                      <b>
                        {" "}
                        Vue.js, React.js, tailwindcss, HTML, Bootstrap5, CSS,
                        Javascript, Jquery
                      </b>{" "}
                      Backend with <b>C#</b> or connecting to <b>C# API</b>,
                      saving data in <b>SQL</b> database
                    </h1>
                    <h1>
                      - Using <b> stored procedures in ASP.NET </b>{" "}
                      applications, developed error triggers to log errors and
                      email them to relevant parties
                    </h1>
                    <h1>
                      - Debugging{" "}
                      <b>
                        {" "}
                        ASP.Net, .Net core 6, Vue.js, Nuxt.js, React.js,
                        Javascript, Jquery, C#, SQL and Visual Basic
                      </b>{" "}
                      applications
                    </h1>
                    <h1>- Maintenance of CRM applications</h1>
                    <h1>
                      - <b>Source control</b> with <b>DevOps, TFS & SVN</b>
                    </h1>
                    <h1 className="mt-3">
                      <b className="font-bold text-xl subpixel-antialiased">
                        REFERENCE WEBSITES WORKED ON:
                      </b>
                    </h1>
                    <ul>
                      <a
                        className="text-blue-400"
                        href="https://bettercompare.co.za/"
                      >
                        - https://bettercompare.co.za/
                      </a>
                    </ul>

                    <ul>
                      <a
                        className="text-blue-400"
                        href="https://www.aspiremoney.co.uk/"
                      >
                        - https://www.aspiremoney.co.uk/
                      </a>
                    </ul>
                    <ul>
                      <a
                        className="text-blue-400"
                        href="http://www.aspirevoice.com/"
                      >
                        - http://www.aspirevoice.com/
                      </a>
                    </ul>
                  </div>

                  <div className="flex-col text-left float-right ml-30">
                    <h1 className="ml-20 font-bold text-2xl subpixel-antialiased text-blue-400">
                      SKILLS
                    </h1>
                    <div className="container block flex flex-row mt-3 gap-3 ml-36">
                      <h1 className="border-2 border-blue-500 border-opacity-50 rounded-full h-28 w-28 flex items-center justify-center text-center p-5">
                        Web Development
                      </h1>
                      <h1 className="border-2 border-blue-500 border-opacity-50 rounded-full h-28 w-28 flex items-center justify-center text-center text-center p-5">
                        Application Development
                      </h1>
                    </div>

                    <div className="container block flex flex-row pt-10 gap-20">
                      <div className="flex-col text-left float-right"></div>
                      <div className="flex-col text-left float-right">
                        <h1 className="text-center font-bold text-lg subpixel-antialiased">
                          Software Skill Set
                        </h1>
                        <div className="container block flex flex-row mt-10 gap-3">
                          <div className="flex-col text-left float-right text-sm">
                            <h1>Programming</h1>
                            <h1>Websites Designer</h1>
                            <h1>SQL DB</h1>
                            <h1>Photoshop</h1>
                            <h1>SEO</h1>
                          </div>
                          <div className="flex-col text-left float-right text-sm">
                            <h1>Applications</h1>
                            <h1>MongoDB</h1>
                            <h1>Editor</h1>
                            <h1>API</h1>
                            <h1>Creator</h1>
                          </div>
                        </div>
                      </div>

                      <div className="flex-col text-left float-right">
                        <h1 className="text-center font-bold text-lg subpixel-antialiased">
                          Programming Languages
                        </h1>
                        <div className="container block flex flex-row mt-5 gap-3 text-sm ">
                          <div className="flex-col text-left float-right ">
                            <h1>C#</h1>
                            <h1> React js</h1>
                            <h1>Vue js</h1>
                            <h1>Html5</h1>
                            <h1>Javascript</h1>
                            <h1> Java</h1>

                            <h1> AngularJS</h1>
                          </div>
                          <div className="flex-col text-left float-right">
                            <h1> SQL</h1>
                            <h1>TailwindCSS</h1>
                            <h1>Nuxt js</h1>
                            <h1> CSS</h1>
                            <h1>Bootstrap</h1>
                            <h1>Android </h1>
                            <h1>JQuery</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container block flex flex-row pt-10 pb-3">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      WEB APPLICATION & SOFTWARE DEVELOPER
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2021 August - 2021 October) - Full Time
                    </h1>
                    <h1>
                      <em>Algo Corp Solutions</em>
                    </h1>
                    <h1>- Web application development.</h1>
                    <h1>
                      - Developed projects with{" "}
                      <b>
                        Javascript, Javascript Frameworks (ReactJS, AngularJS,
                        NodeJS), Axios, AOS TypeScript, React-Bootstrap, CSS.
                      </b>
                    </h1>
                    <h1>
                      - Developed <b>mongodB</b> database and connecting it to
                      <b> front-end Javascript Framework(ReactJs).</b>
                    </h1>
                    <h1>
                      - Connecting to <b> MongoDB API (Realm).</b>
                    </h1>
                    <h1>
                      - Developing <b> Reactjs </b> web applications that are
                      mobile compatible.
                    </h1>

                    <h1>
                      - <b>Source control</b> with <b> git hub. </b>
                    </h1>

                    <h1>
                      - Development of <b>MERN</b> applications
                    </h1>
                    <h1>
                      - Designed, Developed, Presented, Supported{" "}
                      <b>Administer Software Solution Application.</b>
                    </h1>
                    <h1>
                      - <b>SEO</b>, key word research and code optimisation.
                    </h1>
                    <h1>
                      <b>- Reason for leaving: </b> End of contract
                    </h1>
                  </div>
                </div>

                <div className="container block flex flex-row mt-3 gap-20 pt-3 pb-3">
                  <div className="flex-col text-left">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      WEB DESIGNER & SOFTWARE DEVELOPER
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2021 Jan - 2021 june)
                    </h1>
                    <h1>
                      <em>Inzalo Utility Systems</em>
                    </h1>
                    <h1>- Web application development.</h1>
                    <h1>
                      - Connecting, modifying, filtering and displaying data
                      from
                      <b> C# API connecting to SQL.</b> database
                    </h1>
                    <h1>
                      - Displaying <b>API data</b> in JS graphs for front-end
                      users to view
                    </h1>
                    <h1>
                      - <b> Front-End</b> Web Development (
                      <b>Javascript, Html5, CSS, Bootstrap, Angular)</b>
                    </h1>
                    <h1>
                      {" "}
                      - Developed, maintained, updated{" "}
                      <b>MVC and .net applications.</b>
                    </h1>
                    <h1>
                      - Managing tasks with <b>SQL database</b> editing,
                      retrieving and arranging data.{" "}
                    </h1>
                    <h1>
                      {" "}
                      - <b>Enhanced</b> pre existing features that were
                      developed in with{" "}
                      <b>JS Frameworks, HTMl5, CSS & Boostrap</b>
                    </h1>
                    - <b>Source control</b> with git hub and DevOps.
                    <h1>
                      - <b>Front-End</b> design changes and enhancements.
                    </h1>
                    <h1>
                      <b>- Reason for leaving: </b> End of contract
                    </h1>
                    <h1 className="mt-3">
                      <b className="font-bold text-xl subpixel-antialiased">
                        REFERENCE WEBSITES WORKED ON:
                      </b>
                    </h1>
                    <ul>
                      <a
                        className="text-blue-400"
                        href="https://utility-systems.co.za/"
                      >
                        - https://utility-systems.co.za/
                      </a>
                    </ul>
                  </div>

                  <div
                    className="flex-col text-left float-right ml-20"
                    style={{ width: "400px" }}
                  >
                    <h1 className="font-bold text-xl subpixel-antialiased  text-blue-400">
                      ACHIEVEMENTS / LEADERSHIP
                    </h1>
                    <h1 className="text-sm mt-5">
                      - Developed websites and applications for members of the
                      community.
                    </h1>
                    <h1 className="text-sm mt-5">
                      - Involved in community project planning.
                    </h1>
                    <h1 className="text-sm mt-5">
                      - 5 DISTINCTIONS at the end of studies (2019).
                    </h1>
                    <h1 className="text-sm mt-5">
                      - Involved in religious and community activities.
                    </h1>
                  </div>
                </div>

                <div className="container block flex flex-row mt-10 gap-10">
                  <div className="flex-col text-left -mt-5">
                    <h1 className="font-bold text-xl subpixel-antialiased">
                      WEB DESIGNER & CONTENT EDITOR
                    </h1>
                    <h1 className="font-bold text-lg subpixel-antialiased">
                      (2020 March - 2020 May)
                    </h1>
                    <h1>
                      <em>IX Online Motoring</em>
                    </h1>
                    <h1>- Web application development.</h1>
                    <h1>
                      - <b> Front-End</b> Web Development (
                      <b> Html5, CSS, Bootstrap)</b>
                    </h1>
                    <h1>
                      - <b>Administrator tasks</b>
                    </h1>
                    <h1>
                      - <b>Developed websites with HTML5 and boostrap.</b>
                    </h1>
                    <h1>
                      - Edited content on websites.{" "}
                      <b>Updating banners and text</b> on website with{" "}
                      <b>Html, also did CSS styling</b>
                    </h1>
                    <h1>
                      - Updated client websites adjusting <b>HTML</b> code.
                    </h1>
                    <h1>
                      - Installed and managed{" "}
                      <b>3rd party applications on clients</b> eg. JIVO Chat
                    </h1>
                    <h1>
                      <b>- Reason for leaving: </b> Retrenchment due to Covid19
                    </h1>

                    <h1 className="mt-3">
                      <b className="font-bold text-xl subpixel-antialiased">
                        REFERENCE WEBSITES WORKED ON:
                      </b>
                    </h1>
                    <ul>
                      <a className="text-blue-400" href="https://www.ix.co.za/">
                        - https://www.ix.co.za/
                      </a>
                    </ul>
                  </div>

                  <div
                    className="flex-col text-left float-right ml-36 text-3md "
                    style={{ width: "400px" }}
                  >
                    <h1 className="font-bold text-2xl subpixel-antialiased text-blue-400">
                      Personal Projects and learnings
                    </h1>
                    <p>
                      - Integrating .net core 6 c# API with APIs on RapidApp
                      <ul>
                        <li>
                          <b>
                            {" "}
                            https://github.com/delonJarrod/PokemonIndex_API
                          </b>
                        </li>
                        <li>
                          <b>https://github.com/delonJarrod/Weather_Api</b>
                        </li>
                      </ul>
                    </p>
                    <p>- Developing and deploying Strapi (Headless API).</p>
                    <p>- Developing projects with tailwindCSS. </p>
                    <p>
                      - Developed websites for community members using{" "}
                      <b> Javascript, AngularJS, HTML5, CSS, Bootstrap</b>{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
