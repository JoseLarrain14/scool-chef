# Scool Chef - Plan de Diseño y Desarrollo

## 📋 Contexto del Proyecto

### Información de la Empresa
- **Nombre**: Scool Chef
- **Fundación**: 2009 (más de 15 años de experiencia)
- **Propietario**: Matías Bouey Blanco
- **Tagline**: "Alimentación de calidad para instituciones educativas"
- **Valores**: Calidad, confianza, comunidad, alimentación saludable, eficiencia

### Servicios Principales
1. Preparación y distribución de almuerzos nutritivos
2. Gestión de cafeterías escolares
3. Creación de menús balanceados (diseñados por nutricionistas)
4. Personal en terreno
5. Control de higiene y calidad
6. Catering para eventos

### Clientes Actuales (8 colegios en Santiago)
1. Colegio Sagrados Corazones Manquehue (Vitacura)
2. Colegio del Sagrado Corazón Apoquindo ("Monjas Inglesas")
3. Colegio Tabancura
4. Colegio Huelén
5. Colegio Padre Hurtado y Juanita de Los Andes
6. Villa María Academy
7. Colegio Cordillera
8. Colegio La Maisonnette

**Total de raciones**: Más de 5,000 raciones diarias

### Diferenciadores Clave
- Menús frescos y balanceados planificados por nutricionistas
- Estándares rigurosos de higiene y gestión de cocina en terreno
- Personal amable y profesional
- Integración con TAPIN: billetera digital para pagos sin efectivo y gestión de cuentas

---

## 🎨 Análisis de Sitios de Referencia

### School Eatery (schooleatery.com)
**Características destacadas:**
- Hero con carousel de imágenes
- Navegación clara y simple
- Diseño limpio con mucho espacio en blanco
- Colores cálidos y acogedores
- Testimonios integrados
- Enfoque en simplicidad y usabilidad

### Nutrislice (nutrislice.com)
**Características destacadas:**
- Diseño moderno y minimalista
- Tipografía grande y legible
- Uso de iconos geométricos
- Colores vibrantes pero profesionales
- Secciones bien diferenciadas con animaciones sutiles
- Enfoque en tecnología y innovación

### SAGE Dining (sagedining.com)
**Características destacadas:**
- Diseño elegante y sofisticado
- Paleta de colores tierra (verdes, beiges, ocres)
- Fotografías de alta calidad
- Mensaje claro de valores y comunidad
- Testimonios prominentes
- Secciones: Food, People, Education

---

## 🎨 Sistema de Diseño

### Paleta de Colores

#### Colores Primarios (Verde - Naturaleza y Salud)
```
Primary 50:  #f0f9f4  (verde muy claro)
Primary 100: #dcf2e3  (verde claro)
Primary 200: #bce5cb  (verde suave)
Primary 300: #8fd1a8  (verde medio-claro)
Primary 400: #5ab47e  (verde medio)
Primary 500: #36915f  (verde principal) ⭐
Primary 600: #27734b  (verde oscuro)
Primary 700: #215c3e  (verde muy oscuro)
Primary 800: #1d4a34  (verde casi negro)
Primary 900: #193e2c  (verde negro)
```

#### Colores de Acento (Naranja - Calidez y Energía)
```
Accent 50:  #fef7ed  (naranja muy claro)
Accent 100: #fdecd4  (naranja claro)
Accent 200: #fbd6a8  (naranja suave)
Accent 300: #f8b971  (naranja medio)
Accent 400: #f49538  (naranja)
Accent 500: #f17a12  (naranja principal) ⭐
Accent 600: #e26008  (naranja oscuro)
Accent 700: #bb4809  (naranja muy oscuro)
```

