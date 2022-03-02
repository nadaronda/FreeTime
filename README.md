# Mi segundo proyecto de [Core Code School](https://www.corecode.school/)
# Indice:
- [Mi segundo proyecto de Core Code School](#mi-segundo-proyecto-de-core-code-school)
- [Indice:](#indice)
  - [1. Título de la aplicación:](#1-título-de-la-aplicación)
  - [2. Imágenes y vídeos:](#2-imágenes-y-vídeos)
      - [Querer es poder](#querer-es-poder)
  - [3. Motivación del proyecto:](#3-motivación-del-proyecto)
  - [4. Estructura:](#4-estructura)
    - [4.1.  Repositorio:](#41--repositorio)
    - [4.2.  API:](#42--api)
  - [5. Acceso directo a la aplicación:](#5-acceso-directo-a-la-aplicación)
  - [6. Tabla de contenidos o índice:](#6-tabla-de-contenidos-o-índice)
  - [7. Manual de instalación y deployment:](#7-manual-de-instalación-y-deployment)
  - [8. Entornos de ejecución:](#8-entornos-de-ejecución)
  - [9. Listado de paquetes y dependencias:](#9-listado-de-paquetes-y-dependencias)
  - [10. Agradecimientos y otras consideraciones:](#10-agradecimientos-y-otras-consideraciones)


## 1. Título de la aplicación:
Free Time & 
The magic staircase

## 2. Imágenes y vídeos:
#### Querer es poder
![Escalera mágica](./img/escalera.jpg)

## 3. Motivación del proyecto:
La Idea de Free Time lleva bastante tiempo rondandome la cabeza, se trata de una aplicación que te da ideas de que poder realizar en tu tiempo libre, busco algo sencillo, en el que el usuario de un toque propio de sus gustos, sus hobbies y lo que le gusta. Me gustaria poder meter también actividades orientadas a tematicas como por ejemplo: navidad, 4 estaciones, San Valentín, festivos etc... y 
Finalmente añadir la escalera magica, donde poder añadir una escalera en la que el usuario debera añadir pequeños objetivos para alcanzar el objetivo mayor, como por ejemplo: irse de viaje, plantearse que es lo que necesita para ello, y añadirlo en la escalerita, y cuando valla cumpliendo los pequeños objetivos subir un escalon, ejemplo si necesito un pasporte, todos sabemos que no se consigue de un día para otro, por lo que necesitaria añadirlo a un escalon y una vez lo consiga tendría que ver que objetivo se plantea para el siguiente escalo, y asi hasta llegar al objetivo final.

## 4. Estructura:
 ### 4.1.  Repositorio:
 El proyecto esta basado en un monorepositorio, esta es su estructura que sigue:
```
final-project
    │
    |   packages/
    |    ├── api/
    │    |    ├── src/
    │    |    ├── routers/
    │    |    ├── scripts/
    │    |    ├── app.ts
    │    |    ├── config.ts
    │    |    ├── server.ts
    │    |    └── package.json
    |    |
    |    └── front/
    |         ├── pages/
    |         └── package.json
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── lerna.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```
 ### 4.2.  API:
* Modelos:
* CRUDs:
## 5. Acceso directo a la aplicación:
[Pincha aquí para poder acceder](https://github.com/nadaronda/FreeTime/)

## 6. Tabla de contenidos o índice:
 
## 7. Manual de instalación y deployment:
```
Clone the repository:
    git clone https://github.com/nadaronda/FreeTime.git

Initiate npm:
    npm init

Or use this instead:
    npm init -y

Install dependencies:
    npm install

Execute the project:
    npm run dev

``` 
## 8. Entornos de ejecución:
* [Visual Studio Code](https://code.visualstudio.com/Download)
  
## 9. Listado de paquetes y dependencias:
```
| Front      | Api          | All           |
| ---------- | -------------| --------------|
| next       | auth0        |               |
| parcel     | dotenv       | eslint        |
| react      | fastify      | lerna         |
| axios      | fastify-cors | typescript    |
| react-dom  | ts-node      | yarn          |
|            | mongoose     |               |
|            | nodemon      |               |
|            | pino         |               |
|            | pino-pretty  |               |
|            |              |               |

```


## 10. Agradecimientos y otras consideraciones: