const leyesDominicanas = [
    // --- DERECHO CONSTITUCIONAL (20) ---
    { materia: "Constitucional", articulo: "Constitución - Art. 1", resumen: "Estado Unitario, Social y Democrático de Derecho.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 6", resumen: "Supremacía de la Constitución sobre todas las normas jurídicas.", plazo: "Inmediato" },
    { materia: "Constitucional", articulo: "Constitución - Art. 7", resumen: "Valores supremos y principios fundamentales del Estado.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 37", resumen: "Derecho a la vida. Inviolable desde la concepción hasta la muerte.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 38", resumen: "La dignidad del ser humano es sagrada e innata.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 40", resumen: "Derecho a la libertad y seguridad personal.", plazo: "Garantía de Hábeas Corpus" },
    { materia: "Constitucional", articulo: "Constitución - Art. 41", resumen: "Prohibición de esclavitud, servidumbre y trata de personas.", plazo: "Inmediato" },
    { materia: "Constitucional", articulo: "Constitución - Art. 42", resumen: "Derecho a la integridad personal y prohibición de torturas.", plazo: "Inmediato" },
    { materia: "Constitucional", articulo: "Constitución - Art. 43", resumen: "Derecho al libre desarrollo de la personalidad.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 44", resumen: "Derecho a la intimidad, honor y propia imagen.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 45", resumen: "Libertad de conciencia y de cultos.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 46", resumen: "Libertad de tránsito, residencia y permanencia.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 47", resumen: "Libertad de asociación con fines lícitos.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 48", resumen: "Libertad de reunión sin armas y pacíficamente.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 49", resumen: "Libertad de expresión e información.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 51", resumen: "Derecho a la propiedad privada y expropiación por causa de utilidad pública.", plazo: "Sujeto a indemnización" },
    { materia: "Constitucional", articulo: "Constitución - Art. 62", resumen: "Derecho al trabajo digno y en condiciones equitativas.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 63", resumen: "Derecho a la educación integral y gratuita.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 65", resumen: "Derecho al deporte, educación física y recreación.", plazo: "Permanente" },
    { materia: "Constitucional", articulo: "Constitución - Art. 68", resumen: "Garantías de los derechos fundamentales mediante recursos efectivos.", plazo: "Inmediato" },

    // --- DERECHO CIVIL (20) ---
    { materia: "Civil", articulo: "Código Civil - Art. 1", resumen: "De la publicación, efectos y aplicación de las leyes en general.", plazo: "1 día después de su publicación" },
    { materia: "Civil", articulo: "Código Civil - Art. 2", resumen: "La ley no dispone sino para lo porvenir; no tiene efecto retroactivo.", plazo: "Permanente" },
    { materia: "Civil", articulo: "Código Civil - Art. 3", resumen: "Las leyes de policía y de seguridad obligan a todos los habitantes del territorio.", plazo: "Inmediato" },
    { materia: "Civil", articulo: "Código Civil - Art. 6", resumen: "Las leyes que interesan al orden público y a las buenas costumbres no pueden ser derogadas por convenciones particulares.", plazo: "Orden público" },
    { materia: "Civil", articulo: "Código Civil - Art. 9", resumen: "La condición de dominicano se adquiere por nacimiento o naturalización.", plazo: "Permanente" },
    { materia: "Civil", articulo: "Código Civil - Art. 11", resumen: "El extranjero disfrutará en la República Dominicana de los mismos derechos civiles que los concedidos a los dominicanos.", plazo: "Permanente" },
    { materia: "Civil", articulo: "Código Civil - Art. 500", resumen: "De la mayor edad y la emancipación.", plazo: "A los 18 años cumplidos" },
    { materia: "Civil", articulo: "Código Civil - Art. 516", resumen: "Los bienes se dividen en muebles e inmuebles.", plazo: "Permanente" },
    { materia: "Civil", articulo: "Código Civil - Art. 544", resumen: "La propiedad es el derecho de gozar y disponer de las cosas del modo más absoluto.", plazo: "Permanente" },
    { materia: "Civil", articulo: "Código Civil - Art. 711", resumen: "La propiedad de los bienes se adquiere y transmite por sucesión, donación y contratos.", plazo: "Permanente" },
    { materia: "Civil", articulo: "Código Civil - Art. 1101", resumen: "El contrato es un convenio en cuya virtud una o varias personas se obligan hacia otra u otras.", plazo: "Contractual" },
    { materia: "Civil", articulo: "Código Civil - Art. 1108", resumen: "Cuatro condiciones son esenciales para la validez de una convención: consentimiento, capacidad, objeto cierto y causa lícita.", plazo: "Validez contractual" },
    { materia: "Civil", articulo: "Código Civil - Art. 1134", resumen: "Las convenciones legalmente formadas tienen fuerza de ley para quienes las hacen.", plazo: "Contractual" },
    { materia: "Civil", articulo: "Código Civil - Art. 1147", resumen: "El deudor es condenado al pago de daños y perjuicios, si procede, por la inejecución de la obligación.", plazo: "Sujeto a demanda" },
    { materia: "Civil", articulo: "Código Civil - Art. 1382", resumen: "Cualquier hecho del hombre que cause a otro un daño, obliga a repararlo por cuya culpa sucedió.", plazo: "Prescripción: 2 años" },
    { materia: "Civil", articulo: "Código Civil - Art. 1383", resumen: "Cada cual es responsable del daño que ha causado, no solamente por su hecho, sino también por su negligencia o imprudencia.", plazo: "Prescripción: 2 años" },
    { materia: "Civil", articulo: "Código Civil - Art. 1582", resumen: "La venta es un convenio por el cual uno se obliga a dar una cosa y otro a pagarla.", plazo: "Contractual" },
    { materia: "Civil", articulo: "Código Civil - Art. 1708", resumen: "Existen dos clases de contratos de alquiler: el de las cosas y el de la obra.", plazo: "Contractual" },
    { materia: "Civil", articulo: "Código Civil - Art. 2262", resumen: "Todas las acciones reales y personales prescriben por el transcurso de veinte años.", plazo: "Prescripción general: 20 años" },
    { materia: "Civil", articulo: "Código Civil - Art. 2279", resumen: "En materia de muebles, la posesión vale título.", plazo: "Inmediato" },

    // --- DERECHO PENAL (20) ---
    { materia: "Penal", articulo: "Código Penal - Art. 1", resumen: "Toda infracción se califica en crimen, delito o contravención.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 2", resumen: "La tentativa de crimen se castiga como el crimen mismo en los casos previstos por la ley.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 64", resumen: "No hay crimen ni delito cuando el procesado se hallaba en estado de demencia al cometer el hecho.", plazo: "Sujeto a peritaje médico" },
    { materia: "Penal", articulo: "Código Penal - Art. 295", resumen: "El que voluntariamente mata a otro se hace reo de homicidio.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 296", resumen: "El homicidio cometido con premeditación o acechanza se califica como asesinato.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 304", resumen: "Los culpables de asesinato serán castigados con la pena de treinta años de trabajos públicos.", plazo: "Sujeto a condena" },
    { materia: "Penal", articulo: "Código Penal - Art. 309", resumen: "Las heridas y golpes voluntarios que no causen enfermedad ni incapacidad se consideran golpes simples.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 309-1", resumen: "Constituye violencia doméstica cualquier acción u omisión que cause daño físico, psicológico o sexual.", plazo: "Acción pública" },
    { materia: "Penal", articulo: "Código Penal - Art. 332", resumen: "El atentado al pudor cometido con violencia contra una persona se castiga como agresión sexual.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 335", resumen: "La violación es toda acción de penetración sexual cometida con violencia o coacción.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 379", resumen: "El que con fraude sustrae una cosa que no le pertenece es reo de robo.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 381", resumen: "El robo cometido con violencia o con armas se castiga con penas agravadas de reclusión.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 386", resumen: "El robo nocturno, cometido por dos o más personas, conlleva agravantes severas.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 401", resumen: "El delito de estafa por medio de nombres supuestos o maniobras fraudulentas.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 405", resumen: "El abuso de confianza y la apropiación indebida de bienes entregados.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 406", resumen: "El que destruya o deteriore propiedad ajena comete el delito de destrucción de bienes.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 434", resumen: "La falsificación de documentos públicos o auténticos.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 438", resumen: "La falsificación de documentos privados de comercio o de banca.", plazo: "Sujeto a proceso penal" },
    { materia: "Penal", articulo: "Código Penal - Art. 463", resumen: "De las circunstancias atenuantes aplicables por los jueces en favor del procesado.", plazo: "Criterio del juez" },
    { materia: "Penal", articulo: "Código Penal - Art. 474", resumen: "De las contravenciones y sus penas menores de policía correccional.", plazo: "Sujeto a falta menor" },

    // --- DERECHO LABORAL (20) ---
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 1", resumen: "Objeto del Código de Trabajo: regular las relaciones entre trabajadores y empleadores.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 2", resumen: "El presente Código se aplica por igual a dominicanos y extranjeros en el territorio nacional.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 14", resumen: "Contrato de trabajo es aquel por el cual una persona se obliga a prestar un servicio personal bajo dependencia.", plazo: "Contractual" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 28", resumen: "El período de prueba en el contrato de trabajo no podrá exceder de dos meses.", plazo: "Máximo 2 meses" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 35", resumen: "El salario es la retribución que el empleador debe pagar al trabajador como contraprestación del servicio.", plazo: "Pago periódico" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 42", resumen: "El salario mínimo legal es irrenunciable y no puede ser reducido.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 54", resumen: "Todo empleador debe pagar a su trabajador un salario de Navidad equivalente a la duodécima parte del salario ordinario devengado.", plazo: "Antes del 20 de diciembre" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 136", resumen: "La duración normal de la jornada de trabajo es de ocho horas diarias y cuarenta y cuatro horas semanales.", plazo: "Semanal" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 147", resumen: "Las horas de trabajo extraordinarias se pagan con un aumento de un treinta y cinco por ciento sobre el valor de la hora normal.", plazo: "Pago quincenal/mensual" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 159", resumen: "Los empleadores tienen obligación de conceder a todo trabajador un período de vacaciones anuales remuneradas de catorce días.", plazo: "Anual" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 177", resumen: "Días feriados declarados oficiales por la ley en la República Dominicana.", plazo: "Calendario oficial" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 75", resumen: "Desahucio es el acto por el cual una de las partes, mediante aviso previo, pone término al contrato sin causa justa.", plazo: "Preaviso: 7 a 28 días" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 88", resumen: "Causas de despido justificado imputables al trabajador por faltas graves cometidas.", plazo: "Plazo de caducidad: 15 días" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 96", resumen: "Causas de dimisión justificada imputables al empleador por incumplimiento de obligaciones.", plazo: "Plazo de caducidad: 15 días" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 192", resumen: "Protección a la maternidad de la trabajadora. Ningún empleador puede terminar el contrato por embarazo.", plazo: "Durante el embarazo y período de lactancia" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 236", resumen: "De las normas especiales para los trabajadores del campo y de la agricultura.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 259", resumen: "De las normas aplicables al servicio doméstico en residencias particulares.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 281", resumen: "Obligación de las empresas de mantener condiciones de seguridad, higiene y salud en el trabajo.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 393", resumen: "El derecho de asociación en sindicatos es libre para trabajadores y empleadores.", plazo: "Permanente" },
    { materia: "Laboral", articulo: "Código de Trabajo - Art. 410", resumen: "De la huelga legal y los procedimientos de solución pacífica de conflictos colectivos.", plazo: "Sujeto a mediación" },

    // --- DERECHO COMERCIAL Y SOCIETARIO (20) ---
    { materia: "Comercial", articulo: "Ley 479-08 - Art. 1", resumen: "De las sociedades comerciales y empresas individuales de responsabilidad limitada.", plazo: "Renovable anualmente" },
    { materia: "Comercial", articulo: "Ley 479-08 - Art. 2", resumen: "Toda sociedad comercial tiene personalidad jurídica propia, distinta de la de sus socios.", plazo: "Permanente" },
    { materia: "Comercial", articulo: "Ley 479-08 - Art. 14", resumen: "Las sociedades en nombre colectivo se forman entre dos o más personas bajo una razón social.", plazo: "Registro mercantil" },
    { materia: "Comercial", articulo: "Ley 479-08 - Art. 94", resumen: "De las sociedades de responsabilidad limitada (SRL) y su capital social fraccionado en cuotas.", plazo: "Capital mínimo legal" },
    { materia: "Comercial", articulo: "Ley 479-08 - Art. 154", resumen: "De las sociedades anónimas (S.A.) y su capital representado por acciones.", plazo: "Asamblea anual" },
    { materia: "Comercial", articulo: "Ley 479-08 - Art. 450", resumen: "De la Empresa Individual de Responsabilidad Limitada (EIRL) conformada por una sola persona física.", plazo: "Registro mercantil" },
    { materia: "Comercial", articulo: "Ley 3-02", resumen: "Ley de Registro Mercantil que organiza y publicita las actividades comerciales del país.", plazo: "Renovación anual" },
    { materia: "Comercial", articulo: "Ley 358-05 - Art. 1", resumen: "Ley General de Protección de los Derechos al Consumidor o Usuario.", plazo: "Permanente" },
    { materia: "Comercial", articulo: "Ley 358-05 - Art. 34", resumen: "Derecho de los consumidores a recibir información veraz, clara y oportuna sobre productos y servicios.", plazo: "Permanente" },
    { materia: "Comercial", articulo: "Ley 126-02", resumen: "Ley de Comercio Electrónico, Documentos y Firmas Digitales en la República Dominicana.", plazo: "Validez jurídica" },
    { materia: "Comercial", articulo: "Ley 20-00", resumen: "Ley sobre Propiedad Industrial: patentes de invención, marcas, nombres comerciales y diseños.", plazo: "Vigencia: 10 a 20 años" },
    { materia: "Comercial", articulo: "Ley 65-00", resumen: "Ley sobre Derecho de Autor y protección de las obras literarias, artísticas y científicas.", plazo: "Vida del autor + 70 años" },
    { materia: "Comercial", articulo: "Ley 141-15", resumen: "Ley de Reestructuración y Liquidación de Empresas y Personas Físicas Comerciantes.", plazo: "Proceso concursal" },
    { materia: "Comercial", articulo: "Ley 155-17", resumen: "Ley contra el Lavado de Activos y el Financiamiento del Terrorismo en sectores comerciales y financieros.", plazo: "Cumplimiento obligatorio" },
    { materia: "Comercial", articulo: "Ley 488-08", resumen: "Ley de incentivo, desarrollo y competitividad de las Micro, Pequeñas y Medianas Empresas (MIPYMES).", plazo: "Permanente" },
    { materia: "Comercial", articulo: "Ley 50-88", resumen: "Ley sobre Drogas y Sustancias Controladas en el marco de operaciones comerciales y farmacéuticas.", plazo: "Control estricto" },
    { materia: "Comercial", articulo: "Ley 821", resumen: "Ley de Organización Judicial aplicable a la jurisdicción comercial y civil.", plazo: "Permanente" },
    { materia: "Comercial", articulo: "Ley 72-02", resumen: "Ley monetaria y financiera que regula el sistema bancario y cambiario nacional.", plazo: "Supervisión permanente" },
    { materia: "Comercial", articulo: "Ley 12-06", resumen: "Ley sobre Sociedades Cooperativas en la República Dominicana.", plazo: "Registro especial" },
    { materia: "Comercial", articulo: "Ley 513-19", resumen: "Regula el sector de seguros y reaseguros en el territorio dominicano bajo supervisión de la Superintendencia.", plazo: "Renovación periódica" }
];

