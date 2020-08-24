import React from 'react'

function App() {
  return (
    <div className="portfolio">
      {/* <div className="navigation">
        <div class="navigation__logo-box">
          <img src="images/me.jpg" alt="Logo" class="navigation__logo" />
        </div>
      </div> */}
      <header class="header">
        <div class="header__logo-box">
          <a href="https://burzo.github.io/my-portfolio/">
            <span class="heading-primary header__logo">
              <span className="header__logo--text">MD</span>
            </span>
          </a>
        </div>
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Miha Drofenik</span>
            <span class="heading-primary--sub">
              I'm a web developer from Slovenia focused on crafting clean &
              user-friendly experiences.
            </span>
          </h1>

          <a
            onClick={(e) => {
              const anchor = document.querySelector('#section-projects')
              anchor.scrollIntoView({ behavior: 'smooth' })
            }}
            class="btn btn--white btn--animated"
          >
            Check out my work
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary u-center">
              <span>&lt; My skills /&gt;</span>
            </h2>
            <div class="row">
              <div class="col-1-of-3">
                <div class="feature-box">
                  <i class="feature-box__icon icon-basic-world"></i>
                  <h3 class="heading-tertiary u-margin-bottom-small">
                    Front-end
                  </h3>
                  <p class="feature-box__text u-margin-bottom-small u-center">
                    <img
                      className="icon"
                      alt="html"
                      src="https://burzo.github.io/my-portfolio/images/html.svg"
                    />
                    <img
                      className="icon"
                      alt="css"
                      src="https://burzo.github.io/my-portfolio/images/css.png"
                    />
                    <img
                      className="icon"
                      alt="sass"
                      src="https://burzo.github.io/my-portfolio/images/sass.svg"
                    />
                    <img
                      className="icon"
                      alt="js"
                      src="https://burzo.github.io/my-portfolio/images/js.png"
                    />
                    <img
                      className="icon"
                      alt="reactjs"
                      src="https://burzo.github.io/my-portfolio/images/reactjs.png"
                    />
                    <img
                      className="icon"
                      alt="redux"
                      src="https://burzo.github.io/my-portfolio/images/redux.svg"
                    />
                  </p>
                  <p class="feature-box__text">
                    I've been mostly working with React and React-native coupled
                    with Redux and Redux-thunk for state management. Other
                    libraries depend on the project at hand. I also make sure to
                    always create a product that is responsive and can be shown
                    on any media imaginable.
                  </p>
                </div>
              </div>

              <div class="col-1-of-3">
                <div class="feature-box">
                  <i class="feature-box__icon icon-basic-compass"></i>
                  <h3 class="heading-tertiary u-margin-bottom-small">
                    Back-end
                  </h3>
                  <p class="feature-box__text u-margin-bottom-small u-center">
                    <img
                      className="icon"
                      alt="nodejs"
                      src="https://burzo.github.io/my-portfolio/images/nodejs.png"
                    />
                    <img
                      className="icon"
                      alt="python"
                      src="https://burzo.github.io/my-portfolio/images/python.png"
                    />
                    <img
                      style={{ height: '3.2rem' }}
                      className="icon"
                      alt="django"
                      src="https://burzo.github.io/my-portfolio/images/django.svg"
                    />
                    <img
                      className="icon"
                      alt="postgresql"
                      src="https://burzo.github.io/my-portfolio/images/postgresql.png"
                    />
                  </p>
                  <p class="feature-box__text">
                    My back-end arsenal consists of Node.js for more simple
                    back-end needs and Django + PostgreSQL for more demanding
                    applications that require a larger number of database
                    interactions. I also make sure to keep that test coverage
                    percentage as close to three digits as possible.
                  </p>
                </div>
              </div>
              <div class="col-1-of-3">
                <div class="feature-box">
                  <i class="feature-box__icon icon-basic-compass"></i>
                  <h3 class="heading-tertiary u-margin-bottom-small">Extra</h3>
                  <p class="feature-box__text u-margin-bottom-small u-center">
                    <img
                      className="icon"
                      alt="git"
                      src="https://burzo.github.io/my-portfolio/images/git.png"
                    />
                    <img
                      className="icon"
                      alt="gitlab"
                      src="https://burzo.github.io/my-portfolio/images/gitlab.png"
                    />
                    <img
                      className="icon"
                      alt="github"
                      src="https://burzo.github.io/my-portfolio/images/github.svg"
                    />
                  </p>
                  <p class="feature-box__text">
                    During development, I learned how to use Gitlabs CI/CD
                    pipelines to ease the whole process and speed up the
                    development cycle. I always use version control for my code,
                    to not cause any confusion in the codebase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-projects" className="section-projects">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary u-center">
              <span>&lt; My experience & biggest projects&gt;</span>
            </h2>
            <div className="row">
              <div class="col-1-of-2">
                <div class="card">
                  <div class="card__side card__side--front">
                    <div class="card__picture card__picture--1">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--1">
                        Joan
                      </span>
                    </h4>
                    {/* <div class="card__details">
                      <ul>
                        <li>
                          <strong>Technologies used</strong>
                        </li>
                        <li>React + Django</li>
                        <li>Django</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div> */}
                  </div>
                  <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                      <div class="card__price-box">
                        <p class="card__title">React + Django</p>
                        <p class="card__text">
                          The Joan Portal is a dashboard where you are able to
                          manage every aspect of the Joan booking system
                          solution.
                          <br />
                          <br />
                          Working on it helped me understand how to work as a
                          team and was also an intro into code reviews and the
                          whole development cycle of bigger projects.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://portal.getjoan.com/"
                        class="btn btn--white"
                      >
                        Check it out!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1-of-2">
                <div class="card">
                  <div class="card__side card__side--front">
                    <div class="card__picture card__picture--2">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--1">
                        Fetchie
                      </span>
                    </h4>
                    {/* <div class="card__details">
                      <ul>
                        <li>
                          <strong>Technologies used</strong>
                        </li>
                        <li>React + Django</li>
                        <li>Django</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div> */}
                  </div>
                  <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                      <div class="card__price-box">
                        <p class="card__title">React</p>
                        <p class="card__text">
                          An internal overview tool meant to make life easier
                          for me and my team. This project started as a hobby
                          but later on turned out to become the most used
                          diagnostics tool in the company.
                          <br />
                          <br />
                          Due to lots and lots of different state changes and a
                          huge amount of API requests needed to obtain the
                          required information, I grew a deeper understanding of
                          state management with React Redux and Redux Thunk and
                          also dove deeper into network and request handling.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-1-of-2">
                <div class="card">
                  <div class="card__side card__side--front">
                    <div class="card__picture card__picture--1">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--1">
                        Trello integration
                      </span>
                    </h4>
                    {/* <div class="card__details">
                      <ul>
                        <li>
                          <strong>Technologies used</strong>
                        </li>
                        <li>React + Django</li>
                        <li>Django</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div> */}
                  </div>
                  <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                      <div class="card__price-box">
                        <p class="card__title">React (Typescript)</p>
                        <p class="card__text">
                          My first proffesional React project written in
                          Typescript.
                          <br />
                          <br />
                          This one was especially enjoyable since I faced a lot
                          of challenges like how to work around API throttling,
                          retrying failed requests, optimizing the application,
                          securing it with proper authentication and lest I
                          forget - working together with a client.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://github.com/Burzo/trello-integration"
                        class="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1-of-2">
                <div class="card">
                  <div class="card__side card__side--front">
                    <div class="card__picture card__picture--4">&nbsp;</div>
                    <h4 class="card__heading">
                      <span class="card__heading-span card__heading-span--1">
                        Android chat App
                      </span>
                    </h4>
                    {/* <div class="card__details">
                      <ul>
                        <li>
                          <strong>Technologies used</strong>
                        </li>
                        <li>React + Django</li>
                        <li>Django</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>
                    </div> */}
                  </div>
                  <div class="card__side card__side--back card__side--back-1">
                    <div class="card__cta">
                      <div class="card__price-box">
                        <p class="card__title">React Native</p>
                        <p class="card__text">
                          The first proffesional React Native project that I've
                          created.
                          <br />
                          <br />
                          This one was especially interesting since it's not
                          directly connected to web development anymore. I had
                          to learn different logic and processes then what I was
                          used to to make everything work together. I learned to
                          adapt and find a solution, no matter how hard it was
                          to wrap my head around it.
                        </p>
                      </div>
                      <a
                        target="_blank"
                        href="https://portal.getjoan.com/"
                        class="btn btn--white"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-contact">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary u-center">
              <span>Interested in doing a project together?</span>
            </h2>
            <div class="row">
              {' '}
              <div class="col">
                <h3 class="heading-tertiary u-margin-bottom-small">
                  I'm always open to new ideas!
                </h3>
                <a href="mailto:miha.drofenik92@gmail.com" class="btn-text">
                  <strong>Email me &rarr;</strong>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
