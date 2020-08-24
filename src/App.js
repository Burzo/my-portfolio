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
          <a href="/">
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

          <a href="#section-projects" class="btn btn--white btn--animated">
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
                    <img className="icon" alt="html" src="/images/html.svg" />
                    <img className="icon" alt="css" src="/images/css.png" />
                    <img className="icon" alt="sass" src="/images/sass.svg" />
                    <img className="icon" alt="js" src="/images/js.png" />
                    <img
                      className="icon"
                      alt="reactjs"
                      src="/images/reactjs.png"
                    />
                    <img className="icon" alt="redux" src="/images/redux.svg" />
                  </p>
                  <p class="feature-box__text">
                    I've been mostly working with React coupled with Redux and
                    Redux-thunk for state management and React Router for
                    navigation. Other libraries depend on the project at hand. I
                    also make sure to always create a product that is responsive
                    and can be shown on any media imaginable.
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
                      src="/images/nodejs.png"
                    />
                    <img
                      className="icon"
                      alt="python"
                      src="/images/python.png"
                    />
                    <img
                      style={{ height: '3.2rem' }}
                      className="icon"
                      alt="django"
                      src="/images/django.svg"
                    />
                    <img
                      className="icon"
                      alt="postgresql"
                      src="/images/postgresql.png"
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
                    <img className="icon" alt="git" src="/images/git.png" />
                    <img
                      className="icon"
                      alt="gitlab"
                      src="/images/gitlab.png"
                    />
                    <img
                      className="icon"
                      alt="github"
                      src="/images/github.svg"
                    />
                  </p>
                  <p class="feature-box__text">During</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-projects">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary u-center">
              <span>&lt; My projects and experience /&gt;</span>
            </h2>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
