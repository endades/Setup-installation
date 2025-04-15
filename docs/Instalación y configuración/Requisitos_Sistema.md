# Requisitos del sistema

## 1. Requisitos de Instalación del Cliente

La instalación del cliente es una instalación local en un ordenador.

---

### 1.1 Requisitos Recomendados

| Componente       | Especificación                                              |
|------------------|-------------------------------------------------------------|
| Sistema Operativo | Windows 11 Pro; .NET Framework desde la versión 4.7.2      |
| Procesador        | Intel Core i7 Gen10 / AMD Ryzen 7 Serie 5000              |
| Memoria           | Sistema operativo de 64 bits, 16 GB de RAM                 |
| Disco Duro        | SSD, 150 GB de espacio disponible                          |
| Conexiones        | USB                                                        |
| Resolución        | 1920 px x 1080 px                                          |

---

### 1.2 Requisitos Mínimos

> **Nota:**  
> Para lograr una mayor velocidad de funcionamiento, se recomienda utilizar discos duros SSD. Son mucho más rápidos en el procesamiento que los discos duros HDD convencionales.

| Componente       | Especificación                                              |
|------------------|-------------------------------------------------------------|
| Sistema Operativo | Windows 10 Versión 22H2; .NET Framework desde la versión 4.7.2 |
| Procesador        | Intel Core i5 Gen10 / AMD Ryzen Serie 2000                |
| Memoria           | Sistema operativo de 32 bits: 4 GB de RAM<br>Sistema operativo de 64 bits: 6 GB de RAM |
| Disco Duro        | 80 GB de espacio disponible                                |
| Conexiones        | USB                                                        |
| Resolución        | 1280 px x 1024 px                                          |

---

## 2. Servidor

### 2.1. Solución Cliente-Servidor

Se recomienda una solución cliente-servidor si el software debe distribuirse a varios clientes desde una ubicación central.  
Para ello, el software solo necesita instalarse en un único servidor.

---

### 2.2. Solución con Servidor Terminal

Se recomienda una solución con servidor terminal si varios usuarios utilizan el software directamente en el servidor terminal.  
En este caso, el software solo necesita instalarse en un único servidor terminal.

---

### 2.3. Servidor Terminal con Acceso a Unidad de Red

Es posible combinar una solución con servidor terminal y una solución cliente-servidor.

En un entorno de servidor terminal, una instalación central del software es utilizada directamente por uno o varios usuarios desde el servidor.  
También se pueden utilizar clientes a través de una solución cliente-servidor.

---

### 2.4. Solución de Virtualización

La virtualización de servidores se utiliza cuando varios servidores virtuales deben funcionar sobre un mismo hardware físico.  
Para ello, se instala un software de virtualización en un servidor anfitrión, el cual proporciona los recursos a las máquinas virtuales.

> La virtualización puede usarse, pero es de esperar una pérdida de rendimiento.  
> El trabajo con asignación no física de núcleos y el uso de **overprovisioning** genera pérdidas adicionales.  
> Dependiendo del grado de **overprovisioning**, puede haber deterioros si otros sistemas generan carga en el hipervisor y consumen recursos.  
> Esto aplica especialmente si no se configuran valores límite, prioridades o reservas fijas.  
> Los valores límite fijos pueden afectar negativamente a la distribución de la carga, impidiendo que los recursos no utilizados del hipervisor se asignen temporalmente a otros sistemas.

---

### 2.5. Requisitos del Servidor

#### Sistemas Operativos Compatibles

- Windows Server 2016  
- Windows Server 2019  
- Windows Server 2022  
- .NET Framework versión 4.8  

#### Discos Duros

> Para lograr una mayor velocidad de funcionamiento, se recomienda el uso de discos SSD.

---

## 3. Red y conexión a internet 

### 3.1. Conexión a Internet

#### Requisitos Mínimos

| Tipo de conexión | Velocidad mínima        |
|------------------|--------------------------|
| Descarga         | 10 Mbit/s                |
| Subida           | 1 Mbit/s                 |

#### Servicios que requieren conexión a Internet

- Actualizaciones    
- Informes de estado  
- Mantenimiento remoto  
- Sistema de ayuda en línea    
- Registros de cambios (Changelogs)  

