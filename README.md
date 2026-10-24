# Cadastro de Usuários

Aplicação web desenvolvida com React e Vite para gerenciamento de usuários, com interface estilizada utilizando Styled Components e integração com uma API REST para persistência dos dados.

O projeto permite cadastrar, listar e excluir usuários por meio de uma interface responsiva, conectada ao backend hospedado na nuvem.

## Tecnologias utilizadas

- **React** - construção da interface por componentes.
- **Vite** - ambiente de desenvolvimento e ferramenta de build.
- **JavaScript** - linguagem utilizada no desenvolvimento.
- **Styled Components** - estilização dos componentes com CSS-in-JS.
- **Axios** - comunicação HTTP com a API.
- **React Router DOM** - gerenciamento de rotas da aplicação.
- **PropTypes** - validação de propriedades dos componentes.
- **ESLint** - análise estática e identificação de possíveis problemas no código.

## Funcionalidades

- Cadastro de usuários com nome, idade e e-mail.
- Listagem dos usuários cadastrados.
- Exclusão de usuários.
- Validação dos campos do formulário.
- Notificações de sucesso e erro durante as operações.
- Navegação entre as telas da aplicação.
- Integração com uma API REST.
- Interface com tema escuro e detalhes em verde neon.

## Estrutura do projeto

```text
frontend/

cadastro-usuarios/
├── src/
│   ├── assets/
│   │   ├── adicionar.png
│   │   ├── calendario.png
│   │   ├── correspondencia.png
│   │   ├── img-principal.svg
│   │   ├── listar.png
│   │   ├── lista-usuarios.png
│   │   ├── nome.svg
│   │   ├── principal-img.ico
│   │   └── trash.svg
│   │
│   ├── components/
│   │   └── Button/
│   │       ├── index.jsx
│   │       └── styles.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.jsx
│   │   │   └── styles.js
│   │   │
│   │   └── ListUsers/
│   │       ├── index.jsx
│   │       └── styles.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   └── GlobalStyles.js
│   │
│   ├── main.jsx
│   └── routes.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

```

A estrutura acima é uma representação geral dos principais diretórios. Os nomes e a organização podem variar conforme a estrutura atual do repositório.

## Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

- Node.js.
- npm.

Também é necessário que o backend esteja disponível para que as operações de cadastro, listagem e exclusão funcionem integralmente.

## Instalação

Clone o repositório do frontend:

```bash
git clone URL_DO_REPOSITORIO
cd NOME_DA_PASTA
```

Instale as dependências:

```bash
npm install
```

## Executando localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação no navegador.

## Scripts disponíveis

| Comando           | Descrição                                                 |
|-------------------|-----------------------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento.                     |
| `npm run build`   | Gera a versão de produção da aplicação.                   |
| `npm run preview` | Permite visualizar localmente a versão gerada pelo build. |
| `npm run lint`    | Executa o ESLint para analisar o código.                  |

## Integração com o backend

A aplicação utiliza Axios para realizar requisições HTTP ao backend.

A URL base da API de produção é:

```text
https://cadastro-usuarios-backend-dm8t.onrender.com
```

A configuração está centralizada no serviço de API, localizado em `src/services/api.js`.

Exemplo de configuração:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "https://cadastro-usuarios-backend-dm8t.onrender.com",
});

export default api;
```

As operações de cadastro, listagem e exclusão utilizam os endpoints disponibilizados pelo backend.

| Método HTTP | Endpoint        | Finalidade                          |
|-------------|-----------------|-------------------------------------|
| `POST`      | `/usuarios`     | Cadastrar usuário.                  |
| `GET`       | `/usuarios`     | Listar usuários.                    |
| `DELETE`    | `/usuarios/:id` | Excluir usuário pelo identificador. |

## Deploy

O frontend está publicado na **Vercel**, enquanto o backend está hospedado no **Render** e utiliza o MongoDB Atlas para persistência dos dados.

Para publicar o frontend na Vercel:

1. Conecte o repositório do frontend ao projeto na Vercel.
2. Configure o projeto para utilizar Vite.
3. Utilize `npm run build` como comando de build.
4. Utilize `dist` como diretório de saída.
5. Faça o deploy e valide o funcionamento da aplicação publicada.

Após alterações no código, envie as atualizações ao GitHub para que a Vercel possa executar um novo deploy, conforme a configuração de integração do projeto.

## Validação do código

Para executar a análise estática com ESLint:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

Esses comandos ajudam a verificar o código e a preparar os arquivos finais para publicação.

## Aprendizados

O desenvolvimento deste projeto permitiu praticar:

- Desenvolvimento de interfaces com React.
- Organização de componentes e páginas.
- Gerenciamento de navegação com React Router DOM.
- Estilização com Styled Components.
- Consumo de API REST utilizando Axios.
- Validação de formulários e tratamento de erros.
- Integração entre frontend, backend e banco de dados.
- Publicação de aplicações web com Vercel.

## Status do projeto

O frontend está publicado e integrado ao backend em produção.

As funcionalidades de cadastro, listagem e exclusão foram testadas com sucesso. A edição de usuários está planejada para uma implementação futura.

## Autor

**Geovane Allen**

Desenvolvedor Front-End em evolução para Full Stack.
