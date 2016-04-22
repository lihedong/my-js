function add(num1,num2){
	console.log(arguments.length);
	for (var i = 0; i < arguments.length; i++) {
		console.log("arguments[i]="+arguments[i]);
	}
	return num1+num2;
}
console.log('add(num1,num2)='+add(100,200));

console.log(typeof add);