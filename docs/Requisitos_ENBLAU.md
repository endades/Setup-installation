# Requisitos entorno ENBLAU

## 1. Requisistos para la configuracion de la app ENBLAU 

Para proceder con la instalación y configuración de ENBLAU hay que hacer algunas configuraciones previas en el entorno que se va a instalar la app.

---

### 1.1 Antivirus y Firewall

> Seguir las recomendaciones en el apartado del **2. Ajustes del antivirus y firewall** en [Configuración del Sistema](Configuracion_Sistema.md).

---

## 2. Instalación de ENBLAU

1. Instalar ENBLAU con el **`Setup Enblau.msi`** proporcionado por ENDADES. Ejecuta el archivo haciendo doble clic.

    ![Setup](images/Instal_config/setup_msi.jpg)

2. Al confirmar la instalación, se abrirá la ventana del **Endades Suite Setup**. Sigue los pasos a continuación:

     ![Setup paso 1](images/Instal_config/setup.jpg)

   - Acepta los términos de la licencia marcando la casilla correspondiente y continúa.

     ![Setup paso 2](images/Instal_config/setup2.jpg)

   - Indicar la ruta de donde quiere que se haga la instalación de ENBLAU.

     ![Setup paso 3](images/Instal_config/setup3.jpg)

   - Haz clic en **"Instalar"** para comenzar.

      ![Instalar](Imagenes/UT_Actualizar_ENBLAU/install.jpg)

   - Finaliza la instalación.

     ![Finalizar](images/Instal_config/finish.jpg)
    

---

## 3. Instalación y creación de instancia SQL Server

Es necesario instalar SQL Server para poder crear la instancia del servidor. Hay dos maneras de hacerlo, ejecutando un fichero .bat que se encuentra en la ruta de instalación de ENBLAU o hacerlo de forma manual.

### 3.1. Ejecutando .bat

1. Acceder desde windows explorer a la ruta ejemplo: **`C:\ENBLAU\Datos`** de instalación de ENBLAU donde se encuentra el fichero **00 - InstalaciónSQL.bat**.

     ![Install sql](images/Instal_config/install_sql.jpg)

2. Ejecutar el fichero **00 - InstalaciónSQL.bat** (asegurarse que tienes permiso de administrador en el entorno que se está ejecutando). Al ejecutarlo se instalará **SQL Server 2022** y creará la instancia **ENDADES2022**.

     ![Sql Server](images/Instal_config/install_sql.jpg)

     ![Sql Server](images/Instal_config/install_sql2.jpg)

     ![Sql Server](images/Instal_config/install_sql3.jpg)

3. Comprueba si se ha instalado y creado correctamente la instancia desde **Sql Server Configuration Manager**:

     ![Sql Server](images/Instal_config/sql_server.jpg)

### 3.2. Instalación manual 

1. Acceder desde windows explorer a la ruta ejemplo: **`C:\ENBLAU\Datos`** de instalación de ENBLAU donde se encuentra el ejecutable **SQLEXPR_x64_ENU.exe**. O desde la web https://www.microsoft.com/es-es/download/details.aspx?id=104781 para descargar el ejecutable.

     ![Sql Server](images/Instal_config/sql_exe.jpg)

2. Ejecutar el fichero SQLEXPR_x64_ENU.exe. Y seguir los pasos de instalación de Sql server.

     ![Sql Server](images/Instal_config/sql_server2.jpg)

     ![Sql Server](images/Instal_config/sql_server3.jpg)

     ![Sql Server](images/Instal_config/sql_server4.jpg)

     ![Sql Server](images/Instal_config/sql_server5.jpg)

     ![Sql Server](images/Instal_config/sql_server6.jpg)

     ![Sql Server](images/Instal_config/sql_server7.jpg)

     ![Sql Server](images/Instal_config/sql_server8.jpg)

     > Añadir el nombre de la instancia **ENDADES2022**.

     ![Sql Server](images/Instal_config/sql_server9.jpg)

     ![Sql Server](images/Instal_config/sql_server10.jpg)

     > Introducir la contraseña **Endades$0** para el usuario administrador del SQL server (sa).

     ![Sql Server](images/Instal_config/sql_server11.jpg)

     ![Sql Server](images/Instal_config/sql_server12.jpg)

     ![Sql Server](images/Instal_config/sql_server13.jpg)

---

## 4. Instalación SQL Server Management Studio

Se recomienda que en el servidor (entorno donde se haya instalado ENBLAU y SQL Server) se instale el SQL Server Management Studio versión 20.

1. Desde ese enlace https://learn.microsoft.com/en-us/ssms/release-notes-20 bajar la versión **SQL Server Management Studio 20**.

     ![SQL Server Management Studio](images/Instal_config/ssms.jpg)

2. Seguir las instrucciones de Microsoft desde ese enlace https://learn.microsoft.com/es-es/ssms/install/install para su instalación. 

---

## 5. Creación base de datos ENBLAU

### 5.1. Ejecutando .bat

1. Acceder desde windows explorer a la ruta ejemplo: **`C:\ENBLAU\Datos`** de instalación de ENBLAU donde se encuentra el fichero **01 - CreaciónDB.bat**.

2. Ejecutar el fichero **01 - CreaciónDB.bat** (asegurarse que tienes permiso de administrador en el entorno que se está ejecutando). Al ejecutarlo se cargará dos scripts sql **CreateDB.sql** y **Structure.sql** que se encuentra en la ruta **`C:\ENBLAU\Datos\Scripts`**.

3. Una vez ejecutado los .bat se creará una base de datos llamada **Easywork** en la instancia **`servidor\ENDADES2022`**. Esa base de datos será la que se usara para trabajar con ENBLAU.


## 6. Elegir base de datos en ENBLAU

1. Al abrir la primera vez ENBLAU te pedirá que elijas una base de datos, click en aceptar.

     ![Elegir base de datos](images/Instal_config/elegir_bdd.jpg)

2. En la ventana de enCONNECT en el campo **Servidor** desplegar el listado para elegir primero el servidor (es nombre del servidor/entorno que has creado la instancia) ejemplo: **`servidor\ENDADES2022`**.

     ![Servidor](images/Instal_config/servidor.jpg)

3. Luego para escoger la base de datos clicar sobre el botón **Cargar Base de datos**. Luego desplegá el campo de **Base de datos** y elegir del listado la base de datos Easywork.

     ![Servidor](images/Instal_config/bdd.jpg)
---

