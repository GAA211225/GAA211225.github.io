// ============================================================
//  TUS DATOS — edita solo este archivo para cambiar la tarjeta.
//  El frente es la imagen de tu diseño de Canva (frente.png).
// ============================================================
window.TARJETA = {
  nombre: "Aquiles Guzmán Alonso",
  puesto: "CEO",

  // A dónde lleva el código QR del reverso ("Escanéame").
  // Si cambias esto, vuelve a generar qr.svg (ver README.md).
  qr: "https://gaa211225.github.io/tarjeta/",

  // Links del reverso (se muestran como botones redondos).
  // tipos con ícono: correo, whatsapp, telefono, instagram, facebook, tiktok, github, linkedin, web
  links: [
    { tipo: "whatsapp", texto: "WhatsApp 55 3925 3036", url: "https://wa.me/525539253036" },
    { tipo: "telefono", texto: "Llamar 55 3925 3036",   url: "tel:+525539253036" },
    { tipo: "instagram", texto: "Instagram @emboobate", url: "https://www.instagram.com/emboobate/" },
    { tipo: "correo",   texto: "guzmanalonsoaquiles@gmail.com", url: "mailto:guzmanalonsoaquiles@gmail.com" }
  ]
};
