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

// Importar páginas de colorear de cada categoría
import { bobbieGoodsPages } from './categories/bobbie-goods';
import { stitchPages } from './categories/stitch';
import { spidermanPages } from './categories/spiderman';

// Combinar todas las páginas
export const coloringPages: ColoringPage[] = [
  ...bobbieGoodsPages,
  ...stitchPages,
  ...spidermanPages,
];


