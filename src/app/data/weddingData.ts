export type WeddingLocation = {
  title: string;
  name: string;
  address: string;
  mapsUrl: string;
};

export type ItineraryItemData = {
  time: string;
  title: string;
  locationKey?: "civil" | "party";
  icon: "heart" | "wine" | "book" | "utensils" | "music" | "moon";
};

export type WeddingData = {
  couple: {
    bride: string;
    groom: string;
    displayName: string;
    shortName: string;
  };
  event: {
    dateTime: string;
    displayDate: string;
    heroDate: string;
    time: string;
    calendarUrl: string;
    reminderUrl: string;
    dateCards: Array<{
      type: "civil" | "party";
      title: string;
      day: string;
      month: string;
      time: string;
      venue: string;
      address: string;
      mapsUrl: string;
    }>;
  };
  guestDefaults: {
    guestName: string;
    reservedSeats: number;
  };
  copy: {
    welcomeEyebrow: string;
    welcomeHint: string;
    heroEyebrow: string;
    heroPhrase: string;
    countdownIntro: string;
    storyTitle: string;
    story: string;
    galleryTitle: string;
    itinerarySubtitle: string;
    rsvpTitle: string;
    rsvpDeadline: string;
    musicTitle: string;
    musicText: string;
    triviaTitle: string;
    triviaText: string;
    albumTitle: string;
    albumText: string;
    giftsText: string;
    transfersText: string;
    instagramTitle: string;
    instagramText: string;
    closingPhrase: string;
    footer: string;
    footerUrl: string;
  };
  images: {
    welcome: string;
    hero: string;
    gallery: Array<{ src: string; alt: string; className?: string }>;
    closing: string;
  };
  locations: {
    civil: WeddingLocation;
    party: WeddingLocation;
  };
  dressCode: {
    title: string;
    note: string;
  };
  integrations: {
    rsvpFormUrl: string;
    songFormUrl: string;
    photoAlbumUrl: string;
    instagramUrl: string;
    hashtag: string;
  };
  gifts: {
    title: string;
    alias: string;
    cbu: string;
    holder: string;
    bank: string;
    externalUrl: string;
  };
  hotels: Array<{
    name: string;
    description: string;
    url: string;
  }>;
  transfers: Array<{
    label: string;
    url: string;
  }>;
  itinerary: ItineraryItemData[];
  trivia: {
    question: string;
    options: string[];
  };
  music: {
    backgroundUrl: string;
    playlistTitle: string;
    playlistOwner: string;
    playlistCover: string;
    playlistUrl: string;
    tracks: Array<{
      title: string;
      artist: string;
      duration: string;
    }>;
  };
};

