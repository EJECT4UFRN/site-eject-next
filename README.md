# Site da EJECT - Front-End
> Esse é o repositório do front-end do site da Empresa Junior de Ciência e Tecnologia (EJECT).

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-23272f?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)

# Links importantes 
- [Mockup](https://www.figma.com/design/JIt8c1TRHR3aHgrvBqbkD2/eject?node-id=0-1&p=f&t=h1srKhldk7PAscVL-0)
- [Pipefy](https://app.pipefy.com/pipes/307249384)
- [Repositório do Back](https://github.com/EJECT4UFRN/eject-back)

## 📋 Sobre o Projeto

Descrição do projeto

## 🚀 Tecnologias Utilizadas

### Core

- **Next.js [10.2.3]** - Framework React (SSR/SSG)
- **React [17.0.2]** - Biblioteca de JavaScript 
- **TypeScript [4.3.2]** - Superset tipado de JavaScript
- **styled-components / MUI** - Estilização dos componentes
- **Prismic** - CMS headless para gerenciamento de conteúdo

### Utilitários

- **Node.js [16.20.2]** - Ambiente de execução JavaScript
- **nvm** - Gerenciador de versões do Node.js
- **npm** - Gerenciador de pacotes

## 📁 Estrutura do Projeto

```
site-eject-next/
├── node_modules/              # Dependências do projeto
├── public/                    # Arquivos públicos/estáticos
├── src/
│   ├── components/            # Componentes .tsx
│   ├── hooks/                 # Hooks customizados
│   ├── pages/                 # Rotas da aplicação (roteamento do Next.js)
│   │   └── api/               # API routes do Next.js
│   ├── services/              # Integrações externas (ex: Prismic, API)
│   ├── styles/                # Estilos globais e temas
│   └── utils/                 # Funções utilitárias
├── .env.example                # Modelo das variáveis de ambiente locais
├── .env.production.example     # Modelo das variáveis de ambiente de produção
├── .env.local                  # Variáveis de ambiente (não versionado)
├── .env.production             # Variáveis de ambiente de produção (não versionado)
├── .eslintrc                   # Configuração do ESLint
├── .gitignore                  # Arquivos ignorados pelo Git
├── .nvmrc                      # Versão do Node.js usada no projeto
├── next.config.js              # Configuração do Next.js
├── next-env.d.ts               # Tipos gerados automaticamente pelo Next.js
├── package.json                # Dependências e scripts do projeto
├── package-lock.json           # Lock de dependências do npm
├── README.md                   # README
└── tsconfig.json               # Configuração do TypeScript
```

## ⚙️ Configuração e Instalação

### Pré-requisitos

- **Node.js na versão 16** (o projeto atualmente roda na v16.20.2, definida em [.nvmrc](.nvmrc))
- **[nvm](https://github.com/nvm-sh/nvm)** para gerenciar a versão do Node.js
- **[Yarn](https://yarnpkg.com/getting-started/install)** como gerenciador de pacotes

> ⚠️ O projeto **não é compatível com versões mais recentes do Node** (18+). Use sempre o nvm para garantir a versão correta antes de instalar as dependências.

### 1. Clone o Repositório

```bash
git clone https://github.com/EJECT4UFRN/site-eject-next.git
cd site-eject-next
```

### 2. Configure a versão correta do Node com o nvm

```bash
nvm install
nvm use
```

Isso fará o nvm ler o arquivo `.nvmrc` e instalar/utilizar automaticamente a versão 16.20.2 do Node.

### 3. Instalação de dependências

```bash
npm install
```

### 4. Variáveis de ambiente

Copie os arquivos de exemplo e preencha com os valores corretos (peça-os à equipe):

```bash
cp .env.example .env.local
cp .env.production.example .env.production
```

- **[.env.example](.env.example)** - Modelo das variáveis usadas em desenvolvimento (`.env.local`)
- **[.env.production.example](.env.production.example)** - Modelo das variáveis usadas em produção (`.env.production`)

### 5. Execução do servidor

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000/`

### Outros scripts disponíveis

```bash
npm run build   # Gera a build de produção
npm run start   # Executa a build de produção (necessário rodar "npm run build" antes)
```

### Padrões de Código

- **[TSDoc](https://tsdoc.org/)** para documentação do código
- **ESLint** (configuração `next` / `next/core-web-vitals`) para lint do código

## 👥 Equipe

- [Pedro Henrique](https://github.com/PedroHenrique06) - Scrum Master
- [Tainá Almeida](https://github.com/tainalmeidaa) - Dev Frontend
- [Leonardo Alves](https://github.com/LeonAlves6)- Dev Backend
---
© 2026 **[EJECT](https://www.ejectufrn.com.br/)** <br>
