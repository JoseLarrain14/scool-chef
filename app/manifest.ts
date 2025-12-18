import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Scool Chef - Alimentación de calidad para instituciones educativas',
    short_name: 'Scool Chef',
    description: 'Servicios de catering de alta calidad para colegios en Santiago. Más de 8,200 estudiantes confían en nosotros.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

