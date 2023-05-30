const dataMadelaine = () =>
{ 	/*
	Para crear una funcion: const xxxxx = () => {}

	Para declarar una variable puedo colocar:
	-Let: si voy a modificar el valor
	-Const: si no voy a modificar el valor

	Mis variables en este ejercicio son:
	-age (number)
	-favoriteFood (string)
	-boolean (boolean)
	*/
	let age = 27;
	let favoriteFood = "paella ";
	let boolean = true;
	/*
	El console.log lo utilizamos para imprimir en la consola
	*/
	console.log(age);
	console.log(favoriteFood);
	console.log(boolean);
	/*
	El document.write lo utilizamos para imprimir en la pantalla del navegador
	*/
	document.write(age, " ");
	document.write(favoriteFood);
	document.write(boolean);
	/*
	Variables tipo integer: Son variables que contienen números enteros. Nota: en Javascript si pueden haber decimales.
	*/
	console.log(age + 10);
	console.log(age - 10);
	console.log(age / 10);

	document.write(age + 10);
	document.write(age - 10);
	document.write(age / 10);
	/*
	Concatenación: Suma de varias cadenas de texto (String)
	*/
	let	result = favoriteFood + " is the best";
	/*
	Console.log para imprimir en la consola + (resultado de la concatenación)
	*/
	console.log(result);
	/*
	Document.write para imprimir en la pantalla del navegador + (resultado de la concatenación)
	*/
	document.write(result);
}
	/*
	Un parámetro es un valor que se le asigna a la función y se ubica dentro de los paréntesis amarillos
	*/

const greeting = (name) =>
{
	let greeting = "Hola ";

	console.log(greeting + name);

	document.write(greeting + name);
}
	/*
	 `La suma entre ${x} y ${y} es`, sum -> esto es una interpolación de strings
	 Recordar siempre llamar a la funcion desde html
	*/

const numbers = (x, y) =>
{
	let sum = x + y;

	 console.log(`La suma entre ${x} y ${y} es`, sum);
	 document.write(`La suma entre ${x} y ${y} es`, sum);
	 return(sum);
}

const isEven = (x) =>
{
	if (x % 2 === 0)
	{
		console.log(`El numero ${x} es par`);
		document.write(`El numero ${x} es par`);
	}
	else
	{
		console.log(`El numero ${x} es impar`);
		document.write(`El numero ${x} es impar`);
	}
}
