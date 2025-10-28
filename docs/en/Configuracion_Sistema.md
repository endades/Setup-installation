# System Configuration


## 1. Shared Networks and Network Settings

The server provides the program to clients through network sharing.

### 1.1. Requirements for Windows Users

For the program to operate correctly in Windows environments, users must have the following permissions and configurations:

- **Required permissions**: Read, write, and modify access is required for:
  - The network drive where the **Enblau** shared folder is located.
  - All files and subfolders within the program directory.

- **Drive mapping**:
  - The network folders used by the program must be mapped to a **drive letter** (for example, `Z:\Enblau`).  
  - Connecting the shared resource using a UNC path (such as `\\server\Enblau`) is not sufficient; a drive letter must be assigned.

- **Limitations**:
  - The application cannot run correctly without assigning a drive letter.

> **Note:** For more detailed information, go to [Connect Network Drive](https://documentation.endades.com/en/Utilities/6.UT_Unidad_Red/)

> ⚠️ **Warning:**  
> To ensure stable access to network drives, they must be declared as trusted. For more information, contact your system administrator.

- **Installation permissions:**  
  Administrator rights are required.

---

## 2. Antivirus and Firewall Settings

> ⚠️ **Warning:**  
> The risk assessment of the configurations and exceptions mentioned here remains your responsibility or that of your IT service provider.

- Ensure they do not block the installation or connection of the app.

---

### 2.1. Set the Network Drive as Trusted

Setting the drive as “trusted” ensures the necessary program stability for daily work and optimizes performance.

 Steps:

1. Hold down the **Windows** key on your keyboard and press the **R** key.
2. Type `inetcpl.cpl` in the window that appears.
3. The **Internet Options** window will open.
4. Select:  
   `Security` > `Local intranet` > `Sites` > `Advanced`
5. Add the network addresses as:  
   `\\IP_Address` and `IP_Address`  
   Example: `\\192.168.15.66` and `192.168.15.66`

---

### 2.2. Antivirus Exceptions

 Prepare the antivirus exception settings:

- **Store the certificates** used to sign the program’s executable files.  
  Certificates can be extracted from `*.exe` files. Some antivirus software allows viewing the operating system’s certificate store.

- **Increase the trust level** or the assigned trust group in the antivirus software:
  - For `.exe`/`.dll` files in the program directory.
  - Or for the trust level of the code-signing certificate.

---

### 2.3. Set Antivirus Exceptions for:

- The **program directory**, for example, on the network drive where the program is installed.  
  Include all necessary folders up to the program directory.

---
