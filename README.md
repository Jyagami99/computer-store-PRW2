# Computer Store - Loja de Informática

Uma aplicação React moderna para gerenciamento de produtos de informática, desenvolvida com arquitetura feature-based e boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **Vite** - Build tool moderna e rápida
- **ESLint** - Linting e análise de código
- **Prettier** - Formatação automática de código
- **Husky** - Git hooks para qualidade de código

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/Jyagami99/computer-store-PRW2.git

# Entre na pasta do projeto
cd computer-store-prw2

# Instale as dependências
npm install

# Configure os git hooks (Husky)
npm run prepare
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev                 # Inicia o servidor de desenvolvimento

# Build
npm run build              # Gera build de produção
npm run preview            # Visualiza build de produção

# Qualidade de Código
npm run lint               # Executa ESLint
npm run lint:fix           # Corrige problemas do ESLint automaticamente
npm run format             # Formata código com Prettier
npm run format:check       # Verifica formatação sem alterar arquivos
npm run pre-commit         # Executa lint + format (usado pelo Husky)
```

## 🏗️ Arquitetura do Projeto

```
src/
├── context/
│   └── ProductContext.jsx          # Estado global dos produtos
├── components/
│   ├── ui/                         # Componentes reutilizáveis
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   └── Button.jsx
│   └── layout/                     # Componentes de layout
│       └── Banner.jsx
├── features/                       # Funcionalidades organizadas
│   ├── products/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx
│   │   │   └── ProductCard.jsx
│   │   └── hooks/
│   │       └── useProductForm.js
│   └── sections/
│       └── components/
│           ├── SectionList.jsx
│           └── SectionItem.jsx
├── utils/
│   └── constants.js                # Constantes do sistema
└── App.jsx                         # Componente principal
```

## ⚙️ Configurações de Desenvolvimento

### ESLint

- Configurado para React + JavaScript
- Regras para Hooks, JSX, Acessibilidade
- Integração com Prettier
- Ordenação automática de imports

### Prettier

- Formatação consistente de código
- Configurado para usar aspas simples
- Sem vírgula trailing
- Largura de linha: 80 caracteres

### Git Hooks (Husky)

- **Pre-commit**: Executa lint-staged (lint + format em arquivos modificados)
- **Pre-push**: Executa lint completo + verificação de formatação

### VS Code

- Formatação automática ao salvar
- Correção de ESLint ao salvar
- Extensões recomendadas incluídas

## 🎯 Funcionalidades

- ✅ Cadastro de produtos por categoria
- ✅ Exibição dinâmica por seções
- ✅ Validação de formulário
- ✅ Renderização condicional
- ✅ Design responsivo
- ✅ Gerenciamento de estado com Context API

## 📋 Como Usar

1. **Desenvolvimento Local**:

   ```bash
   npm run dev
   ```

2. **Antes de Commit**:

   ```bash
   npm run pre-commit  # Opcional, Husky já faz automaticamente
   ```

3. **Deploy**:
   ```bash
   npm run build
   ```

## 🔧 Configurações Personalizadas

### Modificar Regras do ESLint

Edite o arquivo `.eslintrc.json` na seção `rules`.

### Modificar Formatação do Prettier

Edite o arquivo `.prettierrc`.

### Adicionar Novas Dependências

```bash
npm install nome-da-dependencia
npm install -D nome-da-dependencia-dev  # Para dev dependencies
```

## 📝 Padrões de Código

### Componentes

- Use **PascalCase** para nomes de componentes
- Use **camelCase** para props e funções
- Prefira **arrow functions** para componentes funcionais

### Hooks

- Sempre comece com `use`
- Mantenha lógica separada da apresentação
- Use custom hooks para reutilização

### Imports

- Organize imports por grupos (externos, internos, relativos)
- Use ordenação alfabética automática

### Commits

- Use mensagens descritivas
- Prefira commits pequenos e focados
- O Husky irá validar antes do commit

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Desenvolvido com ❤️ por João Marcelo e Yasmim Sayuri para a disciplina PRW2**
