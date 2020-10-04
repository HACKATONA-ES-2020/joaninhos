# OfficeBot

OfficeBot é um bot para auxiliar a experiência de Home Office usando o Discord.

## Installation

- Baixar [NodeJs](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwicp86-1JjsAhX8GbkGHcP6DccQFjAAegQIBBAC&url=https%3A%2F%2Fnodejs.org%2Fpt-br%2Fdownload%2F&usg=AOvVaw2zA10ppTgVEUmG6PgL7I6c) e [NPM](https://www.npmjs.com/get-npm)

- Clonar repositório

- Dentro da pasta bot executar > ```bash npm install```

## Bot Commands
### Create new event
- ```!calendar create name:EventName date:dd/mm/aaaa time:hPM or AM```

- **Parameters**

- ```name```:recebe nome do evento. **não aceita espaço no nome**

- ```date```:recebe data no formato dd/mm/aaaa

- ```time```:recebe o horário que será o evento, recebe horaPM ou AM

- Exemple ```!calendar create name:Hackatona date:03/10/2020 time:9AM```

### Coffee Time!
- ```!coffee now```:avisa todos que é hora do café

- ```!coffee time _minute_```:avisa todos que em determinado minutos será a hora do café
- ```_minute_```:passar os minútos até o café - ex: ```!coffee time 30 ```
