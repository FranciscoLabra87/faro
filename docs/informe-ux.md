# Informe UX / Conversión — Faro

**Fecha:** 2026-07-09 · **Sitio:** https://faro.franciscolabra87.workers.dev
**Objetivo:** convertir visitas en cotizaciones por WhatsApp (mercado: emprendedores, profesionales y comercios locales de Chile).

---

## 1. Resumen ejecutivo

La página tiene una **arquitectura de conversión correcta y por sobre el promedio**: propuesta de valor clara en el hero, precios visibles con plan destacado, comparativa, garantía, proceso, FAQ y formulario. El diseño (estética dev: terminal, mono, teal/menta) es distintivo y comunica competencia técnica.

Los problemas no son de estructura — son de **confianza y fricción**:

1. **El canal de conversión está roto**: WhatsApp vacío en `lib/config.ts` → el formulario cae a un mailto a `hola@faro.cl`, un dominio que no es tuyo. Cada lead de hoy se pierde.
2. **Cero contenido visual real**: sin fotos, sin rostro humano, testimonios declarados "de ejemplo", capturas de casos dependientes de un servicio externo (mShots). Una página que vende webs debe *ser la demostración*.
3. **Sin imagen OG**: los links compartidos por WhatsApp — el canal principal de difusión en Chile — salen sin preview visual.

Lo que hacen las páginas que sí venden servicios web y aquí falta: **rostro del que hace el trabajo, prueba social verificable, un solo camino de conversión sin fricción (WhatsApp directo, siempre visible), y demostración visual del producto** (las webs entregadas, en dispositivos reales).

---

## 2. Qué hacen las páginas que consiguen resultados (principios aplicables)

| Principio | Estado en Faro |
|---|---|
| Propuesta de valor específica en <5 seg (qué, para quién, en cuánto tiempo, cuánto cuesta) | ✅ Bien: "48 horas", "$0/mes", "desde $60.000" |
| Un CTA dominante, repetido, sin fricción (WhatsApp en LatAm) | ⚠️ CTA existe pero WhatsApp no configurado; sin botón flotante |
| Rostro humano del que entrega el servicio | ❌ No existe. En servicios 1-a-1 esto es el factor #1 de confianza |
| Prueba social verificable (nombres reales, negocios reales, links) | ⚠️ Casos reales con link ✅ / testimonios de ejemplo ❌ |
| Demostración del producto (portafolio visual, antes/después, video) | ⚠️ Solo mockup esquemático + mShots externos |
| Anclaje de precio y reducción de riesgo (garantía) | ✅ Bien: comparativa + garantía |
| Urgencia creíble (cupos, fechas) | ⚠️ "agenda limitada" sin evidencia |
| Velocidad y mobile impecables | ✅ Estático, CSS liviano, responsive |
| Preview correcto al compartir el link (OG image) | ❌ Falta |
| Medición (analytics, eventos en CTAs) | ❌ No hay |

---

## 3. Hallazgos por prioridad

### P0 — Bloqueadores de conversión (hacer hoy)

| # | Hallazgo | Dónde | Acción |
|---|---|---|---|
| 1 | WhatsApp vacío → leads caen a mailto de un correo inexistente | `lib/config.ts` | Poner número real `569XXXXXXXX` y correo real |
| 2 | Sin imagen OG → links por WhatsApp sin preview | `app/layout.tsx`, `public/` | Crear `public/og.png` 1200×630 (marca + "tu web en 48 h · desde $60.000") y referenciarla en `openGraph.images` y `twitter.images` |
| 3 | Sin botón flotante de WhatsApp | nuevo componente | Botón fijo abajo-derecha, visible tras scroll, con `wa.me` + mensaje precargado. Estándar del mercado chileno |
| 4 | Testimonios etiquetados "de ejemplo" — anti-confianza activa | `Testimonios.tsx` | Opción A: conseguir 2-3 reales de los casos ya publicados (SM Caballero, etc.). Opción B: ocultar la sección hasta tenerlos. No publicar ficticios |

### P1 — Alto impacto (esta semana)

