# Endades Suite Installer

## 1. Complete Endades Suite Installation

Download the **`Endades Suite Setup.exe`** installer from the path provided by ENDADES. Before proceeding with the installation, follow the recommendations in the [System Configuration](Configuracion_Sistema.md) section.

---

## 2. Run the Installer

### 2.1. Start Installation
Run the **`Endades Suite Setup.exe`** file provided by ENDADES by double-clicking.

   ![Installer initial screen](../images/Instalador/instalador_setup.png)

### 2.2. Step-by-Step Installation Process
When starting the installation, the **Endades Suite Installer** window will open. Follow these steps:

#### Step 1: License Agreement
- Accept the license agreement (EULA) by checking the corresponding box.
- Click **Next**.

   ![License agreement](../images/Instalador/instalador_eula.png)

#### Step 2: Installation Configuration
- Specify the path where ENBLAU will be installed.
- Enter the SQL instance name.
  
  **Important:** By default, **`ENDADES2022`** appears. If an instance with that name already exists, the installation will show the already created instances in the installation log and will not proceed until you select a different instance name.
  
- Click **Next**.

   ![Path and instance configuration](../images/Instalador/instalador_instalacion.png)

#### Step 3: License Configuration
- Enter the username and password provided by ENDADES.
- In the **Available Licenses** section, the active license will appear.
- Select the license and click **Next**.

   ![License configuration](../images/Instalador/instalador_licencia.png)

#### Step 4: Confirm Installation
- Review the selected configuration.
- Click **Install** to begin the process.

   ![Installation confirmation](../images/Instalador/instalador_instalar.png)

#### Step 5: Installation Progress
- The system will install the SQL Server instance and the ENBLAU database.
- This process may take several minutes.

   ![Installation progress](../images/Instalador/instalador_instalar2.png)

#### Step 6: Completion
- Once completed at 100%, click **Finish**.

   ![Installation completed](../images/Instalador/instalador_instalar3.png)

---

## 3. Database Selection in ENBLAU

### 3.1. First Run of ENBLAU
When opening ENBLAU for the first time, you will be prompted to select a database. Click **Accept**.

   ![Initial database selection](../images/Instal_config/elegir_bdd.jpg)

### 3.2. Configure Connection in enCONNECT
1. In the **enCONNECT** window (application for managing connections):
   - In the **Server** field, select or type the created instance, for example: **`server_name\ENDADES2022`**.

   ![Server selection](../images/Instal_config/servidor.jpg)

2. Connect and load databases:
   - Click **Load database**.
   - Expand the list of available databases.
   - Select for example: **ENBLAU** from the list.

   ![ENBLAU database selection](../images/Instalador/bdd.png)

---

> **Note:** For more information about problems during installation, consult [Possible Errors](Posibles_Errores.md).