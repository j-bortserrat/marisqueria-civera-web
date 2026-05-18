// Genera 3 PDFs (ES / EN / IT) en assets/carta-civera{,-en,-it}.pdf
// Lee las traducciones directamente desde civera-app.js
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

// === Cargar I18N desde civera-app.js ===
const appJsPath = path.join(__dirname, 'assets', 'civera-app.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');
const i18nMatch = appJs.match(/const I18N = (\{[\s\S]*?\n\});/);
if (!i18nMatch) throw new Error('No se pudo extraer I18N de civera-app.js');
const I18N = eval('(' + i18nMatch[1] + ')');

// === Estructura de la carta (sólo keys + datos no traducibles) ===
const cartaStructure = [
  {
    pageKey: 'carta.tab.entrantes',
    subsections: [
      { titleKey: 'carta.sub.entradas', items: [
        { nameKey: 'carta.dish.pan' },
        { nameKey: 'carta.dish.sepia', tag: 'sg', allergens: [2,14] },
        { nameKey: 'carta.dish.calamarPlancha', tag: 'sg', allergens: [2] },
        { nameKey: 'carta.dish.pulpoFeira', tag: 'sg', allergens: [2,14] },
        { nameKey: 'carta.dish.anchoasOro', tag: 'sg', unit: true, allergens: [6] },
        { nameKey: 'carta.dish.calamarRomana', tag: 'sg', allergens: [2,5,14] },
        { nameKey: 'carta.dish.pataPulpo', tag: 'sg', allergens: [2,14] },
        { nameKey: 'carta.dish.padron', tag: 'sg' },
        { nameKey: 'carta.dish.colaCarabinero', weight: '100 grs', allergens: [2,5,6] },
        { nameKey: 'carta.dish.cocochas', weight: '200 grs' }
      ]},
      { titleKey: 'carta.sub.ibericos', items: [
        { nameKey: 'carta.dish.queso', tag: 'sg', weight: '100 grs', allergens: [13] },
        { nameKey: 'carta.dish.mojama', tag: 'sg', allergens: [6] },
        { nameKey: 'carta.dish.lomoBellota', allergens: [1] },
        { nameKey: 'carta.dish.jamon', tag: 'sg', weight: '110 grs' }
      ]},
      { titleKey: 'carta.sub.elaborados', items: [
        { nameKey: 'carta.dish.caldoFideos', tag: 'sg', allergens: [6,11,14] },
        { nameKey: 'carta.dish.zamburinas', tag: 'sg', allergens: [3,14] },
        { nameKey: 'carta.dish.zarzuela', weight: '2 pax', allergens: [1,2,3,6,11,14] },
        { nameKey: 'carta.dish.almejasMarinera', tag: 'sg', weight: '250 grs', allergens: [1,2,6,11,14] },
        { nameKey: 'carta.dish.caldereta', weight: '2 pax', allergens: [1,2,3,6,11,14] },
        { nameKey: 'carta.dish.vieiraCivera', allergens: [1,14] },
        { nameKey: 'carta.dish.tortitasCamarones', allergens: [1,2,5,6] }
      ]}
    ],
    noteKey: 'carta.note.aove'
  },
  {
    pageKey: 'carta.tab.ensaladas',
    items: [
      { nameKey: 'carta.dish.tomateVentresca', allergens: [6] },
      { nameKey: 'carta.dish.tartarAtun', allergens: [6,7,8,10] },
      { nameKey: 'carta.dish.tartarLubina', allergens: [6,7,8,10] },
      { nameKey: 'carta.dish.tartarVieira', allergens: [6,7,8,10] },
      { nameKey: 'carta.dish.salpicon', allergens: [2,5,6,14] },
      { nameKey: 'carta.dish.aguacateMarisco', allergens: [6,14] },
      { nameKey: 'carta.dish.ensaladillaCivera', allergens: [2,5,13,14] }
    ]
  },
  {
    pageKey: 'carta.tab.mariscos',
    feature: {
      titleKey: 'carta.feature.title',
      itemsKey: 'carta.feature.items',
      paxKey: 'carta.feature.pax',
      noteKey: 'carta.feature.note',
      headerKey: 'carta.sub.compartir'
    },
    subsections: [
      { titleKey: 'carta.sub.mariscos', tagKey: 'carta.subtag.peso', items: [
        { nameKey: 'carta.dish.ostrasArcade', weight: '1/2 doc.', tag: 'temporada' },
        { nameKey: 'carta.dish.ostrasGuillardeau', weight: '1/2 doc.' },
        { nameKey: 'carta.dish.navajas', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.necoras', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.bogavanteGallego', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.langostinosMed', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.cigalaPlaya', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.carabinerosCadiz', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.gambaRayada', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.bueyMar', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.txaca', weight: '1/2 Kg', tag: 'temporada' },
        { nameKey: 'carta.dish.caneillas', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.quisquilla', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.almejasCarril', weight: '1/2 Kg', tag: 'temporada' },
        { nameKey: 'carta.dish.langosta', weight: '1/2 Kg' },
        { nameKey: 'carta.dish.percebes', weight: '1/2 Kg', tag: 'temporada' }
      ]}
    ],
    noteKey: 'carta.note.peso'
  },
  {
    pageKey: 'carta.tab.pescados',
    items: [
      { nameKey: 'carta.dish.lubinaBrasa', weightKey: 'carta.tag.pieza', allergens: [6] },
      { nameKey: 'carta.dish.merluzaPincho', allergens: [6] },
      { nameKey: 'carta.dish.lenguado', tag: 'temporada', allergens: [6] },
      { nameKey: 'carta.dish.rodaballo', weight: 'Kg', allergens: [6] },
      { nameKey: 'carta.dish.galloSP', weightKey: 'carta.tag.aprox500', allergens: [6] },
      { nameKey: 'carta.dish.rape', weight: 'Kg', allergens: [6] },
      { nameKey: 'carta.dish.lubinaEstilo', allergens: [6] },
      { nameKey: 'carta.dish.besugo', allergens: [6] },
      { nameKey: 'carta.dish.bacalaoPedroneras', allergens: [6] },
      { nameKey: 'carta.dish.angula', weight: '100 grs', allergens: [6] }
    ]
  },
  {
    pageKey: 'carta.tab.carnes',
    noteKey: 'carta.note.maduradas',
    items: [
      { nameKey: 'carta.dish.entrecot', tag: 'sg', weight: '1 Kg' },
      { nameKey: 'carta.dish.entrecotPimienta', weight: '1 Kg', allergens: [1,3,13] },
      { nameKey: 'carta.dish.chuletaLurra', tag: 'sg', weight: '1 Kg' },
      { nameKey: 'carta.dish.solomilloPlancha', weight: '250 grs' },
      { nameKey: 'carta.dish.solomilloQueso', weight: '250 grs', allergens: [1,3,13] }
    ]
  },
  {
    pageKey: 'carta.tab.arroces',
    noteKey: 'carta.note.arroces',
    items: [
      { nameKey: 'carta.dish.paellaVerduras' },
      { nameKey: 'carta.dish.senyoret', allergens: [2,6,14] },
      { nameKey: 'carta.dish.fideua', allergens: [1,2,6,14] },
      { nameKey: 'carta.dish.arrozKokotchas', allergens: [2,6,14] },
      { nameKey: 'carta.dish.paellaValenciana', tag: 'encargo' },
      { nameKey: 'carta.dish.arrozNegro', allergens: [2,6,14] },
      { nameKey: 'carta.dish.arrozPatoFoie', allergens: [2,6,14] }
    ]
  },
  {
    pageKey: 'carta.tab.ninos',
    items: [
      { nameKey: 'carta.dish.tallarinesMar', allergens: [1,2,6,14] },
      { nameKey: 'carta.dish.tallarinesPollo', allergens: [1] },
      { nameKey: 'carta.dish.daditos', allergens: [1] },
      { nameKey: 'carta.dish.hamburguesa', allergens: [1] }
    ]
  },
  {
    pageKey: 'carta.tab.postres',
    subsections: [
      { titleKey: 'carta.sub.postres', items: [
        { nameKey: 'carta.dish.flan', allergens: [13] },
        { nameKey: 'carta.dish.fruta' },
        { nameKey: 'carta.dish.fresas', tag: 'temporada' },
        { nameKey: 'carta.dish.trufa', allergens: [3,5,9,13] },
        { nameKey: 'carta.dish.zumoNaranja' }
      ]},
      { titleKey: 'carta.sub.sorbetes', tagKey: 'carta.subtag.sg', items: [
        { nameKey: 'carta.dish.sorbMango' },
        { nameKey: 'carta.dish.sorbMaracuya' },
        { nameKey: 'carta.dish.sorbLimon' },
        { nameKey: 'carta.dish.sorbMandarina' },
        { nameKey: 'carta.dish.sorbCava' },
        { nameKey: 'carta.dish.sorbOrujo' }
      ]},
      { titleKey: 'carta.sub.helados', items: [
        { nameKey: 'carta.dish.heladoChocolate', allergens: [3,5,9,13] },
        { nameKey: 'carta.dish.heladoTurron', allergens: [3,5,9,13] },
        { nameKey: 'carta.dish.heladoVainilla', allergens: [3,5,9,13] },
        { nameKey: 'carta.dish.heladoMerengada', allergens: [3,5,9,13] },
        { nameKey: 'carta.dish.heladoCafe', allergens: [3,5,9,13] }
      ]},
      { titleKey: 'carta.sub.reposteria', tagKey: 'carta.subtag.alergenos', items: [
        { nameKey: 'carta.dish.tartaTiramisu' },
        { nameKey: 'carta.dish.tartaOpera' },
        { nameKey: 'carta.dish.tartaLotus' },
        { nameKey: 'carta.dish.tartaQueso' },
        { nameKey: 'carta.dish.torrijaHorchata' }
      ]}
    ],
    noteKey: 'carta.note.tartas'
  }
];

