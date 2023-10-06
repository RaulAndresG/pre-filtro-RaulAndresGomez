import React from 'react';
import '../css/footer.css'; // Importa el archivo de estilos CSS para el footer

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong> reaulgomes26@gmail.com
          </div>
          <div className="contact-item">
            <strong>Dirección:</strong> Calle de las Ruedas Rugientes #137
Ciudad Motorizada, Velociudad
Código Postal: MTR123
          </div>
          <div className="contact-item">
            <strong>Teléfono:</strong> +123 456 7890
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://github.com/tuempresa" target="_blank" rel="noopener noreferrer">
            <img src="/github-icon.png" alt="GitHub" />
          </a>
          <a href="https://discord.gg/tuempresa" target="_blank" rel="noopener noreferrer">
            <img src="/discord-icon.png" alt="Discord" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
