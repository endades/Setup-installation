# Possíveis erros

## 1. Erros e soluções

### 1.1. Erro de conexão ao servidor e banco de dados

**Descrição do erro:**  
  Ao tentar selecionar o banco de dados no **ENBLAU**, aparece uma mensagem de erro quando o servidor ou a instância não são encontrados.  
  Este problema pode ser causado por bloqueios do **antivírus** ou **firewall** no servidor onde o ENBLAU é executado.

  ![Erro banco de dados](/docs/images/Erros/error_bdd.jpg)

**Solução:**  
  Verifique as regras e exceções do antivírus ou firewall no servidor. Exemplo:

  1. No Firewall → Configurações avançadas → **Regras de entrada**, verifique se as portas **1433 TCP** (porta padrão do SQL Server) e **1434 UDP** (para descoberta de instância) estão habilitadas:

  ![Erro banco de dados](/docs/images/Erros/error_bdd2.jpg)

  2. No **SQL Server Configuration Manager**, verifique se a instância **ENDADES2022** tem o TCP/IP habilitado:

  ![Erro banco de dados](/docs/images/Erros/error_bdd3.jpg)

  > **Nota:** Para mais detalhes, consulte a seção **2. Configurações de antivírus e firewall** no guia [Configuração do Sistema](Configuracion_Sistema.md).

  Depois de verificar, acesse **enCONNECT** e selecione o servidor e o banco de dados.

---

### 1.2. Erro de conexão com a fábrica

**Descrição do erro:**  
  Ao tentar conectar-se à fábrica, aparece um erro indicando que o caminho de execução para conectar-se ao **Logikal** não está definido corretamente.

  ![Erro caminho](/docs/images/Erros/error_path.jpg)

**Solução:**  
  Verifique se o caminho do aplicativo **Logikal** está correto.
    
  - No ENBLAU, vá para:  
    **Geral → Logikal - Conexão e Projetos**.

  ![Solução caminho 1](/docs/images/Erros/solucion_path2.jpg)

  ![Solução caminho 2](/docs/images/Erros/solucion_path.jpg)

---

### 1.3. Erro de interface ERP

**Descrição do erro:**  
  Ao tentar conectar-se à fábrica, aparece um erro indicando que não foi encontrada uma licença válida para a **interface ERP** do Logikal.

  ![Erro ERP Logikal](/docs/images/Erros/error_ERP.jpg)

**Solução:**  
  Para estabelecer a conexão com a fábrica, é necessário ter instalado o **módulo ERP do Logikal**.  
  Entre em contato com a **Orgadata** para gerenciar a licença:

  - Email: [customer.support@orgadata.com](mailto:customer.support@orgadata.com)  
  - Ligue para o técnico responsável pelo suporte do Logikal.

---

### 1.4. Erro de conexão ao servidor a partir do enSITE

- **Descrição do erro:**  
  Ao tentar conectar-se ao servidor a partir do aplicativo **enSITE** (tablet), aparece uma mensagem de erro relacionada à conexão com o servidor SQL.

  ![Erro enSITE](/docs/images/Erros/error_ensite.jpg)

  ![Erro enSITE](/docs/images/Erros/error_ensite2.jpg)

---

**Solução:**

  1. **Verificar a rede:**  
    Certifique-se de que o tablet está conectado à **mesma rede local** do servidor onde está o banco de dados.

  2. **Verificar o firewall e antivírus:**  
    Verifique se o **firewall** e/ou **antivírus** não estão bloqueando a conexão entre o dispositivo e o SQL Server.  
    Adicione regras ou exceções, se necessário.

  3. **Verificar a configuração das portas:**  
    No servidor, certifique-se de que as **portas usadas pelo SQL Server estão habilitadas**, incluindo:
    - **1433/TCP** (porta padrão do SQL Server). Verificar e configurar em **SQL Server Configuration Manager**:  
        - Vá para **SQL Server Network Configuration → Protocols for ENDADES2022**.  
        - Em **Propriedades TCP/IP → Endereços IP**, certifique-se de que <span style="color:red">**todos os IPs**</span> tenham a **porta TCP** configurada como **1433** e as **portas TCP dinâmicas** definidas como **0**.

          ![Erro enSITE](/docs/images/Erros/error_ensite3.jpg)

      - **1434 UDP** (para descoberta de instância)
      <!-- - Outras portas personalizadas que podem ser usadas pelo enSITE, por exemplo: **TCP-57073** -->

---

**Nota:** Este erro é comum quando há conflitos nas configurações de rede ou segurança. Validar todos os pontos acima geralmente resolve o problema.

---

> ⚠️ **Importante:** É obrigatório usar, no mínimo, o **SQL Server 2022** para garantir a compatibilidade com as versões do ENBLAU e do enSITE.
