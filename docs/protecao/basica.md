---
title: Proteção Básica
description: Como criar, expandir, excluir e listar uma proteção.
sidebar_position: 1
---

import APITable from '/src/components/APITable';

# Proteção Básica

## Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/prot` ou `/plot` | Comandos para abrir o menu de proteção | 
| `/claim (tamanho)` | Criar uma proteção no local que você estiver |
| `/claimexpand [tamanho]` | Aumentar o tamanho da proteção |
| `/claimlist` | Liste as informações das proteções | 
| `/abandonallclaims` | Apague todas as suas proteções no server | 
| `/abandonclaim` | Apague a proteção em que você está localizado |
| `/claimbuyblocks [quantia]` | Compre blocos de proteção |
| `/claimsellblocks [quantia]` | Venda seus blocos de proteção | 

</APITable>

## Criar Proteção


### Utilizando a Pá de Ouro

> Método recomendado!

1. Envie `/kit prot` e coloque a `pá de ouro` na mão.
2. Clique com botão direito nas quinas da proteção.

<details>
<summary><b>Exemplo de como criar uma proteção com imagens!</b><summary>
<div>

1. Vamos proteger a casa da imagem abaixo:  
![imagem1](https://i.imgur.com/V482iUY.png)

3. Use `/kit prot` e coloque a pá de ouro na mão.

4. Faça uma torre no meio do local onde deseja proteger e suba nela:  
![imagem2](https://i.imgur.com/OdiCgWg.png)

5. Clique com o botão direito para selecionar a primeira quina:  
![imagem3](https://i.imgur.com/pi5wwS7.png)
No local onde for selecionada a primeira quina aparecerá um bloco de diamante.  

6. Clique com o botão direito para seleciona a segunda quina:  
![imagem4](https://i.imgur.com/DQO5LXB.png)
No local onde for selecionada a segunda quina aparecerá um bloco de ouro.  

7. Pronto, proteção criada com sucesso!

</div>
</details>

### Utilizando Comandos

1. Envie `/kit prot` e coloque a `pá de ouro` na mão.
2. Envie `/claim <tamanho>` para proteger o local onde você estiver.  

🎯 Exemplo: `/claim 10` - Proteger 10 blocos para cada lado onde você estiver.

## Expandir Proteção

1. Envie `/claimexpand <tamanho>` virado para a direção que deseja expandir.  

🎯 Exemplo 1: `/claimexpand 10` - Expande em 10 blocos para a direção que você estiver olhando.  
🎯 Exemplo 2: `/claimexpand -5` - Diminui em 5 blocos a proteção na direção que você estiver olhando.

## Excluir Proteção

1. Envie `/abandonclaim` dentro da proteção que você deseja excluir.

Você pode usar `/abandonallclaims` para excluir todas as suas proteções do servidor.

⚠️ [Lojas físicas](../lojas/jogador.md) serão removidas quando a proteção for excluida!

## Listar Proteção

1. Envie `/claimlist` para listar todas as suas proteções.

## Comprar Blocos de Proteção

> Cada bloco de proteção custa $10 coins. 

1. Envie `/claimbuyblocks [quantia]` para comprar blocos de proteção.

🎯 Exemplo: `/claimbuyblocks 100` - Comprará 100 blocos de proteção por 1.000 coins

## Vender Blocos de Proteção

> Cada bloco de proteção vale $8 coins. 

1. Envie `/claimsellblocks [quantia]` para comprar blocos de proteção.

🎯 Exemplo: `/claimsellblocks 100` - Venderá 100 blocos de proteção por 800 coins