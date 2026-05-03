// Genera assets/carta-civera.pdf — paleta del sitio (navy + cream + gold + coral)
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const NAVY = '#0a1f3a';
const NAVY_DEEP = '#061328';
const CREAM = '#f5ede0';
const CREAM_SOFT = '#faf4ea';
const GOLD = '#c9a961';
const GOLD_DEEP = '#a88a47';
const CORAL = '#e07856';
const MUTED = '#7d8aa1';

const carta = {
  Entrantes: [
    ['Ensalada tibia de bogavante', 'Bogavante azul, hojas tiernas, vinagreta de cítricos.', '28 €'],
    ['Carpaccio de gamba roja de Denia', 'En finas láminas, AOVE, flor de sal. — signature', '26 €'],
    ['Tartar de atún rojo de almadraba', 'Mostaza, alcaparras, yema curada y pan tostado.', '22 €'],
    ['Pulpo a la brasa', 'Patata violeta, ajo confitado, pimentón de la Vera.', '19 €'],
    ['Anchoas del Cantábrico (8 ud.)', 'Selección 00, mantequilla y pan de cristal.', '16 €'],
    ['Croquetas caseras de marisco (6 ud.)', 'Receta de la casa, bisque reducido.', '14 €'],
    ['Salpicón de marisco', 'Gambas, langostinos, pulpo, vinagreta clásica.', '22 €'],
    ['Sepia con mahonesa de ajo asado', 'Sepia de la lonja, mahonesa untuosa, perejil fresco.', '17 €']
  ],
  Mariscos: [
    ['Gamba roja de Denia', 'A la plancha o cocida.', 's/m'],
    ['Carabinero salvaje', 'A la plancha con flor de sal.', 's/m'],
    ['Quisquillas de Motril', 'Cocidas en agua de mar.', 's/m'],
    ['Cigalas de tronco', 'A la plancha o cocidas.', 's/m'],
    ['Bogavante azul', 'A la plancha, cocido o en arroz.', 's/m'],
    ['Centollo gallego', 'Cocido al punto, según pieza.', 's/m'],
    ['Almejas de Carril', 'A la marinera o a la plancha.', 's/m'],
    ['Ostras Gillardeau', 'N.º 2, abiertas al momento.', 's/m']
  ],
  Pescados: [
    ['Lubina salvaje a la sal', 'Pieza entera, sal marina gruesa, aceite de cebollino.', '32 €'],
    ['Rodaballo a la espalda', 'Refrito de ajo, vinagre y guindilla.', '36 €'],
    ['Lenguado meunière', 'Mantequilla noisette, perejil, limón.', '28 €'],
    ['Merluza de pincho', 'Al pil-pil, en salsa verde o a la plancha.', '26 €'],
    ['Atún rojo a la plancha', 'Tataki vuelta y vuelta, soja casera, sésamo.', '30 €'],
    ['Calamar de potera a la plancha', 'Aceite de albahaca, ajo tierno, flor de sal.', '24 €'],
    ['Dorada a la espalda', 'Refrito clásico, patata panadera.', '22 €'],
    ['Bacalao confitado al pil-pil', 'Lomo desmigado, ajo, guindilla.', '25 €']
  ],
  Arroces: [
    ['Arroz a banda — de la casa', 'Caldo de morralla, sepia, allioli suave. Mín. 2 personas.', '24 €/p'],
    ['Arroz del senyoret', 'Marisco pelado, listo para comer. Mín. 2 personas.', '26 €/p'],
    ['Arroz de bogavante', 'Bogavante entero, fumet de marisco. Mín. 2 personas.', '32 €/p'],
    ['Paella valenciana', 'Pollo, conejo, garrofó, judía verde. Mín. 2 personas.', '22 €/p'],
    ['Arroz negro', 'Tinta de calamar, sepia, allioli. Mín. 2 personas.', '24 €/p'],
    ['Fideuá de marisco', 'Fideo fino tostado, gamba, calamar. Mín. 2 personas.', '22 €/p']
  ],
  Carnes: [
    ['Solomillo de buey gallego', 'A la plancha, sal en escamas, patata trufada.', '36 €'],
    ['Chuletón de vaca madurada', 'Maduración 45 días, brasa, pimientos del padrón.', '38 €'],
    ['Cordero lechal al horno de leña', 'Patata panadera, ensalada de la casa.', '28 €'],
    ['Entrecot de ternera', 'A la plancha, guarnición a elegir.', '24 €']
  ],
  Postres: [
    ['Tarta de queso casera', 'Receta de la casa, base de galleta y queso cremoso.', '8 €'],
    ['Coulant de chocolate', 'Helado de vainilla bourbon.', '9 €'],
    ['Helado artesano', 'Tres bolas, sabores del día.', '7 €'],
    ['Naranja de Valencia con miel', 'Naranja D.O., miel de azahar, canela.', '6 €'],
    ['Crema catalana quemada al momento', 'Receta tradicional de la casa.', '7 €'],
    ['Fruta de temporada', 'Selección del mercado.', '5 €']
  ]
};

