import { Container, Row, Col, Card } from 'react-bootstrap'

function Services() {
  return (
    <div>
      <div className="page-banner"></div>
      <Container className="py-5">
        <div className="section-title">
          <h2>Mon offre de services</h2>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
          <hr />
        </div>
        <Row className="row-cols-1 row-cols-md-3 g-4 mt-3">
          <Col>
            <Card className="h-100 text-center p-4 border">
              <Card.Body>
                <i className="bi bi-pencil fs-1 text-primary mb-3 d-block"></i>
                <Card.Title className="fw-semibold">UX Design</Card.Title>
                <Card.Text>
                  L'UX Design est une discipline qui consiste à concevoir des produits
                  (sites web, applications mobiles, logiciels, objets connectés, etc.)
                  en plaçant l'utilisateur au centre des préoccupations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center p-4 border">
              <Card.Body>
                <i className="bi bi-code-slash fs-1 text-primary mb-3 d-block"></i>
                <Card.Title className="fw-semibold">Développement web</Card.Title>
                <Card.Text>
                  Le développement de sites web consiste à créer des sites internet
                  en utilisant des langages de programmation (HTML, CSS, JavaScript,
                  PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 text-center p-4 border">
              <Card.Body>
                <i className="bi bi-search fs-1 text-primary mb-3 d-block"></i>
                <Card.Title className="fw-semibold">Référencement</Card.Title>
                <Card.Text>
                  Le référencement naturel (SEO) est une technique qui consiste à
                  optimiser un site web pour le faire remonter dans les résultats
                  des moteurs de recherche (Google, Bing, Yahoo, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services