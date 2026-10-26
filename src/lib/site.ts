// Email is still a placeholder — replace it with the real one.
export const CONTACT = {
  phoneDisplay: "+34 613 25 45 58",
  phone: "+34613254558",
  whatsapp: "34613254558",
  email: "infoyasandrose@gmail.com",
  instagram: "https://www.instagram.com/yas_and_rose_/",
  instagramHandle: "@yas_and_rose_",
  city: "Benidorm",
  region: "Alicante",
};

export const waLink = (text = "¡Hola Yas&Rose! Me gustaría hacer un encargo.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

export type Post = { id: string; image: string; title: string; caption: string; permalink: string };

export const POSTS: Post[] = [
  {
    id: "DeR1hHCKpZc",
    image: "/images/08_post_DeR1hHCKpZc.jpg",
    title: "Croissant bicolor",
    caption:
      "Croissant bicolor de mantequilla, laminado a mano y horneado cada mañana. El compañero perfecto para tu café en Benidorm.",
    permalink: "https://www.instagram.com/p/DeR1hHCKpZc/",
  },
  {
    id: "DeUhL_hiisp",
    image: "/images/07_post_DeUhL_hiisp.jpg",
    title: "Tarta personalizada",
    caption:
      "Milhojas personalizada con frutas frescas, macarons y crema suave. Diseñada a medida para tu celebración.",
    permalink: "https://www.instagram.com/p/DeUhL_hiisp/",
  },
  {
    id: "DeeyoY_NHHt",
    image: "/images/05_reel_DeeyoY_NHHt.jpg",
    title: "El interior que importa",
    caption:
      "Alveolado perfecto: capas y capas de hojaldre que crujen. Así nace un buen croissant artesanal.",
    permalink: "https://www.instagram.com/reel/DeeyoY_NHHt/",
  },
  {
    id: "DeuRUctNzi2",
    image: "/images/01_post_DeuRUctNzi2.jpg",
    title: "Espirales de cacao",
    caption: "Espirales de cacao recién formadas en el obrador, listas para fermentar y hornear.",
    permalink: "https://www.instagram.com/p/DeuRUctNzi2/",
  },
  {
    id: "DeRLdJNK165",
    image: "/images/09_post_DeRLdJNK165.jpg",
    title: "Lazos de frambuesa",
    caption: "Hojaldre bicolor en forma de lazo, un dulce de autor tan bonito como delicioso.",
    permalink: "https://www.instagram.com/p/DeRLdJNK165/",
  },
  {
    id: "DeP3kylKwc8",
    image: "/images/10_post_DeP3kylKwc8.jpg",
    title: "Tarta de queso",
    caption: "Tarta de queso cremosa con superficie tostada. Sencilla, honesta e irresistible.",
    permalink: "https://www.instagram.com/p/DeP3kylKwc8/",
  },
  {
    id: "Dd8f5T9KdgI",
    image: "/images/12_reel_Dd8f5T9KdgI.jpg",
    title: "Brioche de autor",
    caption: "Brioche trenzado con toques cítricos y glaseado brillante, recién salido del horno.",
    permalink: "https://www.instagram.com/reel/Dd8f5T9KdgI/",
  },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cómo hago un encargo?",
    a: "Escríbenos por WhatsApp, llámanos o déjanos tus datos en el formulario. Cuéntanos qué te apetece, para cuándo y para cuántas personas: te confirmamos disponibilidad, opciones y precio antes de nada.",
  },
  {
    q: "¿Con cuánta antelación debo avisar?",
    a: "Para tartas personalizadas y dulces de celebración lo ideal es avisarnos con al menos una semana, así podemos diseñarlas con calma. La bollería se hornea cada mañana, por lo que basta con encargarla uno o dos días antes.",
  },
  {
    q: "¿Puedo pedir una tarta totalmente a mi medida?",
    a: "Sí. Partimos de tus sabores, colores y tipo de celebración —cumpleaños, boda, bautizo o detalle de empresa— y la diseñamos contigo. Envíanos fotos o referencias por WhatsApp y te proponemos una versión adaptada a tu presupuesto.",
  },
  {
    q: "¿Trabajáis con alergias o intolerancias?",
    a: "En el obrador manipulamos gluten, lactosa, huevo y frutos secos, así que no podemos garantizar elaboraciones totalmente exentas. Aun así, escríbenos: te decimos con honestidad qué podemos adaptar y qué es mejor evitar.",
  },
  {
    q: "¿Hacéis pedidos para cafeterías y hoteles?",
    a: "Sí. Suministramos de forma regular bollería artesanal y dulces de autor a cafeterías y negocios de Benidorm y la Marina Baixa. Cuéntanos tu volumen y tus días de entrega y te preparamos una propuesta con precios.",
  },
  {
    q: "¿Cómo recojo mi pedido y cómo lo conservo en casa?",
    a: "Concertamos la hora de recogida por WhatsApp o teléfono. La bollería está en su punto el mismo día; las tartas se guardan en nevera un par de días y ganan en sabor si las sacas unos minutos antes de servir.",
  },
  {
    q: "¿Dónde está vuestro obrador en Benidorm?",
    a: "Horneamos en Benidorm. Escríbenos por WhatsApp o llámanos y te pasamos la dirección exacta junto con la confirmación de tu pedido, para que sepas dónde recogerlo sin vueltas.",
  },
  {
    q: "¿Repartís en Finestrat, Altea, La Nucía, L'Alfàs del Pi o Villajoyosa?",
    a: "Trabajamos toda la Marina Baixa. Para celebraciones y pedidos grandes consultamos la entrega caso a caso: dinos la población, la fecha y qué necesitas, y te decimos qué podemos hacer.",
  },
  {
    q: "¿Hacéis tartas para bodas, comuniones y bautizos en Benidorm?",
    a: "Sí. Diseñamos tartas y dulces para bodas, comuniones, bautizos y eventos de empresa en Benidorm y alrededores, ajustados al número de comensales y al estilo de la mesa dulce. Cuéntanos la fecha y los invitados y te proponemos opciones.",
  },
  {
    q: "¿Puedo encargar dulces para una mesa dulce o un detalle de empresa?",
    a: "Sí. Preparamos selecciones de dulces de autor para mesas dulces, detalles de bienvenida y regalos de empresa, con cantidades y presentación pensadas para tu evento. Pídenos propuesta y la adaptamos a tu presupuesto.",
  },
  {
    q: "¿Me atendéis en inglés?",
    a: "Sí. Benidorm recibe a muchas personas venidas de fuera, así que puedes escribirnos en español o en inglés por WhatsApp y te ayudamos con el encargo igual de rápido.",
  },
  {
    q: "¿Y si la tarta que imagino no encaja en mi presupuesto?",
    a: "Dínoslo abiertamente. Envíanos una referencia, el número de personas y la fecha, y te proponemos una versión del mismo estilo que sí encaje: ajustar el tamaño, las capas o los acabados suele resolverlo.",
  },
];
