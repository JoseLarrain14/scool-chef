# Guía de Colores - Scool Chef

## Paleta de Colores Actual

Basada en el logo oficial de Scool Chef (celeste/azul).

### Color Primario (Celeste/Azul del Logo)
- **Uso**: Fondos principales, textos destacados, botones primarios
- **Tonos**:
  - `primary-50`: `#f0f6fa` - Fondos muy claros
  - `primary-100`: `#e0ecf4` - Fondos claros
  - `primary-200`: `#c1d9e9` - Bordes y decoraciones
  - `primary-300`: `#93bdd9` - Elementos secundarios
  - `primary-400`: `#6b8fad` - **Color principal del logo**
  - `primary-500`: `#577a94` - Botones y elementos interactivos
  - `primary-600`: `#48627a` - Hover states
  - `primary-700`: `#3c5164` - Degradados oscuros
  - `primary-800`: `#354554` - Degradados muy oscuros
  - `primary-900`: `#303b48` - Fondos oscuros
  - `primary-950`: `#1f2730` - Fondos muy oscuros

### Color Acento (Azul Cielo)
- **Uso**: Elementos destacados, iconos, números, CTAs secundarios
- **Tonos**:
  - `accent-50`: `#f0f9ff` - Fondos muy claros
  - `accent-100`: `#e0f2fe` - Fondos de iconos
  - `accent-200`: `#bae6fd` - Decoraciones
  - `accent-300`: `#7dd3fc` - Textos destacados
  - `accent-400`: `#38bdf8` - Elementos interactivos
  - `accent-500`: `#0ea5e9` - **Color de acento principal**
  - `accent-600`: `#0284c7` - Hover states
  - `accent-700`: `#0369a1` - Estados activos
  - `accent-800`: `#075985` - Elementos oscuros
  - `accent-900`: `#0c4a6e` - Fondos oscuros
  - `accent-950`: `#082f49` - Fondos muy oscuros

### Colores Neutros
- **Uso**: Textos, fondos, bordes
- Gama de grises desde `neutral-50` (muy claro) hasta `neutral-950` (muy oscuro)

## Cómo Cambiar los Colores

### Opción 1: Cambiar en Tailwind Config (Recomendado)

Edita el archivo `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: "#f0f6fa",   // Cambia estos valores
    100: "#e0ecf4",
    // ... resto de tonos
  },
  accent: {
    50: "#f0f9ff",   // Cambia estos valores
    100: "#e0f2fe",
    // ... resto de tonos
  },
}
```

### Opción 2: Cambiar Variables CSS Globales

Edita el archivo `app/globals.css`:

```css
:root {
  --primary: 214 26% 56%;        /* HSL del color primario */
  --accent: 200 85% 60%;         /* HSL del color de acento */
  --ring: 214 26% 56%;           /* Color del focus ring */
}
```

**Nota**: Después de cambiar estos archivos, **debes reiniciar el servidor de desarrollo** (`npm run dev`) para que los cambios se apliquen.

## Dónde se Usan los Colores

### Color Primario (`primary-xxx`)
- Logo del header (cuando se hace scroll)
- Títulos y subtítulos destacados
- Botones primarios
- Fondos de secciones (tonos claros)
- Degradados del hero section
- Badges y etiquetas
- Enlaces en hover

### Color Acento (`accent-xxx`)
- Números y estadísticas destacadas
- Iconos de características
- Botones secundarios
- Elementos interactivos (botones de navegación del carousel)
- Decoraciones y detalles visuales

### Ejemplos de Uso en el Código

```tsx
// Texto con color primario
<span className="text-primary-500">Texto destacado</span>

// Botón primario
<Button variant="primary">Botón</Button>

// Botón secundario (usa accent)
<Button variant="secondary">Botón</Button>

// Fondo con color de acento
<div className="bg-accent-100">Contenido</div>

// Icono con color de acento
<Icon className="text-accent-500" />
```

## Herramientas Útiles

### Generar Paleta de Colores
Si quieres cambiar a un color completamente diferente, puedes usar estas herramientas para generar una paleta completa:

1. **Tailwind Shades**: https://www.tailwindshades.com/
2. **UI Colors**: https://uicolors.app/create
3. **Coolors**: https://coolors.co/

### Convertir HEX a HSL
Para actualizar las variables CSS en `app/globals.css`, necesitas convertir colores HEX a HSL:

1. **HSL Color Converter**: https://www.w3schools.com/colors/colors_hsl.asp
2. **Color Converter**: https://convertingcolors.com/

## Checklist para Cambiar Colores

- [ ] Actualizar `tailwind.config.ts` con la nueva paleta
- [ ] Actualizar `app/globals.css` con los valores HSL correspondientes
- [ ] Actualizar `app/manifest.ts` con el nuevo `theme_color`
- [ ] Reiniciar el servidor de desarrollo (`npm run dev`)
- [ ] Verificar todas las secciones del sitio
- [ ] Actualizar este documento (`COLORES.md`) con los nuevos valores

## Notas Importantes

1. **Siempre reinicia el servidor** después de cambiar colores en `tailwind.config.ts` o `app/globals.css`
2. **Mantén la consistencia**: Usa `primary` para elementos principales y `accent` para detalles
3. **Accesibilidad**: Asegúrate de que haya suficiente contraste entre texto y fondo (usa herramientas como WebAIM Contrast Checker)
4. **Prueba en diferentes secciones**: Hero, About, Services, Schools, TAPIN, Testimonials, Contact, Footer