export const weddingData: WeddingData = {
  couple: {
    bride: "Cecilia",
    groom: "Diego",
    displayName: "Cecilia & Diego",
    shortName: "Ceci & Diego",
  },
  event: {
    dateTime: "2027-03-19T16:15:00-03:00",
    displayDate: "19 de marzo de 2027",
    heroDate: "19 . 03 . 2027",
    time: "A partir de las 16:15 hs",
    calendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20de%20Cecilia%20y%20Diego&dates=20270319T191500Z/20270320T080000Z&details=Celebramos%20nuestra%20boda%20y%20queremos%20compartirla%20con%20vos.&location=Estancia%20Villa%20Maria%2C%20Ruta%20205%20Km%2047",
    reminderUrl: "/calendar/boda-cecilia-diego.ics",
    dateCards: [
      {
        type: "civil",
        title: "Civil",
        day: "18",
        month: "Marzo",
        time: "12:00",
        venue: "Registro Civil",
        address: "Direccion de Registro Civil",
        mapsUrl: "https://maps.google.com/",
      },
      {
        type: "party",
        title: "Festejo",
        day: "19",
        month: "Marzo",
        time: "20:00",
        venue: "Salon Bernal",
        address: "Direccion Salon Bernal",
        mapsUrl: "https://maps.google.com/?q=Salon%20Bernal",
      },
    ],
  },
  //Valores predeterminados de invitado para facilitar la creacion de invitados 
  //  nuevos desde el admin
  guestDefaults: {
    guestName: "Familia Brodersen",
    reservedSeats: 4,
  },
  copy: {
    welcomeEyebrow: "Nuestra boda",
    welcomeHint: "Hace clic para ingresar",
    heroEyebrow: "Nos casamos",
    heroPhrase: "El dia mas esperado de nuestras vidas esta llegando.",
    countdownIntro: "Falta cada vez menos para celebrar juntos",
    storyTitle: "Nuestra historia",
    story:
      "El dia mas esperado de nuestras vidas esta llegando, y queremos compartirlo con ustedes.",
    galleryTitle: "Nosotros...",
    itinerarySubtitle: "Cronograma del dia",
    rsvpTitle: "Confirma tu asistencia",
    rsvpDeadline: "Por favor confirma antes del 19 de febrero de 2027.",
    musicTitle: "Que cancion no puede faltar?",
    musicText: "Ayudanos a armar la playlist de la fiesta.",
    triviaTitle: "Cuanto nos conoces?",
    triviaText: "Juga una trivia sobre nuestra historia.",
    albumTitle: "Comparti tus fotos y videos",
    albumText: "Podes subir tus fotos a nuestro album compartido.",
    giftsText:
      "El mejor regalo es que nos acompanes, pero si queres hacernos un presente, podes contribuir a nuestra luna de miel.",
    transfersText: "Te compartimos opciones para llegar y volver del evento.",
    instagramTitle: "Comparti tus fotos",
    instagramText: "Usa nuestro hashtag para que podamos revivir cada momento.",
    closingPhrase: "Gracias por ser parte de nuestra historia.",
    footer: "Disenado con amor para Ceci & Diego por HEMISFERIO SUR",
    footerUrl: "https://estudiohs.com.ar/",
  },
  images: {
    welcome:
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    hero: "/images/hero.jpg",
    gallery: [
      {
        src: "/images/1.jpg",
        alt: "Familia",
        className: "col-span-2 md:col-span-2 aspect-[4/3]",
      },
      {
        src: "/images/2.jpg",
        alt: "Novios",
        className: "aspect-[3/4]",
      },
      {
        src: "/images/4.jpg",
        alt: "los novios",
        className: "aspect-[3/4]",
      },
      {
        src: "/images/3.jpg",
        alt: "Retrato de los novios",
        className: "col-span-2 md:col-span-3 aspect-[21/9] mt-2 md:mt-0",
      },
    ],
    closing:
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  locations: {
    civil: {
      title: "Civil",
      name: "Registro Civil",
      address: "Direccion de Registro Civil",
      mapsUrl: "https://maps.google.com/",
    },
    party: {
      title: "Festejo",
      name: "Salon Bernal",
      address: "Direccion Salon Bernal",
      mapsUrl: "https://maps.google.com/?q=Salon%20Bernal",
    },
  },
  dressCode: {
    title: "Formal elegante",
    note: "El blanco queda reservado para la novia.",
  },
  integrations: {
    rsvpFormUrl: "https://forms.google.com/",
    songFormUrl: "https://forms.google.com/",
    photoAlbumUrl: "https://photos.google.com/",
    instagramUrl: "https://www.instagram.com/",
    hashtag: "#CeciYDiego2027",
  },
  gifts: {
    title: "Regalos",
    alias: "ceciydiego.27",
    cbu: "0000000000000000000000",
    holder: "Cecilia Dominguez",
    bank: "Banco Galicia",
    externalUrl: "https://www.mercadopago.com.ar/",
  },
  hotels: [
    {
      name: "Hotel Boutique Central",
      description: "A 10 min del salon",
      url: "https://maps.google.com/",
    },
  ],
  transfers: [
    {
      label: "Servicio de combis",
      url: "https://forms.google.com/",
    },
    {
      label: "Remises recomendados",
      url: "https://maps.google.com/",
    },
  ],
  itinerary: [
    { time: "16:15 hs", title: "Ceremonia", icon: "heart", locationKey: "civil" },
    { time: "18:30 hs", title: "Recepcion", icon: "wine" },
    { time: "21:00 hs", title: "Cena", icon: "utensils" },
    { time: "23:30 hs", title: "Fiesta", icon: "music" },
    { time: "05:00 hs", title: "Fin de fiesta", icon: "moon" },
  ],
  trivia: {
    question: "Donde fue nuestra primera cita?",
    options: ["En un cafe en Palermo", "En la facultad", "En el cine"],
  },
  music: {
    backgroundUrl: "",
    playlistTitle: "Nuestra playlist",
    playlistOwner: "Ceci & Diego",
    playlistCover: "/images/hero.jpg",
    playlistUrl: "https://open.spotify.com/",
    tracks: [
      { title: "Gloria", artist: "Laura Branigan", duration: "04:49" },
      { title: "La Isla del Sol", artist: "El Simbolo", duration: "03:42" },
      { title: "Universo Paralelo", artist: "La K'onga", duration: "03:37" },
    ],
  },
};
