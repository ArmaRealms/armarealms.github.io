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
<summary><b>Exemplo de como criar uma sub-proteção com imagens!</b><summary>
<div>

1. Dentro da proteção, vamos criar uma sub-proteção no local do baú abaixo:  
![imagem1](https://i.imgur.com/oyfX3qo.png)

2. Use `/kit prot` e coloque a pá de ouro na mão.

3. Clique com o botão direito para selecionar a primeira quina:  
![imagem3](https://i.imgur.com/fUBmp8J.png)

6. Clique com o botão direito para seleciona a segunda quina:  
![imagem4](https://i.imgur.com/hgUJFEE.png)
No local onde for selecionada a segunda quina aparecerá um bloco de ferro.

8. Pronto, sub-proteção criada com sucesso!

9. Use `/claimrestrict` dentro da sub-proteção:  
![imagem5](https://i.imgur.com/NORhMh5.png)
Jogadores que tenham qualquer permissão na sua proteção não terão permissão na sub-proteção.

</div>
</details>

## Expandir Sub-Proteção

1. Envie `/claimexpand <tamanho>` virado para a direção que deseja expandir.  

Exemplo 1: `/claimexpand 10` - Expande em 10 blocos para a direção que você estiver olhando.  
Exemplo 2: `/claimexpand -5` - Diminui em 5 blocos a proteção na direção que você estiver olhando.

## Excluir Sub-Proteção

1. Envie `/abandonclaim` dentro da sub-proteção que você deseja excluir.

Envie `/abandontoplevelclaim` para excluir a proteção principal e todas as sua sub-proteções.