const outputPath = path.join(__dirname, 'assets', 'carta-civera.pdf');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 60, bottom: 60, left: 60, right: 60 },
  info: {
    Title: 'Carta — Marisquería Civera',
    Author: 'Marisquería Civera',
    Subject: 'Carta de Marisquería Civera, Valencia',
    Keywords: 'carta, menu, marisquería, Civera, Valencia, marisco, pescado, arroces'
  }
});

doc.pipe(fs.createWriteStream(outputPath));

const W = doc.page.width;
const H = doc.page.height;
const M = 60;

function drawBackground(){
  doc.rect(0, 0, W, H).fill(NAVY);
}

function drawCornerOrnaments(){
  doc.save();
  doc.lineWidth(0.6).strokeColor(GOLD);
  // top-left
  doc.moveTo(M-20, M-10).lineTo(M-20, M-30).stroke();
  doc.moveTo(M-20, M-30).lineTo(M, M-30).stroke();
  // top-right
  doc.moveTo(W-M, M-30).lineTo(W-M+20, M-30).stroke();
  doc.moveTo(W-M+20, M-30).lineTo(W-M+20, M-10).stroke();
  // bottom-left
  doc.moveTo(M-20, H-M+10).lineTo(M-20, H-M+30).stroke();
  doc.moveTo(M-20, H-M+30).lineTo(M, H-M+30).stroke();
  // bottom-right
  doc.moveTo(W-M, H-M+30).lineTo(W-M+20, H-M+30).stroke();
  doc.moveTo(W-M+20, H-M+30).lineTo(W-M+20, H-M+10).stroke();
  doc.restore();
}

function drawHeaderRibbon(){
  doc.save();
  doc.font('Helvetica').fontSize(7).fillColor(GOLD)
    .text('VALENCIA · DESDE 1967', M, 28, { width: W-2*M, align: 'center', characterSpacing: 4 });
  doc.restore();
}

function drawFooter(pageNum, totalPages){
  doc.save();
  doc.lineWidth(0.4).strokeColor(GOLD).opacity(0.5);
  doc.moveTo(M, H-46).lineTo(W-M, H-46).stroke();
  doc.opacity(1);
  doc.font('Helvetica').fontSize(7).fillColor(MUTED)
    .text('Marisquería Civera · C/ Mosén Femades, 10 — 46002 Valencia · +34 963 529 764', M, H-38, { width: W-2*M, align: 'center', characterSpacing: 1.2 });
  doc.font('Helvetica-Oblique').fontSize(6.5).fillColor(GOLD)
    .text('marisqueriascivera.com', M, H-26, { width: W-2*M, align: 'center' });
  doc.restore();
}

function newPage(){
  doc.addPage();
  drawBackground();
  drawCornerOrnaments();
  drawHeaderRibbon();
}

// === COVER PAGE ===
drawBackground();
drawCornerOrnaments();

// Decorative top line
doc.lineWidth(0.6).strokeColor(GOLD)
  .moveTo(M, 130).lineTo(W-M, 130).stroke();

// "VALENCIA · DESDE 1967"
doc.font('Helvetica').fontSize(8).fillColor(GOLD)
  .text('VALENCIA · DESDE 1967', M, 100, { width: W-2*M, align: 'center', characterSpacing: 6 });

// "La mejor"
doc.font('Times-Italic').fontSize(40).fillColor(GOLD)
  .text('La mejor', M, 200, { width: W-2*M, align: 'center' });