#### Colores Neutros (Grises para texto y fondos)
```
Neutral 50:  #fafafa  (casi blanco)
Neutral 100: #f5f5f5  (blanco roto)
Neutral 200: #e5e5e5  (gris muy claro)
Neutral 300: #d4d4d4  (gris claro)
Neutral 400: #a3a3a3  (gris medio)
Neutral 500: #737373  (gris)
Neutral 600: #525252  (gris oscuro)
Neutral 700: #404040  (gris muy oscuro)
Neutral 800: #262626  (casi negro)
Neutral 900: #171717  (negro)
```

#### Uso de Colores
- **Primario (Verde)**: Botones principales, enlaces, elementos destacados, acentos
- **Acento (Naranja)**: CTAs secundarios, badges, alertas positivas
- **Neutros**: Texto, fondos, bordes, sombras
- **Blanco**: Fondos principales, tarjetas, espacios limpios

### Tipografía

#### Familia de Fuentes
- **Display/Headings**: Inter (Weight: 600, 700, 800) - Para títulos y encabezados
- **Body**: Inter (Weight: 400, 500) - Para texto de cuerpo
- **Sans-serif de respaldo**: system-ui, -apple-system, sans-serif

#### Escala Tipográfica
```
H1 (Hero):      48px - 72px  (font-display, weight 800)
H2 (Secciones): 36px - 48px  (font-display, weight 700)
H3 (Subsección): 24px - 32px (font-display, weight 600)
H4:             20px - 24px  (font-display, weight 600)
Body Large:     18px         (font-sans, weight 400)
Body:           16px         (font-sans, weight 400)
Body Small:     14px         (font-sans, weight 400)
Caption:        12px         (font-sans, weight 400)
```

### Espaciado
- Usar sistema de escala de 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Secciones principales: padding vertical de 80px - 120px
- Cards: padding de 24px - 32px

---

## 🏗️ Estructura del Sitio

### Página Principal (Homepage)

#### 1. Hero Section
- Imagen/video de fondo: Cocina en acción, estudiantes felices, chefs preparando comida
- Headline: "Nutrición de calidad en tu colegio"
- Subheading: Descripción breve de la misión
- CTA principal: "Conoce nuestros servicios" (scroll suave a servicios)
- CTA secundario: "Agenda una reunión" (link a contacto)

#### 2. About Us (Quiénes Somos)
- Historia de Matías Bouey y la empresa
- Más de 15 años de experiencia
- Compromiso con nutrición y educación
- Certificaciones/awards (si aplica)
- Fotos del equipo
- Breves biografías de personal clave

#### 3. Nuestros Servicios
- Cards con iconos para cada servicio:
  1. Creación de menús (nutricionista)
  2. Preparación de alimentos
  3. Gestión de cafeterías
  4. Planificación nutricional
  5. Catering de eventos
  6. Control de higiene
- Layout: Grid de 3 columnas (responsive: 1 col móvil, 2 tablet, 3 desktop)
- Cada card: Icono + Título + Descripción corta + Foto representativa

#### 4. Colegios que Confían en Nosotros
- Grid responsive con logos/fotos de los 8 colegios
- Efecto hover: muestra testimonial breve o número de estudiantes
- Estadística destacada: "Más de 5,000 almuerzos preparados diariamente"
- Layout: Grid de 4 columnas en desktop

#### 5. TAPIN Digital Wallet
- Explicación breve de qué es TAPIN
- Beneficios: cargar dinero, ver saldos, pagar sin efectivo
- Botones de descarga: App Store y Google Play
- Screenshots/mockups de la interfaz
- Enlaces deep link a la app

#### 6. Galería / Media
- Grid de imágenes con lightbox
- Fotos de: preparación de comida, estudiantes felices, personal de cocina
- Videos cortos (opcional)
- Filtros por categoría: Alimentos, Instalaciones, Eventos

#### 7. Testimonios
- Carousel/slider con testimonios
- Fuentes: Directores de colegio, padres, estudiantes
- Formato: Quote + Nombre + Cargo/Colegio + Foto
- Auto-play con controles manuales

