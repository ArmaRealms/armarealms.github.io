---
title: Perda da Proteção
description: Tempo offline necessário para perda da proteção.
sidebar_position: 6
---

import APITable from '/src/components/APITable';

# Perda da Proteção

> A remoção das proteções é automática e **pode demorar horas** para remover a proteção após o tempo offline para perda da proteção ser atingido.

## Proteções Abandonadas

* Proteções são abandonadas quando o dono da proteção fica offline por muito tempo.
* Quanto maior a proteção, mais tempo leva para a proteção ser considerada abandonada.
* Remoção automática realizada pelo sistema. **Não precisa abrir ticket!**
* **A proteção será removida dentro de algumas horas após tempo necessário.**

<APITable>

| Quantidade de Blocos de Proteção | Tempo Offline para Perda da Proteção |
| :------------------------------: | :----------------------------------: |
| Abaixo de 999 blocos             | 30 dias (1 mês)                      |
| Entre 1.000 a 9.999 mil blocos   | 60 dias (2 meses)                    |
| entre 10.000 a 22.499 mil blocos | 90 dias (3 meses)                    |
| Entre 22.500 a 62.499 mil blocos | 120 dias (4 meses)                   |
| Acima de 65.500 mil blocos       | 150 dias (5 meses)                   |

</APITable>

## Proteção Próxima

* É considerado proteções próximas todas as construções dentro de um raio de 20 blocos.
* Será levado em consideração também o jogador que construiu no local primeiro.

> Dentro de 7 dias após abertura de ticket com `/ticket` dentro do jogo.  
> Motivo: [Regra 5 - Proibido Construir Próximo a outro Jogador!](https://wiki.armamc.com/regras#5)

## Proteções de Jogador Banido

> Segue as regras acima.