// Title
doc.font('Times-Roman').fontSize(64).fillColor(CREAM)
  .text('Marisquería', M, 260, { width: W-2*M, align: 'center', characterSpacing: -1 });

doc.font('Times-Italic').fontSize(72).fillColor(GOLD)
  .text('Civera', M, 330, { width: W-2*M, align: 'center', characterSpacing: -1 });

// Divider with dots
const cy = 460;
doc.lineWidth(0.6).strokeColor(GOLD)
  .moveTo(W/2, cy-30).lineTo(W/2, cy+30).stroke();
doc.circle(W/2, cy-30, 2.5).fill(GOLD);
doc.circle(W/2, cy+30, 2.5).fill(GOLD);

// Subtitle
doc.font('Helvetica').fontSize(10).fillColor(CREAM).opacity(0.9)
  .text('Marisco y pescado fresco recibido cada día desde el Cantábrico,\nGalicia y el Mediterráneo. Cocina valenciana tradicional en el\ncorazón de Valencia desde 1967.',
    M+40, cy+60, { width: W-2*M-80, align: 'center', lineGap: 4 });
doc.opacity(1);

// CARTA stamp
doc.font('Times-Roman').fontSize(24).fillColor(GOLD)
  .text('CARTA', M, 620, { width: W-2*M, align: 'center', characterSpacing: 12 });

doc.font('Helvetica').fontSize(7).fillColor(MUTED)
  .text('— L A   C A S A —', M, 660, { width: W-2*M, align: 'center', characterSpacing: 4 });

// Footer of cover
doc.font('Helvetica-Oblique').fontSize(8).fillColor(GOLD)
  .text('marisqueriascivera.com', M, H-80, { width: W-2*M, align: 'center' });
doc.lineWidth(0.6).strokeColor(GOLD)
  .moveTo(M, H-100).lineTo(W-M, H-100).stroke();

// === CONTENT PAGES ===
const CATEGORY_ORDER = ['Entrantes', 'Mariscos', 'Pescados', 'Arroces', 'Carnes', 'Postres'];
let firstCategory = true;

function drawCategoryHeader(name){
  doc.font('Times-Italic').fontSize(32).fillColor(CREAM)
    .text(name, M, doc.y, { width: W-2*M, align: 'center' });
  doc.moveDown(0.3);
  // gold underline
  const underlineY = doc.y;
  doc.lineWidth(0.5).strokeColor(GOLD).opacity(0.6);
  const ux = W/2 - 40;
  doc.moveTo(ux, underlineY).lineTo(ux+80, underlineY).stroke();
  doc.opacity(1);
  doc.moveDown(1.4);
}

function drawDish(name, desc, price){
  const startY = doc.y;
  if (startY > H - 130) {
    newPage();
    doc.y = M + 20;
  }

  const priceWidth = 90;
  const nameWidth = W - 2*M - priceWidth - 10;

  // Dish name
  doc.font('Times-Roman').fontSize(12).fillColor(CREAM)
    .text(name, M, doc.y, { width: nameWidth, continued: false });
  const afterName = doc.y;

  // Price (right aligned, same line as name)
  doc.font('Times-Italic').fontSize(12).fillColor(GOLD)
    .text(price, W - M - priceWidth, startY, { width: priceWidth, align: 'right' });

  // Reset y to after name
  doc.y = afterName;

  // Description
  if (desc) {
    doc.font('Helvetica').fontSize(8.5).fillColor(MUTED)
      .text(desc, M, doc.y + 1, { width: nameWidth });
  }

  // Dotted separator
  const sepY = doc.y + 8;
  doc.save();
  doc.lineWidth(0.4).strokeColor(GOLD).opacity(0.18).dash(1, { space: 2 });
  doc.moveTo(M, sepY).lineTo(W-M, sepY).stroke();
  doc.undash().opacity(1);
  doc.restore();
  doc.y = sepY + 8;
}

