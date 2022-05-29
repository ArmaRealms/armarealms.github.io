---
title: Proteção Avançada
description: Como criar, expandir ou excluir sub-proteções.
sidebar_position: 4
---

import APITable from '/src/components/APITable';

# Proteção Avançada

## Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/claimsubdivide` | Altere a pá de ouro para o modo de subdivisão de proteções |
| `/claimrestrict` | Restrinja a sub-proteção para que jogadores com permissão na proteção principal não tenha permissão na sub-proteção | 
| `/basicclaims` | Altere a pá de ouro para o modo básico de proteção |
| `/abandontoplevelclaim` | Apague uma proteção e todas suas sub-proteções |

</APITable>

## Criar uma Sub-Proteção

1. Envie `/kit prot` e coloque a `pá de ouro` na mão.
2. Envie `/claimsubdivide` para entrar no modo de sub-proteção.
3. Segure a `pá de ouro` e dentro da sua proteção, clique em duas quinas para criar a sub-proteção.
4. Envie `/claimrestrict` para que a sub-proteção não herde permissões da proteção principal.

Envie `/basicclaims` para voltar ao modo de proteção normal.

<details>
  <summary><b>Exemplo de como criar uma sub-proteção com imagens!</b></summary>
  
  <div>
    <p>1. Dentro da <a href="/protecao/basica#utilizando-a-pá-de-ouro" target="_blank">proteção</a>, vamos criar uma sub-proteção no local do baú abaixo:</p>
    <img src="https://i.imgur.com/oyfX3qo.png" alt="Primeiro passo"></img>
    <br></br>
    <p>2. Envie <code>/kit prot</code> e coloque a pá de ouro na mão.</p>
    <br></br>
    <p>3. Envie <code>/claimsubdivide</code> para entrar no modo de sub-proteção.</p>
    <br></br>
    <p>4. Clique com o botão direito para selecionar a primeira quina:</p>
    <img src="https://i.imgur.com/fUBmp8J.png" alt="Quarto passo"></img>
    <br></br>
    <p>5. Clique com o botão direito para seleciona a segunda quina:</p>
    <img src="https://i.imgur.com/hgUJFEE.png" alt="Quinto passo"></img>
    <p>No local onde for selecionada a segunda quina aparecerá um bloco de ferro.</p>
    <br></br>
    <p>6. <b>Pronto, sub-proteção criada com sucesso!</b></p>
    <br></br>
    <p>7. Envie <code>/claimrestrict</code> dentro da sub-proteção:</p>
    <img src="https://i.imgur.com/NORhMh5.png" alt="Sétimo passo"></img>
    <p>Jogadores que tenham qualquer permissão na sua proteção principal não terão permissão na sub-proteção onde você enviou o comando.</p>
    <br></br>
    <p>8. Envie <code>/basicclaims</code> para voltar ao modo de proteção normal.</p>
    <br></br>
    <p>9. Com o graveto na mão, clique com o <b>botão direito</b> no local para ver sua sub-proteção:</p>
    <img src="https://i.imgur.com/zFqDCNz.png" alt="Nono passo"></img>
    <br></br>
    <p>10. A sub-proteção será circulada por bloco de lã com bloco de ferro nas quinas:</p>
    <img src="https://i.imgur.com/Jr9qO1H.png" alt="Décimo passo"></img>
  
  </div>
</details>

## Visualizar Sub-Proteção

1. Envie `/kit prot` e coloque o graveto na mão.
2. Mire no local onde deseja inspecionar proteções.
3. Clique com o **botão direito** para visualizar a sub-proteção.

## Expandir Sub-Proteção

1. Envie `/claimexpand <tamanho>` virado para a direção que deseja expandir.  

Exemplo 1: `/claimexpand 10` - Expande em 10 blocos para a direção que você estiver olhando.  
Exemplo 2: `/claimexpand -5` - Diminui em 5 blocos a proteção na direção que você estiver olhando.

## Excluir Sub-Proteção

1. Envie `/abandonclaim` dentro da sub-proteção que você deseja excluir.

Envie `/abandontoplevelclaim` para excluir a proteção principal e todas as sua sub-proteções.