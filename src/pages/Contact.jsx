import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
  return (
    <div>
      <div className="page-banner"></div>
      <Container className="py-5">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
          <hr />
        </div>
      </Container>
    </div>
  )
}

export default Contact