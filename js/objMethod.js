var person={
	name:"jacky",
	sayName:function(){
		console.log("person.name="+person.name);
	},
	sayHello:function(){
		console.log('this.name='+this.name);
	}
};
person.sayName();
person.sayHello();