| # | Hallazgo | Dónde | Acción |
|---|---|---|---|
| 5 | Sin rostro humano — nadie sabe quién está detrás | nueva sección | Sección "quién hace tu web" antes de Contacto: foto real, nombre, 3 líneas (experiencia, compromiso, por qué sin hosting mensual). En servicios personales esto sube conversión más que cualquier rediseño |
| 6 | Capturas de casos vía mShots (lentas, externas, pueden fallar/mostrar placeholder) | `Casos.tsx` | Capturas propias optimizadas (WebP ~1280×960, <120 KB) en `public/casos/`, `next/image` no aplica (export estático) → `<img>` con `loading="lazy"` ya está bien |
| 7 | Urgencia sin evidencia ("agenda limitada") | `Hero.tsx` | Concretar: "X cupos de entrega esta semana" mantenido a mano, o quitar. Urgencia falsa detectada = confianza destruida |
| 8 | Sin analytics → imposible optimizar | `app/layout.tsx` | Cloudflare Web Analytics (gratis, sin cookies, 1 script) + eventos en clicks de CTA/WhatsApp |
| 9 | Formulario: 4 campos + select obligatorios | `Contacto.tsx` | Reducir a Nombre + ¿Qué necesitas? (plan opcional). Cada campo obligatorio resta. El mensaje arma igual el texto de WhatsApp |
| 10 | Header CTA `cotizar_gratis()` — guiño dev que el comprador no-técnico puede no leer como botón | `Header.tsx` | Test simple: cambiar a "Cotizar gratis" (el estilo dev vive bien en eyebrows/badges; el CTA principal debe ser inequívoco) |

### P2 — Mejora continua (próximas 2 semanas)

| # | Hallazgo | Acción |
|---|---|---|
| 11 | Números de Lighthouse en `Rendimiento.tsx` son objetivo, no medición | Medir el sitio real (PageSpeed Insights) y poner números reales + link al reporte ("compruébalo tú mismo" = confianza) |
| 12 | Sin sitemap.xml / robots.txt | Generarlos en `public/` (sitio de 1 página: trivial) |
| 13 | Hero visual esquemático | Mantener terminal (es marca), pero considerar reemplazar el mockup genérico por captura real de un caso dentro del frame de navegador |
| 14 | Sección Casos: solo 3 y uno es `pages.dev` | Cuando haya más clientes, priorizar casos con dominio .cl propio (refuerza la promesa "dominio a tu nombre") |
| 15 | Schema.org ausente | JSON-LD `LocalBusiness`/`Service` con precios — mejora snippet en Google |
| 16 | `next@14.2.5` con CVE crítico conocido | Subir a 14.2.x parcheado (no requiere migración) |

---

## 4. Imágenes y videos — qué producir exactamente

Hoy: `public/` contiene solo `favicon.svg`. Lista de producción:

### Imágenes (orden de prioridad)

| Archivo | Contenido | Specs | Uso |
|---|---|---|---|
| `public/og.png` | Fondo oscuro de marca (#04120f), logo Faro, titular "Tu web encendida en 48 horas", "desde $60.000 · $0 hosting/mes" | 1200×630 PNG <300 KB | OG/Twitter — preview en WhatsApp |
| `public/casos/smcaballero.webp` etc. (×3) | Captura full del hero de cada sitio publicado | 1280×960 WebP <120 KB c/u | Reemplazo de mShots en `Casos.tsx` |
| `public/founder.webp` | Foto real, fondo simple, mirando a cámara, luz natural. No stock | 800×800 WebP <80 KB | Sección "quién hace tu web" |
| `public/casos/*-phone.webp` (opcional) | Los 3 casos montados en mockup de teléfono | 600×1200 WebP | Refuerzo visual "se ve bien en celular" |
| Fotos de clientes de testimonios (con permiso) o logo del negocio | reemplaza iniciales en `Testimonios.tsx` | 200×200 | Prueba social verificable |

**Regla:** nada de stock photos genéricas (personas dándose la mano, laptops con café). Bajan conversión en servicios locales: huelen a plantilla — exactamente lo contrario de lo que Faro vende.

### Video (opcional, alto impacto)

| Pieza | Contenido | Formato | Ubicación |
|---|---|---|---|
| Demo 45–60 s | Screen-recording real: brief → deploy → sitio cargando en un celular real. Sin voz o con subtítulos (se ve muted en móvil) | MP4 H.264, <3 MB, muted, loop, `playsinline` | Hero (reemplaza o complementa mockup) o sección Proceso |
| Testimonio en video 20–30 s (cuando exista) | Cliente real, vertical, estilo selfie — autenticidad > producción | MP4 vertical | Testimonios |

**Nota técnica:** export estático → videos autoalojados en `public/` (livianos) o Cloudflare Stream si crecen.

---

## 5. Orden de ejecución sugerido

```
Fase 1 (P0, sin assets): config WhatsApp real → botón flotante WA → ocultar
        testimonios de ejemplo → analytics
Fase 2 (P0/P1, requiere assets): og.png → capturas propias de casos →
        sección "quién hace tu web" con foto
Fase 3 (P1/P2): formulario corto → CTA header → urgencia concreta →
        Lighthouse real → sitemap/robots → schema.org → bump next
```

Las fases 1 y 3 son 100 % código. La fase 2 necesita que produzcas: 1 foto tuya, 3 capturas, 1 og.png (la og.png y las capturas se pueden generar desde el mismo repo).