#### 8. Contacto y CTA Final
- Formulario de contacto
- Información de contacto: teléfono, email, dirección
- Mapa de Google (ubicación de cocina central/oficina)
- CTA: "Agenda una sesión de degustación"

### Footer
- Logo Scool Chef
- Navegación: Enlaces principales
- Secciones:
  - Empresa (About, Servicios, Blog)
  - Legal (Políticas, Privacidad)
  - Contacto (Formulario, Redes sociales)
- Redes sociales: Instagram, LinkedIn, Facebook
- Newsletter signup
- Copyright: "© 2025 Scool Chef. Todos los derechos reservados."

---

## 🧩 Componentes Planificados

### Componentes Base (UI)
1. **Button** - Variantes: primary, secondary, outline, ghost
2. **Card** - Container para contenido con sombra sutil
3. **Input** - Campos de formulario estilizados
4. **Textarea** - Área de texto para formularios
5. **Modal/Lightbox** - Para galería de imágenes
6. **Carousel/Slider** - Para testimonios y hero
7. **Accordion** - Para expandir detalles de servicios
8. **Badge** - Etiquetas y tags

### Componentes de Layout
1. **Header/Navbar**
   - Logo Scool Chef (izquierda)
   - Menú de navegación (centro): Inicio, Quiénes Somos, Servicios, Colegios, Contacto
   - CTA "Agenda una reunión" (derecha)
   - Hamburger menu para móvil
   - Sticky navigation (se fija al hacer scroll)

2. **Footer**
   - 4 columnas en desktop, stack en móvil
   - Links organizados por categoría
   - Redes sociales con iconos
   - Newsletter signup
   - Copyright

### Componentes de Sección
1. **HeroSection** - Hero con imagen/video y CTAs
2. **AboutSection** - Historia y valores
3. **ServicesSection** - Grid de servicios con cards
4. **SchoolsSection** - Grid de colegios con hover effects
5. **TapinSection** - Información sobre TAPIN con botones de descarga
6. **GallerySection** - Grid de imágenes con lightbox
7. **TestimonialsSection** - Carousel de testimonios
8. **ContactSection** - Formulario y mapa

---

## 🎯 Principios de Diseño

### Identidad Visual
- **Profesional pero cálido**: Transmitir confianza sin ser frío
- **Limpio e higiénico**: Espacios en blanco, colores frescos
- **Moderno y accesible**: Diseño contemporáneo que sea fácil de usar
- **Enfoque en la comunidad**: Resaltar el aspecto humano y relacional

### User Experience (UX)
- **Navegación clara**: Menú intuitivo, breadcrumbs si es necesario
- **Scroll suave**: Animaciones sutiles al hacer scroll
- **Mobile-first**: Diseño responsive desde móvil hacia desktop
- **Performance**: Imágenes optimizadas, lazy loading
- **Accesibilidad**: WCAG 2.1 AA, contraste adecuado, navegación por teclado

### Animaciones y Transiciones
- **Fade-in on scroll**: Elementos aparecen suavemente
- **Hover effects**: Feedback visual en elementos interactivos
- **Transiciones suaves**: 200-300ms para cambios de estado
- **Parallax sutil**: En hero section (opcional, no excesivo)

---

## 🔧 Stack Tecnológico

### Framework y Core
- **Next.js 14** (App Router) - React framework con SSR
- **TypeScript** - Type safety
- **React 18** - UI library

### Estilos
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animaciones fluidas

### Componentes y Utilidades
- **Lucide React** - Iconos modernos y consistentes
- **clsx + tailwind-merge** - Manejo de clases condicionales

### Imágenes y Media
- **Next.js Image** - Optimización automática de imágenes
- **Placeholder images** - Para desarrollo (Unsplash, etc.)

### SEO y Metadata
- **Next.js Metadata API** - SEO optimizado
- **Open Graph tags** - Para compartir en redes sociales
- **Structured Data** - Schema.org para local business

---

## 📱 Breakpoints Responsive

