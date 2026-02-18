import { Container, Accordion } from 'react-bootstrap'

function MentionsLegales() {
  return (
    <div>
      <Container className="py-5">
        <div className="section-title">
          <h2>Mentions légales</h2>
          <hr />
        </div>
        <Accordion defaultActiveKey="0" className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Editeur du site</Accordion.Header>
            <Accordion.Body>
              <h5>John Doe</h5>
              <p><i className="bi bi-map me-2"></i>40 rue Laure Diebold</p>
              <p><i className="bi bi-geo-alt me-2"></i>69009 Lyon, France</p>
              <p><i className="bi bi-phone me-2"></i>10 20 30 40 50</p>
              <p><i className="bi bi-envelope me-2"></i>john.doe@gmail.com</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <p>Nom de l'hébergeur</p>
              <p>Adresse de l'hébergeur</p>
              <p>Site web de l'hébergeur</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <p>Images : <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer nofollow">Pixabay</a></p>
              <p>Favicon : <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer nofollow">Flaticon</a></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  )
}

export default MentionsLegales