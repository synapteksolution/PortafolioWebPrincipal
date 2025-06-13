

import { Formulario } from '@/components/Contacto/Formulario'
function Contacto() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Contenedor del texto */}
      <div style={{ flex: 1, minWidth: '300px', padding: '20px' }}>
        <p>
          <h2 className='text-amber-200 text-3xl'> .... En Synaptek estamos para ti ......  </h2>
        </p>
        <p className='text-amber-600 text-2xl'>
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
