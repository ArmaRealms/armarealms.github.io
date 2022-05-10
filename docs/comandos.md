---
title: Comandos
description: Todos os comandos disponíveis no servidor
sidebar_position: 4
---

# Lista de Comandos

Use a barra de pesquisa da página para encontrar comandos.

## **Diversos**

### Links com informações
* `/ajuda` - Listar comandos do servidor;
* `/discord` - Listar o Discord do servidor;
* `/forum` - Listar o Fórum do servidor;
* `/regras` - Listar link com as regras do servidor;
* `/site` - Listar todos os sites do servidor;
* `/vip` - Site da loja onde vende VIP, chave e outros produtos;
* `/wiki` - Listar a Wiki do servidor;
* `/vote` - Listar o site para votar no server;
* `/votos` - Listar a quantidades de votos que você possui;
* `/topvotos (página)` - Listar os jogadores que mais votaram no server;

### Sistemas para melhoria do jogo
* `/auto` - Ativar e desativar o recolhimento de itens direto para o inventário;
* `/gps` - Lista jogadores próximos;
* `/lixo` - Abrir a lixeira para descartar itens;
* `/original` - Ative o login automático se você tiver minecraft original; 

### Sistema de kits com itens
* `/kits` - Abra o menu de kits.
* `/kit [nome-do-kit]` - Receba o kit solicitado.
  * `/kit fome` - Receba o kit com pães;
  * `/kit prot` - Receba o kit de proteção;
  * `/kit pvp` - Receba o kit de PVP \(custa $500\); 

### Sistema de Skins
* `/skin set [nick]` - Altere sua skin usando uma conta original;
* `/skin set [https://site.com/final.png]` - Altere sua skin usando uma imagem;
* `/skin clear` - Remove sua skin;
* `/skin update` - Atualiza sua skin; 

## **Chat**

### Mensagem privada entre jogadores
* `/m [jogador] [sua mensagem]` - Envie mensagens privadas para outro jogador;
* `/m [jogador]` - Travar ou destravar mensagens privadas com outro jogador;
* `/r [mensagem]` - Responda a última mensagem privada recebida;

### Configuração do seu chat privado

* `/ignore [jogador]` - Ignora/Designora um jogador;
* `/ignore list` - Listar jogadores ignorados;
* `/msgnotify` - Ativa ou desativa notificações ao receber mensagens;
* `/msgtoggle` - Ativa ou desativa o recebimento de mensagens privadas;

### Mensagens para todo o servidor
* `/g [mensagem]` - Envie mensagem no canal global estando no chat local; 
* `/l [mensagem]` - Envie mensagem no chat local estando no chat global;
* `/join global` - Entre no chat global;
* `/join local` - Entre no chat local (sua mensagem aparecerá apenas para jogadores que estiverem a 200 blocos);

## Proteção

### Comandos principais
* `/prot` ou `/plot` - Comandos para abrir o menu de proteção; 
* `/claim (tamanho)` - Criar uma proteção no local que você estiver. Caso nenhum valor seja usado a proteção terá o tamanho de 10 blocos;
  * `/claim 10` - Protege 10 blocos para cada lado, tamanho de 21x21; 
* `/extendclaim [tamanho]` - Aumentar o tamanho da proteção;
  * `/extendclaim 10` - Expande a proteção 10 blocos na sua direção; 
* `/claimslist` - Liste as informações das proteções; 

### Gerenciar permissões de outros jogadores
* `/trust [jogador]` - Permite acesso a sua proteção para outro jogador;
* `/accesstrust [jogador]` - Permite o jogador acessar sua proteção e utilizar sua cama;
* `/containertrust [jogador]` - Permita outro jogador acessar o baú, animais, cama, botões e alavancas, plantações na sua proteção;
* `/permissiontrust [jogador]` - Permita outro jogador dar permissões que ele tenha na sua proteção para outro jogador;
* `/untrust [jogador]` - Remova o acesso do jogador a sua proteção. 
* `/trustlist` - Lista as permissões da proteção que você está;

### Excluir uma proteção ou sub-proteção
* `/abandonallclaims` - Apague todas as suas proteções no server; 
* `/abandonclaim` - Apague a proteção em que você está localizado;
* `/abandontoplevelclaim` - Apague uma proteção e todas suas subdivisões;