---

### 3.2. Conexión de Red

Se requiere una conexión de red estable para procesar datos mediante recursos compartidos y/o VPN en un entorno de red.

| Velocidad mínima | 1 Gbit/s |

---

## Información Técnica

## Directorio Temporal

Durante la ejecución del programa, los datos se almacenan en una carpeta temporal específica para cada usuario.

> ⚠️ **Atención**  
> Con las licencias de dongle de usuario único y dongle de servidor, el directorio temporal se encuentra en el soporte de datos local del cliente.  
> En la solución con servidor terminal, el directorio temporal se encuentra en el disco local del servidor terminal.  
> Se crea una carpeta independiente en el directorio temporal para cada usuario.  
> Se deben disponer al menos **30 GB de espacio libre** en disco para **cada usuario** en el servidor terminal.

- Este directorio debe estar en un disco **local** y **físico**.
- Debe tener **al menos 30 GB libres**.
- Se recomienda el uso de **discos SSD**, por su mayor velocidad frente a HDD.
- Ruta típica del directorio temporal:  
  `{Unidad}:\Users\{nombre_usuario}\AppData\Local\OFCAS\…`
- No se recomienda eliminar información de esta carpeta.
  Si se elimina, el programa reconstruirá los datos al iniciarse nuevamente, lo cual puede alargar el tiempo de carga.
- Los usuarios deben tener **permisos de lectura, escritura y modificación** tanto en este directorio como en el del programa.

---

## Licenciamiento con Llave USB

### Llave USB Única

- El programa se licencia con una **llave USB individual**.
- Esta llave es entregada junto con la instalación del software.
- Se conecta directamente al PC.
- ❌ **No es posible el acceso remoto (Escritorio Remoto) a un PC con una llave de este tipo conectada.**

### Llave USB de Servidor

- Se usa para licencias en redes.
- Es necesario configurar una **carpeta compartida en red** con letra de unidad asignada.  
  Ejemplo: `\\Server\Logikal` → `L:\Logikal\`
- El programa utiliza los **puertos TCP/UDP 1947** para comunicarse con la llave.
- Si la llave y los clientes están en diferentes rangos IP, se debe activar **IP forwarding**.
- Todos los equipos deben tener instalado el **driver de la llave**.  
  Se puede descargar desde: [http://dongle.orgadata.com](http://dongle.orgadata.com)
- El driver instala el servicio **"Sentinel LDK License Manager"**, que debe estar siempre activo en segundo plano.

---

## Conexión a Internet

Se necesita conexión a Internet para:

- Actualizaciones del programa  
- Soporte técnico  
- Reportes de estado  
- Mantenimiento remoto  
- Sistema de ayuda en línea  
- Boletines de noticias  
- Registro de cambios  

### Velocidades Recomendadas

| Tipo     | Mínima           | Recomendada       |
|----------|------------------|-------------------|
| Descarga | 6.016 kbit/s     | 50.000 kbit/s     |
| Subida   | 576 kbit/s       | 10.000 kbit/s     |

---

## Ajustes del Cortafuegos

- Las actualizaciones provienen de:  
  `www.orgadataupdate.de (84.201.70.172)`
- Se utilizan los **puertos FTP 21 y 11965**.
- Los **puertos FTP pasivos del 50000 al 52000** son necesarios para actualizaciones y subidas (como reportes).
- Las llaves de servidor en red usan los **puertos TCP y UDP 1947**.

---

## Conexión de Red

> ⚠️ **Atención:**  
> Para garantizar el acceso a unidades de red, estas deben declararse como **"de confianza"**.  
> Contacte con su administrador del sistema si tiene dudas.

El tratamiento de datos en red mediante carpetas compartidas o VPN requiere:

| Tipo de Conexión | Velocidad mínima | Recomendada   |
|------------------|------------------|---------------|
| Red              | 100 Mbit/s       | 1 Gbit/s      |

---

## Seguridad de los Datos

- Antes de realizar una copia de seguridad, asegúrese de que **LogiKal está completamente cerrado**, incluyendo todas sus carpetas y subcarpetas.
- ❌ **No es necesario hacer copia de las carpetas temporales.**