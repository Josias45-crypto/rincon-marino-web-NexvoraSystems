# El Rincón Marino — Web Demo
### Desarrollado por NexvoraSystems

---

## Estructura del proyecto

```
rincon-marino/
│
├── index.html          ← Estructura HTML (solo contenido, sin estilos ni scripts)
│
├── css/
│   └── style.css       ← Todos los estilos, variables, responsive
│
├── js/
│   └── main.js         ← Toda la lógica: tabs, navbar, formulario, animaciones
│
├── img/                ← AQUÍ van todas las imágenes (ver lista abajo)
│   ├── hero.jpg
│   ├── about.jpg
│   ├── ceviche-clasico.jpg
│   ├── ceviche-mixto.jpg
│   ├── tiradito.jpg
│   ├── arroz-mariscos.jpg
│   ├── chaufa.jpg
│   ├── chupe.jpg
│   ├── parihuela.jpg
│   ├── chicha.jpg
│   ├── sour.jpg
│   ├── galeria-1.jpg
│   ├── galeria-2.jpg
│   ├── galeria-3.jpg
│   ├── galeria-4.jpg
│   ├── galeria-5.jpg
│   ├── cliente-1.jpg
│   ├── cliente-2.jpg
│   └── cliente-3.jpg
│
└── README.md           ← Este archivo
```

---

## Tamaños recomendados para imágenes

| Imagen         | Archivo             | Tamaño recomendado |
|----------------|---------------------|--------------------|
| Hero (fondo)   | hero.jpg            | 1600x900px         |
| Nosotros       | about.jpg           | 800x600px          |
| Platos menú    | ceviche-*.jpg, etc. | 600x400px          |
| Galería        | galeria-1.jpg, etc. | 800x600px          |
| Avatares clientes | cliente-*.jpg    | 80x80px            |

**Tip:** Optimiza las imágenes antes de subir usando https://squoosh.app
Esto hace que la web cargue más rápido.

---

## Cómo subir a GitHub Pages

1. Crea un repositorio en GitHub con el nombre `rincon-marino`
2. Sube todos los archivos manteniendo la estructura de carpetas
3. Ve a Settings → Pages
4. En "Source" selecciona la rama `main` y carpeta `/ (root)`
5. Guarda y espera 1-2 minutos
6. Tu web estará en: `https://tu-usuario.github.io/rincon-marino`

---

## Cómo agregar colaboradores en GitHub

1. Ve a Settings → Collaborators
2. Clic en "Add people"
3. Busca por usuario de GitHub a Josias, Jean y Jhesy
4. Envía la invitación

---

## Cómo personalizar el contenido

### Cambiar nombre del restaurante
Busca `El Rincón Marino` en `index.html` y reemplaza por el nombre real.

### Cambiar número de WhatsApp
Busca `51962345678` en `index.html` y reemplaza por el número real del cliente.

### Cambiar dirección
Busca `Jr. General Prado 456` y reemplaza por la dirección real.

### Cambiar el mapa
En `index.html` busca el `<iframe>` dentro de `.ubicacion__mapa`.
Ve a Google Maps → busca la dirección → Compartir → Insertar mapa → copia el src.

### Cambiar colores
Abre `css/style.css` y edita las variables en `:root` al inicio del archivo.

---

## Créditos

Diseño y desarrollo: **NexvoraSystems** — Huánuco, Perú
