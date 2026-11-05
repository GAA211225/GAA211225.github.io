// ============================================================
//  TUS DATOS — edita solo este archivo para cambiar la tarjeta.
//  El frente es la imagen de tu diseño de Canva (frente.png).
// ============================================================
window.TARJETA = {
  nombre: "Aquiles Guzmán Alonso",

  // A dónde lleva el código QR del reverso ("Escanéame").
  // Si cambias esto, vuelve a generar qr.svg (ver README.md).
  qr: "https://gaa211225.github.io/tarjeta/",

  // Links del reverso (se muestran como botones redondos).
  // tipos con ícono: correo, whatsapp, telefono, instagram, facebook, tiktok, github, linkedin, web
  links: [
    { tipo: "whatsapp",  texto: "WhatsApp",  url: "https://wa.me/520000000000" },
    { tipo: "instagram", texto: "Instagram", url: "https://instagram.com/" },
    { tipo: "correo",    texto: "Correo",    url: "mailto:guzmanalonsoaquiles@gmail.com" },
    { tipo: "github",    texto: "GitHub",    url: "https://github.com/GAA211225" }
  ]
};