const cardsContainer = document.querySelector("#cardsContainer");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

let categoriaActual = "todos";

function renderizarLeyes(datos) {
    cardsContainer.innerHTML = "";

    if (datos.length === 0) {
        cardsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">No se encontraron disposiciones legales con esos criterios.</p>`;
        return;
    }

    datos.forEach(ley => {
        cardsContainer.innerHTML += `
            <div class="law-card">
                <span class="law-tag">${ley.materia}</span>
                <h3>${ley.articulo}</h3>
                <p>${ley.resumen}</p>
                <div class="law-plazo"><strong>Plazo / Nota:</strong> ${ley.plazo}</div>
            </div>
        `;
    });
}

function aplicarFiltros() {
    const texto = searchInput.value.toLowerCase();

    const filtradas = leyesDominicanas.filter(ley => {
        const coincideCategoria = categoriaActual === "todos" || ley.materia.toLowerCase() === categoriaActual.toLowerCase();
        const coincideTexto = (ley.materia + " " + ley.articulo + " " + ley.resumen + " " + ley.plazo).toLowerCase().includes(texto);
        return coincideCategoria && coincideTexto;
    });

    renderizarLeyes(filtradas);
}

searchInput.addEventListener("input", aplicarFiltros);

filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const botonSeleccionado = e.currentTarget;

        filterButtons.forEach(b => b.classList.remove("active"));
        botonSeleccionado.classList.add("active");
        
        categoriaActual = botonSeleccionado.getAttribute("data-materia");
        aplicarFiltros();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    renderizarLeyes(leyesDominicanas);
});