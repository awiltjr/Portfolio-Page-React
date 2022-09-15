import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="home-heading card-Heading">Logo</span>
          <div className="home-links-container">
            <span className="home-link navbar-Link">Education</span>
            <span className="home-link01 navbar-Link">Experience</span>
            <span className="home-link02 navbar-Link">Skills</span>
            <span className="navbar-Link">Projects</span>
          </div>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <span className="card-Heading home-heading1">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link04 navbar-Link">About</span>
              <span className="home-link05 navbar-Link">Experience</span>
              <span className="home-link06 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container2">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              I strategically leverage IT tools and services for organizations
              from SMB to Enterprise in the private, public, and 501(c)(3)
              spaces.
            </h1>
            <span className="home-text">
              <span className="section-Text">
                2022 celebrates my tenth year in the world of IT! Having grown
                from a generic Windows-shop tech to SME in cutting edge SaaS,
                virtualization, and BDR tools, I continue to put people first to
                remain being an approachable, trusted, and reliable resource.
                Whoever you are, I&apos;m happy to help!
              </span>
              <br></br>
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn anchor button">
                <span className="home-text03">
                  <span>About</span>
                  <br></br>
                </span>
              </button>
              <button className="home-cta-btn1 button anchor">Contact</button>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/aaron-wilt-headshot-1500w.jpg"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text06 section-Heading">Areas of Interest</h2>
          <span className="home-text07 section-Text">
            My 3 Cs are areas of IT I&apos;ve long had interest in and continue
            to seek opportunities for exposure with in my work and continued
            education 
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <a
                href="https://pixabay.com/illustrations/hacker-hacking-theft-cyber-malware-5151533/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link08"
              >
                <img
                  alt="image"
                  src="/playground_assets/cybersecurity-200h.jpg"
                  className="home-image1"
                />
              </a>
            </div>
            <div className="home-content-container">
              <span className="home-heading3 card-Heading">Cybersecurity</span>
              <span className="home-text08 card-Text">
                Despite serving as the go-to resource for client compliance
                needs in the realms of HIPAA, PCI DSS, and NIST 800-171, there
                is still much for me to learn in this never-ending cat-and-mouse
                game. I recently gained admission into the SANS Technology
                Institute&apos;s Cybersecurity Master&apos;s Program to further
                my aims.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <a
                href="https://pixabay.com/vectors/climate-cloud-communications-data-2099146/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link09"
              >
                <img
                  alt="image"
                  src="/playground_assets/cloud-200h.png"
                  className="home-image2"
                />
              </a>
            </div>
            <div className="home-content-container1">
              <span className="home-heading4 card-Heading">Cloud</span>
              <span className="home-text09 card-Text">
                Acted as a strong implementer of Microsoft 365/Azure and
                GSuite/Google Cloud Platform and now supporting the cutting edge
                of AWS. I hope continued development in AWS will provide a nice
                ROI for myself and customers as doing so will make me
                well-rounded in the big three.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <a
                href="https://pixabay.com/vectors/friendship-collaboration-company-138985/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <img
                  alt="image"
                  src="/playground_assets/clientexperience-200w.png"
                  className="home-image3"
                />
              </a>
            </div>
            <div className="home-content-container2">
              <span className="home-heading5 card-Heading">
                Client Experience
              </span>
              <span className="home-text10 card-Text">
                Any client, TAM, salesperson, BD professional, and liaison
                I&apos;ve worked with can attest to my due care when it comes to
                relationship management. I have assumed the same expectations of
                client experience assurance expected of a TAM in technical roles
                and have also directly served in such capacities.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-about">
        <div className="home-max-content-width-container">
          <div className="home-heading-container1">
            <h1 className="section-Heading home-text11">Highlights</h1>
          </div>
          <div className="home-content-container3">
            <div className="home-about-1">
              <div className="home-container3">
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text12 card-Text">
                  Served as primary responder for multiple, mass-scale
                  cybersecurity incidents
                </span>
              </div>
              <div className="home-container4">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text13 card-Text">
                  Stood up several, HA/FT virtualization clusters across ESXi
                  and Hyper-V
                </span>
              </div>
              <div className="home-container5">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text14 card-Text">
                  Strong understanding of on-premise Windows Server AD
                  environments
                </span>
              </div>
            </div>
            <div className="home-about-11">
              <div className="home-container6">
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text15 card-Text">
                  <span>
                    Performed many registrar, DNS, and email migrations across
                    prominent platforms
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-container7">
                <svg viewBox="0 0 1024 1024" className="home-icon12">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text19 card-Text">
                  Understands project management and business workflow/case
                  principles
                </span>
              </div>
              <div className="home-container8">
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                </svg>
                <span className="home-text20 card-Text">
                  Hosted new hire IT trainings and ran cybersecurity awareness
                  campaigns
                </span>
              </div>
            </div>
          </div>
          <button className="home-button anchor button">CHECK MY WORK</button>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-faqs">
        <h2 className="home-text21 section-Heading">
          Let&apos;s Get Philosophical
        </h2>
        <div className="home-content-container4">
          <div className="home-faq">
            <div className="home-question-container">
              <span className="home-question">
                What are your IT management beliefs?
              </span>
            </div>
            <div className="home-answer-container">
              <span className="home-answer card-Text">
                Above all else everything I do is in the effort of process
                improvement. IT is here to enhance operations and as such
                changes should always be done with operational needs in mind.
                When I first step foot into a new environment I do three things:
                (1) Identify areas of technical debt (2) Note who key IT
                stakeholders are (3) Devise an IT Roadmap. By technical debt I
                refer to hardware, software, or technical workflows that are
                insufficient, end of life, and/or needs further enhancement.
              </span>
              <span className="card-Text">
                Finding an organization&apos;s key IT stakeholders is vital
                because it formalizes change management, enables the formation
                of an IT Steering Committee, and opens communication pathways
                with locations, departments, and/or other organizational units.
                Both of these action items enable me to develop an IT Roadmap to
                collaboratively drive with C-level management. As a part of the
                roadmap I break down projects to address technical debt as well
                as ones that can enhance current/needed operational processes.
              </span>
            </div>
          </div>
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                How do you gauge an organization&apos;s security posture?
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer2 card-Text">
                Getting a report card of your security posture can be a
                time-consuming task depending on your organization&apos;s size,
                type, and manner of work. I tend to break down posture analysis
                in priority order across four categories: (1) Legal Requirements
                (2) Regulatory Compliance (3) Environment Complexity (4) Future
                Plans. When it comes to legal requirements I refer to security
                needs on the basis of criminal and civil liability and in the US
                is outlined federally and potentially within your state. Consult
                your legal experts on what your expectations are in the face of
                laws on the books and a hint - ask how and why organizations
                similar to yours have faced legal issues historically.
              </span>
              <span className="card-Text">
                Regulatory compliance is typically related to your industry or
                how you manage sensitive customer data. If you are in the
                medical field your organization should have a designated HIPAA
                Officer who can help answer questions even in the realm of IT.
                For those under PCI DSS, there&apos;s a growing surge in vendors
                providing compliancy services including penetration testing and
                I&apos;d recommend touching base with them as a first step.
                After seeing if your environment meets legal and compliance
                criteria, ask your IT if there&apos;s any lingering security
                gaps such as CVEs or weak authentication/authorization systems
                in place. Finally, I recommend developing an IT Roadmap of your
                own because by doing so in advance you can also strategize
                around the security ramifications of future plans.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                How do you evaluate operational needs?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer4 card-Text">
                In my experience, tickets tell the story. Even if you don&apos;t
                have a dedicated IT Team or a MSP on an agreement I recommend
                tracking IT issues/requests even if rudimentarily via Excel,
                Google Sheets, OneNote, etc. Hardware is typically easier to
                evaluate because after ruling out the network and software at
                play, even non-IT people can deduce computers are old and need
                to be replaced or are new but bought with insufficient specs.
                Network components are quite static and only really need to be
                replaced if there&apos;s equipment-related performance issues
                and/or severe security vulnerabilities at play.
              </span>
              <span className="card-Text">
                Software and systems in general are where evaluation becomes
                quite dynamic. In the realm of software it always seems like
                everyone can tell you what to buy but with so many options how
                do you know if you actually have a case to switch or are being
                sold to? This is when I tell organizations to dare to demo -
                software companies are much more willing to provide trials with
                typically adequate feature sets nowadays. For email and
                productivity apps as an example Microsoft 365 and GSuite offer
                30-day, fully-featured, no-questions-asked trials across the
                vast majority of their offerings. If issues persist after
                investigating these domains, it&apos;s typically indicative of
                operational workflow issues where it&apos;s not an issue of what
                you have but how you&apos;re using it.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator5"></div>
      <div className="home-subscribe"></div>
      <div className="home-section-separator6"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <img
              alt="image"
              src="/playground_assets/linkedin-200h.png"
              className="home-image4"
            />
            <a
              href="https://www.krakenitsolutions.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <img
                alt="image"
                src="/playground_assets/krakenit-200h.png"
                className="home-image5"
              />
            </a>
          </div>
          <div className="home-copyright-container">
            <a
              href="https://mailto:aaron@aaronwiltjr.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              aaron@aaronwiltjr.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
