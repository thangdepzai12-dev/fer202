import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function ContactPage() {
  return (
    <Card>
      <Card.Body>
        <h4>Contact</h4>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button>Send</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
