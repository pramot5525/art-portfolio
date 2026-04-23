import Head from 'next/head'
import Image from 'next/image'

const education = [
  {
    graduation: 'Bachelor of Engineering (Computer Engineering)',
    major: 'Computer and Electronics Engineering',
    academy: 'Kasetsart University Kamphaeng Saen Campus',
    gpa: '3.41',
    date: 'May 2012 - June 2016',
  },
  {
    graduation: 'High School',
    major: '',
    academy: 'Benchama Maharat School',
    gpa: '2.87',
    date: 'June 2006 - Mar 2012',
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>art-portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Pramot Natemanee</span>
            <span className="d-none d-lg-block">
              <Image
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="/img/art.jpeg"
                alt="Pramot Natemanee"
                width={150}
                height={150}
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
              <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
            </ul>
          </div>
        </nav>

        <div className="container-fluid p-0">
          {/* About */}
          <section className="resume-section" id="about">
            <div className="resume-section-content">
              <h1 className="mb-0">
                Pramot <span className="text-primary">Natemanee</span>
              </h1>
              <div className="subheading mb-5">
                Bangkok, Thailand{' '}
                <a href="mailto:pramot.nn@gmail.com">pramot.nn@gmail.com</a>
              </div>
              <p className="lead mb-5">
                I am web developer 5 years of experience in creating and delivering web applications and solutions.
                I look forward to bringing my creative, technical skills to the Full Stack developer.
              </p>
              <div className="social-icons">
                <a className="social-icon" href="https://www.linkedin.com/in/pramot-natemanee-579581174/" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="social-icon" href="https://github.com/pramot5525" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a className="social-icon" href="https://www.facebook.com/pramot55/" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </section>
          <hr className="m-0" />

          {/* Experience */}
          <section className="resume-section" id="experience">
            <div className="resume-section-content">
              <h2 className="mb-5">Experience</h2>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Full Stack Developer</h3>
                  <div className="subheading mb-3">WeeklyOrder</div>
                  <ul>
                    <li>Worked closely with the product team to build functionality tracking container and chat system</li>
                    <li>Worked on building a web application using Vue</li>
                    <li>Utilized Golang Framework and GraphQL to create APIs and improve the speed</li>
                  </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">Aug 2020 - Present</span></div>
              </div>
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">Software Engineer</h3>
                  <div className="subheading mb-3">2 3 perspective</div>
                  <ul>
                    <li>Using Nuxt.js to build a web application include a content management system website</li>
                    <li>Improved web application to rise google page speed score up to 80</li>
                    <li>Responsible for API design and development of RESTful for enterprise product in the business or media campaign with PHP Codeigniter</li>
                    <li>Worked within an agile team helped prioritize and scoped feature</li>
                    <li>Provided assistance to Customer Support when troubleshooting technical issues of clients.</li>
                  </ul>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">July 2016 - July 2020</span></div>
              </div>
            </div>
          </section>
          <hr className="m-0" />

          {/* Education */}
          <section className="resume-section" id="education">
            <div className="resume-section-content">
              <h2 className="mb-5">Education</h2>
              {education.map((item) => (
                <div key={item.graduation} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">{item.academy}</h3>
                    <div className="subheading mb-3">{item.graduation}</div>
                    <div>{item.major}</div>
                    <p>GPA: {item.gpa}</p>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">{item.date}</span></div>
                </div>
              ))}
            </div>
          </section>
          <hr className="m-0" />

          {/* Skills */}
          <section className="resume-section" id="skills">
            <div className="resume-section-content">
              <h2 className="mb-5">Skills</h2>
              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                <li className="list-inline-item"><i className="fab fa-vuejs"></i></li>
                <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                <li className="list-inline-item"><i className="fab fa-less"></i></li>
                <li className="list-inline-item"><i className="fab fa-npm"></i></li>
              </ul>
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Mobile-First, Responsive Design</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Cross Browser Testing &amp; Debugging</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Cross Functional Teams</li>
                <li><span className="fa-li"><i className="fas fa-check"></i></span>Agile Development &amp; Scrum</li>
              </ul>
            </div>
          </section>
          <hr className="m-0" />

          {/* Interests */}
          <section className="resume-section" id="interests">
            <div className="resume-section-content">
              <h2 className="mb-5">Interests</h2>
            </div>
          </section>
          <hr className="m-0" />

          {/* Awards */}
          <section className="resume-section" id="awards">
            <div className="resume-section-content">
              <h2 className="mb-5">Awards &amp; Certifications</h2>
              <ul className="fa-ul mb-0"></ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
