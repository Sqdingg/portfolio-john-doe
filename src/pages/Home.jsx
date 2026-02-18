import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, ProgressBar, Modal } from 'react-bootstrap'
import johnDoeImg from '../assets/images/john-doe-about.jpg'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [githubProfile, setGithubProfile] = useState(null)

  // Appel API GitHub
  useEffect(() => {
    fetch('https://api.github.com/users/github-johndoe')
      .then(res => res.json())
      .then(data => setGithubProfile(data))
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="display-4 fw-semibold">Bonjour, je suis John Doe</h1>
          <h2 className="fs-3 fw-semibold mb-4">Développeur web full stack</h2>
          <Button variant="danger" onClick={() => setShowModal(true)}>
            En savoir plus
          </Button>
        </div>
      </section>

      {/* ── A PROPOS + COMPÉTENCES ── */}
      <section className="about-section">
        <Container>
          <div className="about-card">
            <Row>
              {/* Colonne gauche : À propos */}
              <Col md={6} className="mb-4 mb-md-0">
                <h3 className="fw-semibold mb-2">A propos</h3>
                <hr className="border-2 border-primary opacity-100 mb-4" style={{ width: '120px', marginLeft: 0 }} />
                <img
                  src={johnDoeImg}
                  alt="Photo de John Doe"
                  className="img-fluid mb-4"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consectetur tempore perferendis nostrum, ex delectus
                  reiciendis impedit aut iure enim placeat? Natus, neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consectetur tempore perferendis nostrum, ex delectus
                  reiciendis impedit aut iure enim placeat? Natus, neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consectetur tempore perferendis nostrum, ex delectus
                  reiciendis impedit aut iure enim placeat? Natus, neque at?
                </p>
              </Col>

              {/* Colonne droite : Compétences */}
              <Col md={6}>
                <h3 className="fw-semibold mb-2">Mes compétences</h3>
                <hr className="border-2 border-primary opacity-100 mb-4" style={{ width: '120px', marginLeft: 0 }} />

                <p className="mb-1">HTML5 90%</p>
                <ProgressBar variant="danger" now={90} className="mb-3" />

                <p className="mb-1">CSS3 80%</p>
                <ProgressBar variant="info" now={80} className="mb-3" />

                <p className="mb-1">JAVASCRIPT 70%</p>
                <ProgressBar variant="warning" now={70} className="mb-3" />

                <p className="mb-1">PHP 60%</p>
                <ProgressBar variant="success" now={60} className="mb-3" />

                <p className="mb-1">REACT 50%</p>
                <ProgressBar variant="primary" now={50} className="mb-3" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* ── MODAL GITHUB ── */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {githubProfile ? (
            <Row>
              <Col md={5} className="text-center">
                <img
                  src={githubProfile.avatar_url}
                  alt="Avatar GitHub"
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={7}>
                <ul className="list-unstyled">
                  <li className="border-bottom py-2">
                    <i className="bi bi-person me-2"></i>
                    <a href={githubProfile.html_url} target="_blank" rel="noopener noreferrer">
                      {githubProfile.name}
                    </a>
                  </li>
                  <li className="border-bottom py-2">
                    <i className="bi bi-geo-alt me-2"></i>
                    {githubProfile.location}
                  </li>
                  <li className="border-bottom py-2">
                    <i className="bi bi-journal-text me-2"></i>
                    {githubProfile.bio}
                  </li>
                  <li className="border-bottom py-2">
                    <i className="bi bi-folder me-2"></i>
                    Repositories : {githubProfile.public_repos}
                  </li>
                  <li className="border-bottom py-2">
                    <i className="bi bi-people me-2"></i>
                    Followers : {githubProfile.followers}
                  </li>
                  <li className="py-2">
                    <i className="bi bi-people me-2"></i>
                    Following : {githubProfile.following}
                  </li>
                </ul>
              </Col>
            </Row>
          ) : (
            <p className="text-center">Chargement...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Home