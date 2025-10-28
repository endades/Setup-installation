# Requisiti dell'ambiente ENBLAU

## 1. Requisiti per la configurazione dell'app ENBLAU

Prima di procedere con l'installazione e la configurazione di ENBLAU, è necessario effettuare alcune impostazioni preliminari nell'ambiente in cui l'applicazione verrà installata.

---

### 1.1. Antivirus e Firewall

> Seguire le raccomandazioni riportate nella sezione **2. Impostazioni dell'antivirus e del firewall** in [Configurazione del Sistema](Configuracion_Sistema.md).

---

## 2. Installazione di ENBLAU

1. Eseguire l'installer **`Setup Enblau.msi`** fornito da ENDADES con un doppio clic.

   ![Setup](/docs/images/Instal_config/setup_msi.jpg)

2. All'avvio dell'installazione, si aprirà la finestra di **Endades Suite Setup**. Seguire i passaggi successivi:

   ![Setup passo 1](/docs/images/Instal_config/setup.jpg)

   - Accettare i termini della licenza selezionando la casella corrispondente.

     ![Setup passo 2](/docs/images/Instal_config/setup2.jpg)

   - Specificare il percorso in cui verrà installato ENBLAU.

     ![Setup passo 3](/docs/images/Instal_config/setup3.jpg)

   - Fare clic su **"Installa"** per avviare l'installazione.

     ![Finalizza](/docs/images/Instal_config/install.jpg)

   - Completare il processo.

     ![Finalizza](/docs/images/Instal_config/finish.jpg)

---

## 3. Installazione e creazione dell'istanza di SQL Server

Per poter utilizzare ENBLAU, è necessario installare SQL Server e creare un'istanza. Questo può essere fatto automaticamente con un file `.bat` o manualmente.

### 3.1. Installazione automatica con `.bat`

1. Accedere tramite Esplora Risorse di Windows al percorso di installazione di ENBLAU, ad esempio: **`C:\ENBLAU\Datos`**, e individuare il file **`00 - InstalaciónSQL.bat`**.

   ![Install sql](/docs/images/Instal_config/install_sql.jpg)

2. Eseguire il file **`00 - InstalaciónSQL.bat`** come amministratore. Questo installerà **SQL Server 2022** e creerà l'istanza **ENDADES2022**.

   ![Sql Server](/docs/images/Instal_config/install_sql2.jpg)  
   ![Sql Server](/docs/images/Instal_config/install_sql3.jpg)

3. Verificare che l'istanza sia stata creata correttamente da **SQL Server Configuration Manager**:

   ![Sql Server](/docs/images/Instal_config/sql_server.jpg)

> **Nota:** Se non è possibile eseguire il file `.bat` pur avendo i permessi di amministratore, potrebbe essere bloccato dall'antivirus o dal firewall che impedisce alcune connessioni necessarie al file script. Verificare se l'antivirus ha messo il file in quarantena o se il firewall limita l'accesso alla rete o a risorse specifiche.

### 3.2. Installazione manuale

