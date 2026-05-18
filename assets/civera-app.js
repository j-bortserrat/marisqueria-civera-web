// I18N — diccionario ES / EN / IT (compartido entre páginas)
const I18N = {
  es: {
    'nav.tagline':'Desde 1967',
    'nav.local':'El local','nav.carta':'Carta','nav.reservas':'Reservar','nav.reviews':'Reseñas','nav.contact':'Dónde estamos','nav.cta':'Reservar',
    'crumb.home':'Inicio','crumb.carta':'Carta','crumb.location':'Dónde estamos','crumb.reserve':'Reservar',
    'hero.stamp':'VALENCIA · DESDE 1967','hero.script':'La mejor',
    'hero.sub':'Marisco y pescado fresco recibido cada día desde el Cantábrico, Galicia y el Mediterráneo. Cocina valenciana tradicional en pleno corazón de Valencia, con más de cinco décadas haciendo lo mismo: respetar el producto.',
    'hero.ctaPrimary':'Reservar mesa','hero.ctaSecondary':'Ver carta','hero.scroll':'Scroll',
    'local.eyebrow':'El local','local.title':'Una marisquería con historia en el centro de Valencia',
    'local.lead':'Abrimos las puertas en 1967 con una idea sencilla: traer cada día el mejor marisco y pescado del Cantábrico, Galicia y la lonja valenciana, y servirlo como se merece.',
    'local.p1':'Casi seis décadas después seguimos con la misma filosofía. La mar manda y la cocina escucha. Recibimos producto fresco a diario, lo tratamos con el respeto que pide y lo servimos con la naturalidad de siempre.',
    'local.p2':'Mariscadas, arroces de leña, pescados al horno y a la sal, carnes seleccionadas y una bodega cuidada por nuestro sumiller con más de doscientas referencias. Todo en un comedor clásico valenciano, en pleno barrio del Ensanche.',
    'stats.year':'Año de fundación','stats.reviews':'Reseñas reales','stats.rating':'Valoración TripAdvisor','stats.fresh':'Días al año con marisco fresco',
    'carta.eyebrow':'La carta','carta.title':'Producto fresco, cocina sin artificios',
    'carta.intro':'La carta cambia con la temporada y con lo que llega cada mañana de la lonja. Estos son algunos de los platos que más se piden.',
    'carta.hero.h1':'La <em>Carta</em>',
    'carta.tab.entrantes':'Entrantes','carta.tab.ensaladas':'Ensaladas','carta.tab.mariscos':'Mariscos','carta.tab.pescados':'Pescados','carta.tab.carnes':'Carnes','carta.tab.arroces':'Arroces','carta.tab.ninos':'Niños','carta.tab.postres':'Postres',
    'carta.note':'Marisco según precio de mercado. La carta puede variar según producto de temporada. Consulte alérgenos a nuestro equipo de sala. Carta completa con vinos disponible en sala.',
    'carta.viewPdf':'Ver carta completa (PDF)','carta.reserve':'Reservar mesa','carta.viewAll':'Ver carta completa',
    'carta.sub.entradas':'Entradas','carta.sub.ibericos':'Ibéricos','carta.sub.elaborados':'Elaborados','carta.sub.compartir':'Recomendaciones para compartir','carta.sub.mariscos':'Los Mariscos','carta.sub.postres':'Los Postres','carta.sub.sorbetes':'Los Sorbetes','carta.sub.helados':'Los Helados','carta.sub.reposteria':'Repostería Casera',
    'carta.subtag.peso':'SG · al peso','carta.subtag.sg':'SG','carta.subtag.alergenos':'3 · 5 · 9 · 13',
    'carta.tag.sg':'· SG','carta.tag.temporada':'· temporada','carta.tag.encargo':'· por encargo','carta.tag.pieza':'Pieza entera','carta.tag.aprox500':'1/2 Kg (≈500 grs)',
    'carta.note.aove':'Solo usamos AOVE (Aceite de Oliva Virgen Extra).','carta.note.peso':'Los mariscos son al peso, según mercado. Se recomienda 200–250 grs por comensal. Algunos productos son de temporada.','carta.note.maduradas':'Carnes maduradas.','carta.note.arroces':'<strong>Todos nuestros arroces son por encargo.</strong> Mínimo 2 personas por paella; para 2 tipos de paella, mínimo 6 pax. También arroces melosos en paella (SG). Tiempo de elaboración mínimo 1 hora.','carta.note.tartas':'Pregunte por las tartas del día — consulte otros sabores con nuestro equipo de sala.',
    'carta.feature.title':'Fuente de marisco a la plancha','carta.feature.items':'Cigala de playa · Bogavante · Langostino de Vinaroz · Gamba blanca · Navajas · Carabineros · Zamburiñas','carta.feature.pax':'2 kg aprox.','carta.feature.note':'Civera se reserva el derecho de modificar las fuentes si así lo exigiese el mercado.',
    'carta.legend.title':'Alérgenos e intolerancias','carta.legend.intro':'Si tiene algún tipo de problema alérgico o de intolerancia alimentaria, informe a nuestro personal encargado. Junto a cada plato aparece el identificativo del alérgeno que contiene. <strong>SG</strong> indica platos sin gluten o disponibles en versión sin gluten — pregunte por nuestro pan y postres para celíacos.',
    'carta.legend.1':'Cereales con gluten','carta.legend.2':'Crustáceos / Marisco','carta.legend.3':'Frutos secos','carta.legend.4':'Apio','carta.legend.5':'Huevo','carta.legend.6':'Pescado','carta.legend.7':'Mostaza','carta.legend.8':'Sésamo','carta.legend.9':'Cacahuetes','carta.legend.10':'Soja','carta.legend.11':'Sulfitos','carta.legend.12':'Altramuces','carta.legend.13':'Lácteos','carta.legend.14':'Moluscos',
    'carta.allergens.label':'Alérgenos:','carta.allergens.unit':'Por unidad',
    'carta.dish.pan':'Pan natural de masa madre','carta.dish.sepia':'Sepia a la plancha o con mayonesa','carta.dish.calamarPlancha':'Calamar a la plancha o brasa','carta.dish.pulpoFeira':'Pulpo a Feira','carta.dish.anchoasOro':'Anchoas «Caseras» Serie Oro','carta.dish.calamarRomana':'Calamar a la romana','carta.dish.pataPulpo':'Pata de pulpo','carta.dish.padron':'Pimientos de Padrón','carta.dish.colaCarabinero':'Cola de carabinero «brasa o ajillo»','carta.dish.cocochas':'Cocochas a la bilbaína',
    'carta.dish.queso':'Queso curado','carta.dish.mojama':'Mojama de almadraba','carta.dish.lomoBellota':'Caña de lomo de bellota','carta.dish.jamon':'Jamón ibérico',
    'carta.dish.caldoFideos':'Caldo marinero con fideos','carta.dish.zamburinas':'Zamburiñas a feira o bilbaína','carta.dish.zarzuela':'Zarzuela de pescado y marisco','carta.dish.almejasMarinera':'Almejas a la marinera','carta.dish.caldereta':'Caldereta de bogavante «Azul»','carta.dish.vieiraCivera':'Vieira «Estilo Civera»','carta.dish.tortitasCamarones':'Tortitas de camarones con corral y virutas de ibéricos',
    'carta.dish.tomateVentresca':'Corazón de tomate con ventresca','carta.dish.tartarAtun':'Tartar de atún','carta.dish.tartarLubina':'Tartar de lubina','carta.dish.tartarVieira':'Tartar de vieira','carta.dish.salpicon':'Salpicón de marisco','carta.dish.aguacateMarisco':'Ensalada de aguacate con marisco','carta.dish.ensaladillaCivera':'Ensaladilla «Civera» con verduras',
    'carta.dish.ostrasArcade':'Ostras Flor de Arcade','carta.dish.ostrasGuillardeau':'Ostras Guillardeau','carta.dish.navajas':'Navajas naturales','carta.dish.necoras':'Nécoras gallegas','carta.dish.bogavanteGallego':'Bogavante gallego «Azul»','carta.dish.langostinosMed':'Langostinos del Mediterráneo','carta.dish.cigalaPlaya':'Cigala de playa «cocida o plancha»','carta.dish.carabinerosCadiz':'Carabineros del Golfo de Cádiz','carta.dish.gambaRayada':'Gamba rayada «cocida o plancha»','carta.dish.bueyMar':'Buey de mar «cocido»','carta.dish.txaca':'Txaca (cangrejo real)','carta.dish.caneillas':'Caneillas de mar','carta.dish.quisquilla':'Quisquilla de playa «cocida»','carta.dish.almejasCarril':'Almejas de Carril EXTRA','carta.dish.langosta':'Langosta a su gusto','carta.dish.percebes':'Percebes gallegos',
    'carta.dish.lubinaBrasa':'Lubina a la brasa','carta.dish.merluzaPincho':'Merluza de pincho','carta.dish.lenguado':'Lenguado','carta.dish.rodaballo':'Rodaballo entero a la brasa','carta.dish.galloSP':'Gallo San Pedro','carta.dish.rape':'Rape a la brasa','carta.dish.lubinaEstilo':'Lubina «al estilo»','carta.dish.besugo':'Besugo de la costa','carta.dish.bacalaoPedroneras':'Lomo de bacalao con ajitos de las Pedroñeras','carta.dish.angula':'Angula',
    'carta.dish.entrecot':'Entrecotte de buey «Frisona»','carta.dish.entrecotPimienta':'Entrecotte de buey «Frisona» a la pimienta o queso','carta.dish.chuletaLurra':'Chuleta de vaca «Lurra»','carta.dish.solomilloPlancha':'Solomillo de vaca a la plancha','carta.dish.solomilloQueso':'Solomillo de vaca con queso o pimienta y patatas fritas',
    'carta.dish.paellaVerduras':'Paella de verduras','carta.dish.senyoret':'Arroz senyoret (marisco pelado)','carta.dish.fideua':'Fideuá de marisco','carta.dish.arrozKokotchas':'Arroz meloso o seco de kokotchas de bacalao con ajitos tiernos','carta.dish.paellaValenciana':'Paella valenciana','carta.dish.arrozNegro':'Arroz negro','carta.dish.arrozPatoFoie':'Arroz meloso de pato y foie fresco',
    'carta.dish.tallarinesMar':'Tallarines con frutos del mar','carta.dish.tallarinesPollo':'Tallarines con pollo corral','carta.dish.daditos':'Daditos de merluza rebozada','carta.dish.hamburguesa':'Hamburguesa con huevo corral y patatas fritas',
    'carta.dish.flan':'Flan casero','carta.dish.fruta':'Fruta del tiempo preparada','carta.dish.fresas':'Fresas con nata o zumo','carta.dish.trufa':'Trufa casera','carta.dish.zumoNaranja':'Zumo de naranja natural',
    'carta.dish.sorbMango':'Mango','carta.dish.sorbMaracuya':'Maracuyá','carta.dish.sorbLimon':'Limón de la huerta','carta.dish.sorbMandarina':'Mandarina del terreno','carta.dish.sorbCava':'Sorbete al cava','carta.dish.sorbOrujo':'Sorbete al orujo o vodka',
    'carta.dish.heladoChocolate':'Chocolate al 70%','carta.dish.heladoTurron':'Turrón de Alicante','carta.dish.heladoVainilla':'Vainilla de Madagascar','carta.dish.heladoMerengada':'Leche merengada','carta.dish.heladoCafe':'Café Kilimanjaro',
    'carta.dish.tartaTiramisu':'Tarta tiramisú','carta.dish.tartaOpera':'Tarta opera (chocolate y café)','carta.dish.tartaLotus':'Tarta Lotus','carta.dish.tartaQueso':'Tarta de queso','carta.dish.torrijaHorchata':'Torrija de horchata con bola de helado de leche merengada',
    'cartaTeaser.eyebrow':'La carta','cartaTeaser.title':'Algunos de nuestros platos','cartaTeaser.intro':'Una pequeña selección. La carta completa cambia con la temporada y el producto del día.',
    'reservas.eyebrow':'Reservar','reservas.title':'Tu mesa, en un par de clics',
    'reservas.intro':'Gestionamos las reservas a través de CoverManager. Confirmación inmediata por email. Si lo prefieres, también nos puedes llamar o escribir por WhatsApp.',
    'reservas.fallbackTitle':'¿No ves el formulario?','reservas.fallbackText':'Algunos navegadores bloquean el módulo embebido. Puedes reservar directamente.','reservas.fallbackBtn':'Abrir CoverManager',
    'reservas.phone':'Teléfono','reservas.whatsapp':'WhatsApp','reservas.email':'Email',
    'reservasTeaser.intro':'Reserva online en CoverManager o por WhatsApp. Confirmación inmediata.',
    'reservas.go':'Reservar online',
    'policy.minTitle':'Antelación mínima','policy.minText':'Reservas hasta con 4 horas de antelación, sujeto a disponibilidad.',
    'policy.maxTitle':'Mesa máxima online','policy.maxText':'Hasta 10 personas online. Para grupos mayores, llámanos para reservar sala privada.',
    'policy.cancelTitle':'Cancelación','policy.cancelText':'Cancela o modifica tu reserva sin coste con 4 horas de antelación.',
    'reviews.eyebrow':'Lo que dicen','reviews.title':'Más de dos mil opiniones reales',
    'reviews.intro':'Reseñas verificadas en TripAdvisor y Google Maps de quienes ya han pasado por Civera.',
    'reviews.label':'Sobre 2.244 reseñas en TripAdvisor','reviews.more':'Ver todas en TripAdvisor',
    'review.eugenio':'"Como siempre, Civera lleva con merecidos honores la bandera de buque insignia de la restauración en la ciudad de Valencia. Excelente producto, tratado con gran respeto en la cocina, y un impecable servicio en sala."',
    'review.jaime':'"Cuando se cuida el producto, la cocina y la atención al cliente, el éxito hace que sea un placer visitarlo. Pasan los años y sigue siendo una referencia en Valencia."',
    'review.angela':'"La mejor paella de Valencia. La paella de marisco estaba increíble y el tartar de atún y la selección de vinos fueron excelentes gracias al personal muy amable. Un restaurante español típico — totalmente recomendable."',
    'review.date.eugenio':'enero 2026 · TripAdvisor','review.date.jaime':'octubre 2024 · TripAdvisor','review.date.angela':'junio 2025 · TripAdvisor',
    'contacto.eyebrow':'Cómo llegar','contacto.title':'Calle Mosén Femades, 10','contacto.intro':'En pleno centro de Valencia, a dos minutos de la Plaza del Ayuntamiento.',
    'contacto.address':'Dirección','contacto.contactTitle':'Contacto','contacto.hoursTitle':'Horario','contacto.formTitle':'¿Alguna consulta?','contacto.howto':'Cómo llegar',
    'contactoTeaser.intro':'En pleno centro de Valencia, a dos minutos de la Plaza del Ayuntamiento. Acceso peatonal y aparcamientos cercanos.',
    'day.mon':'Lunes','day.tue':'Martes','day.wed':'Miércoles','day.thu':'Jueves','day.fri':'Viernes','day.sat':'Sábado','day.sun':'Domingo',
    'form.name':'Nombre','form.email':'Email','form.message':'Mensaje','form.send':'Enviar consulta',
    'form.sent':'¡Gracias! Hemos recibido tu mensaje, te responderemos en breve.','form.error':'Por favor, revisa los campos e inténtalo de nuevo.',
    'map.title':'Marisquería Civera','map.click':'Click para cargar el mapa',
    'howto.title':'Cómo llegar a Marisquería Civera','howto.intro':'Estamos en la calle Mosén Femades, 10 — un pequeño callejón peatonal del barrio del Ensanche, a dos minutos andando de la Plaza del Ayuntamiento.',
    'howto.car':'En coche','howto.carText':'A 5 min de la salida 350 de la V-30. Aparcamientos cercanos: Pl. del Ayuntamiento, Pl. de la Reina, Mercado Central. Calle peatonal — acceso solo para residentes.',
    'howto.metro':'En metro','howto.metroText':'Línea 3, 5, 7 y 9 — estación Xàtiva (5 min andando). Línea 1, 2 y 7 — estación Colón (4 min andando).',
    'howto.bus':'En autobús EMT','howto.busText':'Líneas 4, 6, 8, 9, 10, 11, 16, 28, 32, 70, 71, 81 con parada en la Plaza del Ayuntamiento.',
    'howto.walk':'A pie','howto.walkText':'Desde la Plaza del Ayuntamiento, sigue por la calle Periodista Azzati y gira a la derecha en Mosén Femades. 2 minutos andando.',
    'parking.title':'Aparcamientos cercanos','parking.intro':'Los más cercanos a Mosén Femades:',
    'parking.1':'Parking Plaza del Ayuntamiento — 3 min andando','parking.2':'Parking Plaza de la Reina — 5 min andando','parking.3':'Parking Mercado Central — 6 min andando',
    'reserve.title':'Reserva tu mesa','reserve.intro':'Reserva online en cuestión de segundos. Si lo prefieres, también puedes llamarnos o escribirnos por WhatsApp.',
    'reserveExtra.eyebrow':'Eventos privados','reserveExtra.title':'Comidas de empresa, celebraciones y grupos','reserveExtra.text':'Disponemos de salas privadas para comidas de empresa, comuniones, cumpleaños y eventos especiales. Para grupos de más de 10 personas, llámanos directamente y te preparamos un menú personalizado.','reserveExtra.cta':'Llamar al restaurante',
    'cartaPage.intro':'Marisco fresco recibido cada mañana, arroces tradicionales valencianos, pescados de lonja y una bodega cuidada por nuestro sumiller. La carta cambia con la temporada y con lo que llega del mercado del día.',
    'cartaWines.title':'Carta de vinos','cartaWines.text':'Más de doscientas referencias seleccionadas por nuestro sumiller. Vinos D.O. valencianos, Rioja, Ribera del Duero, Galicia, champagne y cava. Carta completa disponible en sala.',
    'cartaAllergens.title':'Alérgenos y dietas','cartaAllergens.text':'Toda nuestra carta dispone de información de alérgenos según el Reglamento UE 1169/2011. Tenemos opciones vegetarianas y veganas. Consulte con nuestro equipo de sala antes de hacer su pedido.',
    'footer.about':'Marisquería tradicional valenciana desde 1967. Marisco y pescado fresco recibido cada día.',
    'footer.menuTitle':'Carta','footer.navTitle':'Navegación','footer.legalTitle':'Legal',
    'legal.aviso':'Aviso legal','legal.privacy':'Política de privacidad','legal.cookies':'Política de cookies',
    'cookies.title':'Usamos cookies','cookies.text':'Usamos cookies técnicas necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies analíticas para mejorar la web. Puedes consultar más en nuestra <a data-modal="cookies">política de cookies</a>.',
    'cookies.accept':'Aceptar','cookies.reject':'Rechazar'
  },
  en: {
    'nav.tagline':'Since 1967',
    'nav.local':'The place','nav.carta':'Menu','nav.reservas':'Book','nav.reviews':'Reviews','nav.contact':'Find us','nav.cta':'Book a table',
    'crumb.home':'Home','crumb.carta':'Menu','crumb.location':'Find us','crumb.reserve':'Book a table',
    'hero.stamp':'VALENCIA · SINCE 1967','hero.script':'The best',
    'hero.sub':'Fresh seafood and fish received daily from the Cantabrian Sea, Galicia and the Mediterranean. Traditional Valencian cuisine in the heart of Valencia — for over five decades, doing the same thing: respecting the product.',
    'hero.ctaPrimary':'Book a table','hero.ctaSecondary':'View menu','hero.scroll':'Scroll',
    'local.eyebrow':'The place','local.title':'A seafood restaurant with history in central Valencia',
    'local.lead':'We opened our doors in 1967 with a simple idea: bring the best seafood and fish from the Cantabrian Sea, Galicia and Valencia\'s fish market every day, and serve it as it deserves.',
    'local.p1':'Almost six decades later we continue with the same philosophy. The sea decides and the kitchen listens. We receive fresh product daily, treat it with the respect it deserves and serve it with the same naturalness as always.',
    'local.p2':'Seafood platters, wood-fired rice dishes, baked and salt-crusted fish, selected meats and a wine cellar curated by our sommelier with over two hundred references. All in a classic Valencian dining room, in the heart of the Ensanche neighborhood.',
    'stats.year':'Year founded','stats.reviews':'Real reviews','stats.rating':'TripAdvisor rating','stats.fresh':'Days a year with fresh seafood',
    'carta.eyebrow':'The menu','carta.title':'Fresh product, cooking without artifice',
    'carta.intro':'The menu changes with the season and with what arrives at the fish market each morning. These are some of the most ordered dishes.',
    'carta.hero.h1':'The <em>Menu</em>',
    'carta.tab.entrantes':'Starters','carta.tab.ensaladas':'Salads','carta.tab.mariscos':'Seafood','carta.tab.pescados':'Fish','carta.tab.carnes':'Meats','carta.tab.arroces':'Rice','carta.tab.ninos':'Kids','carta.tab.postres':'Desserts',
    'carta.note':'Seafood at market price. The menu may vary depending on seasonal product. Please ask our staff about allergens. Full menu with wines available at the restaurant.',
    'carta.viewPdf':'View full menu (PDF)','carta.reserve':'Book a table','carta.viewAll':'View full menu',
    'carta.sub.entradas':'Starters','carta.sub.ibericos':'Iberian cured meats','carta.sub.elaborados':'Prepared dishes','carta.sub.compartir':'Sharing recommendations','carta.sub.mariscos':'Shellfish & seafood','carta.sub.postres':'Desserts','carta.sub.sorbetes':'Sorbets','carta.sub.helados':'Ice cream','carta.sub.reposteria':'House pastries',
    'carta.subtag.peso':'GF · by weight','carta.subtag.sg':'GF','carta.subtag.alergenos':'3 · 5 · 9 · 13',
    'carta.tag.sg':'· GF','carta.tag.temporada':'· seasonal','carta.tag.encargo':'· by order','carta.tag.pieza':'Whole piece','carta.tag.aprox500':'1/2 kg (~500 g)',
    'carta.note.aove':'We only use AOVE (Extra Virgin Olive Oil).','carta.note.peso':'Shellfish is sold by weight at market price. We recommend 200–250 g per guest. Some products are seasonal.','carta.note.maduradas':'Aged beef.','carta.note.arroces':'<strong>All our rice dishes are by order.</strong> Minimum 2 people per paella; for 2 paella types, minimum 6 guests. Creamy paella rice (GF) also available. Minimum cooking time: 1 hour.','carta.note.tartas':'Ask about the cakes of the day — check other flavors with our staff.',
    'carta.feature.title':'Grilled seafood platter','carta.feature.items':'Norway lobster · Lobster · Vinaroz prawn · White prawn · Razor clams · Carabinero prawns · Galician scallops','carta.feature.pax':'~2 kg','carta.feature.note':'Civera reserves the right to modify the platter if market conditions require it.',
    'carta.legend.title':'Allergens and intolerances','carta.legend.intro':'If you have any allergy or food intolerance, please inform our staff. The allergen code is shown next to each dish. <strong>GF</strong> indicates gluten-free dishes or dishes available in a gluten-free version — ask about our bread and desserts for celiacs.',
    'carta.legend.1':'Cereals with gluten','carta.legend.2':'Crustaceans','carta.legend.3':'Tree nuts','carta.legend.4':'Celery','carta.legend.5':'Egg','carta.legend.6':'Fish','carta.legend.7':'Mustard','carta.legend.8':'Sesame','carta.legend.9':'Peanuts','carta.legend.10':'Soy','carta.legend.11':'Sulphites','carta.legend.12':'Lupins','carta.legend.13':'Dairy','carta.legend.14':'Molluscs',
    'carta.allergens.label':'Allergens:','carta.allergens.unit':'Per piece',
    'carta.dish.pan':'Natural sourdough bread','carta.dish.sepia':'Cuttlefish, grilled or with mayonnaise','carta.dish.calamarPlancha':'Squid, grilled or chargrilled','carta.dish.pulpoFeira':'Galician-style octopus','carta.dish.anchoasOro':'Homemade «Serie Oro» anchovies','carta.dish.calamarRomana':'Battered calamari rings','carta.dish.pataPulpo':'Octopus leg','carta.dish.padron':'Padrón peppers','carta.dish.colaCarabinero':'Carabinero tail, chargrilled or in garlic oil','carta.dish.cocochas':'Hake cocochas Bilbao-style',
    'carta.dish.queso':'Cured cheese','carta.dish.mojama':'Almadraba tuna mojama','carta.dish.lomoBellota':'Acorn-fed Iberian pork loin','carta.dish.jamon':'Iberian ham',
    'carta.dish.caldoFideos':'Seafood broth with noodles','carta.dish.zamburinas':'Galician scallops, feira or Bilbao style','carta.dish.zarzuela':'Fish & seafood zarzuela','carta.dish.almejasMarinera':'Clams in mariner sauce','carta.dish.caldereta':'«Blue» lobster stew','carta.dish.vieiraCivera':'Scallop «Civera style»','carta.dish.tortitasCamarones':'Shrimp fritters with farm egg and Iberian shavings',
    'carta.dish.tomateVentresca':'Tomato heart with tuna belly','carta.dish.tartarAtun':'Tuna tartare','carta.dish.tartarLubina':'Sea bass tartare','carta.dish.tartarVieira':'Scallop tartare','carta.dish.salpicon':'Seafood salpicón','carta.dish.aguacateMarisco':'Avocado salad with seafood','carta.dish.ensaladillaCivera':'«Civera» potato salad with vegetables',
    'carta.dish.ostrasArcade':'Flor de Arcade oysters','carta.dish.ostrasGuillardeau':'Guillardeau oysters','carta.dish.navajas':'Natural razor clams','carta.dish.necoras':'Galician velvet crabs','carta.dish.bogavanteGallego':'Galician «Blue» lobster','carta.dish.langostinosMed':'Mediterranean prawns','carta.dish.cigalaPlaya':'Beach Norway lobster, boiled or grilled','carta.dish.carabinerosCadiz':'Carabinero prawns from the Gulf of Cádiz','carta.dish.gambaRayada':'Striped prawn, boiled or grilled','carta.dish.bueyMar':'Boiled brown crab','carta.dish.txaca':'Txaca (king crab)','carta.dish.caneillas':'Sea whelks','carta.dish.quisquilla':'Beach shrimp, boiled','carta.dish.almejasCarril':'Carril clams EXTRA','carta.dish.langosta':'Spiny lobster to your taste','carta.dish.percebes':'Galician goose barnacles',
    'carta.dish.lubinaBrasa':'Chargrilled sea bass','carta.dish.merluzaPincho':'Line-caught hake','carta.dish.lenguado':'Sole','carta.dish.rodaballo':'Whole chargrilled turbot','carta.dish.galloSP':'John Dory','carta.dish.rape':'Chargrilled monkfish','carta.dish.lubinaEstilo':'Sea bass «house style»','carta.dish.besugo':'Coastal red bream','carta.dish.bacalaoPedroneras':'Cod loin with Pedroñeras tender garlic','carta.dish.angula':'Baby eel',
    'carta.dish.entrecot':'«Frisona» ox entrecôte','carta.dish.entrecotPimienta':'«Frisona» ox entrecôte with pepper or cheese','carta.dish.chuletaLurra':'«Lurra» beef rib-eye','carta.dish.solomilloPlancha':'Grilled beef tenderloin','carta.dish.solomilloQueso':'Beef tenderloin with cheese or pepper, with fries',
    'carta.dish.paellaVerduras':'Vegetable paella','carta.dish.senyoret':'Senyoret rice (peeled seafood)','carta.dish.fideua':'Seafood fideuá','carta.dish.arrozKokotchas':'Creamy or dry rice with cod cocochas and tender garlic','carta.dish.paellaValenciana':'Valencian paella','carta.dish.arrozNegro':'Black rice','carta.dish.arrozPatoFoie':'Creamy duck rice with fresh foie',
    'carta.dish.tallarinesMar':'Noodles with seafood','carta.dish.tallarinesPollo':'Noodles with farm chicken','carta.dish.daditos':'Battered hake bites','carta.dish.hamburguesa':'Burger with farm egg and fries',
    'carta.dish.flan':'Homemade flan','carta.dish.fruta':'Prepared seasonal fruit','carta.dish.fresas':'Strawberries with cream or juice','carta.dish.trufa':'Homemade truffle','carta.dish.zumoNaranja':'Fresh orange juice',
    'carta.dish.sorbMango':'Mango','carta.dish.sorbMaracuya':'Passion fruit','carta.dish.sorbLimon':'Garden lemon','carta.dish.sorbMandarina':'Local mandarin','carta.dish.sorbCava':'Cava sorbet','carta.dish.sorbOrujo':'Orujo or vodka sorbet',
    'carta.dish.heladoChocolate':'70% chocolate','carta.dish.heladoTurron':'Alicante turrón','carta.dish.heladoVainilla':'Madagascar vanilla','carta.dish.heladoMerengada':'Cinnamon-spiced milk ice cream','carta.dish.heladoCafe':'Kilimanjaro coffee',
    'carta.dish.tartaTiramisu':'Tiramisu cake','carta.dish.tartaOpera':'Opera cake (chocolate and coffee)','carta.dish.tartaLotus':'Lotus cake','carta.dish.tartaQueso':'Cheesecake','carta.dish.torrijaHorchata':'Horchata French toast with cinnamon-spiced milk ice cream',
    'cartaTeaser.eyebrow':'The menu','cartaTeaser.title':'Some of our dishes','cartaTeaser.intro':'A small selection. The full menu changes with the season and the product of the day.',
    'reservas.eyebrow':'Book','reservas.title':'Your table, in a couple of clicks',
    'reservas.intro':'We manage reservations through CoverManager. Instant email confirmation. If you prefer, you can also call or message us on WhatsApp.',
    'reservas.fallbackTitle':'Can\'t see the form?','reservas.fallbackText':'Some browsers block the embedded module. You can book directly.','reservas.fallbackBtn':'Open CoverManager',
    'reservas.phone':'Phone','reservas.whatsapp':'WhatsApp','reservas.email':'Email',
    'reservasTeaser.intro':'Book online via CoverManager or WhatsApp. Instant confirmation.',
    'reservas.go':'Book online',
    'policy.minTitle':'Minimum notice','policy.minText':'Reservations up to 4 hours in advance, subject to availability.',
    'policy.maxTitle':'Max party online','policy.maxText':'Up to 10 people online. For larger groups, call us to book a private room.',
    'policy.cancelTitle':'Cancellation','policy.cancelText':'Cancel or modify your booking free of charge with 4 hours\' notice.',
    'reviews.eyebrow':'What they say','reviews.title':'More than two thousand real reviews',
    'reviews.intro':'Verified reviews on TripAdvisor and Google Maps from people who have already dined at Civera.',
    'reviews.label':'Out of 2,244 reviews on TripAdvisor','reviews.more':'See all on TripAdvisor',
    'review.eugenio':'"As always, Civera proudly carries the flagship banner of Valencia\'s restaurant scene. Excellent product, treated with great respect in the kitchen, and impeccable service in the dining room."',
    'review.jaime':'"When you take care of the product, the kitchen and customer service, success makes it a pleasure to visit. Years go by and it remains a reference in Valencia."',
    'review.angela':'"The best paella in Valencia. The seafood paella was incredible and the tuna tartare and wine selection were excellent thanks to the very friendly staff. A truly typical Spanish restaurant — highly recommended."',
    'review.date.eugenio':'January 2026 · TripAdvisor','review.date.jaime':'October 2024 · TripAdvisor','review.date.angela':'June 2025 · TripAdvisor',
    'contacto.eyebrow':'How to find us','contacto.title':'Calle Mosén Femades, 10','contacto.intro':'In the heart of Valencia, two minutes from the Town Hall Square.',
    'contacto.address':'Address','contacto.contactTitle':'Contact','contacto.hoursTitle':'Opening hours','contacto.formTitle':'Any questions?','contacto.howto':'How to find us',
    'contactoTeaser.intro':'In the heart of Valencia, two minutes from the Town Hall Square. Pedestrian access and nearby parking.',
    'day.mon':'Monday','day.tue':'Tuesday','day.wed':'Wednesday','day.thu':'Thursday','day.fri':'Friday','day.sat':'Saturday','day.sun':'Sunday',
    'form.name':'Name','form.email':'Email','form.message':'Message','form.send':'Send message',
    'form.sent':'Thank you! We have received your message and will get back to you shortly.','form.error':'Please review the fields and try again.',
    'map.title':'Marisquería Civera','map.click':'Click to load map',
    'howto.title':'How to find Marisquería Civera','howto.intro':'We are at Calle Mosén Femades, 10 — a small pedestrian street in the Ensanche neighborhood, two minutes\' walk from the Town Hall Square.',
    'howto.car':'By car','howto.carText':'5 min from V-30 highway exit 350. Nearby parking: Pl. del Ayuntamiento, Pl. de la Reina, Mercado Central. Pedestrian street — residents-only access.',
    'howto.metro':'By metro','howto.metroText':'Lines 3, 5, 7 and 9 — Xàtiva station (5 min walk). Lines 1, 2 and 7 — Colón station (4 min walk).',
    'howto.bus':'EMT bus','howto.busText':'Lines 4, 6, 8, 9, 10, 11, 16, 28, 32, 70, 71, 81 stop at Plaza del Ayuntamiento.',
    'howto.walk':'On foot','howto.walkText':'From Plaza del Ayuntamiento, follow Calle Periodista Azzati and turn right at Mosén Femades. 2 min walk.',
    'parking.title':'Nearby parking','parking.intro':'Closest to Mosén Femades:',
    'parking.1':'Plaza del Ayuntamiento parking — 3 min walk','parking.2':'Plaza de la Reina parking — 5 min walk','parking.3':'Mercado Central parking — 6 min walk',
    'reserve.title':'Book your table','reserve.intro':'Book online in seconds. If you prefer, you can also call us or message us on WhatsApp.',
    'reserveExtra.eyebrow':'Private events','reserveExtra.title':'Corporate meals, celebrations and groups','reserveExtra.text':'We have private rooms for corporate meals, communions, birthdays and special events. For groups of more than 10 people, call us directly and we\'ll prepare a custom menu.','reserveExtra.cta':'Call the restaurant',
    'cartaPage.intro':'Fresh seafood received every morning, traditional Valencian rice dishes, fish from the market and a wine cellar curated by our sommelier. The menu changes with the season and with what arrives from the market each day.',
    'cartaWines.title':'Wine list','cartaWines.text':'Over two hundred references selected by our sommelier. D.O. Valencian wines, Rioja, Ribera del Duero, Galicia, champagne and cava. Full list available at the restaurant.',
    'cartaAllergens.title':'Allergens & diets','cartaAllergens.text':'All our menu has allergen information according to EU Regulation 1169/2011. We have vegetarian and vegan options. Please ask our staff before ordering.',
    'footer.about':'Traditional Valencian seafood restaurant since 1967. Fresh seafood and fish received daily.',
    'footer.menuTitle':'Menu','footer.navTitle':'Navigation','footer.legalTitle':'Legal',
    'legal.aviso':'Legal notice','legal.privacy':'Privacy policy','legal.cookies':'Cookie policy',
    'cookies.title':'We use cookies','cookies.text':'We use technical cookies necessary for the operation of the site and, with your consent, analytical cookies to improve the website. You can find more in our <a data-modal="cookies">cookie policy</a>.',
    'cookies.accept':'Accept','cookies.reject':'Reject'
  },
  it: {
    'nav.tagline':'Dal 1967',
    'nav.local':'Il locale','nav.carta':'Menù','nav.reservas':'Prenota','nav.reviews':'Recensioni','nav.contact':'Dove siamo','nav.cta':'Prenota',
    'crumb.home':'Home','crumb.carta':'Menù','crumb.location':'Dove siamo','crumb.reserve':'Prenota',
    'hero.stamp':'VALENCIA · DAL 1967','hero.script':'La migliore',
    'hero.sub':'Pesce e frutti di mare freschi ricevuti ogni giorno dal Cantabrico, dalla Galizia e dal Mediterraneo. Cucina valenciana tradizionale nel cuore di Valencia, con oltre cinque decenni a fare la stessa cosa: rispettare il prodotto.',
    'hero.ctaPrimary':'Prenota un tavolo','hero.ctaSecondary':'Vedi il menù','hero.scroll':'Scroll',
    'local.eyebrow':'Il locale','local.title':'Una pescheria-ristorante con storia nel centro di Valencia',
    'local.lead':'Abbiamo aperto le porte nel 1967 con un\'idea semplice: portare ogni giorno il miglior pesce e frutti di mare dal Cantabrico, dalla Galizia e dal mercato del pesce di Valencia, e servirli come meritano.',
    'local.p1':'Quasi sei decenni dopo continuiamo con la stessa filosofia. Il mare comanda e la cucina ascolta. Riceviamo prodotto fresco quotidianamente, lo trattiamo con il rispetto che merita e lo serviamo con la naturalezza di sempre.',
    'local.p2':'Piatti di frutti di mare, risotti alla brace, pesci al forno e al sale, carni selezionate e una cantina curata dal nostro sommelier con oltre duecento etichette. Tutto in una sala da pranzo classica valenciana, nel cuore del quartiere Ensanche.',
    'stats.year':'Anno di fondazione','stats.reviews':'Recensioni reali','stats.rating':'Valutazione TripAdvisor','stats.fresh':'Giorni all\'anno con frutti di mare freschi',
    'carta.eyebrow':'Il menù','carta.title':'Prodotto fresco, cucina senza artifici',
    'carta.intro':'Il menù cambia con la stagione e con quello che arriva ogni mattina dal mercato del pesce. Ecco alcuni dei piatti più richiesti.',
    'carta.hero.h1':'Il <em>Menù</em>',
    'carta.tab.entrantes':'Antipasti','carta.tab.ensaladas':'Insalate','carta.tab.mariscos':'Frutti di mare','carta.tab.pescados':'Pesci','carta.tab.carnes':'Carni','carta.tab.arroces':'Risotti','carta.tab.ninos':'Bambini','carta.tab.postres':'Dolci',
    'carta.note':'Frutti di mare a prezzo di mercato. Il menù può variare secondo il prodotto di stagione. Chiedi al nostro personale per gli allergeni. Menù completo con vini disponibile in sala.',
    'carta.viewPdf':'Vedi menù completo (PDF)','carta.reserve':'Prenota un tavolo','carta.viewAll':'Vedi menù completo',
    'carta.sub.entradas':'Antipasti','carta.sub.ibericos':'Salumi iberici','carta.sub.elaborados':'Piatti elaborati','carta.sub.compartir':'Da condividere','carta.sub.mariscos':'Frutti di mare','carta.sub.postres':'Dolci','carta.sub.sorbetes':'Sorbetti','carta.sub.helados':'Gelati','carta.sub.reposteria':'Pasticceria della casa',
    'carta.subtag.peso':'SG · al peso','carta.subtag.sg':'SG','carta.subtag.alergenos':'3 · 5 · 9 · 13',
    'carta.tag.sg':'· SG','carta.tag.temporada':'· stagionale','carta.tag.encargo':'· su ordinazione','carta.tag.pieza':'Pezzo intero','carta.tag.aprox500':'1/2 kg (~500 g)',
    'carta.note.aove':'Usiamo solo AOVE (Olio Extra Vergine di Oliva).','carta.note.peso':'I frutti di mare sono al peso, secondo mercato. Si consiglia 200–250 g per persona. Alcuni prodotti sono di stagione.','carta.note.maduradas':'Carni frollate.','carta.note.arroces':'<strong>Tutti i nostri risotti sono su ordinazione.</strong> Minimo 2 persone per paella; per 2 tipi di paella, minimo 6 pax. Disponibili anche risotti cremosi (SG). Tempo di preparazione minimo 1 ora.','carta.note.tartas':'Chiedi le torte del giorno — controlla altri gusti col nostro personale.',
    'carta.feature.title':'Piatto di frutti di mare alla piastra','carta.feature.items':'Scampo · Astice · Gambero di Vinaroz · Gambero bianco · Cannolicchi · Gamberi rossi · Capesante','carta.feature.pax':'~2 kg','carta.feature.note':'Civera si riserva il diritto di modificare i piatti se richiesto dal mercato.',
    'carta.legend.title':'Allergeni e intolleranze','carta.legend.intro':'In caso di allergie o intolleranze alimentari, informa il nostro personale. Vicino a ogni piatto trovi l\'identificativo dell\'allergene contenuto. <strong>SG</strong> indica piatti senza glutine o disponibili in versione senza glutine — chiedi del nostro pane e dolci per celiaci.',
    'carta.legend.1':'Cereali con glutine','carta.legend.2':'Crostacei','carta.legend.3':'Frutta a guscio','carta.legend.4':'Sedano','carta.legend.5':'Uovo','carta.legend.6':'Pesce','carta.legend.7':'Senape','carta.legend.8':'Sesamo','carta.legend.9':'Arachidi','carta.legend.10':'Soia','carta.legend.11':'Solfiti','carta.legend.12':'Lupini','carta.legend.13':'Latticini','carta.legend.14':'Molluschi',
    'carta.allergens.label':'Allergeni:','carta.allergens.unit':'Al pezzo',
    'carta.dish.pan':'Pane naturale a lievitazione madre','carta.dish.sepia':'Seppia alla piastra o con maionese','carta.dish.calamarPlancha':'Calamaro alla piastra o brace','carta.dish.pulpoFeira':'Polpo alla galiziana','carta.dish.anchoasOro':'Acciughe «della casa» Serie Oro','carta.dish.calamarRomana':'Calamari alla romana','carta.dish.pataPulpo':'Tentacolo di polpo','carta.dish.padron':'Peperoni di Padrón','carta.dish.colaCarabinero':'Coda di gambero rosso «brace o aglio»','carta.dish.cocochas':'Cocochas alla bilbaina',
    'carta.dish.queso':'Formaggio stagionato','carta.dish.mojama':'Mojama di tonno almadraba','carta.dish.lomoBellota':'Lonza iberica di ghianda','carta.dish.jamon':'Prosciutto iberico',
    'carta.dish.caldoFideos':'Brodo marinaro con tagliolini','carta.dish.zamburinas':'Capesante galiziane, feira o bilbaina','carta.dish.zarzuela':'Zarzuela di pesce e frutti di mare','carta.dish.almejasMarinera':'Vongole alla marinara','carta.dish.caldereta':'Zuppa di astice «Blu»','carta.dish.vieiraCivera':'Capasanta «Stile Civera»','carta.dish.tortitasCamarones':'Frittelle di gamberetti con uovo ruspante e scaglie iberiche',
    'carta.dish.tomateVentresca':'Cuore di pomodoro con ventresca','carta.dish.tartarAtun':'Tartare di tonno','carta.dish.tartarLubina':'Tartare di branzino','carta.dish.tartarVieira':'Tartare di capasanta','carta.dish.salpicon':'Salpicón di frutti di mare','carta.dish.aguacateMarisco':'Insalata di avocado con frutti di mare','carta.dish.ensaladillaCivera':'Insalata russa «Civera» con verdure',
    'carta.dish.ostrasArcade':'Ostriche Flor de Arcade','carta.dish.ostrasGuillardeau':'Ostriche Guillardeau','carta.dish.navajas':'Cannolicchi naturali','carta.dish.necoras':'Granchi velvet galiziani','carta.dish.bogavanteGallego':'Astice galiziano «Blu»','carta.dish.langostinosMed':'Gamberoni del Mediterraneo','carta.dish.cigalaPlaya':'Scampo «bollito o alla piastra»','carta.dish.carabinerosCadiz':'Gamberi rossi del Golfo di Cádiz','carta.dish.gambaRayada':'Gambero striato «bollito o alla piastra»','carta.dish.bueyMar':'Granciporro «bollito»','carta.dish.txaca':'Txaca (granchio reale)','carta.dish.caneillas':'Murici di mare','carta.dish.quisquilla':'Gamberetto di spiaggia «bollito»','carta.dish.almejasCarril':'Vongole di Carril EXTRA','carta.dish.langosta':'Aragosta a piacere','carta.dish.percebes':'Percebes galiziani',
    'carta.dish.lubinaBrasa':'Branzino alla brace','carta.dish.merluzaPincho':'Nasello dell\'amo','carta.dish.lenguado':'Sogliola','carta.dish.rodaballo':'Rombo intero alla brace','carta.dish.galloSP':'Pesce San Pietro','carta.dish.rape':'Rana pescatrice alla brace','carta.dish.lubinaEstilo':'Branzino «alla casa»','carta.dish.besugo':'Occhialone della costa','carta.dish.bacalaoPedroneras':'Filetto di baccalà con agli teneri delle Pedroñeras','carta.dish.angula':'Cieche',
    'carta.dish.entrecot':'Entrecôte di bue «Frisona»','carta.dish.entrecotPimienta':'Entrecôte di bue «Frisona» al pepe o formaggio','carta.dish.chuletaLurra':'Costata di vacca «Lurra»','carta.dish.solomilloPlancha':'Filetto di manzo alla piastra','carta.dish.solomilloQueso':'Filetto di manzo con formaggio o pepe e patatine fritte',
    'carta.dish.paellaVerduras':'Paella di verdure','carta.dish.senyoret':'Riso senyoret (frutti di mare sgusciati)','carta.dish.fideua':'Fideuá di frutti di mare','carta.dish.arrozKokotchas':'Riso cremoso o asciutto con cocochas di baccalà e aglio tenero','carta.dish.paellaValenciana':'Paella valenciana','carta.dish.arrozNegro':'Riso nero','carta.dish.arrozPatoFoie':'Riso cremoso di anatra e foie fresco',
    'carta.dish.tallarinesMar':'Tagliolini ai frutti di mare','carta.dish.tallarinesPollo':'Tagliolini con pollo ruspante','carta.dish.daditos':'Bocconcini di nasello impanato','carta.dish.hamburguesa':'Hamburger con uovo ruspante e patatine fritte',
    'carta.dish.flan':'Crème caramel della casa','carta.dish.fruta':'Frutta di stagione preparata','carta.dish.fresas':'Fragole con panna o succo','carta.dish.trufa':'Tartufo della casa','carta.dish.zumoNaranja':'Spremuta d\'arancia',
    'carta.dish.sorbMango':'Mango','carta.dish.sorbMaracuya':'Frutto della passione','carta.dish.sorbLimon':'Limone dell\'orto','carta.dish.sorbMandarina':'Mandarino locale','carta.dish.sorbCava':'Sorbetto al cava','carta.dish.sorbOrujo':'Sorbetto all\'orujo o vodka',
    'carta.dish.heladoChocolate':'Cioccolato al 70%','carta.dish.heladoTurron':'Torrone di Alicante','carta.dish.heladoVainilla':'Vaniglia del Madagascar','carta.dish.heladoMerengada':'Latte alla cannella ghiacciato','carta.dish.heladoCafe':'Caffè Kilimanjaro',
    'carta.dish.tartaTiramisu':'Torta tiramisù','carta.dish.tartaOpera':'Torta opera (cioccolato e caffè)','carta.dish.tartaLotus':'Torta Lotus','carta.dish.tartaQueso':'Torta al formaggio','carta.dish.torrijaHorchata':'Torrija di horchata con palla di gelato di latte alla cannella',
    'cartaTeaser.eyebrow':'Il menù','cartaTeaser.title':'Alcuni dei nostri piatti','cartaTeaser.intro':'Una piccola selezione. Il menù completo cambia con la stagione e il prodotto del giorno.',
    'reservas.eyebrow':'Prenota','reservas.title':'Il tuo tavolo, in un paio di click',
    'reservas.intro':'Gestiamo le prenotazioni tramite CoverManager. Conferma immediata via email. Se preferisci, puoi anche chiamarci o scriverci su WhatsApp.',
    'reservas.fallbackTitle':'Non vedi il modulo?','reservas.fallbackText':'Alcuni browser bloccano il modulo incorporato. Puoi prenotare direttamente.','reservas.fallbackBtn':'Apri CoverManager',
    'reservas.phone':'Telefono','reservas.whatsapp':'WhatsApp','reservas.email':'Email',
    'reservasTeaser.intro':'Prenota online tramite CoverManager o WhatsApp. Conferma immediata.',
    'reservas.go':'Prenota online',
    'policy.minTitle':'Preavviso minimo','policy.minText':'Prenotazioni fino a 4 ore di anticipo, secondo disponibilità.',
    'policy.maxTitle':'Tavolo massimo online','policy.maxText':'Fino a 10 persone online. Per gruppi più grandi, chiamaci per prenotare una sala privata.',
    'policy.cancelTitle':'Cancellazione','policy.cancelText':'Cancella o modifica la tua prenotazione gratuitamente con 4 ore di anticipo.',
    'reviews.eyebrow':'Cosa dicono','reviews.title':'Più di duemila recensioni reali',
    'reviews.intro':'Recensioni verificate su TripAdvisor e Google Maps di chi è già passato da Civera.',
    'reviews.label':'Su 2.244 recensioni su TripAdvisor','reviews.more':'Vedi tutte su TripAdvisor',
    'review.eugenio':'"Come sempre, Civera porta con onori meritati la bandiera dell\'ammiraglia della ristorazione nella città di Valencia. Prodotto eccellente, trattato con grande rispetto in cucina, e un servizio impeccabile in sala."',
    'review.jaime':'"Quando si cura il prodotto, la cucina e l\'attenzione al cliente, il successo rende un piacere visitarlo. Passano gli anni e rimane un riferimento a Valencia."',
    'review.angela':'"La migliore paella di Valencia. La paella di mare era incredibile e il tartare di tonno e la selezione di vini erano eccellenti grazie al personale molto cordiale. Un vero ristorante tipico spagnolo — altamente raccomandato."',
    'review.date.eugenio':'gennaio 2026 · TripAdvisor','review.date.jaime':'ottobre 2024 · TripAdvisor','review.date.angela':'giugno 2025 · TripAdvisor',
    'contacto.eyebrow':'Come arrivare','contacto.title':'Calle Mosén Femades, 10','contacto.intro':'Nel cuore di Valencia, a due minuti dalla Piazza del Municipio.',
    'contacto.address':'Indirizzo','contacto.contactTitle':'Contatti','contacto.hoursTitle':'Orari','contacto.formTitle':'Hai domande?','contacto.howto':'Come arrivare',
    'contactoTeaser.intro':'Nel cuore di Valencia, a due minuti dalla Piazza del Municipio. Accesso pedonale e parcheggi vicini.',
    'day.mon':'Lunedì','day.tue':'Martedì','day.wed':'Mercoledì','day.thu':'Giovedì','day.fri':'Venerdì','day.sat':'Sabato','day.sun':'Domenica',
    'form.name':'Nome','form.email':'Email','form.message':'Messaggio','form.send':'Invia messaggio',
    'form.sent':'Grazie! Abbiamo ricevuto il tuo messaggio, ti risponderemo a breve.','form.error':'Controlla i campi e riprova.',
    'map.title':'Marisquería Civera','map.click':'Click per caricare la mappa',
    'howto.title':'Come arrivare a Marisquería Civera','howto.intro':'Siamo in calle Mosén Femades, 10 — una piccola via pedonale del quartiere Ensanche, a due minuti a piedi dalla Piazza del Municipio.',
    'howto.car':'In auto','howto.carText':'A 5 min dall\'uscita 350 della V-30. Parcheggi vicini: Pl. del Ayuntamiento, Pl. de la Reina, Mercado Central. Strada pedonale — accesso solo per residenti.',
    'howto.metro':'In metropolitana','howto.metroText':'Linee 3, 5, 7 e 9 — fermata Xàtiva (5 min a piedi). Linee 1, 2 e 7 — fermata Colón (4 min a piedi).',
    'howto.bus':'In autobus EMT','howto.busText':'Linee 4, 6, 8, 9, 10, 11, 16, 28, 32, 70, 71, 81 con fermata in Plaza del Ayuntamiento.',
    'howto.walk':'A piedi','howto.walkText':'Dalla Plaza del Ayuntamiento, segui calle Periodista Azzati e gira a destra in Mosén Femades. 2 min a piedi.',
    'parking.title':'Parcheggi vicini','parking.intro':'I più vicini a Mosén Femades:',
    'parking.1':'Parcheggio Plaza del Ayuntamiento — 3 min a piedi','parking.2':'Parcheggio Plaza de la Reina — 5 min a piedi','parking.3':'Parcheggio Mercado Central — 6 min a piedi',
    'reserve.title':'Prenota il tuo tavolo','reserve.intro':'Prenota online in pochi secondi. Se preferisci, puoi anche chiamarci o scriverci su WhatsApp.',
    'reserveExtra.eyebrow':'Eventi privati','reserveExtra.title':'Pranzi aziendali, celebrazioni e gruppi','reserveExtra.text':'Disponiamo di sale private per pranzi aziendali, comunioni, compleanni ed eventi speciali. Per gruppi di più di 10 persone, chiamaci direttamente e ti prepariamo un menù personalizzato.','reserveExtra.cta':'Chiama il ristorante',
    'cartaPage.intro':'Frutti di mare freschi ricevuti ogni mattina, risotti tradizionali valenciani, pesci di mercato e una cantina curata dal nostro sommelier. Il menù cambia con la stagione e con quello che arriva dal mercato del giorno.',
    'cartaWines.title':'Carta dei vini','cartaWines.text':'Oltre duecento etichette selezionate dal nostro sommelier. Vini D.O. valenciani, Rioja, Ribera del Duero, Galizia, champagne e cava. Carta completa disponibile in sala.',
    'cartaAllergens.title':'Allergeni e diete','cartaAllergens.text':'Tutto il nostro menù dispone di informazioni sugli allergeni secondo il Regolamento UE 1169/2011. Abbiamo opzioni vegetariane e vegane. Chiedi al nostro personale prima di ordinare.',
    'footer.about':'Pescheria-ristorante tradizionale valenciana dal 1967. Pesce e frutti di mare freschi ricevuti ogni giorno.',
    'footer.menuTitle':'Menù','footer.navTitle':'Navigazione','footer.legalTitle':'Legale',
    'legal.aviso':'Note legali','legal.privacy':'Informativa sulla privacy','legal.cookies':'Politica sui cookie',
    'cookies.title':'Usiamo i cookie','cookies.text':'Usiamo cookie tecnici necessari per il funzionamento del sito e, con il tuo consenso, cookie analitici per migliorare il sito. Puoi consultare di più nella nostra <a data-modal="cookies">politica sui cookie</a>.',
    'cookies.accept':'Accetta','cookies.reject':'Rifiuta'
  }
};

const HTML_I18N_KEYS = new Set(['cookies.text','carta.legend.intro','carta.note.arroces','carta.hero.h1']);

function applyCartaAllergens(dict){
  const label = dict['carta.allergens.label'] || 'Alérgenos:';
  const unit = dict['carta.allergens.unit'] || 'Por unidad';
  document.querySelectorAll('.carta-allergens').forEach(el=>{
    const codes = el.getAttribute('data-allergens');
    const hasUnit = el.hasAttribute('data-unit');
    if(!codes && !hasUnit) return;
    const parts = [];
    if(hasUnit) parts.push(unit);
    if(codes) parts.push(label + ' ' + codes.split(',').map(c=>c.trim()).join(' · '));
    el.textContent = parts.join(' · ');
  });
}

function applyI18n(lang){
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){
      if(HTML_I18N_KEYS.has(key)){ el.innerHTML = dict[key]; }
      else el.textContent = dict[key];
    }
  });
  applyCartaAllergens(dict);
  const pdfHref = lang === 'es' ? 'assets/carta-civera.pdf' : 'assets/carta-civera-' + lang + '.pdf';
  document.querySelectorAll('[data-carta-pdf]').forEach(a=>{ a.href = pdfHref; });
  document.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  try{ localStorage.setItem('civera_lang', lang); }catch(e){}
}

document.querySelectorAll('.lang-toggle button').forEach(btn=>{
  btn.addEventListener('click', ()=> applyI18n(btn.dataset.lang));
});

(function initLang(){
  let lang = 'es';
  try{
    const saved = localStorage.getItem('civera_lang');
    if(saved && I18N[saved]) lang = saved;
    else{
      const nav = (navigator.language || 'es').slice(0,2);
      if(I18N[nav]) lang = nav;
    }
  }catch(e){}
  const url = new URLSearchParams(location.search).get('lang');
  if(url && I18N[url]) lang = url;
  applyI18n(lang);
})();

// NAV scroll + burger
const navEl = document.getElementById('mainNav');
if(navEl){
  const onScroll = ()=> navEl.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

const burgerBtn = document.getElementById('burger');
if(burgerBtn){
  burgerBtn.addEventListener('click', ()=>{
    document.getElementById('navLinks').classList.toggle('open');
  });
  document.querySelectorAll('#navLinks a').forEach(a=>{
    a.addEventListener('click', ()=> document.getElementById('navLinks').classList.remove('open'));
  });
}

// REVEAL
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
},{threshold:0.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el=> io.observe(el));

// COUNTER
const counterIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.getAttribute('data-count'), 10);
    if(isNaN(target)){ counterIO.unobserve(el); return; }
    const dur = 1600;
    const start = performance.now();
    function tick(now){
      const p = Math.min(1,(now-start)/dur);
      const eased = 1 - Math.pow(1-p,3);
      el.textContent = Math.floor(target*eased).toLocaleString('es-ES');
      if(p<1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString('es-ES');
    }
    requestAnimationFrame(tick);
    counterIO.unobserve(el);
  });
},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=> counterIO.observe(el));

// PARALLAX
const parallaxEls = document.querySelectorAll('[data-parallax]');
let pTicking = false;
window.addEventListener('scroll', ()=>{
  if(!pTicking){
    requestAnimationFrame(()=>{
      const y = window.scrollY;
      parallaxEls.forEach(el=>{
        const k = parseFloat(el.getAttribute('data-parallax'))||0.3;
        el.style.transform = 'translate3d(0,'+(y*k)+'px,0)';
      });
      pTicking = false;
    });
    pTicking = true;
  }
}, {passive:true});

// CARTA tabs (en cualquier página que las tenga)
document.querySelectorAll('.carta-tab').forEach(tab=>{
  tab.addEventListener('click', ()=>{
    const target = tab.dataset.tab;
    document.querySelectorAll('.carta-tab').forEach(t=> t.classList.toggle('active', t===tab));
    document.querySelectorAll('.carta-panel').forEach(p=> p.classList.toggle('active', p.dataset.panel === target));
  });
});

// Activar tab desde URL hash (?tab=mariscos)
(function tabFromHash(){
  const params = new URLSearchParams(location.search);
  const tab = params.get('tab') || (location.hash && location.hash.replace('#','').replace('cat-',''));
  if(!tab) return;
  const btn = document.querySelector('.carta-tab[data-tab="'+tab+'"]');
  if(btn) btn.click();
})();

