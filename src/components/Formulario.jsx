import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Formulario = () => {
  return (
    <Container className="mt-4">
      <Form>
        <Row>
          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Button variant="success" type="submit">
              Add
            </Button>
          </Col>

          <Col md>
            <Form.Group className="mb-3">
              <Form.Label>Job:</Form.Label>
              <Form.Control type="text" placeholder="Job" />
            </Form.Group>
            <Button variant="dark" type="button">
              Modify
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
    </Container>
  );
};

export default Formulario;
