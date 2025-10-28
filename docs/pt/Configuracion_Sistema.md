# Configuração do sistema


## 1. Redes compartilhadas e configurações de rede

O servidor fornece o programa aos clientes através do compartilhamento de rede.

### 1.1. Requisitos para usuários do Windows

Para o funcionamento correto do programa em ambientes Windows, os usuários devem ter as seguintes permissões e configurações:

- **Permissões necessárias**: É necessário acesso de leitura, gravação e modificação em:
  - A unidade de rede onde se encontra a pasta compartilhada do **Enblau**.
  - Todos os arquivos e subpastas dentro do diretório do programa.

- **Mapeamento da unidade**:
  - As pastas de rede utilizadas pelo programa devem estar mapeadas para uma **letra de unidade** (por exemplo, `Z:\Enblau`).  
  - Não é suficiente conectar o recurso compartilhado por meio de um caminho UNC (como `\\servidor\Enblau`); é preciso atribuir uma letra de unidade.

- **Limitações**:
  - O aplicativo não pode ser executado corretamente sem a atribuição de uma letra de unidade.

> **Nota:** Para mais informações detalhadas, acesse [Conectar unidade de rede](https://documentation.endades.com/Utilidades/6.UT_Unidad_Red/)

> ⚠️ **Atenção:**  
> Para garantir um acesso estável às unidades de rede, elas devem ser declaradas como confiáveis. Para mais informações, entre em contato com o administrador do sistema.

- **Permissões de instalação:**  
  São necessários privilégios de administrador.

---

## 2. Configurações do antivírus e firewall

> ⚠️ **Atenção:**  
> A avaliação de riscos das configurações e exceções aqui mencionadas continua sendo de sua responsabilidade ou de seu prestador de serviços de TI.

- Certifique-se de que não bloqueiem a instalação ou a conexão do aplicativo.

---

### 2.1. Definir a unidade de rede como confiável

Definir a unidade como “confiável” garante a estabilidade necessária do programa no uso diário e otimiza o desempenho.

 Passos:

1. Mantenha pressionada a tecla **Windows** no teclado e pressione a tecla **R**.
2. Digite `inetcpl.cpl` na janela que aparecer.
3. Serão abertas as **Opções da Internet**.
4. Selecione:  
   `Segurança` > `Intranet local` > `Sites` > `Avançado`
5. Adicione os endereços de rede como:  
   `\\Endereço_IP` e `Endereço_IP`  
   Exemplo: `\\192.168.15.66` e `192.168.15.66`

---

### 2.2. Exceções para o antivírus

 Preparar a configuração de exceções no software antivírus:

- **Armazenar os certificados** com os quais os executáveis do programa são assinados.  
  Os certificados podem ser extraídos de arquivos `*.exe`. Alguns antivírus permitem visualizar o repositório de certificados do sistema operacional.

- **Aumentar o nível de confiança** ou o grupo de confiança atribuído no software antivírus:
  - Para arquivos `.exe`/`.dll` no diretório do programa.
  - Ou para o nível de confiança do certificado de assinatura de código.

---

### 2.3. Definir exceções no antivírus para:

- O **diretório do programa**, por exemplo, na unidade de rede onde o programa está instalado.  
  Inclui todas as pastas necessárias até o diretório do programa.

---
