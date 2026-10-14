const departments = [
  {
    name: "Ahuachapán", color: "#183b79", image: "img/festival-anona.jpg",
    festival: "Festival de la Anona", place: "Parque central de San Pedro Puxtla, Ahuachapán",
    mapQuery: "Festival de la Anona, San Pedro Puxtla, Ahuachapán, El Salvador",
    date: "Tradicionalmente a mediados de agosto; la fecha cambia y debe confirmarse cada año.",
    foods: ["Atoles y bebidas de anona", "Postres y dulces de anona", "Pupusas y recetas creativas con la fruta"],
    description: "La anona es la protagonista de esta celebración. Productores y emprendedores preparan bebidas, postres y otros alimentos a partir de esta fruta de temporada.",
    source: "https://www.elsalvador.com/turismo/sabores-de-el-salvador/festivales-culturales-el-salvador-gastronomia-turismo-comida-salvadorena/1237034/2025/", sourceLabel: "Calendario de festivales gastronómicos"
  },
  {
    name: "Santa Ana", color: "#1260a7", image: "img/jocote-corona.jpg",
    festival: "Feria del Jocote de Corona", place: "Parque Natural Cerro Verde, Santa Ana",
    mapQuery: "Parque Natural Cerro Verde, Santa Ana, El Salvador",
    date: "Generalmente en octubre.",
    foods: ["Postres y dulces de jocote", "Atoles y bebidas", "Pupusas y pizza con jocote", "Sorbetes y otras preparaciones de temporada"],
    description: "La feria celebra el jocote de corona con recetas dulces y saladas. El entorno de Cerro Verde permite complementar la visita con sus miradores y senderos habilitados.",
    source: "https://www.elsalvador.com/turismo/sabores-de-el-salvador/festivales-culturales-el-salvador-gastronomia-turismo-comida-salvadorena/1237034/2025/", sourceLabel: "Calendario de festivales gastronómicos"
  },
  {
    name: "Sonsonate", color: "#4c2375", image: "img/juayua-gastronomia.jpg",
    festival: "Festival Gastronómico de Juayúa", place: "Parque central de Juayúa, Sonsonate",
    mapQuery: "Parque Central de Juayúa, Sonsonate, El Salvador",
    date: "Se realiza habitualmente los fines de semana; verifica los horarios antes de viajar.",
    foods: ["Pupusas y antojitos salvadoreños", "Carnes y platillos preparados al momento", "Comida típica y opciones regionales"],
    description: "Juayúa es conocida por su festival gastronómico de fin de semana. Los puestos y restaurantes ofrecen una variedad de platillos salvadoreños en el centro del municipio.",
    source: "https://elsalvador.travel/destination/juayua/es/", sourceLabel: "El Salvador Travel: Juayúa"
  },
  {
    name: "Chalatenango", color: "#16734d", image: "img/maiz.jpg",
    festival: "Festival del Maíz", place: "Chalatenango, El Salvador (el municipio y la sede exacta deben confirmarse)",
    mapQuery: "Festival del Maíz, departamento de Chalatenango, El Salvador",
    date: "Se realiza en el mes de Agosto",
    foods: ["Riguas y tortitas de elote", "Tamales y atol de elote", "Elotes locos y asados", "Pupusas y otros antojitos"],
    description: "La celebración destaca el maíz y sus preparaciones tradicionales. Como la referencia no confirma un recinto único en Chalatenango, conviene consultar la convocatoria local antes de ir.",
    source: "https://www.elsalvador.com/h-entretenimiento/h-turismo/desde-las-pupusas-hasta-la-yuca-diez-festivales-gastronomicos-para-disfrutar-en-el-salvador/1145120/2024/", sourceLabel: "Referencia sobre festivales gastronómicos"
  },
  {
    name: "La Libertad", color: "#d35416", image: "img/naranja.jpg",
    festival: "Festival de la Naranja", place: "Parque central de San Juan Opico, La Libertad (sede por confirmar)",
    mapQuery: "Festival de la Naranja, La Libertad, El Salvador",
    date: "Se realiza en el mes de Agosto.",
    foods: ["Naranjas y jugos naturales", "Dulces, conservas y postres cítricos", "Bebidas y productos de emprendedores locales"],
    description: "La actividad se presenta como una celebración de la naranja y de los productos agrícolas de la zona. La fecha y el recinto exacto deben verificarse con los organizadores locales.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "San Salvador", color: "#bd244b", image: "img/jocote-guayaba.jpg",
    festival: "Festival del Jocote y la Guayaba", place: "Calle Gerardo Barrios, frente al Mercado Central, San Salvador Centro",
    mapQuery: "Calle Gerardo Barrios frente al Mercado Central, San Salvador, El Salvador",
    date: "Se realiza en Febrero.",
    foods: ["Jocote en miel", "Bebidas de jocote y guayaba", "Mermeladas, budines y postres", "Preparaciones creativas con ambas frutas"],
    description: "El festival reúne productores y comerciantes con alimentos elaborados a base de jocote Barón Rojo y guayaba. También suele incluir actividades culturales y familiares.",
    source: "https://sansalvador.gob.sv/exitoso-festival-del-jocote-y-la-guayaba-2026/", sourceLabel: "Alcaldía de San Salvador Centro"
  },
  {
    name: "Cuscatlán",
color: "#087c8b",
image: "img/chorizo-cojutepeque.jpg",
festival: "Festival del Chorizo de Cojutepeque",
place: "Cojutepeque, Cuscatlán, El Salvador",
mapQuery: "Festival del Chorizo, Cojutepeque, Cuscatlán, El Salvador",
date: "Tradicionalmente en el mes de Disiembre.",
foods: [
    "Chorizos tradicionales de Cojutepeque",
    "Tortas de chorizo",
    "Tacos de chorizo",
    "Pupusas de chorizo"
],
description: "Cojutepeque es reconocido por sus chorizos tradicionales. Esta celebración gastronómica destaca los productos locales y distintas preparaciones elaboradas con este embutido.",
source: "https://www.elsalvador.com/turismo/sabores-de-el-salvador/festivales-culturales-el-salvador-gastronomia-turismo-comida-salvadorena/1237034/2025/",
sourceLabel: "Información sobre festivales gastronómicos"
  },
  {
    

    name: "La Paz",
    color: "#b8860b",
    image: "img/pupusa-olocuilta.jpg",
    festival: "Festival de la Pupusa de Olocuilta",
    place: "Olocuilta, La Paz, El Salvador",
    mapQuery: "Festival de la Pupusa, Olocuilta, La Paz, El Salvador",
    date: "Tradicionalmente, el segundo domingo de noviembre.",
    foods: [
        "Pupusas de arroz",
        "Pupusas revueltas y de queso",
        "Pupusa gigante, según la edición",
        "Curtido y salsa de tomate"
    ],
    description: "Olocuilta es reconocida por sus pupusas elaboradas con masa de arroz. Durante el festival, los visitantes pueden disfrutar distintas variedades de pupusas y actividades gastronómicas.",
    source: "https://www.elsalvador.com/",
    sourceLabel: "Consultar información sobre el Festival de la Pupusa"
},

  
  {
    name: "San Vicente", color: "#0754a1", image: "img/panela.jpg",
    festival: "Festival de la Panela", place: "Molienda de la Familia Hernández, Verapaz, San Vicente",
    mapQuery: "Molienda Familia Hernández, Verapaz, San Vicente, El Salvador",
    date: "Se realiza en el mes de marzo.",
    foods: ["Panela y dulce de atado", "Melcochas y conservas en miel", "Jugo de caña", "Gastronomía típica"],
    description: "La feria muestra la elaboración artesanal de panela a partir de la caña de azúcar y ofrece dulces tradicionales, jugo de caña y comida típica.",
    source: "https://www.elsalvador.com/turismo/cultura-viva/feria-panela-2026-verapaz-san-vicente-el-salvador/1265896/2026/", sourceLabel: "Feria de la Panela en Verapaz"
  },
  {
    name: "Cabañas", color: "#a31b72", image: "img/ilobasco-gastronomia.jpg",
    festival: "Feria Gastronómica de Ilobasco", place: "Parque central de Ilobasco, Cabañas (confirmar el recinto de cada edición)",
    mapQuery: "Parque Central de Ilobasco, Cabañas, El Salvador",
    date: "Fecha anual por confirmar; consulta la programación municipal.",
    foods: ["Pupusas y tamales", "Antojitos y dulces típicos", "Platillos preparados por emprendedores locales"],
    description: "La feria busca promover la gastronomía y los emprendimientos locales. La oferta concreta y la fecha dependen de la convocatoria de cada edición.",
    source: "https://www.laprensagrafica.com/", sourceLabel: "La Prensa Gráfica"
  },
  {
    name: "Usulután", color: "#126b4e", image: "img/cafe.jpg",
    festival: "Festival del Café", place: "Santiago de María, Usulután (recinto exacto por confirmar)",
    mapQuery: "Festival del Café, Santiago de María, Usulután, El Salvador",
    date: "Se realiza en el mes de marzo.",
    foods: ["Café salvadoreño y bebidas preparadas", "Postres y productos elaborados con café", "Productos de productores y emprendedores locales"],
    description: "La celebración promueve la tradición cafetalera y a los productores locales. Para asistir, confirma la fecha y el punto exacto de encuentro con los organizadores.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "San Miguel", color: "#8b3c13", image: "img/platillos-regionales.jpg",
    festival: "Feria de Comidas Típicas y Productos Regionales", place: "Parque Guzmán, San Miguel (sede sugerida; confirmar cada edición)",
    mapQuery: "Parque Guzmán, San Miguel, El Salvador",
    date: "No se ha confirmado una fecha; revisar la agenda municipal.",
    foods: ["Pupusas y antojitos", "Tamales y comidas regionales", "Dulces, bebidas y productos de emprendedores"],
    description: "La feria está dedicada a mostrar la gastronomía migueleña y los productos de la región. La fecha y el lugar deben confirmarse para cada convocatoria.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "Morazán", color: "#5b247d", image: "img/melcocha.jpg",
    festival: "Festival de la Melcocha", place: "Morazán, El Salvador (municipio y recinto por confirmar)",
    mapQuery: "Festival de la Melcocha, Morazán, El Salvador",
    date: "Fecha y municipio sede por confirmar con los organizadores.",
    foods: ["Melcochas y dulces artesanales", "Dulces derivados de la caña", "Café y productos locales"],
    description: "La actividad destaca la elaboración tradicional de melcocha y otros dulces artesanales. Como no se ha confirmado un recinto específico, verifica la convocatoria antes de viajar.",
    source: "https://www.corsatur.gob.sv/agenda-de-actividades/", sourceLabel: "Agenda de actividades turísticas"
  },
  {
    name: "La Unión", color: "#006a75", image: "img/mariscos.jpg",
    festival: "Feria Gastronómica de Mariscos", place: "Muelle Municipal de La Unión, La Unión",
    mapQuery: "Muelle Municipal de La Unión, La Unión, El Salvador",
    date: "Se realiza en el mes de Abril.",
    foods: ["Pescados y mariscos", "Ceviches y cócteles", "Platillos preparados por restaurantes y emprendedores locales"],
    description: "El festival promueve la gastronomía marina y el turismo de La Unión. Reúne restaurantes, emprendedores y actividades familiares alrededor de los productos del mar.",
    source: "https://camarasal.com/xiv-festival-del-marisco-impulsara-el-turismo-y-la-economia-de-la-union-durante-semana-santa-2026/", sourceLabel: "Camarasal: Festival del Marisco 2026"
  }
];

