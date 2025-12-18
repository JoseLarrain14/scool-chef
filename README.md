# Scool Chef - Sitio Web Oficial

Sitio web profesional para Scool Chef, empresa de catering escolar con más de 15 años de experiencia en Santiago, Chile.

## 🚀 Tecnologías

- **Next.js 14** - React framework con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animaciones fluidas
- **Lucide React** - Iconos modernos

## 📋 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Animaciones suaves con Framer Motion
- ✅ SEO optimizado
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Integración con TAPIN (billetera digital)
- ✅ Formulario de contacto
- ✅ Testimonios de clientes
- ✅ Galería de servicios

## 🎨 Paleta de Colores

Basada en el logo oficial de Scool Chef para mantener consistencia de marca.

### Primario (Celeste/Azul)
- Primary 400: `#6b8fad` - Color principal del logo
- Primary 500: `#577a94` - Variante más oscura
- Representa: Profesionalismo, confianza, limpieza

### Acento (Azul Cielo)
- Accent 400: `#38bdf8` - Para resaltar elementos clave
- Accent 500: `#0ea5e9` - Variante más vibrante
- Representa: Energía, modernidad, claridad

### Base
- Blanco: `#FFFFFF` - Limpieza y claridad
- Grises neutros para texto y fondos sutiles

## 📁 Estructura del Proyecto

```
scool-chef/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Textarea.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── SchoolsSection.tsx
│   │   ├── TapinSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
├── public/
├── PLAN-DISEÑO.md
└── README.md
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🌐 Despliegue

El sitio está optimizado para desplegar en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- Cualquier plataforma que soporte Next.js

### Despliegue en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

## 📝 Secciones del Sitio

### 1. Hero Section
- Imagen de fondo impactante
- Headline principal
- CTAs a servicios y contacto
- Estadísticas clave

### 2. About Us (Quiénes Somos)
- Historia de la empresa
- Valores corporativos
- Experiencia de 15+ años

### 3. Services (Servicios)
- 6 servicios principales con cards
- Imágenes representativas
- Descripciones detalladas

### 4. Schools (Colegios)
- Grid de 8 colegios clientes
- Hover effects con testimonios
- Estadística de estudiantes

### 5. TAPIN
- Explicación de la billetera digital
- Features principales
- Botones de descarga (App Store / Google Play)
- Mockup de la app

### 6. Testimonials (Testimonios)
- Carousel de testimonios
- Directores, padres y personal
- Navegación interactiva

### 7. Contact (Contacto)
- Formulario de contacto
- Información de contacto
- Mapa de ubicación (placeholder)

### 8. Footer
- Links de navegación
- Redes sociales
- Newsletter signup
- Legal

## 🎯 Próximos Pasos

### Contenido
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Agregar videos para hero section
- [ ] Completar información de contacto
- [ ] Integrar Google Maps

### Funcionalidad
- [ ] Implementar envío de formulario (backend)
- [ ] Agregar Google Analytics
- [ ] Implementar newsletter signup
- [ ] Agregar blog/noticias

### Optimización
- [ ] Optimizar imágenes (WebP)
- [ ] Implementar lazy loading
- [ ] Mejorar performance (Lighthouse)
- [ ] Testing cross-browser

## 📞 Contacto

**Scool Chef**
- Email: contacto@scoolchef.cl
- Teléfono: +56 9 XXXX XXXX
- Ubicación: Santiago, Región Metropolitana, Chile

## 📄 Licencia

© 2025 Scool Chef. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Scool Chef**

