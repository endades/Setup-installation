# Posibles errores

## 1. Errores y soluciones

### 1.1. Error de conexión al servidor y base de datos

**Descripción del error:**  
  Al intentar seleccionar la base de datos en **ENBLAU**, aparece un mensaje de error cuando no se encuentra el servidor o la instancia.  
  Este problema puede deberse a bloqueos por parte del **antivirus** o **firewall** en el servidor donde se ejecuta ENBLAU.

  ![Error base de datos](/docs/images/Erros/error_bdd.jpg)

**Solución:**  
  Revisar las reglas y excepciones del antivirus o firewall en el servidor. Ejemplo:

  1. Desde el Firewall Configuración avanzada - **Reglas de entrada** verificar que los puertos **1433 TCP** (puerto estándar de SQL Server) y **1434 UDP** (para descubrimiento de instancia) estén habilitados:

  ![Error base de datos](/docs/images/Erros/error_bdd2.jpg)

  2. Desde **Sql Server Configuration Manager** verificar si la instancia **ENDADES2022** tiene el TCP/IP habilitado:

  ![Error base de datos](/docs/images/Erros/error_bdd3.jpg)

    
  > **Nota:** Para más detalles, consulta la sección **2. Ajustes del antivirus y firewall** en la guía de [Configuración del Sistema](Configuracion_Sistema.md).

  Una vez revisado acceder a **enCONNECT** y seleccionar el servidor y la base de datos.

---

### 1.2. Error de conexión a fábrica

**Descripción del error:**  
  Al intentar conectarse a fábrica, aparece un error indicando que la ruta de ejecución para conectar con **Logikal** no está definida correctamente.

  ![Error ruta](/docs/images/Erros/error_path.jpg)

**Solución:**  
  Verifica que la ruta de la aplicación **Logikal** sea la correcta.
    
  - En ENBLAU, dirígete a:  
    **General → Logikal - Conexión y Proyectos**.

  ![Solución ruta 1](/docs/images/Erros/solucion_path2.jpg)

  ![Solución ruta 2](/docs/images/Erros/solucion_path.jpg)

---

### 1.3. Error de interfaz con ERP

**Descripción del error:**  
  Al intentar conectarse a fábrica, se muestra un error indicando que no se encuentra una licencia válida para la **interfaz ERP** de Logikal.

  ![Error ERP Logikal](/docs/images/Erros/error_ERP.jpg)

**Solución:**  
  Para establecer la conexión con fábrica, es necesario tener instalado el **módulo ERP de Logikal**.  
  Contacta con **Orgadata** para gestionar la licencia:

  - Email: [customer.support@orgadata.com](mailto:customer.support@orgadata.com)  
  - Llama al técnico responsable de soporte de Logikal.

---

### 1.4. Error de conexión al servidor desde enSITE

- **Descripción del error:**  
  Al intentar conectarse al servidor desde la aplicación **enSITE** (tablet), se muestra un mensaje de error relacionado con la conexión al servidor SQL.

  ![Error enSITE](/docs/images/Erros/error_ensite.jpg)

  ![Error enSITE](/docs/images/Erros/error_ensite2.jpg)

---

**Solución:**

  1. **Verificar la red:**  
    Asegúrate de que la tablet esté conectada a la **misma red local** que el servidor donde se encuentra la base de datos.

  2. **Revisar el firewall y antivirus:**  
    Comprueba que el **firewall** y/o **antivirus** no estén bloqueando la conexión entre el dispositivo y el servidor SQL.  
    Añade reglas o excepciones si es necesario.

  3. **Verificar configuración de puertos:**  
    Desde el servidor asegúrate de que los **puertos utilizados por SQL Server estén habilitados**, incluyendo:
    - **1433/TCP** (puerto estándar de SQL Server). Verificar y configurar en **SQL Server Configuration Manager**:  
        - Ir a **SQL Server Network Configuration → Protocols for ENDADES2022**.  
        - En **Propiedades de TCP/IP → IP Addresses**, verificar que <span style="color:red">**todas las IP's**</span> tengan el **TCP Port** configurados en **1433**. Y que los **TCP Dynamic Port** estén en **0**.


          ![Error enSITE](/docs/images/Erros/error_ensite3.jpg)


      - **1434 UDP** (para descubrimiento de instancia)
      <!-- - Otros puertos personalizados que pueden estar siendo utilizados por enSITE, por ejemplo: **TCP-57073** -->

---

**Nota:** Este error es común cuando hay conflictos en la configuración de red o seguridad. Validar todos los puntos anteriores suele resolver el problema.

---

> ⚠️ **Importante**: Es obligatorio utilizar como mínimo **SQL Server 2022** para garantizar la compatibilidad con las versiones de ENBLAU y enSITE.
