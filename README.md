


<h1 align="center" style="font-weight: bold;">Drip Store Backend API 💻</h1>
<p align="center">
 <a href="#started">Getting Started</a> • 
  <a href="#routes">API Endpoints</a> •
</p>

<p align="center">
  <b>Backend da drip store contendo informações de usuários e produtos construído em Nodejs e MySQL.</b>
</p>

<h2 id="started">🚀 Começando</h2>

<p>
  Abaixo estão as orientações e resquisitos necessários para utilizar o projeto localmente na sua máquina.
</p>



<h3>Requisitos</h3>

- [NodeJS](https://github.com/)
- [Git 2](https://github.com)

<h3>Clonando este repositório</h3>

Como clonar o repositório

```bash
git clone https://github.com/nicolasfreitas-dev/drip-store-backend.git
```

<h3>Iniciando</h3>

Como rodar o projeto

```bash
cd drip-store-backend
npm start
``````

Como realizar a conexão com o banco de dados

```bash
npm run db
```

Como sincronizar informações do sequelize com o banco de dados

```bash
npm run syncdb
```

<h2 id="routes">📍 API Endpoints</h2>

<h3>Rotas de usuários</h3>

| Rotas               | Descrição                                         
|----------------------|-----------------------------------------------------
| <kbd>GET /usuarios</kbd>     | Retorna a lista de usuários cadastrados
| <kbd>GET /usuario/:id</kbd>     | Retorna um usuário específico pelo ID
| <kbd>POST /usuarios</kbd>     | Cria um novo usuário no banco de dados
| <kbd>PUT /usuario/:id</kbd>     | Atualiza um usuário específico pelo ID
| <kbd>DELETE /usuario/:id</kbd>     | Deleta um usuário específico pelo ID

<h3>Rotas de categorias</h3>

| Rotas               | Descrição                                         
|----------------------|-----------------------------------------------------
| <kbd>GET /categorias</kbd>     | Retorna a lista de categorias cadastradas
| <kbd>GET /categoria/:id</kbd>     | Retorna uma categoria específica pelo ID
| <kbd>POST /categorias</kbd>     | Cria uma nova categoria no banco de dados
| <kbd>PUT /categoria/:id</kbd>     | Atualiza uma categoria específica pelo ID
| <kbd>DELETE /categoria/:id</kbd>     | Deleta uma categoria específica pelo ID

<h3>Rotas de produtos</h3>

| Rotas               | Descrição                                         
|----------------------|-----------------------------------------------------
| <kbd>GET /produtos</kbd>     | Retorna a lista de produtos cadastrados
| <kbd>GET /produto/:id</kbd>     | Retorna um produto específico pelo ID
| <kbd>POST /produtos</kbd>     | Cria um novo produto no banco de dados
| <kbd>PUT /produto/:id</kbd>     | Atualiza um produto específico pelo ID
| <kbd>DELETE /produto/:id</kbd>     | Deleta um produto específico pelo ID

<h3>GET /usuarios</h3>

**RESPONSE**
```json
{
  "id": 1,
  "name": "Lucas",
  "surname": "Ferreira",
  "email": "lucas.ferreira@example.com",
  "password": "p@ssw0rd123",
  "createdAt": "2024-08-16T17:22:24.000Z",
  "updatedAt": "2024-08-16T17:22:24.000Z"
}
```

<h3>POST /usuarios</h3>

**REQUEST**
```json
{
  "name": "Fernando",
  "surname": "José",
  "email": "fernando.j@example.com",
  "password": "p@ssw0rd123"
}
```
<h3>GET /categorias</h3>

**RESPONSE**
```json
{
  "id": 1,
  "name": "camisetas",
  "slug": "camisetas",
  "use_in_menu": false,
  "createdAt": "2024-08-16T17:22:31.000Z",
  "updatedAt": "2024-08-16T17:22:31.000Z"
}
```

<h3>POST /categorias</h3>

**REQUEST**
```json
{
  "name": "camisetas",
  "slug": "camisetas",
}
```
<h3>GET /produtos</h3>

**RESPONSE**
```json
{
  "id": 1,
  "enabled": false,
  "name": "K-Swiss V8 - Masculino",
  "slug": "tenis",
  "use_in_menu": false,
  "stock": 0,
  "description": "Tênis da nova coleção K-Swiss",
  "price": 200,
  "price_with_discount": 149,
  "createdAt": "2024-08-16T17:22:37.000Z",
  "updatedAt": "2024-08-16T17:22:37.000Z"
}
```

<h3>POST /produtos</h3>

**REQUEST**
```json
{
  "name": "K-Swiss V8 - Masculino",
  "slug": "tenis",
  "description": "Tênis da nova coleção K-Swiss",
  "price": 200,
  "price_with_discount": 149
}
```
