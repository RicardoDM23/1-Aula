Empresa Bancária

A especificação dos requisitos dos usuários pode ser apurada por meio de entrevistas unidas a própria avaliação do 
projetista sobre a empresa.
A descrição resultante dessa fase de projeto é a base da especificação da estrutura conceitual do banco de dados. 
A lista de itens que segue apresenta as principais necessidades de uma empresa da área bancária.

• Um banco é organizado em agências. Cada agência é localizada em uma cidade e é identificada por um nome único. O banco controla os fundos de cada uma dessas agências.

• Os clientes do banco são identificados pelo número do seu CPF. O banco mantém dados como nome, rua e cidade do cliente. Os clientes podem possuir contas e contrair empréstimos. 
  O cliente pode estar associado a um bancário específico que cuida de seus negócios ou atua como um agente de empréstimo.

• Os empregados do banco também são identificados por meio do número do seu CPF. A administração do banco mantém o nome e o número de telefone de cada um de seus empregados, os nomes dos seus dependentes e o número do CPF do seu gerente.
  O banco também possui a data de contratação do empregado e, com isso, seu tempo de trabalho.

• O banco oferece dois tipos de contas – contas poupança e contas correntes. As contas correntes podem possuir mais de um correntista, e um correntista pode possuir mais de uma conta. Cada conta possui um número único. 
  O banco controla o saldo de cada conta, assim como a data mais recente de acesso a essa conta. Por outro lado, cada poupança possui a taxa de juros associada, assim como são também registrados os excessos nos limites da conta corrente.

• Um empréstimo originado em uma agência em particular pode ter sido obtido por um ou mais clientes. Um empréstimo é identificado por um número único. Para cada empréstimo o banco mantém o montante emprestado, assim como os pagamentos 
  das parcelas. Embora o número da parcela de um empréstimo não identifique de modo único um pagamento específico dentre os muitos realizados no banco, o número da parcela identifica um pagamento efetuado para um empréstimo em particular. 
  A data e o montante são registrados no pagamento de cada parcela.

Considere seguir os seguintes passos:

1. Determinar o conjunto de entidades e seu atributos;
2. Determinar o conjunto de relacionamentos e seus atributos;
3. Determinar os mapeamentos de cardinalidade; e
4. Desenhar o diagrama