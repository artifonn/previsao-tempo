# App de Clima

## Visão Geral

Este App de Clima é uma aplicação web simples e amigável que permite aos usuários pesquisar informações meteorológicas atuais para diversas localidades. Utilizando a API do OpenWeatherMap, ele busca dados como temperatura, velocidade do vento e condições climáticas com base na consulta do usuário.

## Funcionalidades

- **Funcionalidade de Pesquisa**: Os usuários podem pesquisar qualquer cidade para obter dados meteorológicos em tempo real.
- **Exibição de Informações Meteorológicas**: Exibe informações como temperatura, velocidade do vento e um ícone representando a condição climática atual.
- **Tratamento de Erros**: Fornece feedback quando uma localização não é encontrada ou se o campo de entrada está vazio.
- **Atualizações Dinâmicas**: O aplicativo atualiza as informações dinamicamente sem a necessidade de recarregar a página.

## Como Usar
1. **Clonar o Repositório**: Clone o projeto para sua máquina local.
2. **Chave da API**: Cadastre-se para obter uma chave de API no OpenWeatherMap e insira a chave no lugar de `API_TOKEN`.
3. **Abrir o Arquivo**: Abra o arquivo HTML em um navegador web para executar o aplicativo.

## Detalhes da Implementação

- **Listeners de Eventos**: O app usa `addEventListener` para lidar com as submissões de formulário.
- **Requisições à API**: Realiza pedidos assíncronos à API do OpenWeatherMap para buscar dados meteorológicos.
- **Conteúdo HTML Dinâmico**: JavaScript é usado para atualizar dinamicamente o conteúdo HTML com base nas respostas da API.
- **Estados de Erro e Carregamento**: O app lida com estados de carregamento e exibe mensagens para erros ou quando nenhum dado é encontrado.

## Funções

- `elementLoading()`: Exibe um spinner de carregamento enquanto os dados estão sendo buscados.
- `removeElementLoading()`: Remove o spinner de carregamento assim que os dados são recebidos.
- `resultInfo(res)`: Atualiza o DOM com informações meteorológicas.
- `mensagem(msg)`: Exibe uma mensagem (usada para erros ou notificações).
- `clearInfo()`: Limpa as informações e mensagens exibidas.

## Requisitos

- Um navegador web para executar o arquivo HTML.
- Um token de API do OpenWeatherMap (substitua `API_TOKEN` no script pela sua chave de API real).

## Contribuições

Contribuições para este projeto são bem-vindas. Por favor, faça um fork do repositório e envie um pull request com suas alterações.
