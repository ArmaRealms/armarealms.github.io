---
title: Permissões da Proteção
description: Como adicionar um amigo na proteção.
sidebar_position: 2
---

# Permissões na Proteção

:::info Permissão em todas as proteções!
Para adicionar ou remover permissões em **todas** as suas proteções com um único comando basta **ficar fora da proteção** e executar os comandos abaixo.
:::

:::info Permissão para membros do clã!
Use **group.\[tag-do-clã\]** para adicionar ou remover permissões de todos os membros do clã.  
🎯 Exemplo: **`/accesstrust group.cdl`** ou **`/containertrust group.cdl`**  
Permissão para todos os membros do clã com TAG **CDL**.
:::

:::info Permissão para todos os jogadores
Use **public** para dar permissão a todos os jogadores.  
🎯 Exemplo: **`/accesstrust public`** ou **`/containertrust public`**
:::

## Comandos

| Comando | Descrição |
| ------- | --------- |
| `/trust [jogador]` | Permitir acesso a construir na sua proteção |
| `/accesstrust [jogador]` | Permitir acesso a cama, portas e etc.. na sua proteção |
| `/containertrust [jogador]` | Permitir acesso a baús na sua proteção |
| `/permissiontrust [jogador]` | Permitir gerenciamento de permissões na sua proteção |
| `/trustnear [jogador]` | Permitir que jogador proteja perto de você |
| `/untrustnear [jogador]` | Remover permissão TrustNear do jogador |
| `/untrust [jogador]` | Remover a permissão do jogador na sua proteção | 
| `/trustlist` | Listar as permissões da proteção que você está |

## Permissão AccessTrust

> **Permissão para acessar sua proteção.**

Permissão para usar botões, alavancas, camas e definir `/home` na sua proteção ou sub-proteção.

1. Envie `/accesstrust [jogador]`

🎯 Exemplo: `/accesstrust ThiagoROX`

## Permissão ContainerTrust

> **Permissão para acessar baús na sua proteção.**

Permissão para usar botões, alavancas, camas, mesa de trabalho, **baús**, fornalhas, animais e aldeões na sua proteção ou sub-proteção.  

1. Envie `/containertrust [jogador]`

🎯 Exemplo: `/containertrust ThiagoROX`

## Permissão PermissionTrust

> **Permissão para gerenciar permissões na sua proteção.**

Jogador poderá dar permissões que ele possui para outros jogadores.  
🎯 Exemplo: O jogador que tenha a permissão `PermissionTrust` e `Trust` poderá dar ou remover a permissão `Trust` a outros jogadores. Ele não poderá dar a permissão `PermissionTrust` para outros jogadores.

1. Envie `/permissiontrust [jogador]`

🎯 Exemplo: `/permissiontrust ThiagoROX`

## Permissão TrustNear

> **Permissão para que outro jogador possa criar proteções perto da sua.**

1. Envie `/trustnear [jogador]`

🎯 Exemplo: `/trustnear ThiagoROX`

> **Remover permissão para que outro jogador possa criar proteções perto da sua.**

1. Envie `/untrustnear [jogador]`

🎯 Exemplo: `/untrustnear ThiagoROX`

## Permissão Trust

> **Permissão para construir na sua proteção.**

Permissão para usar botões, alavancas, camas, mesa de trabalho **baús**, fornalhas, animais e aldeões **e construir** na sua proteção ou sub-proteção.

1. Envie `/trust [jogador]`

🎯 Exemplo: `/trust ThiagoROX`

## Listar Jogadores com Permissão

> **Comando para listar jogadores com permissão na proteção.**  

1. Envie `/trustlist`

## Remover Permissão de Jogadores

> **Comando para remover permissões de um jogador na sua proteção.**  

1. Envie `/untrust [jogador]`

🎯 Exemplo: `/untrust ThiagoROX`