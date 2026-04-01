# enSITE Installation Requirements

## 1. Requirements for configuring the enSITE App

Before proceeding with the installation and configuration of enSITE, some prior configurations are required.

### 1.1. Minimum requirements

The minimum requirements to install enSITE on a mobile phone or tablet depend on the platform and are determined by the **Google Play Store on Android** and the **App Store on iOS <span style="color:#C0392B;">(Currently unavailable)</span>**.

| Requirement | Android (Play Store) | iOS (App Store) |
|------------|----------------------|-----------------|
| **Minimum system version** | Android 15 (API 35); however, it is recommended to use the latest Android versions | iOS 16 (Apple requires new apps and updates to support the latest 3 versions) |
| **CPU / Architecture** | ARM 64-bit (arm64-v8a); multi-core CPU sufficient for standard apps | All recent iPhones/iPads use ARM 64-bit |
| **Minimum RAM** | 3 GB minimum | 3 GB minimum; Apple does not explicitly verify this, it depends on iOS version and model |
| **Free storage** | 200 MB minimum for installation | 200 MB minimum for installation |
| **Screen / resolution** | ≥720p recommended; compatible with different sizes (mobile and tablet) | All devices compatible with iOS 16 or later |
| **GPU / graphics** | Integrated, compatible with OpenGL ES or Vulkan | Integrated in Apple SoC; all compatible with iOS 16 |
| **Connectivity** | Wi-Fi / Mobile data; Bluetooth, GPS | Wi-Fi / Mobile data; Bluetooth, GPS |
| **Permissions / policies** | Privacy policies if data is handled; minimal permissions; Google Play compliance | Privacy policies; App Store Review Guidelines compliance; justified permissions |
| **Updates** | Depends on Google Play and declared compatibility | Apple requires compatibility with the latest versions; if your device cannot update iOS, it will not receive new versions |

> 💡 **Notes:**

1. **Android:** even if the hardware is sufficient, the app update may be blocked by Play Store filters.

2. **iOS:** the main limitation is the iOS version supported by your device. Apple automatically controls compatibility.

3. **RAM and storage:** these are practical recommendations; Google does not officially block apps based on RAM.

### 1.2. Antivirus and Firewall

Follow the recommendations in section **2. Antivirus and firewall settings** in [System Configuration](Configuracion_Sistema.md).

---

### 1.3. TCP/IP Configuration

From the server, make sure that the **ports used by SQL Server are enabled**, including:

- **1433/TCP** (standard SQL Server port). Verify and configure it in **SQL Server Configuration Manager**:

  - Go to **SQL Server Network Configuration → Protocols for ENDADES2022**.
  - In **TCP/IP Properties → IP Addresses**, verify that <span style="color:red">**all IPs**</span> have the **TCP Port** configured as **1433**, and that the **TCP Dynamic Ports** are set to **0**.

  ![Error enSITE](../images/Erros/error_ensite3.jpg)

---

## 2. enSITE Installation

### 2.1. Download the enSITE App

- From a tablet or mobile device with WiFi connection, access Play Store (Android) / App Store (iOS – <span style="color:#C0392B;">Currently not available</span>) and search for and download the enSITE app.

  ![enSITE](../images/Instal_config/ensite.jpg)

---

### 2.2. enSITE Server Configuration

Open enSITE and add the following information to configure the server in the app:

- License code (provided by Endades)

- Server IP (the same where ENBLAU is installed on the server)

- Database (the same where ENBLAU is installed on the server)

- User – **sa** (SQL Server authentication)

- Password – **Same database connection password used for ENBLAU** (SQL Server authentication)

  ![enSITE](../images/Instal_config/ensite1.jpg)

---

### 2.3. enSITE 

- From ENBLAU - Users - **WEB APP Access**, ensure that the **Allow access** checkbox is checked. Additionally, to access enSITE it is **mandatory** to have a **Password** defined for the user.

    ![enSITE](../images/Instal_config/ensite4.jpg)

- Login with **username** and **password** (the same credentials used in ENBLAU)

  ![enSITE](../images/Instal_config/ensite2.jpg)

  ![enSITE](../images/Instal_config/ensite3.jpg)

---

> ℹ️ **Note:** For more information about possible errors during the server connection process from enSITE, follow this link: [Possible enSITE errors](Posibles_Errores.md/#15-error-de-conexion-al-servidor-desde-ensite)

---

> ⚠️ **Important:** It is mandatory to use at least **SQL Server 2022** to ensure compatibility with future versions of ENBLAU and enSITE.