// COOKIE BANNER
const banner = document.getElementById('cookieBanner');
const cookieKey = 'civera_cookie_pref';
function showBanner(){ if(banner) banner.classList.add('show'); }
function hideBanner(){ if(banner) banner.classList.remove('show'); }
if(banner){
  try{
    if(!localStorage.getItem(cookieKey)) setTimeout(showBanner, 1200);
  }catch(e){ setTimeout(showBanner, 1200); }
  document.getElementById('cookieAccept').addEventListener('click', ()=>{
    try{ localStorage.setItem(cookieKey,'accepted'); }catch(e){}
    hideBanner();
  });
  document.getElementById('cookieReject').addEventListener('click', ()=>{
    try{ localStorage.setItem(cookieKey,'rejected'); }catch(e){}
    hideBanner();
  });
}

// MODALES
const modals = {
  aviso: document.getElementById('modalAviso'),
  privacidad: document.getElementById('modalPrivacidad'),
  cookies: document.getElementById('modalCookies')
};
document.body.addEventListener('click',(e)=>{
  const opener = e.target.closest('[data-modal]');
  if(opener){
    e.preventDefault();
    const m = modals[opener.dataset.modal];
    if(m){ m.classList.add('show'); document.body.style.overflow='hidden'; }
    return;
  }
  if(e.target.closest('[data-close]') || e.target.classList.contains('modal-bg')){
    Object.values(modals).forEach(m=> m && m.classList.remove('show'));
    document.body.style.overflow='';
  }
});
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){
    Object.values(modals).forEach(m=> m && m.classList.remove('show'));
    document.body.style.overflow='';
  }
});