// Strings específicos del PDF (no en el i18n principal)
const PDF_STRINGS = {
  es: {
    coverScript: 'La mejor',
    coverSub: 'Marisco y pescado fresco recibido cada día desde el Cantábrico,\nGalicia y el Mediterráneo. Cocina valenciana tradicional en el\ncorazón de Valencia desde 1967.',
    coverHouse: '— L A   C A S A —',
    cartaWord: 'CARTA',
    allergens: 'Alérgenos',
    info: 'Información',
    thanks: 'Gracias por su visita',
    familia: 'Familia Civera',
    infoBlocks: [
      ['Producto fresco a diario', 'Recibimos marisco y pescado fresco cada mañana del Cantábrico, Galicia y la lonja valenciana. La carta puede variar según la disponibilidad de producto del día.'],
      ['Carta de vinos', 'Más de doscientas referencias seleccionadas por nuestro sumiller. Vinos D.O. valencianos, Rioja, Ribera del Duero, Galicia, champagne y cava. Carta completa disponible en sala.'],
      ['Alérgenos y dietas', 'Toda nuestra carta dispone de información de alérgenos según el Reglamento UE 1169/2011. Disponemos de opciones vegetarianas y veganas. Consulte con nuestro equipo de sala antes de hacer su pedido.'],
      ['Reservas', 'Reserva online en marisqueriascivera.com, por teléfono al 963 529 764 o por WhatsApp al 676 463 769. Confirmación inmediata.'],
      ['Eventos privados', 'Disponemos de salas privadas para comidas de empresa, celebraciones y eventos especiales. Consúltenos sin compromiso.']
    ]
  },
  en: {
    coverScript: 'The best',
    coverSub: 'Fresh seafood and fish received daily from the Cantabrian Sea,\nGalicia and the Mediterranean. Traditional Valencian cuisine\nin the heart of Valencia since 1967.',
    coverHouse: '— T H E   H O U S E —',
    cartaWord: 'MENU',
    allergens: 'Allergens',
    info: 'Information',
    thanks: 'Thank you for your visit',
    familia: 'The Civera Family',
    infoBlocks: [
      ['Fresh product daily', 'We receive fresh seafood and fish every morning from the Cantabrian Sea, Galicia and the Valencia fish market. The menu may vary depending on the product available on the day.'],
      ['Wine list', 'Over two hundred references selected by our sommelier. D.O. Valencian wines, Rioja, Ribera del Duero, Galicia, champagne and cava. Full list available at the restaurant.'],
      ['Allergens & diets', 'All our menu has allergen information according to EU Regulation 1169/2011. We have vegetarian and vegan options. Please ask our staff before ordering.'],
      ['Bookings', 'Book online at marisqueriascivera.com, by phone at +34 963 529 764 or via WhatsApp at +34 676 463 769. Instant confirmation.'],
      ['Private events', 'We have private rooms for corporate meals, celebrations and special events. Ask us for details with no obligation.']
    ]
  },
  it: {
    coverScript: 'La migliore',
    coverSub: 'Pesce e frutti di mare freschi ricevuti ogni giorno dal Cantabrico,\ndalla Galizia e dal Mediterraneo. Cucina valenciana tradizionale\nnel cuore di Valencia dal 1967.',
    coverHouse: '— L A   C A S A —',
    cartaWord: 'MENÙ',
    allergens: 'Allergeni',
    info: 'Informazioni',
    thanks: 'Grazie per la sua visita',
    familia: 'La Famiglia Civera',
    infoBlocks: [
      ['Prodotto fresco ogni giorno', 'Riceviamo pesce e frutti di mare freschi ogni mattina dal Cantabrico, dalla Galizia e dal mercato del pesce di Valencia. Il menù può variare secondo la disponibilità del prodotto del giorno.'],
      ['Carta dei vini', 'Oltre duecento etichette selezionate dal nostro sommelier. Vini D.O. valenciani, Rioja, Ribera del Duero, Galizia, champagne e cava. Carta completa disponibile in sala.'],
      ['Allergeni e diete', 'Tutto il nostro menù dispone di informazioni sugli allergeni secondo il Regolamento UE 1169/2011. Abbiamo opzioni vegetariane e vegane. Chiedi al nostro personale prima di ordinare.'],
      ['Prenotazioni', 'Prenota online su marisqueriascivera.com, per telefono al +34 963 529 764 o su WhatsApp al +34 676 463 769. Conferma immediata.'],
      ['Eventi privati', 'Disponiamo di sale private per pranzi aziendali, celebrazioni ed eventi speciali. Chiedici senza impegno.']
    ]
  }
};