CATEGORY_ORDER.forEach((cat) => {
  const items = carta[cat];
  if (!items) return;

  // Always start each category on a new page (except first which is also a new page after cover)
  newPage();
  doc.y = 110;
  drawCategoryHeader(cat);

  items.forEach(([name, desc, price]) => {
    drawDish(name, desc, price);
  });

  // Special note for Arroces
  if (cat === 'Arroces') {
    doc.moveDown(0.5);
    doc.font('Helvetica-Oblique').fontSize(8).fillColor(MUTED)
      .text('Nuestros arroces se preparan al momento. Tiempo de elaboración: 25 minutos.',
        M, doc.y, { width: W-2*M, align: 'center' });
  }

  // Special note for Mariscos
  if (cat === 'Mariscos') {
    doc.moveDown(0.5);
    doc.font('Helvetica-Oblique').fontSize(8).fillColor(MUTED)
      .text('Marisco según precio de mercado. Consulte con nuestro equipo de sala las piezas disponibles del día.',
        M, doc.y, { width: W-2*M, align: 'center' });
  }
});

// === LAST PAGE — NOTAS Y CONTACTO ===
newPage();
doc.y = 110;

doc.font('Times-Italic').fontSize(32).fillColor(CREAM)
  .text('Información', M, doc.y, { width: W-2*M, align: 'center' });
doc.moveDown(0.3);
const notesUnderlineY = doc.y;
doc.lineWidth(0.5).strokeColor(GOLD).opacity(0.6);
doc.moveTo(W/2-40, notesUnderlineY).lineTo(W/2+40, notesUnderlineY).stroke();
doc.opacity(1);
doc.moveDown(2);

const notes = [
  ['Producto fresco a diario',
   'Recibimos marisco y pescado fresco cada mañana del Cantábrico, Galicia y la lonja valenciana. La carta puede variar según la disponibilidad de producto del día.'],
  ['Carta de bebidas',
   'Disponemos de una bodega cuidada por nuestro sumiller con más de doscientas referencias de vinos nacionales e internacionales. Carta de vinos completa disponible en sala.'],
  ['Alérgenos',
   'Toda nuestra carta dispone de información de alérgenos según el Reglamento UE 1169/2011. Consulte con nuestro equipo de sala antes de hacer su pedido.'],
  ['Reservas',
   'Reserva online en marisqueriascivera.com, por teléfono al 963 529 764 o por WhatsApp al 676 463 769. Confirmación inmediata.'],
  ['Eventos privados',
   'Disponemos de salas privadas para comidas de empresa, celebraciones y eventos especiales. Consúltenos sin compromiso.']
];

notes.forEach(([title, body]) => {
  doc.font('Times-Roman').fontSize(13).fillColor(GOLD)
    .text(title, M, doc.y, { width: W-2*M });
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor(CREAM).opacity(0.85)
    .text(body, M, doc.y, { width: W-2*M, lineGap: 2 });
  doc.opacity(1);
  doc.moveDown(1.2);
});

// Closing block at bottom of last page
doc.font('Times-Italic').fontSize(20).fillColor(GOLD)
  .text('Gracias por su visita', M, H-220, { width: W-2*M, align: 'center' });

doc.lineWidth(0.6).strokeColor(GOLD)
  .moveTo(W/2-30, H-180).lineTo(W/2+30, H-180).stroke();

doc.font('Helvetica').fontSize(8).fillColor(CREAM).opacity(0.85)
  .text('Familia Civera', M, H-170, { width: W-2*M, align: 'center', characterSpacing: 4 });
doc.opacity(1);

doc.font('Helvetica').fontSize(8).fillColor(MUTED)
  .text('Marisquería Civera · C/ Mosén Femades, 10 — 46002 Valencia', M, H-130, { width: W-2*M, align: 'center', characterSpacing: 1.2 });
doc.font('Helvetica').fontSize(8).fillColor(MUTED)
  .text('+34 963 529 764  ·  info@marisqueriascivera.com', M, H-115, { width: W-2*M, align: 'center', characterSpacing: 1.2 });
doc.font('Helvetica-Oblique').fontSize(8).fillColor(GOLD)
  .text('marisqueriascivera.com', M, H-100, { width: W-2*M, align: 'center' });

doc.end();

doc.on('finish', ()=> {
  const stat = fs.statSync(outputPath);
  console.log('PDF generado: ' + outputPath + ' (' + Math.round(stat.size/1024) + ' KB)');
});
