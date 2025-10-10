import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function AccountForm({ formData, onChange, validation }) {
  return (
    <Form>
      <Form.Group className="mb-2">
        <Form.Label><i className="bi bi-person"></i> Username</Form.Label>
        <Form.Control type="text" name="username" value={formData.username || ""} onChange={onChange} isInvalid={validation && !formData.username} />
        <Form.Control.Feedback type="invalid">Username required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label><i className="bi bi-lock"></i> Password</Form.Label>
        <InputGroup>
          <Form.Control type="password" name="password" value={formData.password || ""} onChange={onChange} isInvalid={validation && !formData.password} />
        </InputGroup>
        <Form.Control.Feedback type="invalid">Password required</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword || ""} onChange={onChange} isInvalid={validation && formData.password !== formData.confirmPassword} />
        <Form.Control.Feedback type="invalid">Confirm must match</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Secret Question</Form.Label>
        <Form.Control type="text" name="secretQuestion" value={formData.secretQuestion || ""} onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Answer</Form.Label>
        <Form.Control type="text" name="secretAnswer" value={formData.secretAnswer || ""} onChange={onChange} />
      </Form.Group>
    </Form>
  );
}
