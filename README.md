# Consultor de CEP

Uma aplicação React moderna para consulta de CEPs brasileiros através de endereço. O projeto utiliza a API do ViaCEP para realizar buscas reversas de CEP a partir do estado, cidade e bairro informados.

## 🚀 Funcionalidades

- Consulta reversa de CEP (busca por endereço)
- Seleção de estado através de dropdown
- Validação de formulário
- Exibição de múltiplos resultados
- Feedback em tempo real do status da busca

## 🛠️ Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface
- **Redux Toolkit**: Gerenciamento de estado da aplicação
- **React Hook Form**: Gerenciamento e validação de formulários
- **Axios**: Cliente HTTP para requisições à API
- **CSS Modules**: Estilização modular dos componentes
- **Lazy**: Carregamentos dos componentes

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── FormEndereco/
│   ├── Input/
│   ├── Select/
│   └── Submit/
├── contexts/
│   ├── enderecoSlice.js
│   └── store.js
└── services/
    └── cepService.js
```

## 💻 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/fehbarea/cep_consultor.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

## 🔍 Funcionalidades Detalhadas

### Formulário de Busca
- Campo de seleção de estado com todos os estados brasileiros
- Campo de entrada para cidade com validação mínima de 3 caracteres
- Campo de entrada para bairro com validação mínima de 3 caracteres
- Botão de submit com feedback visual durante a busca

### Gerenciamento de Estado
- Utiliza Redux Toolkit para gerenciamento de estado global
- Implementa actions assíncronas para chamadas à API
- Mantém estado de loading e erro para melhor experiência do usuário

### Validação de Formulário
- Validação em tempo real dos campos
- Mensagens de erro personalizadas
- Prevenção de submissão com dados inválidos

### Exibição de Resultados
- Lista todos os CEPs encontrados para o endereço
- Exibe informações detalhadas de cada resultado
- Tratamento para casos de nenhum resultado encontrado


## 👤 Autor

- [@fehbarea](https://github.com/fehbarea)
- [@Dani-Jacob](https://github.com/Dani-Jacob)