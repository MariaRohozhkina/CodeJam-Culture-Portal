import React from 'react';

import { Form } from 'react-bootstrap';
import './LanguageSwitch.css';

const LanguageSwitch = ({handlerChangeLanguage, lang}) => {
  return (
    <Form>
      <Form.Control defaultValue={lang} className="select-language" as="select" onChange = {handlerChangeLanguage}>
        <option value='EN'>EN</option>
        <option value='RU'>RU</option>
        <option value='BE'>BE</option>
      </Form.Control>
    </Form>
  );
}

export default LanguageSwitch;