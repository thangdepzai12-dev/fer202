import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function AddressForm({ formData, onChange, validation }) {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label><i className="bi bi-geo-alt"></i> Street</Form.Label>
        <Form.Control type="text" name="street" value={formData.street || ""} onChange={onChange} isInvalid={validation && !formData.street} />
        <Form.Control.Feedback type="invalid">Street required</Form.Control.Feedback>
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" value={formData.city || ""} onChange={onChange} />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2">
            <Form.Label>Country</Form.Label>
            <Form.Select name="country" value={formData.country || ""} onChange={onChange}>
              <option value="">Select</option>
              <option value="Vietnam">Vietnam</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-2">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="text" name="zip" value={formData.zip || ""} onChange={onChange} />
      </Form.Group>
    </Form>
  );
}
