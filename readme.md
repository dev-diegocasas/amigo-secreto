**Proyecto: Amigo Secreto**

**Descripción**\
Este proyecto implementa una aplicación web sencilla para realizar el tradicional sorteo de “amigo secreto”. Permite registrar una lista de participantes, mostrarla en pantalla y sortear aleatoriamente un nombre.

---

## 📋 Tabla de Contenidos

1. [Características](#-características)
2. [Tecnologías](#-tecnologías)
3. [Instalación](#-instalación)
4. [Uso](#-uso)
5. [Estructura de Archivos](#-estructura-de-archivos)
6. [Funciones Principales](#-funciones-principales)
7. [Mejoras Futuras](#-mejoras-futuras)

---

## 🔥 Características

- Agregar participantes a la lista de «amigos secretos».
- Mostrar dinámicamente la lista en pantalla.
- Sortear aleatoriamente un participante.
- Validaciones básicas: campo de nombre no vacío.

---

## 🛠 Tecnologías

- JavaScript (ES6+)
- HTML5
- CSS3 (opcional para estilos)

---

## 🚀 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador favorito.

---

## 🎯 Uso

1. En la caja de texto, ingresa el nombre de un participante y haz clic en **Agregar**.
2. Verás la lista actualizada de participantes.
3. Para realizar el sorteo, haz clic en **Sortear** y obtendrás un nombre aleatorio resaltado.
4. Para reiniciar, recarga la página.

---

## 📂 Estructura de Archivos

```bash
├── index.html       # Marca la estructura básica de la página
├── styles.css       # (Opcional) Estilos de la aplicación
└── script.js        # Lógica principal en JavaScript
```

---

## ⚙️ Funciones Principales

- **agregarAmigoSecreto()**

  - Lee el valor del input `#amigo`.
  - Verifica que no esté vacío.
  - Agrega el nombre al array `amigosSecretos` y limpia el campo.

- **actualizarListaAmigos()**

  - Vacía el contenedor de la lista (`#listaAmigos`).
  - Recorre `amigosSecretos` y genera un `<li>` por cada nombre.

- **sortearAmigoSecreto()**

  - Verifica que haya al menos un participante.
  - Calcula un índice aleatorio entre 0 y `amigosSecretos.length - 1`.
  - Muestra el resultado en `#resultado`.

---

## 🚧 Mejoras Futuras

- Eliminar participantes de la lista.
- Permitir múltiples sorteos sin recargar la página (hasta agotar la lista).
- Guardar y recuperar la lista desde `localStorage`.
- Añadir estilos y animaciones.



