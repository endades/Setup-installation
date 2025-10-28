# System Requirements

## 1. Client Installation Requirements

The client (server) installation is a local installation on a computer.

---

### 1.1 Recommended Requirements

| Component        | Specification                                              |
|-----------------|------------------------------------------------------------|
| Operating System | Windows 11 Pro; .NET Framework version 4.8 or higher      |
| Processor        | Intel Core i7 Gen10 / AMD Ryzen 7 Series 5000             |
| Memory           | 64-bit operating system, 16 GB RAM                         |
| Hard Drive       | SSD, 150 GB free space                                     |
| Connections      | USB                                                        |
| Resolution       | 1920 px x 1080 px                                         |

---

### 1.2 Minimum Requirements

> **Note:**  
> To achieve higher performance, it is recommended to use SSDs. They are much faster in processing than conventional HDDs.

| Component        | Specification                                              |
|-----------------|------------------------------------------------------------|
| Operating System | Windows 10 Version 22H2; .NET Framework version 4.8       |
| Processor        | Intel Core i5 Gen10 / AMD Ryzen Series 2000               |
| Memory           | 64-bit OS: 4 GB RAM<br>64-bit OS: 6 GB RAM               |
| Hard Drive       | 80 GB free space                                          |
| Connections      | USB                                                        |
| Resolution       | 1280 px x 1024 px                                         |

---

## 2. Server

### 2.1 Client-Server Solution

A client-server solution is recommended if the software needs to be distributed to multiple clients from a central location.  
In this case, the software only needs to be installed on a single server.

---

### 2.2 Terminal Server Solution

A terminal server solution is recommended if multiple users use the software directly on the terminal server.  
In this case, the software only needs to be installed on a single terminal server.

---

### 2.3 Terminal Server with Network Drive Access

It is possible to combine a terminal server solution and a client-server solution.

In a terminal server environment, a central installation of the software is used directly by one or more users from the server.  
Clients can also be used through a client-server solution.

---

### 2.4 Virtualization Solution

Server virtualization is used when multiple virtual servers need to run on the same physical hardware.  
A virtualization software is installed on a host server, providing resources to the virtual machines.

> Virtualization can be used, but a performance loss is expected.  
> Non-physical core allocation and **overprovisioning** can cause additional losses.  
> Depending on the degree of **overprovisioning**, there may be performance degradation if other systems generate load on the hypervisor and consume resources.  
> This is especially true if fixed limits, priorities, or reservations are not configured.  
> Fixed limits can negatively affect load distribution, preventing unused hypervisor resources from being temporarily assigned to other systems.

---

### 2.5 Server Requirements

#### Supported Operating Systems

- Windows Server 2016  
- Windows Server 2019  
- Windows Server 2022  
- .NET Framework version 4.8  

#### PC Requirements

- The following client installation requirements must be met: [Client Installation Requirements](#1-client-installation-requirements)

#### Hard Drives

> To achieve higher performance, the use of SSD drives is recommended.

---

## 3. Network and Internet Connection

### 3.1 Internet Connection

#### Minimum Requirements

| Connection Type | Minimum Speed |
|-----------------|---------------|
| Download        | 10 Mbit/s     |
| Upload          | 1 Mbit/s      |

#### Services Requiring Internet Connection

- Updates  
- Remote maintenance  
- Online help system  
- Changelogs  

---

### 3.2 Network Connection

A stable network connection is required to process data using shared resources and/or VPN in a network environment.

| Minimum Speed | 1 Gbit/s |

---

## 4. Technical Information

### 4.1 Internet Connection

Internet access is required for:

- Program updates  
- Technical support  
- Remote maintenance  
- Online help system  

### 4.2 Recommended Speeds

| Type      | Minimum         | Recommended    |
|-----------|----------------|----------------|
| Download  | 6,016 kbit/s   | 50,000 kbit/s |
| Upload    | 576 kbit/s     | 10,000 kbit/s |

---

### 4.3 Network Connection

> ⚠️ **Attention:**  
> To guarantee access to network drives, they must be declared as **"trusted"**.  
> Contact your system administrator if you have any doubts.

Network data processing using shared folders or VPN requires:

| Connection Type | Minimum Speed | Recommended |
|-----------------|---------------|------------|
| Network         | 100 Mbit/s    | 1 Gbit/s  |

---
