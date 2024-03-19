# :cupcake: Lazuli :cupcake:

## Sobre o projeto :scroll:

Lazuli é um sistema ERP desenvolvido para uma confeitaria, com o objetivo de auxiliar no controle de entrada e saída de produtos, lucros e despepesas, precificação de produtos, entre outras informações.

## Tabela de conteúdo
- [Sobre o projeto](https://github.com/liberatov13/lazuli-ui/edit/master/README.md#sobre-o-projeto-scroll)
  - [Funcionalidades do sistema](https://github.com/liberatov13/lazuli-ui/edit/master/README.md#funcionalidades)
  - [Tecnoogias utilizadas](https://github.com/liberatov13/lazuli-ui/edit/master/README.md#tecnologias-utilizadas-hammer_and_wrench)
- [Executando o projeto](https://github.com/liberatov13/lazuli-ui/edit/master/README.md#executando-projeto-)
  - [Máquina local](https://github.com/liberatov13/lazuli-ui/edit/master/README.md#m%C3%A1quina-local-desktop_computer)
  - [Docker]()
- [Créditos](https://github.com/liberatov13/lazuli-ui/edit/master/README.md#autor-pencil2)

#### Funcionalidades:
- [X] Cadastro de produtos
- [ ] Cadastro de receitas
- [ ] Controle de vendas e compras
- [ ] Controle de estoque
- [ ] Relatórios

## Tecnologias utilizadas :hammer_and_wrench:
- Angular (v16)
- PrimeNG (v16)
- PrimeFlex (v3)
- FontAwesome (v6)

## Executando projeto 🧑‍💻

Esse aplicação deve ser utilizando em conjunto com o projeto [Lazuli API](https://github.com/liberatov13/lazuli-api)

### Máquina local :desktop_computer:

#### Pré-requisitos
- NodeJS (v20)
- NPM (v10)
- [API](https://github.com/liberatov13/fintech-back-end)

Baixe e execute o [projeto back-end](https://github.com/liberatov13/fintech-back-end) do GitHub.
As instruções para executar a API estão disponíveis no README do projeto.

#### Instalação e execução do front-end

```bash
# Clone o projeto front-end
git clone https://github.com/liberatov13/lazuli-ui.git

# Acesse o diretório do projeto
cd lazuli-ui

# Instale as dependencias
npm install

# Execute o projeto com npm
npm start
```

#### Docker 🐳

##### Pré-requisitos
- Docker
- Docker compose

```bash
# Clone o projeto front-end
git clone https://github.com/liberatov13/lazuli-ui.git

# Acesse o diretório do projeto
cd lazuli-ui

# Execute a aplicação com docker compose
docker compose up -d
```

A aplicação ficará disponível através da URL http://localhost:4200 ou http://127.0.0.1:4200


## Autor :pencil2:
[Elvis Liberato de Barros](https://github.com/liberatov13)
