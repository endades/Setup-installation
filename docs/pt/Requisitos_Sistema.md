# Requisitos do Sistema

## 1. Requisitos de instalação do cliente

A instalação do cliente (servidor) é uma instalação local em um computador.

---

### 1.1 Requisitos recomendados

| Componente       | Especificação                                           |
|-----------------|---------------------------------------------------------|
| Sistema Operacional | Windows 11 Pro; .NET Framework versão 4.8 ou superior |
| Processador       | Intel Core i7 Gen10 / AMD Ryzen 7 Série 5000           |
| Memória           | Sistema operacional 64 bits, 16 GB de RAM              |
| Disco Rígido      | SSD, 150 GB de espaço disponível                        |
| Conexões          | USB                                                     |
| Resolução         | 1920 px x 1080 px                                      |

---

### 1.2 Requisitos mínimos

> **Nota:**  
> Para obter maior desempenho, recomenda-se utilizar discos SSD. Eles são muito mais rápidos no processamento que os HDDs convencionais.

| Componente       | Especificação                                           |
|-----------------|---------------------------------------------------------|
| Sistema Operacional | Windows 10 Versão 22H2; .NET Framework versão 4.8     |
| Processador       | Intel Core i5 Gen10 / AMD Ryzen Série 2000             |
| Memória           | SO 64 bits: 4 GB RAM<br>SO 64 bits: 6 GB RAM          |
| Disco Rígido      | 80 GB de espaço disponível                              |
| Conexões          | USB                                                     |
| Resolução         | 1280 px x 1024 px                                      |

---

## 2. Servidor

### 2.1 Solução cliente-servidor

Recomenda-se uma solução cliente-servidor se o software precisar ser distribuído para vários clientes a partir de uma localização central.  
Nesse caso, o software só precisa ser instalado em um único servidor.

---

### 2.2 Solução Terminal Server

Recomenda-se uma solução Terminal Server se vários usuários utilizarem o software diretamente no servidor terminal.  
Nesse caso, o software só precisa ser instalado em um único servidor terminal.

---

### 2.3 Terminal Server com acesso a unidade de rede

É possível combinar uma solução Terminal Server e uma solução cliente-servidor.

Em um ambiente de Terminal Server, uma instalação central do software é utilizada diretamente por um ou mais usuários a partir do servidor.  
Clientes também podem ser utilizados através de uma solução cliente-servidor.

---

### 2.4 Solução de virtualização

A virtualização de servidores é usada quando vários servidores virtuais precisam funcionar sobre o mesmo hardware físico.  
Um software de virtualização é instalado em um servidor host, fornecendo recursos às máquinas virtuais.

> A virtualização pode ser usada, mas é esperado perda de desempenho.  
> A alocação não física de núcleos e o uso de **overprovisioning** podem causar perdas adicionais.  
> Dependendo do grau de **overprovisioning**, pode haver degradação de desempenho se outros sistemas gerarem carga no hypervisor e consumirem recursos.  
> Isso é especialmente verdadeiro se limites fixos, prioridades ou reservas não forem configurados.  
> Limites fixos podem afetar negativamente a distribuição de carga, impedindo que recursos não utilizados do hypervisor sejam temporariamente atribuídos a outros sistemas.

---

### 2.5 Requisitos do servidor

#### Sistemas operacionais suportados

- Windows Server 2016  
- Windows Server 2019  
- Windows Server 2022  
- .NET Framework versão 4.8  

#### Requisitos no PC

- É necessário atender aos seguintes requisitos para o cliente: [Requisitos de instalação do cliente](#1-requisitos-de-instalação-do-cliente)

#### Discos Rígidos

> Para obter maior desempenho, recomenda-se o uso de discos SSD.

---

## 3. Rede e Conexão à Internet

### 3.1 Conexão à Internet

#### Requisitos Mínimos

| Tipo de Conexão | Velocidade mínima |
|-----------------|-----------------|
| Download        | 10 Mbit/s       |
| Upload          | 1 Mbit/s        |

#### Serviços que requerem conexão à Internet

- Atualizações  
- Manutenção remota  
- Sistema de ajuda online  
- Changelogs  

---

### 3.2 Conexão de Rede

É necessária uma conexão de rede estável para processar dados usando recursos compartilhados e/ou VPN em um ambiente de rede.

| Velocidade mínima | 1 Gbit/s |

---

## 4. Informações técnicas

### 4.1 Conexão à Internet

É necessária conexão à Internet para:

- Atualizações do programa  
- Suporte técnico  
- Manutenção remota  
- Sistema de ajuda online  

### 4.2 Velocidades recomendadas

| Tipo      | Mínima        | Recomendada     |
|-----------|---------------|----------------|
| Download  | 6.016 kbit/s  | 50.000 kbit/s |
| Upload    | 576 kbit/s    | 10.000 kbit/s |

---

### 4.3 Conexão de Rede

> ⚠️ **Atenção:**  
> Para garantir o acesso às unidades de rede, elas devem ser declaradas como **"confiáveis"**.  
> Entre em contato com o administrador do sistema em caso de dúvidas.

O processamento de dados em rede usando pastas compartilhadas ou VPN requer:

| Tipo de Conexão | Velocidade mínima | Recomendada |
|-----------------|-----------------|-------------|
| Rede            | 100 Mbit/s      | 1 Gbit/s   |

---
