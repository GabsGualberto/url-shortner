# URL Shortener API
Esta é uma API RESTful para encurtar URLs, construída com Node.js, Express, Sequelize e PostgreSQL, utilizando Docker para facilitar o ambiente de desenvolvimento.

## Pré-requisitos
Certifique-se de ter instalado o seguinte:

Docker
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js 20+](https://nodejs.org/en/download/)

## Configuração do Projeto
### 1. Clone o repositório
```bash
git clone https://github.com/GabsGualberto/url-shortner.git
cd short-url
```

### 2. Instalar dependências
Se você quiser rodar o projeto localmente sem Docker, instale as dependências com:
```bash
npm install
```

### 3. Configurar o Banco de Dados.
A configuração do banco de dados está no arquivo config/config.json. As credenciais do banco de dados devem ser ajustadas de acordo com o seu ambiente:
```
development: Para desenvolvimento local
test: Para rodar testes unitários
production: Para ambiente de produção
```
Certifique-se de que os dados de conexão, como username, password, database, e host estão corretos.

### 4. Rodar o Projeto com Docker.
   
4. 1. Docker Compose.
A maneira mais fácil de rodar o projeto é utilizando Docker. Certifique-se de que o Docker está instalado e executando. No diretório raiz do projeto, execute:
```bash
docker-compose up --build
```
Isso fará o seguinte:
- Construirá a imagem do Node.js.
- Inicializará o banco de dados PostgreSQL.
- Executará as migrações do Sequelize automaticamente.
  
A API estará disponível em ```http://localhost:3000.```

4. 2. Rodar migrações no Docker.
Se as migrações não rodarem automaticamente, você pode rodar o seguinte comando para executá-las dentro do container:

```bash
docker-compose exec app npx sequelize-cli db:migrate
```
### 5. Rodar o Projeto Localmente (Sem Docker)
Se preferir rodar a aplicação sem Docker, siga estes passos:

5. 1. Instalar e configurar o PostgreSQL
Instale o PostgreSQL no seu ambiente e crie o banco de dados com o nome url_shortener.

```bash
psql -U postgres -c "CREATE DATABASE url_shortener;"
```
5. 2. Configuração.
Atualize as credenciais do banco no arquivo config/config.json com as informações do banco de dados local.

5. 3. Rodar Migrações
Execute as migrações para criar as tabelas necessárias no banco de dados:

```bash
npx sequelize-cli db:migrate
```
5. 4. Iniciar o Servidor
Com as dependências instaladas e o banco configurado, inicie o servidor:

```bash
npm start
```
A API estará disponível em ```http://localhost:3000.```

## Endpoints
### 1. Encurtar uma URL
POST ```/shorten```
- Request Body:
```json
{
  "longUrl": "https://example.com"
}
```
- Response Body:
```json
{
  "shortUrl": "http://localhost:3000/:urlCode"
}
```
### 2. Redirecionar para a URL original
GET ```/:urlCode```
Redireciona para a URL original encurtada.

### 3. Registro e Autenticação de Usuário
Você pode adicionar endpoints para registro e autenticação de usuários. Veja os detalhes no código em src/controllers/userController.js.

Dockerizar o Projeto (opcional)
Se você preferir rodar o projeto via Docker, siga o passo de criação do Dockerfile e docker-compose acima. Ele garante um ambiente de desenvolvimento consistente, independente das configurações da sua máquina.

Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Licença
Este projeto está licenciado sob a MIT License.