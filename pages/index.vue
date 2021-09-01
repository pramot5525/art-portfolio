<template>
    <!-- <Tutorial/>
     -->

        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">Pramot Natemanee</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="~assets/img/art.jpeg" alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav>
        <!-- Page Content-->
        <div class="container-fluid p-0">
            <!-- About-->
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        Pramot
                        <span class="text-primary">Natemanee</span>
                    </h1>
                    <div class="subheading mb-5">
                        Bangkok, Thailand
                        <a href="mailto:pramot.nn@gmail.com">pramot.nn@gmail.com</a>
                    </div>
                    <p class="lead mb-5">I am web developer 5 years of experience in creating and delivering web applications and solutions. I look forward to bringing my creative, technical skills to the Full Stack developer.</p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/pramot-natemanee-579581174/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://github.com/pramot5525" target="_blank"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="https://www.facebook.com/pramot55/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <!-- Experience-->
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Full Stack Developer</h3>
                            <div class="subheading mb-3">WeeklyOrder</div>
                            <ul>
                              <li>Worked closely with the product team to build functionality tracking container and chat system</li>
                              <li>Worked on building a web application using Vue</li>
                              <li>Utilized Golang Framework and GraphQL to create APIs and improve the speed</li>
                            </ul>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Aug 2020 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Software Engineer</h3>
                            <div class="subheading mb-3">2 3 perspective</div>
                            <ul>
                              <li>Using Nuxt.js to build a web application include a content management system website</li>
                              <li>Improved web application to rise google page speed score up to 80</li>
                              <li>Responsible for API design and development of RESTful for enterprise product in the business or media campaign with PHP Codeigniter</li>
                              <li>Worked within an agile team helped prioritize and scoped feature</li>
                              <li>Provided assistance to Customer Support when troubleshooting technical issues of clients. </li>
                            </ul>

                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">July 2016 - July 2020</span></div>
                    </div>

                </div>
            </section>
            <hr class="m-0" />
            <!-- Education-->
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div v-for="item in profile.education" :key="item.graduation" class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">{{ item.academy }}</h3>
                            <div class="subheading mb-3">{{ item.graduation }}</div>
                            <div>{{ item.major }}</div>
                            <p>GPA: {{ item.gpa }}</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <!-- Skills-->
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Toolssss</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-vuejs"></i></li>
                        <!-- <li class="list-inline-item"><i class="fab fa-react"></i></li> -->
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
            <!-- Interests-->
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <!-- <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p> -->
                </div>
            </section>
            <hr class="m-0" />
            <!-- Awards-->
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <!-- <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Google Analytics Certified Developer
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Mobile Web Specialist - Google Certification
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2009
                        </li> -->
                    </ul>
                </div>
            </section>
        </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      profile: {
        experience: [],
        education: [
          { graduation: 'Bachelor of Engineering (Computer Engineering)', major: 'Computer and Electronics Engineering', academy: 'Kasetsart University Kamphaeng Saen Campus', gpa: '3.41', date: 'May 2012 - June 2016' },
          { graduation: 'High School', major: '', academy: 'Benchama Maharat School', gpa: '2.87', date: 'June 2006 - Mar 2012' }
        ]
      }
    }
  }
})
</script>