### Banir, desbanir ou expulsar jogadores da proteção
* `/claimban [jogador]` - Banir outro jogador da proteção;
* `/claimunban [jogador]` - Desbanir outro jogador da proteção;
* `/claimbanall` - Banir todos os jogadoresjogador da proteção;
* `/claimbanlist` - Listar jogadores banidos da sua proteção.

### Criar sub-proteções dentro da sua proteção
* `/subdivideclaims` - Altere a pá de ouro para o modo de subdivisão de proteções, usado para dividir suas proteções;
* `/restrictsubclaim` - Restrinja a subdivisão para que ela não herde as permissões da proteção principal; 
* `/basicclaims` - Altere a pá de ouro para o modo básico de proteção;

### Comprar ou vender blocos de proteção
* `/buyclaimblocks [quantia]` - Compre blocos de proteção com dinheiro virtual;
* `/sellclaimblocks [quantia]` - Venda seus blocos de proteção para o servidor; 

### Outros comandos relacionado a proteção
* `/claimexplosions` - Alterna a proteção contra explosões nos terrenos protegidos; 
* `/givepet [jogador]` - Doe seu animal de estimação para outro jogador.

## Teleporte
* `/spawn` - Teleporte para o inicio do server;
* `/wild` - Teleporte para um lugar aleatório do mapa;
* `/fps` - Teleporte para a arena FPS. \(mcMMO desativado\);
* `/arena` - Teleporte para a arena. \(mcMMO ativado\);
* `/camarote` - Teleporte para o camarote de eventos; 

### Definir sua casa no mapa
* `/sethome [nome-da-home]` - Defina uma home;
* `/home [nome-da-home]` - Teleporte para a home definida;
* `/delhome [nome-da-home]` - Apague sua home; 

### Teleporte entre jogadores
* `/tpa [jogador]` - Solicite a outro jogador teleporte até ele;
* `/tpacancel` - Cancele a solicitação de teleporte enviada por você;
* `/tpaccept` - Aceite solicitação de teleporte até você;
* `/tpdeny` - Negue solicitação de teleporte até você; 
* `/tptoggle` - Ative ou desative solicitações de teleporte até você;

## Warps
* `/pwarp [warp]` - Teleportar para a warp de um jogador.
* `/pwarp abrir [categoria]` - Abrir as warps da categoria.
* `/pwarp ajuda` - Listar comandos do sistema de warp.
* `/pwarp avaliar [warp] [valor]` - Avaliar uma warp.
  * `/pwarp avaliar SuperWarp 5` - Valor de avaliação entre 1 e 5. 
* `/pwarp categoria [warp] [categoria]` - Definir a categoria da warp. 
* `/pwarp definir [warp]` - Definir uma warp Na localização atual.
* `/pwarp desc remove SuperWarp`  
* `/pwarp desc set SuperWarp Super Warp do Servidor.`
* `/pwarp desc set/remove [warp] [desc]` - Descrição de uma warp.
* `/pwarp listar` - Listar todas warps disponíveis.
* `/pwarp quantia` - Visualizar quantas warps você possui.
* `/pwarp redefinir [warp]` - Redefinir a localização de uma warp.
* `/pwarp remover [warp]` - Remover uma warp. 
* `/pwarp renomear [warp] [nome]` - Renomear uma warp. 
* `/pwarp senha remove SuperWarp`
* `/pwarp senha set SuperWarp 12345`
* `/pwarp senha set/remove [warp] [senha]` - Senha de uma warp.
* `/pwarp travar [warp]` - Travar ou Destravar uma warp.

## Economia

### Comandos para gerenciar saldo
* `/pay [jogador] [valor]` - Transfira dinheiro para outro jogador;
* `/payconfirmtoggle` - Ative e desative a confirmação de pagamento;
* `/paytoggle` - Ative e desative o recebimento de dinheiro;
* `/saldo (jogador)` - Visualize seu saldo ou de outro jogador no banco;
* `/topsaldo (página)` - Liste os jogadores mais ricos do server;

### Comandos para acessar lojas
* `/loja` ou `/shop`- Abra o menu de lojas do servidor, neste menu você acessa a loja do server e a loja dos jogadores;
* `/sell hand [quantia]` - Vender a quantidade definida do item na mão;
* `/sell handall` - Vender todos os itens do inventário igual ao item na mão; 
* `/sloja` ou `/sshop` - Abra o menu da loja do servidor; `/sell all` - Venda todos os itens do seu inventário;