```
Mobile:    < 640px  (sm)
Tablet:    640px - 1024px (md, lg)
Desktop:   > 1024px (xl, 2xl)
```

### Estrategia Mobile-First
- Diseñar primero para móvil
- Expandir layout para tablet y desktop
- Menú hamburguesa en móvil
- Grid de 1 columna → 2 columnas → 3-4 columnas

---

## 📝 Contenido y Textos

### Tono de Voz
- **Profesional pero cercano**: No demasiado formal
- **Claro y directo**: Sin jerga innecesaria
- **Enfocado en beneficios**: No solo características, sino cómo ayudamos
- **En español formal**: Respetuoso pero accesible

### Ejemplos de Headlines
- Hero: "Nutrición de calidad en tu colegio"
- About: "Más de 15 años alimentando el futuro"
- Services: "Servicios integrales para tu institución educativa"
- Schools: "Colegios que confían en nosotros"
- Tapin: "Pagos digitales simples y seguros"
- Contact: "Hablemos sobre cómo podemos ayudar a tu colegio"

---

## 🎬 Flujo de Usuario Objetivo

### Usuario Primario: Director/Administrador de Colegio
1. Llega al sitio → Ve hero con mensaje claro
2. Se interesa → Hace scroll para conocer servicios
3. Quiere saber más → Lee "Quiénes Somos" y testimonios
4. Quiere contacto → Llena formulario o hace clic en CTA

### Usuario Secundario: Padre/Madre de Familia
1. Busca información sobre el servicio → Ve sección de colegios
2. Quiere usar TAPIN → Va a sección TAPIN para descargar app
3. Quiere ver menús → (futuro: link a portal de menús)

---

## 🚀 Fases de Desarrollo

### Fase 1: Estructura Base ✅
- [x] Configuración Next.js + TypeScript + Tailwind
- [x] Sistema de colores y tipografía
- [ ] Layout base (Header + Footer)

### Fase 2: Componentes Core
- [ ] Componentes UI base (Button, Card, Input, etc.)
- [ ] Header con navegación
- [ ] Footer completo

### Fase 3: Secciones Principales
- [ ] Hero Section
- [ ] About Section
- [ ] Services Section
- [ ] Schools Section

### Fase 4: Secciones Adicionales
- [ ] TAPIN Section
- [ ] Gallery Section
- [ ] Testimonials Section
- [ ] Contact Section

### Fase 5: Pulimiento y Optimización
- [ ] Animaciones y transiciones
- [ ] Optimización de imágenes
- [ ] SEO completo
- [ ] Testing responsive
- [ ] Accesibilidad (WCAG 2.1 AA)

---

## 📌 Notas Importantes

### Contenido por Aprobar
- Fotos reales de la empresa (actualmente usando placeholders)
- Videos para hero section
- Testimonios específicos de colegios
- Información de contacto exacta
- Ubicación para mapa de Google

### Integración TAPIN
- Obtener assets oficiales (logos, colores)
- Links de descarga oficiales
- Deep links a la app
- Screenshots actualizados de la interfaz

### Futuras Expansiones
- Blog/News section
- Portal de menús por colegio
- Sección de recetas/nutrición para padres
- Portal de empleo
- Área privada para colegios clientes

---

## ✅ Checklist de Calidad

### Antes de Lanzar
- [ ] Todas las imágenes optimizadas (WebP, lazy loading)
- [ ] Todos los textos revisados (ortografía, gramática)
- [ ] Links funcionando correctamente
- [ ] Formulario de contacto funcional
- [ ] Mapa de Google integrado
- [ ] Responsive en todos los breakpoints
- [ ] Performance score > 90 (Lighthouse)
- [ ] Accesibilidad score > 90 (Lighthouse)
- [ ] SEO optimizado (meta tags, structured data)
- [ ] Pruebas en navegadores: Chrome, Firefox, Safari, Edge

---

**Última actualización**: Diciembre 2024
**Versión del documento**: 1.0

