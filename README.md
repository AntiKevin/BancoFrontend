<h1 align="center">
  Banco Frontend
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=Dev&message=Kevin Rodrigues&color=8257E5&labelColor=000000" />
 <img src="https://img.shields.io/static/v1?label=Tipo&message=Desafio&color=8257E5&labelColor=000000" alt="Desafio" />
</p>

Tabela feita com react e material design para comuniçãp com Api feita em Java com Spring Boot ambos feitos para o desafio para desenvolvedores que se candidataram para a supera.
## 
<img src="docs/images/BancoFrontend.png"/>

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/ptbr/docs/intro)

## Práticas adotadas

- DRY, YAGNI, KISS
- SPA Application
- requisiçòes a API com Axios
- componentização e resiliencia com Material UI
- comunicação assíncrona com tratamento de Loading

## Como Executar

- Clonar repositório git
- Construir o projeto:
```
$ yarn install
```
- Executar a aplicação:
```
$ yarn dev
```

O App poderá ser acessado em [localhost:5173](http://localhost:5173).
A aplicação tentará se comunicar com a API que estiver no endereço: [localhost:8080](http://localhost:8080)

## Features

Ao entrar na pagina da tabela você verá os dados da API automaticamente mas também pode utilizar os seguintes recursos:

### Filtro de intervalo de datas independente:
<img src="docs/images/BancoFrontendFiltroDatas.png"/>

### Filtro de nome do operador da transferencia:
<img src="docs/images/BancoFrontendFiltroNome.png"/>

### Ordenação	client-side para todas as colunas:
<img src="docs/images/BancoFrontendOrdenação.png"/>
