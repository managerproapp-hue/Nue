import { Student, NavItemType } from './types';

export const INITIAL_STUDENTS: Student[] = [
  {
    nre: '123456',
    expediente: 'E001',
    apellido1: 'García',
    apellido2: 'López',
    nombre: 'Ana',
    grupo: '2ºDAW',
    subgrupo: 'A',
    fechaNacimiento: '2003-05-15',
    telefono: '600111222',
    telefono2: '',
    emailPersonal: 'ana.garcia@email.com',
    emailOficial: 'ana.garcia@edu.es',
    photoUrl: `https://i.pravatar.cc/150?u=ana.garcia`,
    entrevistas: [
        { id: 'ent1', date: '2024-03-15', attendees: 'Tutor, Ana García', notes: 'Revisión del progreso del primer trimestre. Muestra gran interés en desarrollo backend.' },
        { id: 'ent2', date: '2024-05-20', attendees: 'Tutor', notes: 'Seguimiento sobre el proyecto final. Necesita organizar mejor sus tiempos.' }
    ],
    anotaciones: [
        { id: 'ann1', date: '2024-04-10', note: 'Excelente participación en el debate sobre arquitecturas limpias.', type: 'positive' },
        { id: 'ann2', date: '2024-05-22', note: 'Llegó tarde a la presentación del proyecto.', type: 'negative' },
        { id: 'ann3', date: '2024-06-01', note: 'Ha solicitado material extra sobre Docker.', type: 'neutral' },
    ]
  },
  {
    nre: '789012',
    expediente: 'E002',
    apellido1: 'Martínez',
    apellido2: 'Ruiz',
    nombre: 'Carlos',
    grupo: '2ºDAW',
    subgrupo: 'B',
    fechaNacimiento: '2003-08-22',
    telefono: '600333444',
    telefono2: '600555666',
    emailPersonal: 'carlos.martinez@email.com',
    emailOficial: 'carlos.martinez@edu.es',
    photoUrl: `https://i.pravatar.cc/150?u=carlos.martinez`,
    anotaciones: [
         { id: 'ann4', date: '2024-05-15', note: 'Presenta dificultades con las consultas SQL complejas.', type: 'negative' },
    ]
  },
  {
    nre: '345678',
    expediente: 'E003',
    apellido1: 'Sánchez',
    apellido2: 'Gómez',
    nombre: 'Laura',
    grupo: '1ºSMR',
    subgrupo: 'A',
    fechaNacimiento: '2004-01-10',
    telefono: '600777888',
    telefono2: '',
    emailPersonal: 'laura.sanchez@email.com',
    emailOficial: 'laura.sanchez@edu.es',
    photoUrl: `https://i.pravatar.cc/150?u=laura.sanchez`,
    anotaciones: [
       { id: 'ann5', date: '2024-06-05', note: 'Muy proactiva ayudando a sus compañeros con la configuración de la red.', type: 'positive' },
    ]
  },
];

export const NAV_ITEMS: NavItemType[] = [
  'Dashboard',
  'Alumnos',
  'Gestión Práctica',
  'Gestión de Notas',
  'Registro de Salidas',
  'Exámenes Prácticos',
  'Gestión Académica',
  'Gestión de la App',
];

export const COURSE_MODULES = [
    { key: 'ofertas_gastronomicas', name: 'Ofertas gastronómicas', trimesters: 2 },
    { key: 'productos_culinarios', name: 'Productos culinarios', trimesters: 2 },
    { key: 'postres_restauracion', name: 'Postres en restauración', trimesters: 2 },
    { key: 'empleabilidad_2', name: 'Itinerario personal para la Empleabilidad II', trimesters: 2 },
    { key: 'proyecto_intermodular', name: 'Proyecto Intermodular', trimesters: 3 },
    { key: 'sostenibilidad', name: 'Sostenibilidad aplicada al sistema productivo', trimesters: 2 },
    { key: 'optativa', name: 'Optativa', trimesters: 2 },
];

export const GROUP_EVALUATION_ITEMS = [
  { id: 'g1', text: 'Planifica y organiza correctamente la mise en place, asegurando que todos los ingredientes, utensilios y herramientas estén listos antes de comenzar.', points: 1.0 },
  { id: 'g2', text: 'Selecciona, manipula y conserva los ingredientes de forma adecuada, garantizando su frescura, calidad y correcta utilización durante todo el proceso de elaboración.', points: 1.5 },
  { id: 'g3', text: 'Controla y ajusta los tiempos de cocción para asegurar que todos los elementos del plato estén en su punto exacto al momento del servicio.', points: 1.0 },
  { id: 'g4', text: 'Mantiene en todo momento las normas de higiene y seguridad alimentaria, asegurando un entorno de trabajo limpio y una correcta manipulación de los alimentos.', points: 1.5 },
  { id: 'g5', text: 'Coordina de forma eficiente el trabajo con tus compañeros, asegurando que la preparación de los platos se realice de manera sincronizada y a tiempo.', points: 1.0 },
  { id: 'g6', text: 'Identifica los errores cometidos durante el proceso de elaboración y plantea posibles soluciones para mejorar en futuras ocasiones.', points: 1.0 },
  { id: 'g7', text: '¿Ha sido capaz de trabajar en equipo y con actitud activa participativa?', points: 1.0 },
  { id: 'g8', text: 'Gestiona los ingredientes sobrantes de forma adecuada, minimizando el desperdicio y aprovechando los productos de manera eficiente.', points: 2.0 },
];

