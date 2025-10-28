# Requisitos do ambiente ENBLAU

## 1. Requisitos para a configuração do aplicativo ENBLAU

Antes de prosseguir com a instalação e configuração do ENBLAU, é necessário realizar algumas configurações prévias no ambiente onde o aplicativo será instalado.

---

### 1.1. Antivírus e Firewall

> Siga as recomendações da seção **2. Ajustes do antivírus e firewall** em [Configuração do Sistema](Configuracion_Sistema.md).

---

## 2. Instalação do ENBLAU

1. Execute o instalador **`Setup Enblau.msi`** fornecido pela ENDADES com um duplo clique.

   ![Setup](../images/Instal_config/setup_msi.jpg)

2. Ao iniciar a instalação, será aberta a janela de **Endades Suite Setup**. Siga os passos abaixo:

   ![Setup passo 1](../images/Instal_config/setup.jpg)

   - Aceite os termos da licença marcando a caixa correspondente.

     ![Setup passo 2](../images/Instal_config/setup2.jpg)

   - Especifique o caminho onde o ENBLAU será instalado.

     ![Setup passo 3](../images/Instal_config/setup3.jpg)

   - Clique em **"Instalar"** para iniciar a instalação.

     ![Finalizar](../images/Instal_config/install.jpg)

   - Conclua o processo.

     ![Finalizar](../images/Instal_config/finish.jpg)

---

## 3. Instalação e criação da instância do SQL Server

Para utilizar o ENBLAU, é necessário instalar o SQL Server e criar uma instância. Isso pode ser feito automaticamente com um arquivo `.bat` ou manualmente.

### 3.1. Instalação automática com `.bat`

1. Acesse pelo Windows Explorer o diretório de instalação do ENBLAU, por exemplo: **`C:\ENBLAU\Datos`**, e localize o arquivo **`00 - InstalaciónSQL.bat`**.

   ![Install sql](../images/Instal_config/install_sql.jpg)

2. Execute o arquivo **`00 - InstalaciónSQL.bat`** como administrador. Isso instalará o **SQL Server 2022** e criará a instância **ENDADES2022**.

   ![Sql Server](../images/Instal_config/install_sql2.jpg)  
   ![Sql Server](../images/Instal_config/install_sql3.jpg)

3. Verifique se a instância foi criada corretamente no **SQL Server Configuration Manager**:

   ![Sql Server](../images/Instal_config/sql_server.jpg)

> **Nota:** Se não for possível executar o arquivo `.bat` mesmo tendo permissões de administrador, ele pode estar bloqueado pelo antivírus ou firewall, impedindo algumas conexões necessárias ao script. Verifique se o antivírus colocou o arquivo em quarentena ou se o firewall está restringindo o acesso à rede ou a recursos específicos.

### 3.2. Instalação manual