### Comandos para gerenciar a loteria
* `/lot buy [quantia]` - Comprar bilhetes da loteria;
* `/lot status` - Visualizar status do sorteio atual;
* `/lot` ou `/loteria` - Abra o menu da loteria para realizar apostas;
* `/loteria togglebuymsg` - Alterar notificações de compras na loteria.
* `/loteria toggleremindmsg` - Alterar notificações de sorteios da loteria.

## Habilidades
* `/[habilidade] ? (página)` - Abre o guia uma habilidade especifica;
  * `/acrobacia ? 1` - Abre o guia para a habilidade de acrobacia. 
* `/[habilidade]` - Lista as estatísticas de uma habilidade especifica;
  * `/acrobacia` - Lista as estatísticas de acrobacia;
* `/inspect [jogador]` - Inspecione o nível de habilidade de outro jogador.
* `/mcability` - Ativa ou desativa a super habilidade \(ativada com botão direito\);
* `/mccooldown` - Exiba o placar de tempo de recarga de super habilidades;
* `/mcnotify` - Ativa ou desativa notificações de habilidades;
* `/mcrank` - Lista seu ranking em cada habilidade;
* `/mcstats` - Lista estatísticas de todas as habilidades; 
* `/mctop [habilitade]` - Lista os top jogadores numa habilidade especifica;
* `/mctop acrobacia` - Lista os top jogadores na habilidade acrobacia; 
* `/mctop` - Lista os top jogadores gerais das habilidades do mcMMO;
* `/mmoxpbar` - Configurar a barra de XP do mcMMO;
  * `/mmoxpbar hide [habilidade]` -  Esconder a barra de XP de uma habilidade;
  * `/mmoxpbar reset` - Limpa todas as configurações anteriores. 
  * `/mmoxpbar show [habilidade]` - Visualizar a barra de XP de uma habilidade;

## Equipe
* `/p [on|off]` - Ativa ou desativa o chat da equipe;
  * `/p` - Alterna entre on e off o chat da equipe;
  * `/p [msg]` - Envie mensagens no chat da equipe sem entrar no chat.
* `/party create [nome] (senha)` - Para criar um equipe;
* `/party disband` - Para apagar sua equipe; 
* `/party help` - Para listar todos os comandos da equipe; 
* `/party itemshare` - Para compartilhar itens recolhidos entre a equipe;
* `/party join [jogador] (senha)` - Para entrar de uma equipe;
* `/party kick [jogador]` - Para expulsar um membro da sua equipe;
* `/party leader [jogador]` - Para transferir o proprietário da equipe;
* `/party lock` - Para bloquear uma equipe;
* `/party password [senha]` - Para proteger sua equipe com senha; 
* `/party quit` - Para sair de uma equipe; 
* `/party unlock` - Para desbloquear uma equipe;
* `/party xpshare` - Para compatilhar XP com membros da equipe; 

## VIP
* `/vipmenu` - Saiba o status do seu VIP;
* `/kit mast` - Receber o KIT semanal Master;
* `/kit prem` - Receber o KIT semanal Premium;
* `/kit ulti` - Receber o KIT semanal Ultimate;
* `/nick [novo-nick]` - Altere seu nick \(apenas cores, use /cores para listar todos os códigos\);
* `/nick off` - Remover o nick alterado anteriormente; 
* `/wb` - Abrir a bancada de trabalho virtual.
* `/ec` - Abrir o baú do fim virtual;
* `/craft` - Abrir o Super Craft virtual;
* `/crafttoggle` - Ativar ou Desativa o Super Craft.
* `/hat` - Colocar o bloco na mão no lugar do capacete; 
* `/cor` - Abrir o menu de cores do chat;
* `/cores` - Listar códigos de cores;
* `/bloco` - Transformar itens em blocos. Apenas aqueles que possam ser transformados em itens novamente.
* `/bloco (hand)`- Transforma o item que você estiver segundando em blocos;
* `/bloco (inventory)` - Transforma todos os itens compatíveis do inventário em blocos.  
* `/bloco (item ou id)` - Transforma o item especificado no comando em blocos;