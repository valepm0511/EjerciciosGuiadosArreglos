const days = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

//FORMA 1

/*const reverse = (array) => {
	const newArray = [];
	//guarda la longitud del arreglo
	const size = array.length;
	//retorna la ultima posicion del arreglo
	const lastPosition = size - 1;
	for(let i = lastPosition; i>=0; i--){
		newArray.push(array[i]);
	}
	return newArray;
}
console.log(reverse(days));
console.log(days);*/

//FORMA 2

const reverse = (array) =>{
	for(let i = 0; i<array.length; i++){
		let item = array.pop();
		array.splice(i,0,item);
	}
	return array;
}

console.log(reverse(days));