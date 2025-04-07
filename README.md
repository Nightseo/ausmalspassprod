# Despliegue en Vercel

Este proyecto está configurado para ser desplegado en Vercel.

## Pasos para el despliegue

1. Crea una cuenta en [Vercel](https://vercel.com/signup) si aún no tienes una.
2. Ve al [Dashboard de Vercel](https://vercel.com/dashboard).
3. Haz clic en "Add New..." y selecciona "Project".
4. Importa el repositorio de GitHub: `https://github.com/Nightseo/ausmalspassprod`.
5. Configura el proyecto con los siguientes ajustes:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (debería detectarse automáticamente)
   - **Output Directory**: `.next` (debería detectarse automáticamente)
   - Si necesitas variables de entorno, agrégalas en la sección "Environment Variables".
6. Haz clic en "Deploy".

## Configuración personalizada

Este proyecto ya incluye:
- `vercel.json` para la configuración avanzada de Vercel
- Configuración en `next.config.mjs` optimizada para Vercel

## Ventajas de usar Vercel para Next.js

- Integración perfecta con Next.js (Vercel es la empresa creadora de Next.js)
- Optimización de imágenes automática
- Edge Functions para mejor rendimiento
- Despliegues automáticos con cada push al repositorio
- Previews automáticas en pull requests
- CDN global para servir tu contenido más rápido

## Comandos disponibles

```bash
# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm run start
``` 