# Requisitos del sistema

## 1. Requisitos de instalación del cliente

La instalación del cliente (servidor) es una instalación local en un ordenador.

---

### 1.1 Requisitos recomendados

| Componente       | Especificación                                              |
|------------------|-------------------------------------------------------------|
| Sistema Operativo | Windows 11 Pro; .NET Framework desde la versión 4.8     |
| Procesador        | Intel Core i7 Gen10 / AMD Ryzen 7 Serie 5000              |
| Memoria           | Sistema operativo de 64 bits, 16 GB de RAM                 |
| Disco Duro        | SSD, 150 GB de espacio disponible                          |
| Conexiones        | USB                                                        |
| Resolución        | 1920 px x 1080 px                                          |

---

### 1.2 Requisitos mínimos

> **Nota:**  
> Para lograr una mayor velocidad de funcionamiento, se recomienda utilizar discos duros SSD. Son mucho más rápidos en el procesamiento que los discos duros HDD convencionales.

| Componente       | Especificación                                              |
|------------------|-------------------------------------------------------------|
| Sistema Operativo | Windows 10 Versión 22H2; .NET Framework desde la versión 4.8 |
| Procesador        | Intel Core i5 Gen10 / AMD Ryzen Serie 2000                |
| Memoria           | Sistema operativo de 64 bits: 4 GB de RAM<br>Sistema operativo de 64 bits: 6 GB de RAM |
| Disco Duro        | 80 GB de espacio disponible                                |
| Conexiones        | USB                                                        |
| Resolución        | 1280 px x 1024 px                                          |

---

## 2. Servidor

### 2.1. Solución cliente-servidor

Se recomienda una solución cliente-servidor si el software debe distribuirse a varios clientes desde una ubicación central.  
Para ello, el software solo necesita instalarse en un único servidor.

---

### 2.2. Solución con servidor terminal

Se recomienda una solución con servidor terminal si varios usuarios utilizan el software directamente en el servidor terminal.  
En este caso, el software solo necesita instalarse en un único servidor terminal.

---

### 2.3. Servidor terminal con acceso a unidad de red

Es posible combinar una solución con servidor terminal y una solución cliente-servidor.

En un entorno de servidor terminal, una instalación central del software es utilizada directamente por uno o varios usuarios desde el servidor.  
También se pueden utilizar clientes a través de una solución cliente-servidor.

---

### 2.4. Solución de virtualización

La virtualización de servidores se utiliza cuando varios servidores virtuales deben funcionar sobre un mismo hardware físico.  
Para ello, se instala un software de virtualización en un servidor anfitrión, el cual proporciona los recursos a las máquinas virtuales.

> La virtualización puede usarse, pero es de esperar una pérdida de rendimiento.  
> El trabajo con asignación no física de núcleos y el uso de **overprovisioning** genera pérdidas adicionales.  
> Dependiendo del grado de **overprovisioning**, puede haber deterioros si otros sistemas generan carga en el hipervisor y consumen recursos.  
> Esto aplica especialmente si no se configuran valores límite, prioridades o reservas fijas.  
> Los valores límite fijos pueden afectar negativamente a la distribución de la carga, impidiendo que los recursos no utilizados del hipervisor se asignen temporalmente a otros sistemas.

---

### 2.5. Requisitos del servidor

#### Sistemas operativos compatibles

- Windows Server 2016  
- Windows Server 2019  
- Windows Server 2022  
- .NET Framework versión 4.8  

#### Requisitos en PC

- Se necesita cumplir los siguientes requisitos en PC [Requisitos de instalación del cliente](#1-requisitos-de-instalacion-del-cliente)

#### Discos duros

> Para lograr una mayor velocidad de funcionamiento, se recomienda el uso de discos SSD.

---

## 3. Red y conexión a internet 

### 3.1. Conexión a internet

#### Requisitos Mínimos

| Tipo de conexión | Velocidad mínima        |
|------------------|--------------------------|
| Descarga         | 10 Mbit/s                |
| Subida           | 1 Mbit/s                 |

#### Servicios que requieren conexión a internet

- Actualizaciones     
- Mantenimiento remoto  
- Sistema de ayuda en línea    
- Registros de cambios (Changelogs)  

---

### 3.2. Conexión de red

Se requiere una conexión de red estable para procesar datos mediante recursos compartidos y/o VPN en un entorno de red.

| Velocidad mínima | 1 Gbit/s |

---

## 4. Información técnica

### 4.1. Conexión a internet

Se necesita conexión a Internet para:

- Actualizaciones del programa  
- Soporte técnico    
- Mantenimiento remoto  
- Sistema de ayuda en línea 

### 4.2. Velocidades recomendadas

| Tipo     | Mínima           | Recomendada       |
|----------|------------------|-------------------|
| Descarga | 6.016 kbit/s     | 50.000 kbit/s     |
| Subida   | 576 kbit/s       | 10.000 kbit/s     |

---

### 4.3. Conexión de red

> ⚠️ **Atención:**  
> Para garantizar el acceso a unidades de red, estas deben declararse como **"de confianza"**.  
> Contacte con su administrador del sistema si tiene dudas.

El tratamiento de datos en red mediante carpetas compartidas o VPN requiere:

| Tipo de Conexión | Velocidad mínima | Recomendada   |
|------------------|------------------|---------------|
| Red              | 100 Mbit/s       | 1 Gbit/s      |

---

