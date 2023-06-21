import React from 'react';
import { Contacto } from '../../models/contactos.class';
import DatosComponent from '../pure/datos';

const DatosList = () => {
  const contacto1 = new Contacto(
    'César',
    'Pineda',
    'example@example.com',
    true
  );
  return (
    <div>
      <div>
        <h2>Contacto</h2>
      </div>
      <DatosComponent contacto={contacto1}></DatosComponent>
    </div>
  );
};

export default DatosList;
