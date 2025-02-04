# 🎉 Amigo Secreto 🎉

Este proyecto es una aplicación web para sortear un **Amigo Secreto** entre un grupo de amigos. Los usuarios pueden agregar nombres a una lista y luego sortear un nombre al azar.

## 🚀 Tecnologías Utilizadas

- **HTML**
- **CSS**
- **JavaScript**

## 📂 Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Contiene los estilos CSS para la aplicación.
- `app.js`: Contiene la lógica JavaScript para agregar amigos y sortear un nombre.

## 📝 Instrucciones de Uso

1. Clona el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa los nombres de tus amigos en el campo de texto y haz clic en **"Añadir"**.
4. Una vez que hayas agregado todos los nombres, haz clic en **"Sortear amigo"** para seleccionar un nombre al azar.

## ❗ Posibles Errores y Soluciones

### Error: No se puede agregar un nombre vacío

**Descripción:** Si intentas agregar un nombre vacío, aparecerá una alerta indicando que debes ingresar un nombre.

**Solución:** Asegúrate de ingresar un nombre en el campo de texto antes de hacer clic en **"Añadir"**.

### Error: No hay amigos para sortear

**Descripción:** Si intentas sortear un nombre sin haber agregado amigos, aparecerá una alerta indicando que no hay amigos para sortear.

**Solución:** Agrega al menos un nombre a la lista antes de intentar sortear.

### Error: La lista de amigos no se actualiza

**Descripción:** Si la lista de amigos no se actualiza después de agregar un nombre, puede ser un problema con la función `actualizarListaAmigos`.

**Solución:** Verifica que el elemento con el id `listaAmigos` exista en el HTML y que la función `actualizarListaAmigos` esté siendo llamada correctamente después de agregar un nombre.