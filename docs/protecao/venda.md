---
title: Venda da Proteção
description: Como comprar, vender ou alugar uma proteção.
sidebar_position: 5
---

import APITable from '/src/components/APITable';

# Vender ou Alugar Proteção

> Para **comprar** ou **alugar** uma proteção de outro jogador basta clicar com o **botão direito** na placa onde contém as informações da venda ou aluguel da proteção.

## Comandos

<APITable>

| Comando | Descrição |
| ------- | --------- |
| `/imob` ou `imobiliaria`      | Comando principal do sistema de imobiliária |
| `/imob ajuda`                 | Listar todos os comandos do sistema de imobiliária |
| `/imob listar todos`          | Listar todas as proteções que estão à venda ou alugando |
| `/imob listar venda`          | Listar todas as proteções que estão à venda |
| `/imob listar aluguel`        | Listar todas as proteções que estão alugando |
| `/imob autorenovar ativar`    | Ativar a renovação automática de aluguel |
| `/imob autorenovar desativar` | Desativar a renovação automática de aluguel |
| `/imob info`                  | Exibir informações da proteção que você estiver dentro |

</APITable>

## Vender uma Proteção

> Na venda de uma proteção os blocos são transferidos entre o vendedor e o comprador.  
> Não é possível vender uma sub-proteção.

**Uma placa deve ser colocada dentro da proteção que você deseja vender.**

1° linha da placa deve ser colocado qualquer palavra abaixo:  
`[vende]` ou `[venda]` ou `[vendese]` ou `[vende-se]`

2° linha da placa deve ser colocado o valor de venda da proteção:  
Exemplos: `50000` ou `1000` (nunca usar ponto ou vírgula)

**Exemplo da placa para vender uma proteção:**

![Exemplo1](https://i.imgur.com/6KLSuqH.png "Exemplo de como criar uma placa de venda")

## Alugar uma Proteção

### Alugar com Acesso a Construir

> Não é possível alterar uma proteção quando uma sub-proteção estiver alugada.  
> O jogador que colocar para alugar perde todas as permissões na proteção.

**Uma placa deve ser colocada dentro da proteção que você deseja alugar.**

1° linha da placa deve ser colocado qualquer palavra abaixo:  
`[aluga]` ou `[aluguel]` ou `[alugase]` ou `[aluga-se]`

2° linha da placa deve ser colocado o valor do aluguel.  
Exemplos: `50000` ou `1000` (nunca usar ponto ou vírgula)  

3° linha da placa deve ser colocado o período do aluguel.  
Exemplos: `30d` ou `30 dias` ou `1 semana` ou `2 semanas`  
Caso não seja preenchido o tempo será de 7 dias.

**Exemplo da placa para alugar com permissão de construir:**

![Exemplo2](https://i.imgur.com/TclXF7E.png "Exemplo de como criar uma placa de aluguel com permissão de construir")

### Alugar com Acesso a Baús

> Não é possível alterar uma proteção quando uma sub-proteção estiver alugada.  
> O jogador que colocar para alugar perde todas as permissões na proteção.

**Uma placa deve ser colocada dentro da proteção que você deseja alugar.**

1° linha da placa deve ser colocado qualquer palavra abaixo:  
`[alugabau]` ou `[aluga-bau]` ou `[aluguel-bau]`

2° linha da placa deve ser colocado o valor do aluguel.  
Exemplos: `50000` ou `1000` (nunca usar ponto ou vírgula)  

3° linha da placa deve ser colocado o período do aluguel.  
Exemplos: `30d` ou `30 dias` ou `1 semana` ou `2 semanas`  
Caso não seja preenchido o tempo será de 7 dias.

**Exemplo da placa para alugar com permissão apenas a baús:**

![Exemplo3](https://i.imgur.com/sgdW7zJ.png "Exemplo de como criar uma placa de aluguel com acesso apenas a baús")