// MAPA lazy-load
function setupMap(id){
  const wrap = document.getElementById(id);
  if(!wrap) return;
  function loadMap(){
    if(wrap.dataset.loaded) return;
    wrap.dataset.loaded = '1';
    const iframe = document.createElement('iframe');
    iframe.src = 'https://maps.google.com/maps?q=Marisquer%C3%ADa+Civera%2C+Calle+Mos%C3%A9n+Femades+10%2C+46002+Valencia&z=17&output=embed&hl=es';
    iframe.loading='lazy';
    iframe.referrerPolicy='no-referrer-when-downgrade';
    iframe.allowFullscreen = true;
    iframe.title = 'Mapa de Marisquería Civera';
    wrap.innerHTML='';
    wrap.appendChild(iframe);
  }
  wrap.addEventListener('click', loadMap);
  wrap.addEventListener('keydown',(e)=>{ if(e.key==='Enter'||e.key===' ') loadMap(); });
  if(wrap.dataset.eager === 'true') loadMap();
}
setupMap('mapWrap');

// FORMULARIO consulta — anti-spam
const formStartTime = Date.now();
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const status = document.getElementById('formStatus');
    const lang = document.documentElement.lang || 'es';
    const dict = I18N[lang] || I18N.es;
    if(form.website.value){ status.textContent = ''; return; }
    if(Date.now() - formStartTime < 3000){ status.textContent = ''; return; }
    if(!form.name.value.trim() || !form.email.value.trim() || !form.message.value.trim()){
      status.style.color = '#c4624a';
      status.textContent = dict['form.error'];
      return;
    }
    const subject = encodeURIComponent('Consulta web — '+form.name.value);
    const body = encodeURIComponent(form.message.value+'\n\n— '+form.name.value+'\n'+form.email.value);
    window.location.href = 'mailto:info@marisqueriascivera.com?subject='+subject+'&body='+body;
    status.style.color = '#0a1f3a';
    status.textContent = dict['form.sent'];
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
