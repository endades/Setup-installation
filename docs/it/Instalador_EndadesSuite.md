# Installatore Endades Suite

## 1. Installazione completa di Endades Suite

Scarica l'installer **`Endades Suite Setup.exe`** dal percorso fornito da ENDADES. Prima di procedere con l'installazione, segui le raccomandazioni nella sezione [Configurazione del Sistema](Configuracion_Sistema.md).

---

## 2. Eseguire l'installatore

### 2.1. Iniziare l'installazione
Esegui il file **`Endades Suite Setup.exe`** fornito da ENDADES facendo doppio clic.

   ![Schermata iniziale dell'installer](../images/Instalador/instalador_setup.png)

### 2.2. Processo di installazione passo dopo passo
All'avvio dell'installazione, si aprirà la finestra **Endades Suite Installer**. Segui questi passaggi:

#### Passo 1: Accordo di licenza
- Accetta l'accordo di licenza (EULA) spuntando la casella corrispondente.
- Fai clic su **Avanti**.

   ![Accordo di licenza](../images/Instalador/instalador_eula.png)

#### Passo 2: Configurazione dell'installazione
- Specifica il percorso in cui verrà installato ENBLAU.
- Inserisci il nome dell'istanza SQL.
  
  **Importante:** Per impostazione predefinita, appare **`ENDADES2022`**. Se esiste già un'istanza con quel nome, l'installazione mostrerà le istanze già create nel log di installazione e non procederà finché non selezioni un nome di istanza diverso.
  
- Fai clic su **Avanti**.

   ![Configurazione percorso e istanza](../images/Instalador/instalador_instalacion.png)

#### Passo 3: Configurazione della licenza
- Inserisci il nome utente e la password forniti da ENDADES.
- Nella sezione **Licenze disponibili** apparirà la licenza attiva.
- Seleziona la licenza e fai clic su **Avanti**.

   ![Configurazione licenza](../images/Instalador/instalador_licencia.png)

#### Passo 4: Conferma installazione
- Rivedi la configurazione selezionata.
- Fai clic su **Installa** per iniziare il processo.

   ![Conferma installazione](../images/Instalador/instalador_instalar.png)

#### Passo 5: Progresso dell'installazione
- Il sistema installerà l'istanza di SQL Server e il database ENBLAU.
- Questo processo potrebbe richiedere diversi minuti.

   ![Progresso dell'installazione](../images/Instalador/instalador_instalar2.png)

#### Passo 6: Completamento
- Una volta completato al 100%, fai clic su **Termina**.

   ![Installazione completata](../images/Instalador/instalador_instalar3.png)

---

## 3. Selezione del database in ENBLAU

### 3.1. Prima esecuzione di ENBLAU
All'apertura di ENBLAU per la prima volta, verrà richiesto di selezionare un database. Fai clic su **Accetta**.

   ![Selezione iniziale del database](../images/Instal_config/elegir_bdd.jpg)

### 3.2. Configurare la connessione in enCONNECT
1. Nella finestra **enCONNECT** (applicazione per gestire le connessioni):
   - Nel campo **Server**, seleziona o digita l'istanza creata, ad esempio: **`nome_server\ENDADES2022`**.

   ![Selezione del server](../images/Instal_config/servidor.jpg)

2. Connetti e carica i database:
   - Fai clic su **Carica database**.
   - Espandi l'elenco dei database disponibili.
   - Seleziona ad esempio: **ENBLAU** dall'elenco.

   ![Selezione del database ENBLAU](../images/Instalador/bdd.png)

---

> **Nota:** Per ulteriori informazioni sui problemi durante l'installazione, consulta [Possibili errori](Posibles_Errores.md).