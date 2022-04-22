const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];
/*const esPrimo = numero => {
	
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) 
    return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	  return true;
}


console.log(ejercicio1);
ejercicio1.forEach(numero => {
  if(esPrimo(numero)== true)
	console.log(`${numero} es primo`);
});

/*const permitirEntrar = (persona) => {
  if(persona.edad >=18 && persona.esFamiliar==true)
  console.log(`${persona.nombre} puede entrar a la fiesta`)

}

console.log(ejercicio2);
ejercicio2.forEach((persona)=>{
 permitirEntrar(persona);
});*/

function fibonacci(numero)
    {
        let numeros=[0,1];
        for (let i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros;
    }

    console.log(fibonacci(50));


    