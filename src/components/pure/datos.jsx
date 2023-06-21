import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contactos.class';

const DatosComponent = ({ contacto }) => {
  return (
    <div>
      <h3>Nombre: {contacto.nombre}</h3>
      <h3>Apellido: {contacto.apellido}</h3>
      <h4>Email: {contacto.email}</h4>
      <h5>
        Conectado:{' '}
        {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
      </h5>
    </div>
  );
};

DatosComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default DatosComponent;
