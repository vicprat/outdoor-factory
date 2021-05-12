import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';

export function ContactForm() {
  return (
    <Container>
      <Form
        name="contact info"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        action="/succes"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact info" />

        <p hidden>
          <label>
            Don´t fill this out: <input name="bot-field" />
          </label>
        </p>

        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control required size="lg" type="text" name="first-name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Apellido(s)</Form.Label>
              <Form.Control required size="lg" type="text" name="last-name" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>Celular</Form.Label>
              <Form.Control required size="lg" type="text" name="phone" />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control required size="lg" type="text" name="email" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group>
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows="5"
            placeholder="¿Cómo te podemos ayudar?"
            name="info"
          />
        </Form.Group>
        <Button type="submit" variant="success">
          ¡Enviar!
        </Button>
      </Form>
    </Container>
  );
}