export const INDIVIDUAL_EVALUATION_ITEMS = [
  { id: 'i1', text: '¿Ha realizado operaciones de puesta en marcha de maquinaria y equipos siguiendo los procedimientos establecidos por el profesor?', points: 0.5 },
  { id: 'i2', text: '¿Ha realizado las operaciones de mise-enplace utilizando correctamente útiles y/o herramientas, siguiendo los procedimientos establecidos por el profesor?', points: 1.0 },
  { id: 'i3', text: '¿Ha sido capaz de Interpretar las fichas técnicas o documentación necesaria para las elaboraciones que le han tocado desarrollar?', points: 1.5 },
  { id: 'i4', text: '¿Ha asistido con el material requerido (fichas técnicas, herramientas y utensilios propios) para el desarrollo de sus prácticas diarias?', points: 1.0 },
  { id: 'i5', text: '¿Ha sido capaz de ejecutar las tareas siguiendo los procedimientos establecidos por el profesor, aplicando las técnicas idóneas en función de las prácticas a realizar?', points: 1.0 },
  { id: 'i6', text: '¿Ha sido capaz de trabajar de forma limpia y ordenada durante el desarrollo de las prácticas en el taller aplicando los procedimientos establecidos?', points: 1.0 },
  { id: 'i7', text: '¿Ha sido capaz de trabajar en equipo y con actitud activa participativa?', points: 1.5 },
  { id: 'i8', text: '¿Ha sido capaz de aplicar las técnicas idóneas de conservación de los productos trabajados en el taller hasta el momento de su utilización?', points: 0.5 },
  { id: 'i9', text: '¿Ha sido capaz de realizar las operaciones de mantenimiento y limpieza de la maquinaria y equipos utilizados, cumplimentando los registros asociados?', points: 1.0 },
  { id: 'i10', text: '¿El alumno cuida su higiene personal y asiste con el uniforme completo, limpio y planchado?', points: 1.0 },
];

export const SCORE_LEVELS = [
    { label: 'Excelente', value: 10, color: 'bg-green-500', textColor: 'text-white' },
    { label: 'Notable', value: 8, color: 'bg-blue-500', textColor: 'text-white' },
    { label: 'Aprobado', value: 5, color: 'bg-yellow-500', textColor: 'text-white' },
    { label: 'Insuficiente', value: 2, color: 'bg-red-500', textColor: 'text-white' }
];

export const PRACTICAL_EXAM_RUBRIC_T1 = [
    { 
        id: 'ra1', 
        title: 'R.A.1 – Organización de procesos', 
        weight: 0.20,
        criteria: [
            { id: 'ra1c1', text: 'Planificación y mise en place', levels: { 10: 'Plan completo, fases claras y ordenadas. Anticipa necesidades.', 8: 'Plan adecuado, con leves desajustes de orden o detalle.', 5: 'Plan incompleto, se olvida de fases relevantes.', 2: 'No presenta plan o es caótico.' } },
            { id: 'ra1c2', text: 'Orden, limpieza y conservación', levels: { 10: 'Área impecable, materiales bien gestionados, propone conservación adecuada.', 8: 'Área generalmente ordenada, pequeñas faltas de higiene o conservación.', 5: 'Área desordenada, higiene básica pero descuida conservación.', 2: 'Desorden evidente, faltan medidas de higiene y conservación.' } }
        ]
    },
    { 
        id: 'ra2', 
        title: 'R.A.2 – Técnicas culinarias tradicionales y avanzadas', 
        weight: 0.30,
        criteria: [
            { id: 'ra2c1', text: 'Aplicación de técnicas básicas', levels: { 10: 'Ejecución precisa y profesional (ej. cortes uniformes, cocciones exactas).', 8: 'Ejecución correcta con leves fallos.', 5: 'Técnica básica reconocible pero con fallos de ejecución.', 2: 'Técnica incorrecta o inacabada.' } },
            { id: 'ra2c2', text: 'Aplicación de técnicas avanzadas', levels: { 10: 'Demuestra dominio y adapta técnica al producto (ej. vacío, emulsiones).', 8: 'Correcta aplicación con leves fallos.', 5: 'Aplica técnica avanzada con dificultad, resultado justo.', 2: 'No demuestra conocimiento ni resultado adecuado.' } },
            { id: 'ra2c3', text: 'Evaluación del resultado final', levels: { 10: 'Producto final excelente en textura, sabor, presentación.', 8: 'Buen resultado con leves mejoras posibles.', 5: 'Resultado aceptable pero poco cuidado.', 2: 'Producto mal ejecutado, incomible o inseguro.' } }
        ]
    },
    { 
        id: 'ra3', 
        title: 'R.A.3 – Elaboración a partir de materias primas', 
        weight: 0.30,
        criteria: [
            { id: 'ra3c1', text: 'Creatividad y propuestas', levels: { 10: 'Propone varias elaboraciones bien razonadas, combinaciones equilibradas.', 8: 'Propone elaboraciones correctas pero poco variadas.', 5: 'Propone solo una elaboración básica o repetitiva.', 2: 'No propone elaboraciones coherentes.' } },
            { id: 'ra3c2', text: 'Aprovechamiento de recursos', levels: { 10: 'Máximo aprovechamiento (fondos, recortes, técnicas de reutilización).', 