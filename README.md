Primer paso instalar npm init, despues las dependencias que necesitaremos como express, sequelize y el lenguaje para nuestra db que necesitaremos como postgres

Segundo paso crear nuestro index y construir nuestro servidor como siempre

Tercer paso es crear nuestra carpeta database y dentro de esta crear y conectarnos a nuestra base de datos

Cuarto, al exportar nuestra funcion del paso anterior, importarla en nuestro index.js y authenticar para probar que nuestra conexion sea exitosa

Quinto creamos nuestra carpeta models y dentro de esta comenzamos a crear nuestro modelo importando los data types para poder crear nuestra tabla correctamente recordando que hay que importar nuestra database y comenzar a definir la tabla

Sexto hay que exportar la tabla que vamos a usar ..... export const Project = db.define

Septimo hay que sincronizar nuestra db para que cree nuestra tabla en caso de que no exista, para esto ponemos db.sync() sin olvidar que antes hasta mero arriba hay que importar esa instancia 
import './models/Project.js'

Octavo si tenemos mas tablas hacer los mismos 2 pasos anteriores

NOTA: cada que hagamos un save nos estara re creando y re creando la tabla, entonces para evitar eso podemos comentar esos imports para que una vez creada la tabla deje de tener ese comportamiento

Noveno si hay relaciones ente una tabla y otra hay que definirlas hasta el final del modelo, por ejemplo en Project, vemos que Project puede tener multiples Task, entonces vamos a trabajar en Project, por lo tanto importamos Task en el
y hasta el final ponemos que relaciones tiene una tabla y otra

Decimo, aqui es donde comenzamos a modularizar nuestras routes, para no tener todo en nuestro index.js, esto para que cada modulo(archivo) sea independiente y tenga su propio conjunto de rutas, middleware y logica. Luego podemos importar nuestros routers en nuestro archivo principal(index.js)

Onceavo, comenzar a crear nuestros controladores, aquellas funciones que se ejecutaran dependiendo de la ruta que soliciten, entonces una vez creadas estas funciones las exportamos con un export nombrado y las importamos en nuestras rutas y las aplicamos segun donde correspondan

Doceavo, en nuestras funciones procuremos usar try catch y hacer las validaciones correspondientes con el throw new error