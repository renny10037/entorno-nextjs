# Configuración next.js

##Realizado por: Renny Petit

## Comenzando 🚀

_Esto es la estructura para un ambiente de desarrollo contará con: next.js, sass, fonts, image, components, y una carpeta api. todos estos archivos son de prueba y es para tener ua idea y base._

## Archivos

src: Carpeta donde esta nuestros archivos de desarrollo, también incluye sass, componentes y una api de prueba.

Public: Directorio donde se encuentra imágenes, fuentes entre otros archivos. las fuentes estan dentro de la carpeta static, porque así lo recomienda el modulo externo de fonts.

package.json:Modules a integrar.

Eslintrc: configuración de eslintrc leer:https://github.com/renny10037/cosas-linux/blob/master/ESLint%20y%20Prettier%20vsc

Dentro de src se encuentra:
Components: donde se alojará los componentes a su vez tiene uan carpeta style para los archivos sass. Se recomienda que al colocarle estilos a un componente se inserte una clase padre con el nombre establecer los estilos dentro de este con el fin de evitar pisar otros .scss ya sea de otros componentes o estilos globales.

styles.scss: aqui se colocara los estilos globles de la aplicación
\_variables: En este archivo se debe colocar las variables y fuentes de sass
\_app.js: se usa para poder realizar archivos globales, no es necesario tocarlo

api: esta es una carpeta donde se puede crear un servidor de prueba para llamar los datos de manera local. Actualmente en este entorno fue creado una api llamada users.js y puede ser llamanada en el index.js.

### Pre-requisitos 📋

```
nodejs
```

### Instalación 🔧

```
    Al realizar git clone de la carpeta debe colocar en la termiar npm-install para instalar los modulos. Luego de esto "npm run dev" para correr el ambiente de pruebas "npm run build" para crear el ambiente producción, "next run start" para correr el ambien producción, "npm run export" para exportar lso archivo de manera estatica.
```

### Producción 🔧

```
   Si vas a exportar de forma estatica "NO COLOQUES EL PROYECTO EN UNA SUPCARPETA" ya que al exportar las rutas son absolutas y te va a dar error:

   Ejemplo: dominio.com y la carpeta /next:  si estas en dominio.com/next y le das click a / te levará a la raiz y te redireccionara a dominio.com. es decir se va a salir del proyecto.

   Solución: La Mejor opción es colocarlo en un dominio o subdominio y colocarlo en la raiz del mismo.
```
