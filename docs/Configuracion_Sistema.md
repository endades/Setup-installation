# Configuración del sistema


## 1. Redes compartidas y ajustes de red

El servidor proporciona el programa a los clientes mediante el uso compartido de red.

### 1.1. Requisitos para usuarios de Windows

Los usuarios de Windows necesitarán permisos de lectura, escritura y realizar cambios en:

- La unidad de red donde esté compartida la carpeta de **Enblau**.
- Las unidades de red del programa deben contener una **letra de unidad**. No basta con asignar un directorio sin una letra de unidad.
- No es posible utilizar la aplicación del programa a través de una **
- Cada archivo y carpeta en el directorio del programa.

> ⚠️ **Atención:**  
> Para garantizar un acceso estable a las unidades de red, deben declararse como confiables. Para más información, contacte a su administrador de sistema.

- **Permisos de instalación:**  
  Se requieren permisos de administrador.

---

## 2. Ajustes del antivirus y firewall

> ⚠️ **Atención:**  
> La evaluación de riesgos de las configuraciones y excepciones aquí mencionadas sigue siendo su responsabilidad o la responsabilidad de su proveedor de servicios de TI.

- Asegurarse de que no bloqueen la instalación o conexión de la app.

---

### 2.1. Establecer la unidad de red como segura

Establecer la unidad como «segura» garantiza la estabilidad necesaria del programa en el trabajo diario y optimiza el rendimiento del programa.

 Pasos:

1. Mantenga presionada la tecla **Windows** en su teclado y presione la tecla **R**.
2. Ingrese `inetcpl.cpl` en la ventana que aparece.
3. Se abrirán las **Opciones de Internet**.
4. Seleccione:  
   `Seguridad` > `Intranet local` > `Sitios` > `Avanzado`
5. Agregue las direcciones de red como:  
   `\\Dirección_IP` y `Dirección_IP`  
   Ejemplo: `\\192.168.15.66` y `192.168.15.66`

---

### 2.2. Excepciones para el antivirus

 Preparar la configuración de excepciones en el software antivirus:

- **Almacenar los certificados** con los que se firma la solicitud del programa.  
  Los certificados pueden extraerse de archivos `*.exe`. Algunos antivirus permiten observar el almacén de certificados del sistema operativo.

- **Subir de nivel la confianza** o el grupo de confianza asignado en el software antivirus:
  - Para los archivos `.exe`/`.dll` en el directorio del programa.
  - O para el nivel de confianza del certificado de firma de código.

---

### 2.3. Establecer excepciones en el antivirus para:

- El **directorio del programa**, por ejemplo, en la unidad de red donde está instalado el programa.  
  Incluye todas las carpetas necesarias hasta llegar al directorio del programa.

---

