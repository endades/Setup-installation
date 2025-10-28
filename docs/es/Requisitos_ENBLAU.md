# Requisitos del entorno ENBLAU

## 1. Requisitos para la configuración de la App ENBLAU

Antes de proceder con la instalación y configuración de ENBLAU, es necesario realizar algunas configuraciones previas en el entorno donde se va a instalar la aplicación.

---

### 1.1. Antivirus y Firewall

> Sigue las recomendaciones del apartado **2. Ajustes del antivirus y firewall** en [Configuración del Sistema](Configuracion_Sistema.md).

---

## 2. Instalación de ENBLAU

1. Ejecuta el instalador **`Setup Enblau.msi`** proporcionado por ENDADES con doble clic.

   ![Setup](/docs/images/Instal_config/setup_msi.jpg)

2. Al iniciar la instalación, se abrirá la ventana de **Endades Suite Setup**. Sigue los siguientes pasos:

   ![Setup paso 1](/docs/images/Instal_config/setup.jpg)

   - Acepta los términos de la licencia marcando la casilla correspondiente.

     ![Setup paso 2](/docs/images/Instal_config/setup2.jpg)

   - Especifica la ruta donde se instalará ENBLAU.

     ![Setup paso 3](/docs/images/Instal_config/setup3.jpg)

   - Haz clic en **"Instalar"** para comenzar la instalación.

     ![Finalizar](/docs/images/Instal_config/install.jpg)

   - Finaliza el proceso.

     ![Finalizar](/docs/images/Instal_config/finish.jpg)

---

## 3. Instalación y creación de la instancia de SQL Server

Para poder utilizar ENBLAU es necesario instalar SQL Server y crear una instancia. Esto se puede hacer automáticamente con un archivo `.bat` o manualmente.

### 3.1. Instalación automática con `.bat`

1. Accede desde el explorador de Windows a la ruta de instalación de ENBLAU, por ejemplo: **`C:\ENBLAU\Datos`**, y localiza el archivo **`00 - InstalaciónSQL.bat`**.

   ![Install sql](/docs/images/Instal_config/install_sql.jpg)

2. Ejecuta el archivo **`00 - InstalaciónSQL.bat`** como usuario administrador. Esto instalará **SQL Server 2022** y creará la instancia **ENDADES2022**.

   ![Sql Server](/docs/images/Instal_config/install_sql2.jpg)  
   ![Sql Server](/docs/images/Instal_config/install_sql3.jpg)

3. Verifica que la instancia se haya creado correctamente desde **SQL Server Configuration Manager**:

   ![Sql Server](/docs/images/Instal_config/sql_server.jpg)

> **Nota:** Si no puedes ejecutar el archivo `.bat` a pesar de tener permisos de administrador, es posible que esté siendo bloqueado por el antivirus o que el cortafuegos (firewall) esté impidiendo alguna de las conexiones que el script intenta realizar. Verifica si el antivirus ha puesto el archivo en cuarentena o si el firewall está restringiendo el acceso a la red o a recursos específicos. 

### 3.2. Instalación manual

1. Accede a la ruta **`C:\ENBLAU\Datos`** y localiza el ejecutable **`SQLEXPR_x64_ENU.exe`**. Alternativamente, puedes descargarlo desde:  
   [https://www.microsoft.com/es-es/download/details.aspx?id=104781](https://www.microsoft.com/es-es/download/details.aspx?id=104781)

   ![Sql Server](/docs/images/Instal_config/sql_exe.jpg)

2. Ejecuta el instalador y sigue los pasos guiados:

   ![Sql Server](/docs/images/Instal_config/sql_server2.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server3.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server4.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server5.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server6.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server7.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server8.jpg)

   > **Nombre de la instancia:** `ENDADES2022`

   ![Sql Server](/docs/images/Instal_config/sql_server9.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server10.jpg)

   > **Contraseña del usuario `sa`:** `Endades$0`

   ![Sql Server](/docs/images/Instal_config/sql_server11.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server12.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server13.jpg)

---

## 4. Instalación de SQL Server Management Studio (SSMS)

Se recomienda instalar **SQL Server Management Studio 20** en el entorno donde se haya instalado ENBLAU y SQL Server.

1. Descarga la versión desde:  
   [https://learn.microsoft.com/en-us/ssms/release-notes-20](https://learn.microsoft.com/en-us/ssms/release-notes-20)

   ![SQL Server Management Studio](/docs/images/Instal_config/ssms.jpg)

2. Sigue las instrucciones oficiales de instalación desde:  
   [https://learn.microsoft.com/es-es/ssms/install/install](https://learn.microsoft.com/es-es/ssms/install/install)

---

## 5. Creación de la base de datos ENBLAU

### 5.1. Crear mediante `.bat`

1. Accede a la ruta de instalación de ENBLAU, por ejemplo: **`C:\ENBLAU\Datos`**, y localiza el archivo **`01 - CreaciónDB.bat`**.

   ![Ruta base de datos](/docs/images/Instal_config/ruta_bdd.jpg)

2. Ejecuta el archivo como usuario administrador. Este ejecutará los scripts **`CreateDB.sql`** y **`Structure.sql`** ubicados en **`C:\ENBLAU\Datos\Scripts`**.

3. Una vez completado, se creará una base de datos llamada **Easywork** en la instancia **`servidor\ENDADES2022`**, la cual será utilizada por ENBLAU.

> **Nota:** Si no puedes ejecutar el archivo `.bat` a pesar de tener permisos de administrador, es posible que esté siendo bloqueado por el antivirus o que el cortafuegos (firewall) esté impidiendo alguna de las conexiones que el script intenta realizar. Verifica si el antivirus ha puesto el archivo en cuarentena o si el firewall está restringiendo el acceso a la red o a recursos específicos.

### 5.2. Creación Manual

1. Accede a la ruta de instalación de ENBLAU, por ejemplo: **`C:\ENBLAU\Datos\Scripts`**, y localiza los scripts **`CreateDB.sql`** y **`Structure.sql`**.

   ![Scripts bdd](/docs/images/Instal_config/scripts_bdd.jpg)

2. Abre **SQL Server Management Studio**, conéctate al servidor correspondiente, por ejemplo: **`servidor\ENDADES2022`**. Asegúrate de usar el usuario **sa** y la contraseña **Endades$0**.

   ![Conexión SQL](/docs/images/Instal_config/sql_bdd.jpg)

3. Abre primero el archivo **`CreateDB.sql`** y ejecútalo.

   ![CreateDB](/docs/images/Instal_config/create_db.jpg)

4. Luego repite el mismo proceso con el archivo **`Structure.sql`**.

> ⚠️ **Importante:** Los scripts deben ejecutarse en el orden indicado: primero **CreateDB.sql**, luego **Structure.sql**.

---

## 6. Selección de la base de datos en ENBLAU

1. Al abrir ENBLAU por primera vez, se solicitará seleccionar una base de datos. Haz clic en **Aceptar**.

   ![Elegir base de datos](/docs/images/Instal_config/elegir_bdd.jpg)

2. En la ventana de **enCONNECT**(app que se abre para **Seleccionar base de datos**), en el campo **Servidor**, selecciona la instancia creada, por ejemplo: **`servidor\ENDADES2022`**.

   ![Servidor](/docs/images/Instal_config/servidor.jpg)

3. Haz clic en **Cargar base de datos**, despliega el campo correspondiente y selecciona **Easywork** de la lista.

   ![Base de datos](/docs/images/Instal_config/bdd.jpg)

---

## 7. Conexión a unidad de red

Para conectarse a ENBLAU desde un equipo con Windows, es necesario configurar correctamente la conexión a la unidad de red.  
Este paso es fundamental para que el programa funcione adecuadamente.

Consulta la guía detallada en el siguiente enlace:  
🔗 [Conectar unidad de red](https://documentation.endades.com/Utilidades/6.UT_Unidad_Red/)

---

> **Nota:** Para más información sobre [Posibles errores](Posibles_Errores.md)

---

> ⚠️ **Importante**: Es obligatorio utilizar como mínimo **SQL Server 2022** para garantizar la compatibilidad con las versiones de ENBLAU y enSITE.