const VALENCIA_STAMP = { es: 'VALENCIA · DESDE 1967', en: 'VALENCIA · SINCE 1967', it: 'VALENCIA · DAL 1967' };

// === Genera un PDF para un idioma ===
function generatePdf(lang){
  const dict = I18N[lang] || I18N.es;
  const labels = PDF_STRINGS[lang] || PDF_STRINGS.es;
  const t = (k) => dict[k] || k;
  const tagText = (kind) => (dict['carta.tag.' + kind] || '').replace(/^·\s*/, '');
  const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '');

  const filename = lang === 'es' ? 'carta-civera.pdf' : 'carta-civera-' + lang + '.pdf';
  const outputPath = path.join(__dirname, 'assets', filename);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 60, bottom: 60, left: 60, right: 60 },
    info: {
      Title: 'Carta — Marisquería Civera (' + lang.toUpperCase() + ')',
      Author: 'Marisquería Civera',
      Subject: 'Carta de Marisquería Civera, Valencia',
      Keywords: 'carta, menu, marisquería, Civera, Valencia'
    }
  });
  const writeStream = fs.createWriteStream(outputPath);
  doc.pipe(writeStream);

  const W = doc.page.width;
  const H = doc.page.height;
  const M = 60;

  function drawBackground(){ doc.rect(0, 0, W, H).fill(NAVY); }

  function drawCornerOrnaments(){
    doc.save();
    doc.lineWidth(0.6).strokeColor(GOLD);
    doc.moveTo(M-20, M-10).lineTo(M-20, M-30).stroke();
    doc.moveTo(M-20, M-30).lineTo(M, M-30).stroke();
    doc.moveTo(W-M, M-30).lineTo(W-M+20, M-30).stroke();
    doc.moveTo(W-M+20, M-30).lineTo(W-M+20, M-10).stroke();
    doc.moveTo(M-20, H-M+10).lineTo(M-20, H-M+30).stroke();
    doc.moveTo(M-20, H-M+30).lineTo(M, H-M+30).stroke();
    doc.moveTo(W-M, H-M+30).lineTo(W-M+20, H-M+30).stroke();
    doc.moveTo(W-M+20, H-M+30).lineTo(W-M+20, H-M+10).stroke();
    doc.restore();
  }

  function drawHeaderRibbon(){
    doc.save();
    doc.font('Helvetica').fontSize(7).fillColor(GOLD)
      .text(VALENCIA_STAMP[lang], M, 28, { width: W-2*M, align: 'center', characterSpacing: 4 });
    doc.restore();
  }

  function newPage(){
    doc.addPage();
    drawBackground();
    drawCornerOrnaments();
    drawHeaderRibbon();
  }

  function ensureSpace(needed){
    if (doc.y > H - 100 - needed) {
      newPage();
      doc.y = M + 20;
    }
  }

  // === COVER ===
  drawBackground();
  drawCornerOrnaments();

  doc.lineWidth(0.6).strokeColor(GOLD)
    .moveTo(M, 130).lineTo(W-M, 130).stroke();

  doc.font('Helvetica').fontSize(8).fillColor(GOLD)
    .text(VALENCIA_STAMP[lang], M, 100, { width: W-2*M, align: 'center', characterSpacing: 6 });

  doc.font('Times-Italic').fontSize(40).fillColor(GOLD)
    .text(labels.coverScript, M, 200, { width: W-2*M, align: 'center' });

  doc.font('Times-Roman').fontSize(64).fillColor(CREAM)
    .text('Marisquería', M, 260, { width: W-2*M, align: 'center', characterSpacing: -1 });

  doc.font('Times-Italic').fontSize(72).fillColor(GOLD)
    .text('Civera', M, 330, { width: W-2*M, align: 'center', characterSpacing: -1 });

  const cy = 460;
  doc.lineWidth(0.6).strokeColor(GOLD)
    .moveTo(W/2, cy-30).lineTo(W/2, cy+30).stroke();
  doc.circle(W/2, cy-30, 2.5).fill(GOLD);
  doc.circle(W/2, cy+30, 2.5).fill(GOLD);

  doc.font('Helvetica').fontSize(10).fillColor(CREAM).opacity(0.9)
    .text(labels.coverSub, M+40, cy+60, { width: W-2*M-80, align: 'center', lineGap: 4 });
  doc.opacity(1);

  doc.font('Times-Roman').fontSize(24).fillColor(GOLD)
    .text(labels.cartaWord, M, 620, { width: W-2*M, align: 'center', characterSpacing: 12 });

  doc.font('Helvetica').fontSize(7).fillColor(MUTED)
    .text(labels.coverHouse, M, 660, { width: W-2*M, align: 'center', characterSpacing: 4 });

  doc.font('Helvetica-Oblique').fontSize(8).fillColor(GOLD)
    .text('marisqueriascivera.com', M, H-80, { width: W-2*M, align: 'center' });
  doc.lineWidth(0.6).strokeColor(GOLD)
    .moveTo(M, H-100).lineTo(W-M, H-100).stroke();

  // === RENDER HELPERS ===
  function drawCategoryHeader(name){
    doc.font('Times-Italic').fontSize(30).fillColor(CREAM)
      .text(name, M, doc.y, { width: W-2*M, align: 'center' });
    doc.moveDown(0.3);
    const underlineY = doc.y;
    doc.lineWidth(0.5).strokeColor(GOLD).opacity(0.6);
    doc.moveTo(W/2-40, underlineY).lineTo(W/2+40, underlineY).stroke();
    doc.opacity(1);
    doc.moveDown(1.4);
  }

  function drawSubsectionHeader(text){
    ensureSpace(40);
    doc.font('Times-Italic').fontSize(17).fillColor(GOLD)
      .text(text, M, doc.y, { width: W-2*M, align: 'center' });
    doc.moveDown(0.8);
  }

  function drawDish(item){
    ensureSpace(36);
    const weightWidth = 120;
    const nameWidth = W - 2*M - weightWidth - 10;
    const startY = doc.y;

    const tag = item.tag ? '  ·  ' + tagText(item.tag) : '';
    doc.font('Times-Roman').fontSize(12).fillColor(CREAM)
      .text(t(item.nameKey), M, doc.y, { width: nameWidth, continued: !!item.tag });
    if (item.tag) {
      doc.font('Times-Italic').fontSize(11).fillColor(GOLD)
        .text(tag, { continued: false });
    }
    const afterName = doc.y;

    const weightText = item.weightKey ? t(item.weightKey) : item.weight;
    if (weightText) {
      doc.font('Times-Italic').fontSize(11).fillColor(GOLD)
        .text(weightText, W - M - weightWidth, startY, { width: weightWidth, align: 'right' });
    }

    doc.y = afterName;

    const codes = item.allergens || [];
    let subline = '';
    if (item.unit) subline += t('carta.allergens.unit');
    if (codes.length > 0) subline += (subline ? ' · ' : '') + t('carta.allergens.label') + ' ' + codes.join(' · ');
    if (subline) {
      doc.font('Helvetica-Oblique').fontSize(8).fillColor(GOLD).opacity(0.75)
        .text(subline, M, doc.y + 2, { width: nameWidth });
      doc.opacity(1);
    }

    const sepY = doc.y + 8;
    doc.save();
    doc.lineWidth(0.4).strokeColor(GOLD).opacity(0.18).dash(1, { space: 2 });
    doc.moveTo(M, sepY).lineTo(W-M, sepY).stroke();
    doc.undash().opacity(1);
    doc.restore();
    doc.y = sepY + 8;
  }

  function drawFeature(feat){
    ensureSpace(120);
    if (feat.headerKey) drawSubsectionHeader(t(feat.headerKey));
    const fx = M + 30;
    const fw = W - 2*M - 60;
    const startY = doc.y;
    const boxH = 100;
    doc.save();
    doc.lineWidth(0.7).strokeColor(GOLD).opacity(0.6);
    doc.rect(fx, startY, fw, boxH).stroke();
    doc.opacity(1);
    doc.restore();
    doc.font('Times-Italic').fontSize(15).fillColor(GOLD)
      .text(t(feat.titleKey), fx, startY + 12, { width: fw, align: 'center' });
    doc.font('Helvetica').fontSize(9).fillColor(CREAM).opacity(0.92)
      .text(t(feat.itemsKey), fx + 10, startY + 36, { width: fw - 20, align: 'center', lineGap: 2 });
    doc.opacity(1);
    doc.font('Helvetica-Bold').fontSize(8).fillColor(GOLD)
      .text(t(feat.paxKey).toUpperCase(), fx, startY + 68, { width: fw, align: 'center', characterSpacing: 3 });
    doc.font('Helvetica-Oblique').fontSize(7).fillColor(MUTED)
      .text(t(feat.noteKey), fx + 14, startY + 82, { width: fw - 28, align: 'center', lineGap: 1 });
    doc.y = startY + boxH + 20;
  }

  function drawNote(text){
    ensureSpace(30);
    doc.moveDown(0.4);
    doc.font('Helvetica-Oblique').fontSize(8.5).fillColor(MUTED)
      .text(text, M + 20, doc.y, { width: W - 2*M - 40, align: 'center', lineGap: 2 });
    doc.moveDown(0.6);
  }

  // === RENDER CATEGORIES ===
  cartaStructure.forEach(section => {
    newPage();
    doc.y = 100;
    drawCategoryHeader(t(section.pageKey));

    if (section.feature) drawFeature(section.feature);

    if (section.subsections) {
      section.subsections.forEach((sub, idx) => {
        if (idx > 0 || section.feature) doc.moveDown(0.6);
        const titleStr = t(sub.titleKey) + (sub.tagKey ? '  ·  ' + t(sub.tagKey) : '');
        drawSubsectionHeader(titleStr);
        sub.items.forEach(drawDish);
      });
    } else if (section.items) {
      section.items.forEach(drawDish);
    }

    if (section.noteKey) drawNote(stripHtml(t(section.noteKey)));
  });

  // === ALLERGEN LEGEND PAGE ===
  newPage();
  doc.y = 100;
  drawCategoryHeader(labels.allergens);

  doc.font('Helvetica').fontSize(9.5).fillColor(CREAM).opacity(0.88)
    .text(stripHtml(t('carta.legend.intro')), M + 30, doc.y, { width: W - 2*M - 60, align: 'center', lineGap: 3 });
  doc.opacity(1);
  doc.moveDown(2);

  const legendStartY = doc.y;
  const colW = (W - 2*M) / 2;
  const rowH = 22;
  for (let i = 1; i <= 14; i++) {
    const col = (i - 1) % 2;
    const row = Math.floor((i - 1) / 2);
    const x = M + col * colW;
    const y = legendStartY + row * rowH;
    doc.font('Times-Italic').fontSize(13).fillColor(GOLD)
      .text(String(i), x + 30, y, { width: 24 });
    doc.font('Helvetica').fontSize(10).fillColor(CREAM).opacity(0.9)
      .text(t('carta.legend.' + i), x + 60, y + 2, { width: colW - 80 });
    doc.opacity(1);
  }

  // === INFO PAGE ===
  newPage();
  doc.y = 100;
  drawCategoryHeader(labels.info);

  labels.infoBlocks.forEach(([title, body]) => {
    doc.font('Times-Roman').fontSize(13).fillColor(GOLD)
      .text(title, M, doc.y, { width: W-2*M });
    doc.moveDown(0.2);
    doc.font('Helvetica').fontSize(9).fillColor(CREAM).opacity(0.85)
      .text(body, M, doc.y, { width: W-2*M, lineGap: 2 });
    doc.opacity(1);
    doc.moveDown(1.2);
  });

  doc.font('Times-Italic').fontSize(20).fillColor(GOLD)
    .text(labels.thanks, M, H-220, { width: W-2*M, align: 'center' });

  doc.lineWidth(0.6).strokeColor(GOLD)
    .moveTo(W/2-30, H-180).lineTo(W/2+30, H-180).stroke();

  doc.font('Helvetica').fontSize(8).fillColor(CREAM).opacity(0.85)
    .text(labels.familia, M, H-170, { width: W-2*M, align: 'center', characterSpacing: 4 });
  doc.opacity(1);

  doc.font('Helvetica').fontSize(8).fillColor(MUTED)
    .text('Marisquería Civera · C/ Mosén Femades, 10 — 46002 Valencia', M, H-130, { width: W-2*M, align: 'center', characterSpacing: 1.2 });
  doc.font('Helvetica').fontSize(8).fillColor(MUTED)
    .text('+34 963 529 764  ·  info@marisqueriascivera.com', M, H-115, { width: W-2*M, align: 'center', characterSpacing: 1.2 });
  doc.font('Helvetica-Oblique').fontSize(8).fillColor(GOLD)
    .text('marisqueriascivera.com', M, H-100, { width: W-2*M, align: 'center' });

  doc.end();
  return new Promise((resolve)=>{
    writeStream.on('finish', ()=> {
      const stat = fs.statSync(outputPath);
      console.log('  ' + lang.toUpperCase() + ' → ' + filename + ' (' + Math.round(stat.size/1024) + ' KB)');
      resolve();
    });
  });
}

// === Genera los 3 idiomas ===
(async () => {
  console.log('Generando PDFs:');
  await generatePdf('es');
  await generatePdf('en');
  await generatePdf('it');
  console.log('Hecho.');
})();
