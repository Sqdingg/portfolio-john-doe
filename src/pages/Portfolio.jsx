import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import freshFood from '../assets/images/portfolio/fresh-food.jpg'
import akira from '../assets/images/portfolio/restaurant-japonais.jpg'
import espacebienetre from '../assets/images/portfolio/espace-bien-etre.jpg'
import seo from '../assets/images/portfolio/seo.jpg'
import coder from '../assets/images/portfolio/coder.jpg'
import screens from '../assets/images/portfolio/screens.jpg'

const projects = [
  { title: 'Fresh Food', desc: 'Site de vente de produits frais en ligne', tech: 'Site réalisé avec PHP et MySQL', img: freshFood, url: '#' },
  { title: 'Restaurant Akira', desc: 'Site de vente de produits frais en ligne', tech: 'Site réalisé avec WordPress', img: akira, url: '#' },
  { title: 'Espace bien-être', desc: 'Site de vente de produits frais en ligne', tech: 'Site réalisé avec LARAVEL', img: espacebienetre, url: '#' },
  { title: 'SEO', desc: 'Amélioration du référencement d\'un site e-commerce', tech: 'Utilisation des outils SEO', img: seo, url: '#' },
  { title: 'Création d\'une API', desc: 'Création d\'une API RESTFULL publique', tech: 'PHP - SYMFONY', img: coder, url: '#' },
  { title: 'Maquette d\'un site web', desc: 'Création du prototype d\'un site', tech: 'Réalisé avec FIGMA', img: screens, url: '#' },
]

function Portfolio() {
  return (
    <div>
      <div className="page-banner"></div>
      <Container className="py-5">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Voici quelques-unes de mes réalisations.</p>
          <hr />
        </div>
        <Row className="row-cols-1 row-cols-md-3 g-4 mt-3">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={project.img} alt={project.title} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-semibold">{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button variant="primary" href={project.url}>Voir le site</Button>
                </Card.Body>
                <Card.Footer className="text-center text-muted">{project.tech}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio