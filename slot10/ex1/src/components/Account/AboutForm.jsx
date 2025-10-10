import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AboutForm({ formData, onChange, validation }) {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label><i className="bi bi-person-circle"></i> First Name</Form.Label>
            <Form.Control type="text" name="firstName" value={formData.firstName || ""} onChange={onChange} isInvalid={validation && !formData.firstName} />
            <Form.Control.Feedback type="invalid">First Name is required</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" value={formData.lastName || ""} onChange={onChange} />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email || ""} onChange={onChange} isInvalid={validation && !formData.email} />
        <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" value={formData.phone || ""} onChange={onChange} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="age" value={formData.age || ""} onChange={onChange} />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Avatar</Form.Label>
        <Form.Control type="file" name="avatar" onChange={onChange} />
      </Form.Group>
    </Form>
  );
}