1. Acesse o diretório **`C:\ENBLAU\Datos`** e localize o executável **`SQLEXPR_x64_ENU.exe`**. Alternativamente, pode baixá-lo em:  
   [https://www.microsoft.com/pt-br/download/details.aspx?id=104781](https://www.microsoft.com/pt-br/download/details.aspx?id=104781)

   ![Sql Server](../images/Instal_config/sql_exe.jpg)

2. Execute o instalador e siga os passos guiados:

   ![Sql Server](../images/Instal_config/sql_server2.jpg)  
   ![Sql Server](../images/Instal_config/sql_server3.jpg)  
   ![Sql Server](../images/Instal_config/sql_server4.jpg)  
   ![Sql Server](../images/Instal_config/sql_server5.jpg)  
   ![Sql Server](../images/Instal_config/sql_server6.jpg)  
   ![Sql Server](../images/Instal_config/sql_server7.jpg)  
   ![Sql Server](../images/Instal_config/sql_server8.jpg)

   > **Nome da instância:** `ENDADES2022`

   ![Sql Server](../images/Instal_config/sql_server9.jpg)  
   ![Sql Server](../images/Instal_config/sql_server10.jpg)

   > **Senha do usuário `sa`:** `Endades$0`

   ![Sql Server](../images/Instal_config/sql_server11.jpg)  
   ![Sql Server](../images/Instal_config/sql_server12.jpg)  
   ![Sql Server](../images/Instal_config/sql_server13.jpg)

---

## 4. Instalação do SQL Server Management Studio (SSMS)

Recomenda-se instalar o **SQL Server Management Studio 20** no ambiente onde o ENBLAU e o SQL Server foram instalados.

1. Baixe a versão em:  
   [https://learn.microsoft.com/pt-br/ssms/release-notes-20](https://learn.microsoft.com/pt-br/ssms/release-notes-20)

   ![SQL Server Management Studio](../images/Instal_config/ssms.jpg)

2. Siga as instruções oficiais de instalação em:  
   [https://learn.microsoft.com/pt-br/ssms/install/install](https://learn.microsoft.com/pt-br/ssms/install/install)

---

## 5. Criação do banco de dados ENBLAU

### 5.1. Criação via `.bat`

1. Acesse o diretório de instalação do ENBLAU, por exemplo: **`C:\ENBLAU\Datos`**, e localize o arquivo **`01 - CreaciónDB.bat`**.

   ![Caminho banco de dados](../images/Instal_config/ruta_bdd.jpg)

2. Execute o arquivo como administrador. Isso executará os scripts **`CreateDB.sql`** e **`Structure.sql`** localizados em **`C:\ENBLAU\Datos\Scripts`**.

3. Ao concluir, será criado um banco de dados chamado **Easywork** na instância **`servidor\ENDADES2022`**, que será usado pelo ENBLAU.

> **Nota:** Se não for possível executar o arquivo `.bat` mesmo tendo permissões de administrador, ele pode estar bloqueado pelo antivírus ou firewall, impedindo algumas conexões necessárias ao script. Verifique se o antivírus colocou o arquivo em quarentena ou se o firewall está restringindo o acesso à rede ou a recursos específicos.

### 5.2. Criação manual

1. Acesse o diretório de instalação do ENBLAU, por exemplo: **`C:\ENBLAU\Datos\Scripts`**, e localize os scripts **`CreateDB.sql`** e **`Structure.sql`**.

   ![Scripts banco de dados](../images/Instal_config/scripts_bdd.jpg)

2. Abra o **SQL Server Management Studio**, conecte-se ao servidor correspondente, por exemplo: **`servidor\ENDADES2022`**. Certifique-se de usar o usuário **sa** e a senha **Endades$0**.

   ![Conexão SQL](../images/Instal_config/sql_bdd.jpg)

3. Abra primeiro o arquivo **`CreateDB.sql`** e execute-o.

   ![CreateDB](../images/Instal_config/create_db.jpg)

4. Em seguida, repita o mesmo processo com o arquivo **`Structure.sql`**.

> ⚠️ **Importante:** Os scripts devem ser executados na ordem indicada: primeiro **CreateDB.sql**, depois **Structure.sql**.

---

## 6. Seleção do banco de dados no ENBLAU

1. Ao abrir o ENBLAU pela primeira vez, será solicitado selecionar um banco de dados. Clique em **OK**.

   ![Selecionar banco de dados](../images/Instal_config/elegir_bdd.jpg)

2. Na janela **enCONNECT** (aplicativo que abre para **Selecionar banco de dados**), no campo **Servidor**, selecione a instância criada, por exemplo: **`servidor\ENDADES2022`**.

   ![Servidor](../images/Instal_config/servidor.jpg)

3. Clique em **Carregar banco de dados**, expanda o campo correspondente e selecione **Easywork** na lista.

   ![Banco de dados](../images/Instal_config/bdd.jpg)

---

## 7. Conexão à unidade de rede

Para conectar-se ao ENBLAU a partir de um computador Windows, é necessário configurar corretamente a unidade de rede.  
Este passo é fundamental para que o programa funcione corretamente.

Consulte o guia detalhado no seguinte link:  
🔗 [Conectar unidade de rede](https://documentation.endades.com/pt/Utilidades/6.UT_Unidad_Red/)

---

> **Nota:** Para mais informações sobre [Possíveis erros](Posibles_Errores.md)

---

> ⚠️ **Importante:** É obrigatório usar no mínimo **SQL Server 2022** para garantir compatibilidade com as versões do ENBLAU e enSITE.