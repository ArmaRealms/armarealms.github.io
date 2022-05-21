---
title: Permissões da Proteção
description: Como dar permissão para outros jogadores na sua proteção.
sidebar_position: 2
---

# Permissões na Proteção

:::info Permissão em todas as proteções!
Para adicionar ou remover permissões em **todas** as suas proteções com um único comando basta **ficar fora da proteção** e executar os comandos abaixo.
:::

:::info Permissão para membros do clã!
Use **group.\[tag-do-clã\]** para adicionar ou remover permissões de todos os membros do clã.  
Exemplo: **/accesstrust group.cdl** ou **/containertrust group.cdl**  
Permissão para todos os membros do clã com TAG **CDL**.
:::

:::info Permissão para todos os jogadores
Use **public** para dar permissão a todos os jogadores.  
Exemplo: **/accesstrust public** ou **/containertrust public**
:::

## Permissão AccessTrust

> **Permissão para acessar sua proteção.**

Permissão para usar botões, alavancas, camas e definir `/home` na sua proteção ou sub-proteção.

1. Digite `/accesstrust [jogador]`

Exemplo: `/accesstrust ThiagoROX`

## Permissão ContainerTrust

> **Permissão para acessar baús na sua proteção.**

Permissão para usar botões, alavancas, camas, mesa de trabalho, **baús**, fornalhas, animais e aldeões na sua proteção ou sub-proteção.  

1. Digite `/containertrust [jogador]`

Exemplo: `/containertrust ThiagoROX`

## Permissão PermissionTrust

> **Permissão para gerenciar permissões na sua proteção.**

Jogador poderá dar permissões que ele possui para outros jogadores. Exemplo: O jogador que tenha a permissão `PermissionTrust` e `Trust` poderá dar ou remover a permissão `Trust` a outros jogadores. Ele não poderá dar a permissão `PermissionTrust` para outros jogadores.

1. Digite `/permissiontrust [jogador]`

Exemplo: `/permissiontrust ThiagoROX`

## Permissão TrustNear

> **Permissão para que outro jogador possa criar proteções perto da sua.**

1. Digite `/trustnear [jogador]`

Exemplo: `/trustnear ThiagoROX`

> **Remover permissão para que outro jogador possa criar proteções perto da sua.**

1. Digite `/untrustnear [jogador]`

Exemplo: `/untrustnear ThiagoROX`

## Permissão Trust

> **Permissão para construir na sua proteção.**

Permissão para usar botões, alavancas, camas, mesa de trabalho **baús**, fornalhas, animais e aldeões **e construir** na sua proteção ou sub-proteção.

1. Digite `/trust [jogador]`

Exemplo: `/trust ThiagoROX`

## Listar Jogadores com Permissão

> **Comando para listar jogadores com permissão na proteção.**  

1. Digite `/trustlist`

## Remover Permissão de Jogadores

> **Comando para remover permissões de um jogador na sua proteção.**  

1. Digite `/untrust [jogador]`

Exemplo: `/untrust ThiagoROX`