import React, { useState } from 'react';

const Formulario = () => {
  const [tieneExperiencia, setTieneExperiencia] = useState(null);

  const handleExperienciaChange = (e) => {
    setTieneExperiencia(e.target.value);
  };

  return (
    <div className="containerFormulario">
      <div className="login-box">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc0kzFKarQDduLjrZkldWjZdxj4A4aAyAruC4YEwx1vn-DX5w/viewform?embedded=true" width="640" height="1706" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </div>
    </div>
  );
};

export default Formulario;
