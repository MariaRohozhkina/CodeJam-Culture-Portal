import React from 'react';
import { Form } from 'react-bootstrap';
import './LanguageSwitch.css';

function LanguageSwitch() {
    return (
    <Form>
      <Form.Control className="select-language" as="select">
        <option>RU</option>
        <option>EN</option>
        <option>BE</option>
      </Form.Control>
    </Form>
  );
}

export default LanguageSwitch;