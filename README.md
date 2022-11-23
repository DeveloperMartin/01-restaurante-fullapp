# Restaurante full app

![image](https://user-images.githubusercontent.com/43618471/203546384-1339a378-3118-47fc-b353-6d22595f7437.png)
> Aplicacion para simular la comunicación entre Frontend y Backend utilizando la analogia del restaurante 


### Estado del proyecto 🏗

En progreso


### Pre-requisitos necesarios 📋
* Descargar [Visual Studio Code (Color azul)](https://visualstudio.microsoft.com/es/downloads/) (o su editor de texto de confianza)
* Descargar e instalar el [software de control de versiones](https://git-scm.com/)
* Descargar e instalar [Node.js (Version LTS)](https://git-scm.com/)
* Ejecutar en la terminal 
```bash
npm install -g @angular/cli
```

### Pre-requisitos no necesarios

* Extensiones para Visual Studio Code
  * [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
  * [Angular Snippets (Version 13)](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
  * [Angular 10 Snippets](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode)
  * [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
  * [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

## Comenzando 🚀

1. Clonar el repositorio
```bash
git clone https://github.com/DeveloperMartin/01-restaurante-fullapp.git
```
2. Instalar las dependencias del backend y del frontend, recorda que tenes que ir hasta la carpeta del backend, ejecutar el comando y despues tenes que ir al frontend a realizar la misma accion (el orden en el que se haga no importa)
```bash
npm install 
```
3. Levantar el backend (Recorda viajar hasta la carpeta de backend para ejecutar este comando)
```bash
node ./index.js
```
4. Abri otra terminal (Es importante que la terminal donde esta corriendo el backend no la cierres)
5. Levantar el frontend (Recordar viajar hasta la carpeta del frontend para ejecutar este comando)
```bash
ng serve -o
```

> `clone` va a crear una carpeta con el nombre completo del repositorio en donde sea que este situado en la terminal. Es aconsejable viajar con la terminal hasta la ruta donde realmente quiere que el proyecto se descargue (Por ejemplo en Documents). Para ello hay que utilizar el comando `cd` e indicar a que carpeta se quiere mover con la terminal. 
```bash
cd ./users
cd ./Documents
cd ./github
git clone https...
```
* [Documentación del comando clone](https://www.google.com/search?q=git+clone&rlz=1C1ONGR_esAR1032AR1032&oq=git+clone&aqs=chrome..69i57j69i64.884j0j7&sourceid=chrome&ie=UTF-8) 
* [Documentacion del comando - cd -](https://denovatoanovato.net/comando-cd/)

## Despliegue 📦

1. Abrir terminal
2. Viajar hasta la carpeta del frontend
3. Ejecutar comando
```bash
ng build
```
4. Con la misma termimal (no es necesario), viajar hasta el backend
5. Ejecutar comando
```bash
node ./index.js
```
6. En el navegador buscar 
```url
http://localhost:3000/frontend
```
7. Si aparece la aplicacion de frontend, entonces ya tenes todo!

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Seguime en [Twitch](https://twitch.tv/zatge) 

![example](https://img.shields.io/discord/820794171844722728?label=Discord&style=plastic) - [Invitación](https://discord.gg/UMCMAKxcZ7)

---
con ❤️ por [Zatge](https://github.com/DeveloperMartin) 😊
