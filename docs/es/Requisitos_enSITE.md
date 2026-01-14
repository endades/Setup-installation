# Requisitos instalación enSITE

## 1. Requisitos para la configuración de la App enSITE

Antes de proceder con la instalación y configuración de enSITE, es necesario realizar algunas configuraciones previas.

### 1.1. Requisitos mínimos

Los requisitos mínimos para instalar enSITE en un móvil o tablet dependen de la plataforma, están determinados por **Google Play Store en Android** y por **App Store en iOS**

| Requisito | Android (Play Store) | iOS (App Store) |
|-----------|--------------------|----------------|
| **Versión mínima del sistema** | Android 8.0 (API 26) recomendado; puede variar según la app | iOS 16 (Apple exige nuevas apps y actualizaciones en las últimas 3 versiones) |
| **CPU / Arquitectura** | ARM 64 bits (arm64-v8a); CPU multi-core suficiente para apps estándar | Todos los iPhones/iPads recientes usan ARM 64 bits |
| **RAM mínima** | 2 GB mínimo; 3 GB recomendado | 2 GB mínimo; Apple no lo verifica explícitamente, depende de la versión de iOS y el modelo |
| **Almacenamiento libre** | 200 MB mínimo para instalación; depende de la app | 200 MB mínimo para instalación; depende de la app |
| **Pantalla / resolución** | ≥720p recomendada; compatible con distintos tamaños (móvil y tablet) | Todos los dispositivos compatibles con iOS 16 o superior |
| **GPU / gráficos** | Integrada compatible con OpenGL ES o Vulkan | Integrada en el SoC Apple; todos compatibles con iOS 16 |
| **Conectividad** | Wi-Fi / Datos móviles; Bluetooth, GPS si la app lo requiere | Wi-Fi / Datos móviles; Bluetooth, GPS si la app lo requiere |
| **Permisos / políticas** | Políticas de privacidad si hay datos; uso mínimo de permisos; cumplimiento de Google Play | Políticas de privacidad; cumplimiento de App Store Review Guidelines; permisos justificados |
| **Compatibilidad de dispositivo** | Filtrada por el desarrollador (minSdkVersion, arquitectura, modelo, región) | Determinada automáticamente por Apple según versión de iOS y modelo de dispositivo |
| **Actualizaciones** | Depende de Google Play y compatibilidad declarada | Apple exige compatibilidad con las últimas versiones; si tu dispositivo no actualiza iOS, no podrá recibir nuevas versiones |

> **Observaciones:**

1. **Android**: incluso si el hardware es suficiente, la app puede bloquear la actualización por filtros de Play Store.

2. **iOS**: la limitación principal es la versión de iOS que tu dispositivo soporte. Apple controla automáticamente compatibilidad.

3. RAM y almacenamiento: son recomendaciones prácticas, Google no bloquea oficialmente por RAM.

### 1.2. Antivirus y Firewall

> Sigue las recomendaciones del apartado **2. Ajustes del antivirus y firewall** en [Configuración del Sistema](Configuracion_Sistema.md).

---

## 2. Instalación de enSITE

1. Desde una tablet o movil con conexion wifi acceder a playstore/ apple store buscar y bajar la app enSITE.

    ![enSITE](../images/Instal_config/ensite.jpg)

2. Abrir enSITE y añadir esas informaciones:

    - Código de licencia (proporcionado por Endades)

    - Servidor e instancia (la misma donde tiene instalado ENBLAU en el servidor)

    - Base de datos (la misma donde tiene instalado ENBLAU en el servidor)

    - Usuario - **sa**

    - Contraseña - **Endades$0**

    ![enSITE](../images/Instal_config/ensite1.jpg)

   - Login **usuario** y **contraseña** (el mismo que se utiliza en ENBLAU)

    ![enSITE](../images/Instal_config/ensite2.jpg)

    ![enSITE](../images/Instal_config/ensite3.jpg)

---

> **Nota:** Para más información sobre [Posibles errores](Posibles_Errores.md/#14-error-de-conexion-al-servidor-desde-ensite)

---

> ⚠️ **Importante**: Es obligatorio utilizar como mínimo **SQL Server 2022** para garantizar la compatibilidad con futuras versiones de ENBLAU y enSITE.