1. Accedere al percorso **`C:\ENBLAU\Datos`** e individuare l'eseguibile **`SQLEXPR_x64_ENU.exe`**. In alternativa, è possibile scaricarlo da:  
   [https://www.microsoft.com/es-es/download/details.aspx?id=104781](https://www.microsoft.com/es-es/download/details.aspx?id=104781)

   ![Sql Server](/docs/images/Instal_config/sql_exe.jpg)

2. Eseguire l'installer e seguire i passaggi guidati:

   ![Sql Server](/docs/images/Instal_config/sql_server2.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server3.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server4.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server5.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server6.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server7.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server8.jpg)

   > **Nome dell'istanza:** `ENDADES2022`

   ![Sql Server](/docs/images/Instal_config/sql_server9.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server10.jpg)

   > **Password utente `sa`:** `Endades$0`

   ![Sql Server](/docs/images/Instal_config/sql_server11.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server12.jpg)  
   ![Sql Server](/docs/images/Instal_config/sql_server13.jpg)

---

## 4. Installazione di SQL Server Management Studio (SSMS)

Si consiglia di installare **SQL Server Management Studio 20** nell'ambiente dove è stato installato ENBLAU e SQL Server.

1. Scaricare la versione da:  
   [https://learn.microsoft.com/en-us/ssms/release-notes-20](https://learn.microsoft.com/en-us/ssms/release-notes-20)

   ![SQL Server Management Studio](/docs/images/Instal_config/ssms.jpg)

2. Seguire le istruzioni ufficiali di installazione da:  
   [https://learn.microsoft.com/es-es/ssms/install/install](https://learn.microsoft.com/es-es/ssms/install/install)

---

## 5. Creazione del database ENBLAU

### 5.1. Creazione tramite `.bat`

1. Accedere al percorso di installazione di ENBLAU, ad esempio: **`C:\ENBLAU\Datos`**, e individuare il file **`01 - CreaciónDB.bat`**.

   ![Percorso database](/docs/images/Instal_config/ruta_bdd.jpg)

2. Eseguire il file come amministratore. Questo eseguirà gli script **`CreateDB.sql`** e **`Structure.sql`** situati in **`C:\ENBLAU\Datos\Scripts`**.

3. Una volta completato, verrà creato un database chiamato **Easywork** nell'istanza **`server\ENDADES2022`**, che sarà utilizzato da ENBLAU.

> **Nota:** Se non è possibile eseguire il file `.bat` pur avendo i permessi di amministratore, potrebbe essere bloccato dall'antivirus o dal firewall che impedisce alcune connessioni necessarie al file script. Verificare se l'antivirus ha messo il file in quarantena o se il firewall limita l'accesso alla rete o a risorse specifiche.

### 5.2. Creazione manuale

1. Accedere al percorso di installazione di ENBLAU, ad esempio: **`C:\ENBLAU\Datos\Scripts`**, e individuare gli script **`CreateDB.sql`** e **`Structure.sql`**.

   ![Scripts database](/docs/images/Instal_config/scripts_bdd.jpg)

2. Aprire **SQL Server Management Studio**, connettersi al server corrispondente, ad esempio: **`server\ENDADES2022`**. Assicurarsi di usare l’utente **sa** e la password **Endades$0**.

   ![Connessione SQL](/docs/images/Instal_config/sql_bdd.jpg)

3. Aprire prima il file **`CreateDB.sql`** ed eseguirlo.

   ![CreateDB](/docs/images/Instal_config/create_db.jpg)

4. Poi ripetere lo stesso processo con il file **`Structure.sql`**.

> ⚠️ **Importante:** Gli script devono essere eseguiti nell'ordine indicato: prima **CreateDB.sql**, poi **Structure.sql**.

---

## 6. Selezione del database in ENBLAU

1. Al primo avvio di ENBLAU, verrà richiesto di selezionare un database. Fare clic su **OK**.

   ![Seleziona database](/docs/images/Instal_config/elegir_bdd.jpg)

2. Nella finestra **enCONNECT** (app che si apre per **Seleziona database**), nel campo **Server**, selezionare l'istanza creata, ad esempio: **`server\ENDADES2022`**.

   ![Server](/docs/images/Instal_config/servidor.jpg)

3. Fare clic su **Carica database**, aprire il campo corrispondente e selezionare **Easywork** dall'elenco.

   ![Database](/docs/images/Instal_config/bdd.jpg)

---

## 7. Connessione all’unità di rete

Per collegarsi a ENBLAU da un PC Windows, è necessario configurare correttamente la connessione all’unità di rete.  
Questo passaggio è fondamentale affinché il programma funzioni correttamente.

Consulta la guida dettagliata al seguente link:  
🔗 [Connetti unità di rete](https://documentation.endades.com/Utilidades/6.UT_Unidad_Red/)

---

> **Nota:** Per ulteriori informazioni su [Possibili errori](Posibles_Errores.md)

---

> ⚠️ **Importante:** È obbligatorio utilizzare almeno **SQL Server 2022** per garantire la compatibilità con le versioni di ENBLAU e enSITE.
