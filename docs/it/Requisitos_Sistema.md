# Requisiti di sistema

## 1. Requisiti di installazione del client

L'installazione del client (server) è un'installazione locale su un computer.

---

### 1.1 Requisiti consigliati

| Componente       | Specifica                                              |
|-----------------|---------------------------------------------------------|
| Sistema Operativo | Windows 11 Pro; .NET Framework versione 4.8 o superiore |
| Processore       | Intel Core i7 Gen10 / AMD Ryzen 7 Serie 5000           |
| Memoria          | Sistema operativo a 64 bit, 16 GB di RAM              |
| Disco Rigido     | SSD, 150 GB di spazio libero                            |
| Connessioni      | USB                                                     |
| Risoluzione      | 1920 px x 1080 px                                      |

---

### 1.2 Requisiti minimi

> **Nota:**  
> Per ottenere prestazioni più elevate, si consiglia di utilizzare dischi SSD. Sono molto più veloci nella elaborazione rispetto ai tradizionali HDD.

| Componente       | Specifica                                              |
|-----------------|---------------------------------------------------------|
| Sistema Operativo | Windows 10 Versione 22H2; .NET Framework versione 4.8 |
| Processore       | Intel Core i5 Gen10 / AMD Ryzen Serie 2000            |
| Memoria          | OS a 64 bit: 4 GB RAM<br>OS a 64 bit: 6 GB RAM        |
| Disco Rigido     | 80 GB di spazio libero                                 |
| Connessioni      | USB                                                     |
| Risoluzione      | 1280 px x 1024 px                                      |

---

## 2. Server

### 2.1 Soluzione client-server

Si consiglia una soluzione client-server se il software deve essere distribuito a più client da una posizione centrale.  
In questo caso, il software deve essere installato solo su un singolo server.

---

### 2.2 Soluzione terminal server

Si consiglia una soluzione terminal server se più utenti utilizzano il software direttamente sul server terminal.  
In questo caso, il software deve essere installato solo su un unico server terminal.

---

### 2.3 Terminal server con accesso a unità di rete

È possibile combinare una soluzione terminal server e una soluzione client-server.

In un ambiente terminal server, un'installazione centrale del software viene utilizzata direttamente da uno o più utenti dal server.  
Possono essere utilizzati anche client tramite una soluzione client-server.

---

### 2.4 Soluzione di virtualizzazione

La virtualizzazione dei server viene utilizzata quando più server virtuali devono funzionare sullo stesso hardware fisico.  
Viene installato un software di virtualizzazione su un server host, che fornisce risorse alle macchine virtuali.

> La virtualizzazione può essere utilizzata, ma è prevista una perdita di prestazioni.  
> L'allocazione non fisica dei core e l'**overprovisioning** può causare ulteriori perdite.  
> A seconda del grado di **overprovisioning**, potrebbero verificarsi degradazioni se altri sistemi generano carico sull'hypervisor e consumano risorse.  
> Ciò è particolarmente vero se non sono configurati limiti fissi, priorità o riserve.  
> I limiti fissi possono influire negativamente sulla distribuzione del carico, impedendo che le risorse inutilizzate dell'hypervisor vengano temporaneamente assegnate ad altri sistemi.

---

### 2.5 Requisiti del server

#### Sistemi Operativi supportati

- Windows Server 2016  
- Windows Server 2019  
- Windows Server 2022  
- .NET Framework versione 4.8  

#### Requisiti sul PC

- Devono essere soddisfatti i seguenti requisiti per l'installazione client: [Requisiti di installazione del client](#1-requisiti-di-installazione-del-client)

#### Dischi Rigidi

> Per ottenere prestazioni elevate, si consiglia l'uso di dischi SSD.

---

## 3. Rete e connessione a Internet

### 3.1 Connessione a Internet

#### Requisiti minimi

| Tipo di connessione | Velocità minima |
|--------------------|----------------|
| Download           | 10 Mbit/s      |
| Upload             | 1 Mbit/s       |

#### Servizi che richiedono connessione a Internet

- Aggiornamenti  
- Manutenzione remota  
- Sistema di aiuto online  
- Changelogs  

---

### 3.2 Connessione di rete

È richiesta una connessione di rete stabile per elaborare dati tramite risorse condivise e/o VPN in un ambiente di rete.

| Velocità minima | 1 Gbit/s |

---

## 4. Informazioni tecniche

### 4.1 Connessione a Internet

È necessaria una connessione a Internet per:

- Aggiornamenti del programma  
- Supporto tecnico  
- Manutenzione remota  
- Sistema di aiuto online  

### 4.2 Velocità consigliate

| Tipo      | Minima          | Consigliata      |
|-----------|----------------|-----------------|
| Download  | 6.016 kbit/s   | 50.000 kbit/s   |
| Upload    | 576 kbit/s     | 10.000 kbit/s   |

---

### 4.3 Connessione di rete

> ⚠️ **Attenzione:**  
> Per garantire l'accesso alle unità di rete, queste devono essere dichiarate **"di fiducia"**.  
> Contattare l'amministratore di sistema in caso di dubbi.

Il trattamento dei dati in rete tramite cartelle condivise o VPN richiede:

| Tipo di connessione | Velocità minima | Consigliata  |
|--------------------|----------------|-------------|
| Rete               | 100 Mbit/s     | 1 Gbit/s    |

---
