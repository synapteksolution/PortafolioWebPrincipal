

import { Formulario } from '@/components/Contacto/Formulario'
function Contacto() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Contenedor del texto */}
      <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
        <p>
          Synaptek te puede ayudar a montar tus páginas web.
        </p>
        <p>
          ¿Quieres saber más sobre todo lo que podemos hacer por tu empresa?
        </p>
        <p>
          Escríbenos y pronto nos pondremos en contacto.
        </p>
      </div>

      {/* Contenedor del formulario */}
      <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
        <Formulario />
      </div>
    </div>
  );
}

export default Contacto;
