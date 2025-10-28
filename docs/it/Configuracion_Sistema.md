# Configurazione del sistema


## 1. Reti condivise e impostazioni di rete

Il server fornisce il programma ai client tramite la condivisione di rete.

### 1.1. Requisiti per gli utenti Windows

Per il corretto funzionamento del programma in ambienti Windows, gli utenti devono disporre delle seguenti autorizzazioni e configurazioni:

- **Autorizzazioni necessarie**: È richiesto l’accesso in lettura, scrittura e modifica a:
  - L’unità di rete in cui si trova la cartella condivisa di **Enblau**.
  - Tutti i file e le sottocartelle all’interno della directory del programma.

- **Assegnazione dell’unità**:
  - Le cartelle di rete utilizzate dal programma devono essere mappate a una **lettera di unità** (ad esempio, `Z:\Enblau`).  
  - Non è sufficiente connettersi alla risorsa condivisa tramite un percorso UNC (come `\\server\Enblau`); è necessario assegnare una lettera di unità.

- **Limitazioni**:
  - L’applicazione non può essere eseguita correttamente senza l’assegnazione di una lettera di unità.

> **Nota:** Per ulteriori informazioni, consultare [Connetti unità di rete](https://documentation.endades.com/Utilidades/6.UT_Unidad_Red/)

> ⚠️ **Attenzione:**  
> Per garantire un accesso stabile alle unità di rete, queste devono essere dichiarate come attendibili. Per ulteriori informazioni, contattare l’amministratore di sistema.

- **Autorizzazioni di installazione:**  
  Sono richiesti i diritti di amministratore.

---

## 2. Impostazioni di antivirus e firewall

> ⚠️ **Attenzione:**  
> La valutazione dei rischi delle configurazioni ed eccezioni qui menzionate rimane sotto la vostra responsabilità o quella del vostro fornitore di servizi IT.

- Assicurarsi che non blocchino l’installazione o la connessione dell’applicazione.

---

### 2.1. Impostare l’unità di rete come attendibile

Impostare l’unità come “attendibile” garantisce la stabilità necessaria del programma durante l’uso quotidiano e ne ottimizza le prestazioni.

 Passaggi:

1. Tenere premuto il tasto **Windows** sulla tastiera e premere il tasto **R**.
2. Digitare `inetcpl.cpl` nella finestra che appare.
3. Si apriranno le **Opzioni Internet**.
4. Selezionare:  
   `Sicurezza` > `Intranet locale` > `Siti` > `Avanzate`
5. Aggiungere gli indirizzi di rete come:  
   `\\Indirizzo_IP` e `Indirizzo_IP`  
   Esempio: `\\192.168.15.66` e `192.168.15.66`

---

### 2.2. Eccezioni per l’antivirus

 Preparare la configurazione delle eccezioni nel software antivirus:

- **Salvare i certificati** con cui vengono firmati i file eseguibili del programma.  
  I certificati possono essere estratti dai file `*.exe`. Alcuni antivirus consentono di visualizzare l’archivio certificati del sistema operativo.

- **Aumentare il livello di attendibilità** o il gruppo di fiducia assegnato nel software antivirus:
  - Per i file `.exe`/`.dll` nella directory del programma.
  - Oppure per il livello di fiducia del certificato di firma del codice.

---

### 2.3. Impostare eccezioni antivirus per:

- La **directory del programma**, ad esempio nell’unità di rete in cui è installato il programma.  
  Includere tutte le cartelle necessarie fino alla directory del programma.

---
