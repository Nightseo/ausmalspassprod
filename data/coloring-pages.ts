export type ColoringPage = {
  id: string
  slug: string
  title: string
  description: string
  thumbnailUrl: string
  imageUrl: string
  category: string
  categorySlug: string
  keywords?: string[] // Hacemos keywords opcional con ?
}

export const coloringPages: ColoringPage[] = [
  {
    id: "vinicius-jr",
    slug: "vinicius-jr-real-madrid",
    title: "Vinicius Jr. - Real Madrid",
    description:
      "Dibujo para colorear de la estrella brasileña del Real Madrid, Vinicius Jr., con su camiseta oficial.",
    thumbnailUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dibujo-de-vinicius-jr-real-madrid-colorear.jpg-boSf9qAjlK5lcUFeiUQzV00jGkoSt8.jpeg",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dibujo-de-vinicius-jr-real-madrid-colorear.jpg-boSf9qAjlK5lcUFeiUQzV00jGkoSt8.jpeg",
    category: "Deportes",
    categorySlug: "deportes",
    keywords: ["vinicius jr", "real madrid", "futbol", "deportes", "jugador"],
  },
  {
    id: "butterfly",
    slug: "mariposa-hermosa",
    title: "Mariposa Hermosa",
    description: "Un diseño detallado de mariposa perfecto para todas las edades.",
    thumbnailUrl: "/images/butterfly-thumbnail.svg",
    imageUrl: "/images/butterfly.svg",
    category: "Animales",
    categorySlug: "animales",
    keywords: ["mariposa", "animales", "insectos", "naturaleza"],
  },
  {
    id: "dinosaur",
    slug: "dinosaurio-amigable",
    title: "Dinosaurio Amigable",
    description: "Un lindo dinosaurio que a los niños les encantará colorear.",
    thumbnailUrl: "/images/dinosaur-thumbnail.svg",
    imageUrl: "/images/dinosaur.svg",
    category: "Animales",
    categorySlug: "animales",
    keywords: ["dinosaurio", "animales", "prehistórico", "niños"],
  },
  {
    id: "mandala",
    slug: "mandala-relajante",
    title: "Mandala Relajante",
    description: "Un patrón de mandala complejo para colorear de forma consciente.",
    thumbnailUrl: "/images/mandala-thumbnail.svg",
    imageUrl: "/images/mandala.svg",
    category: "Patrones",
    categorySlug: "patrones",
    keywords: ["mandala", "patrones", "relajación", "arte"],
  },
  {
    id: "flowers",
    slug: "flores-de-primavera",
    title: "Flores de Primavera",
    description: "Un ramo de hermosas flores para alegrar tu día.",
    thumbnailUrl: "/images/flowers-thumbnail.svg",
    imageUrl: "/images/flowers.svg",
    category: "Naturaleza",
    categorySlug: "naturaleza",
    keywords: ["flores", "primavera", "naturaleza", "jardín"],
  },
  {
    id: "space",
    slug: "aventura-espacial",
    title: "Aventura Espacial",
    description: "Cohetes, planetas y estrellas para entusiastas del espacio.",
    thumbnailUrl: "/images/space-thumbnail.svg",
    imageUrl: "/images/space.svg",
    category: "Fantasía",
    categorySlug: "fantasia",
    keywords: ["espacio", "cohetes", "planetas", "estrellas", "aventura"],
  },
  {
    id: "underwater",
    slug: "mundo-submarino",
    title: "Mundo Submarino",
    description: "Explora las profundidades del océano con esta escena submarina.",
    thumbnailUrl: "/images/underwater-thumbnail.svg",
    imageUrl: "/images/underwater.svg",
    category: "Naturaleza",
    categorySlug: "naturaleza",
    keywords: ["submarino", "océano", "mar", "animales marinos", "naturaleza"],
  },
  {
    id: "castle",
    slug: "castillo-de-cuento",
    title: "Castillo de Cuento",
    description: "Un castillo mágico de tus cuentos de hadas favoritos.",
    thumbnailUrl: "/images/castle-thumbnail.svg",
    imageUrl: "/images/castle.svg",
    category: "Fantasía",
    categorySlug: "fantasia",
    keywords: ["castillo", "cuento de hadas", "magia", "fantasía"],
  },
  {
    id: "animals",
    slug: "animales-del-bosque",
    title: "Animales del Bosque",
    description: "Lindos animales del bosque en su hábitat natural.",
    thumbnailUrl: "/images/animals-thumbnail.svg",
    imageUrl: "/images/animals.svg",
    category: "Animales",
    categorySlug: "animales",
    keywords: ["animales", "bosque", "naturaleza", "fauna"],
  },
  {
    id: "bobbie-goods-para-colorear",
    slug: "bobbie-goods-para-colorear",
    title: "Bobbie Goods para colorear",
    description: "Dibujo de boobie goods en cabaña para colorear",
    thumbnailUrl:
      "https://www.mundocolorear.es/wp-content/uploads/2024/12/dibujo-de-bobbie-goods-abrazandose-para-colorear.jpeg",
    imageUrl:
      "https://www.mundocolorear.es/wp-content/uploads/2024/12/dibujo-de-bobbie-goods-abrazandose-para-colorear.jpeg",
    category: "Bobbie Goods",
    categorySlug: "bobbie-goods",
    keywords: ["bobbie goods", "dibujo", "cabaña", "colorear"],
  },
]

