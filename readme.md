Trabalho de Desenvolvimento de Sistemas:
este trabalho consiste em sistema de CRUD/cadastro de personagens de animes, desenhos e séries.

Integrantes:
Vitor Emanuel de Souza.
Victor Augusto
Victor Nathan

Como rodar o projeto em sua máquina:
Primeiro clone o preojeto;
Criar e colocar as chaves no ".env";
Utilize "npm i" para baixar as bibliotecas.
Criar e vincular o arquivo do banco e atualiza-lo usando o comando "npx prisma db push"

Como testar as requisições:
Listar:
URL: http://localhost:8080/personagens;
Método: <GET>;
Body: .

Criar:
URL: http://localhost:8080/personagens;
Método: <POST>;
Body: "name" e "email".

Pegar dados:
URL: http://localhost:8080/personagens/:id;
Método: <GET>;
Body: .

Atualizar:
URL: http://localhost:8080/personagens/:id;
Método: <PUT>;
Body: "name".

Deletar:
URL: http://localhost:8080/personagens/:id;
Método: <DELETE>;
Body: .