# Projeto vencedor da Hackatona ES PUC-RS 2020 🔥

# OfficeBot

OfficeBot é um bot para auxiliar a experiência de Home Office usando o Discord.

## Installation

- Baixar [NodeJs](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwicp86-1JjsAhX8GbkGHcP6DccQFjAAegQIBBAC&url=https%3A%2F%2Fnodejs.org%2Fpt-br%2Fdownload%2F&usg=AOvVaw2zA10ppTgVEUmG6PgL7I6c) e [NPM](https://www.npmjs.com/get-npm)

- Clonar repositório

- Dentro da pasta bot executar > ```bash npm install```

## Bot Commands
### Calendar
- **Creat new event**
- ```!calendar create name:EventName date:dd/mm/aaaa time:hPM or AM```

- **Parameters**

- ```name```:recebe nome do evento. **não aceita espaço no nome**

- ```date```:recebe data no formato dd/mm/aaaa

- ```time```:recebe o horário que será o evento, recebe horaPM ou AM

- Exemple ```!calendar create name:Hackatona date:03/10/2020 time:9AM```

### Coffee Time!
- ```!coffee now```:avisa todos que é hora do café

- ```!coffee time _minute_```:avisa todos que em determinado minutos será a hora do café
- ```_minute_```:passar os minutos até o café - ex: ```!coffee time 30 ```

### GitHub
- **Search user repositories**
- ```!git repositories _username_```

- **Search user data**
- ```!git search-user _username_```

- ```_username_```:username do github 
- Exemple ```!git search-user meuNick```

### Miro 
- **Create board**
- ```!miro create```:cria boar sem título

- ```!miro create _titulo_```:cria boar com título

- **Get board**
- ```!miro get _id do board_```:retorna link do board escolhido

### Jobs
- ```!job hello```:retorna o horário de chegada da pessoa

- ```!job bye```:retorna o horário de saída da pessoa

- ```!job print```:retorna todos que estão online


### Discord Token
- O token que está no config.json não funciona, visto que se o token é comittado em repositórios públicos ele se auto regenera para que ninguém possa usar, caso queiram rodar, favor solicitar o token atual
