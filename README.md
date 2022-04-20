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
The magic staircase

## 2. Imágenes y vídeos:
#### Querer es poder
![Escalera mágica](./img/escalera.jpg)

## 3. Motivación del proyecto:
La escalera magica, es una idea que lleva bastante tiempo rondandome la cabeza. Se trata de una aplicación, donde poder añadir una escalera en la que el usuario debera añadir pequeños objetivos para alcanzar el objetivo mayor, como por ejemplo: irse de viaje, plantearse que es lo que necesita para ello, y añadirlo en la escalerita, y cuando valla cumpliendo los pequeños objetivos subir un escalon, ejemplo si necesito un pasporte, todos sabemos que no se consigue de un día para otro, por lo que necesitaria añadirlo a un escalon y una vez lo consiga tendría que ver que objetivo se plantea para el siguiente escalo, y asi hasta llegar al objetivo final.

## 4. Estructura:
 ### 4.1.  Repositorio:
 El proyecto esta basado en un monorepositorio, esta es la estructura que sigue:
```
final-project
    │
    |   packages/
    |    ├── api/
    │    |    ├── ...
    │    |    └── package.json
    |    |
    |    └── front/
    |         ├── ...
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
* Modelo de Objetivo general:
  
  ```tsx
  const schema = new Schema({
  user_Id: { type: String, require: true },
  objetivo: { type: String, require: true },
  descripcion: { type: String, require: true },
  limitTime: { type: Date, require: true }
  }, {
  timestamps: true})
  ```
* Modelo de escalon, paso intermedio:
  ```tsx
  const schema = new Schema({
  escalon: { type: String, require: true },
  descripcion: { type: String, require: true },
  timeImport: { type: Date, require: true },
  objetivo: { type: Schema.Types.ObjectId, ref: 'Objetivo' },
  categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' }
  }, {
  timestamps: true
  })
  ```
* Modelo de categoria:
  ```tsx
  const schema = new Schema({
  name: { type: String, require: true }
  }, { // timestamps: true
  })
  ```
  
## 5. Acceso directo a la aplicación:
[Pincha aquí para poder acceder](https://github.com/nadaronda/FreeTime/)

## 6. Tabla de contenidos o índice:
 
## 7. Manual de instalación y deployment:
```
Clone the repository:
    git clone https://github.com/nadaronda/FreeTime.git

Initiate npm/yarn(dependerá del gestor de paquetes que utilices):
    npm init / yarn init:

Or use this instead:
    npm init -y / yarn init -y

Install dependencies:
    npm install / yarn install

Execute the project:
    npm run dev / yarn run dev

``` 
## 8. Entornos de ejecución:
* [Visual Studio Code](https://code.visualstudio.com/Download)
  
## 9. Listado de paquetes y dependencias:
```
| Front     | Api          | All        |
| --------- | ------------ | ---------- |
| next      | auth0        | yarn       |
| parcel    | dotenv       | eslint     |
| react     | fastify      | lerna      |
| axios     | fastify-cors | typescript |
| react-dom | ts-node      | ...        |
| ...       | mongoose     |            |
|           | nodemon      |            |
|           | pino         |            |
|           | pino-pretty  |            |
|           | ...          |            |

```


## 10. Agradecimientos y otras consideraciones:
Agradecer principalmente a mi pareja por aguantarme las horas y horas que le he dedicado al proyecto, la ayuda recibida de su parte en diversos ambitos, sin el no hubiese podido con todo, muchísimas gracias.
También agradecer a Core Code School por todo, a mi profesor Marcos.
Y a todos mis compañeros por ayudarme siempre que han podido.