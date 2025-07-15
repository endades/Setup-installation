# Requisitos del Entorno ENBLAU

## 1. Requisitos para la Configuración de la App ENBLAU

Antes de proceder con la instalación y configuración de ENBLAU, es necesario realizar algunas configuraciones previas en el entorno donde se va a instalar la aplicación.

---

### 1.1. Antivirus y Firewall

> Sigue las recomendaciones del apartado **2. Ajustes del antivirus y firewall** en [Configuración del Sistema](Configuracion_Sistema.md).

---

## 2. Instalación de ENBLAU

1. Ejecuta el instalador **`Setup Enblau.msi`** proporcionado por ENDADES con doble clic.

   ![Setup](images/Instal_config/setup_msi.jpg)

2. Al iniciar la instalación, se abrirá la ventana de **Endades Suite Setup**. Sigue los siguientes pasos:

   ![Setup paso 1](images/Instal_config/setup.jpg)

   - Acepta los términos de la licencia marcando la casilla correspondiente.

     ![Setup paso 2](images/Instal_config/setup2.jpg)

   - Especifica la ruta donde se instalará ENBLAU.

     ![Setup paso 3](images/Instal_config/setup3.jpg)

   - Haz clic en **"Instalar"** para comenzar la instalación.

     ![Finalizar](images/Instal_config/install.jpg)

   - Finaliza el proceso.

     ![Finalizar](images/Instal_config/finish.jpg)

---

## 3. Instalación y Creación de la Instancia de SQL Server

Para poder utilizar ENBLAU es necesario instalar SQL Server y crear una instancia. Esto se puede hacer automáticamente con un archivo `.bat` o manualmente.

### 3.1. Instalación Automática con `.bat`

1. Accede desde el explorador de Windows a la ruta de instalación de ENBLAU, por ejemplo: **`C:\ENBLAU\Datos`**, y localiza el archivo **`00 - InstalaciónSQL.bat`**.

   ![Install sql](images/Instal_config/install_sql.jpg)

2. Ejecuta el archivo **`00 - InstalaciónSQL.bat`** como administrador. Esto instalará **SQL Server 2022** y creará la instancia **ENDADES2022**.

   ![Sql Server](images/Instal_config/install_sql2.jpg)  
   ![Sql Server](images/Instal_config/install_sql3.jpg)

3. Verifica que la instancia se haya creado correctamente desde **SQL Server Configuration Manager**:

   ![Sql Server](images/Instal_config/sql_server.jpg)

### 3.2. Instalación Manual

1. Accede a la ruta **`C:\ENBLAU\Datos`** y localiza el ejecutable **`SQLEXPR_x64_ENU.exe`**. Alternativamente, puedes descargarlo desde:  
   [https://www.microsoft.com/es-es/download/details.aspx?id=104781](https://www.microsoft.com/es-es/download/details.aspx?id=104781)

   ![Sql Server](images/Instal_config/sql_exe.jpg)

2. Ejecuta el instalador y sigue los pasos guiados:

   ![Sql Server](images/Instal_config/sql_server2.jpg)  
   ![Sql Server](images/Instal_config/sql_server3.jpg)  
   ![Sql Server](images/Instal_config/sql_server4.jpg)  
   ![Sql Server](images/Instal_config/sql_server5.jpg)  
   ![Sql Server](images/Instal_config/sql_server6.jpg)  
   ![Sql Server](images/Instal_config/sql_server7.jpg)  
   ![Sql Server](images/Instal_config/sql_server8.jpg)

   > **Nombre de la instancia:** `ENDADES2022`

   ![Sql Server](images/Instal_config/sql_server9.jpg)  
   ![Sql Server](images/Instal_config/sql_server10.jpg)

   > **Contraseña del usuario `sa`:** `Endades$0`

   ![Sql Server](images/Instal_config/sql_server11.jpg)  
   ![Sql Server](images/Instal_config/sql_server12.jpg)  
   ![Sql Server](images/Instal_config/sql_server13.jpg)

---

## 4. Instalación de SQL Server Management Studio (SSMS)

Se recomienda instalar **SQL Server Management Studio 20** en el entorno donde se haya instalado ENBLAU y SQL Server.

1. Descarga la versión desde:  
   [https://learn.microsoft.com/en-us/ssms/release-notes-20](https://learn.microsoft.com/en-us/ssms/release-notes-20)

   ![SQL Server Management Studio](images/Instal_config/ssms.jpg)

2. Sigue las instrucciones oficiales de instalación desde:  
   [https://learn.microsoft.com/es-es/ssms/install/install](https://learn.microsoft.com/es-es/ssms/install/install)

---

## 5. Creación de la Base de Datos ENBLAU

### 5.1. Crear mediante `.bat`

1. Accede a la ruta de instalación de ENBLAU, por ejemplo: **`C:\ENBLAU\Datos`**, y localiza el archivo **`01 - CreaciónDB.bat`**.

   ![Ruta base de datos](images/Instal_config/ruta_bdd.jpg)

2. Ejecuta el archivo como administrador. Este ejecutará los scripts **`CreateDB.sql`** y **`Structure.sql`** ubicados en **`C:\ENBLAU\Datos\Scripts`**.

3. Una vez completado, se creará una base de datos llamada **Easywork** en la instancia **`servidor\ENDADES2022`**, la cual será utilizada por ENBLAU.

### 5.2. Creación Manual

1. Accede a la ruta de instalación de ENBLAU, por ejemplo: **`C:\ENBLAU\Datos\Scripts`**, y localiza los scripts **`CreateDB.sql`** y **`Structure.sql`**.

   ![Scripts bdd](images/Instal_config/scripts_bdd.jpg)

2. Abre **SQL Server Management Studio**, conéctate al servidor correspondiente, por ejemplo: **`servidor\ENDADES2022`**. Asegúrate de usar el usuario **sa** y la contraseña **Endades$0**.

   ![Conexión SQL](images/Instal_config/sql_bdd.jpg)

3. Abre primero el archivo **`CreateDB.sql`** y ejecútalo.

   ![CreateDB](images/Instal_config/create_db.jpg)

4. Luego repite el mismo proceso con el archivo **`Structure.sql`**.

> ⚠️ **Importante:** Los scripts deben ejecutarse en el orden indicado: primero **CreateDB.sql**, luego **Structure.sql**.

---

## 6. Selección de la Base de Datos en ENBLAU

1. Al abrir ENBLAU por primera vez, se solicitará seleccionar una base de datos. Haz clic en **Aceptar**.

   ![Elegir base de datos](images/Instal_config/elegir_bdd.jpg)

2. En la ventana de **Seleccionar base de datos**, en el campo **Servidor**, selecciona la instancia creada, por ejemplo: **`servidor\ENDADES2022`**.

   ![Servidor](images/Instal_config/servidor.jpg)

3. Haz clic en **Cargar Base de Datos**, despliega el campo correspondiente y selecciona **Easywork** de la lista.

   ![Base de datos](images/Instal_config/bdd.jpg)