const grid = document.querySelector("#departmentGrid");
const search = document.querySelector("#search");
const dialog = document.querySelector("#detailDialog");
const fallbackImage = "";

function render() {
  const q = search.value.trim().toLocaleLowerCase("es");
  const list = departments.filter(d => d.name.toLocaleLowerCase("es").includes(q));
  grid.innerHTML = list.map(d => `
    <button class="department-card" style="--dept-color:${d.color}" data-dept="${d.name}" aria-label="Ver festival de ${d.name}">
      <img src="${d.image}" alt="Imagen ilustrativa relacionada con ${d.festival}" loading="lazy" onerror="this.onerror=null;this.style.visibility='hidden'">
      <span class="dept-label"><span>${d.name}</span><span class="arrow">›</span></span>
    </button>`).join("");
  document.querySelector("#count").textContent = `${list.length} ${list.length === 1 ? "departamento" : "departamentos"}`;
}

function showDetail(name) {
  const d = departments.find(x => x.name === name);
  if (!d) return;
  const map = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(d.mapQuery);
  const waze = "https://waze.com/ul?q=" + encodeURIComponent(d.mapQuery) + "&navigate=yes";
  document.querySelector("#detail").innerHTML = `
    <img class="detail-cover" src="${d.image}" alt="Imagen ilustrativa relacionada con ${d.festival}" onerror="this.onerror=null;this.style.visibility='hidden'">
    <div class="detail-content">
      <span class="eyebrow dark">${d.name} · Festival gastronómico</span>
      <h2>${d.festival}</h2>
      <p>${d.description}</p>
      <div class="detail-meta">
        <div class="meta-box"><b>📅 Fecha o época</b><span>${d.date}</span></div>
        <div class="meta-box"><b>📍 Lugar</b><span>${d.place}</span></div>
      </div>
      <h3>Platillos que puedes encontrar</h3>
      <ul class="food-list">${d.foods.map(food => `<li>${food}</li>`).join("")}</ul>
     
      <div class="detail-actions">
        <a class="hero-button" href="${map}" target="_blank" rel="noopener noreferrer">Abrir ubicación en Google Maps <span>↗</span></a>
         </a>

    <a class="hero-button waze-button" href="${waze}" target="_blank" rel="noopener noreferrer">
        Abrir en Waze
    </a>
      </div>
    </div>`;
  dialog.showModal();
}

grid.addEventListener("click", e => {
  const card = e.target.closest("[data-dept]");
  if (card) showDetail(card.dataset.dept);
});
search.addEventListener("input", render);
document.querySelector("#closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
document.querySelector("#menuBtn").addEventListener("click", () => document.querySelector("#nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => document.querySelector("#nav").classList.remove("open")));
render();
