var arr1=[];
var arr2=new Array();
//push()是在数组的尾部添加数据;
for (var i = 0; i < 10; i++) {
	arr1.push(i);
}

for (var i = 10; i < 20; i++) {
	arr2.push(i);
}
console.info('arr1.length='+arr1.length+";arr1[9]="+arr1[9]);
//鉴别数组的最好方法Array.isArray(arr);
if (Array.isArray(arr2)) {
	console.log('arr2 is Array');
	console.log("arr2.length="+arr2.length);
	console.log(arr2);
	//在素组的尾部删除数据
	var retrunData=arr2.pop();
	console.log('arr2.pop()='+retrunData);
	console.log("pop()后arr2.length="+arr2.length);
	console.log(arr2);

	var retrunData2=arr2.push("jacky");
	console.log('arr2.push()='+retrunData2);
	console.log("push()后arr2.length="+arr2.length);
	console.log(arr2);
}
//在素组的头部添加数据。unshift(data);
//从数组的头部删除数据：shift();
if (true) {
	console.log('arr1='+arr1);
	var returnData1=arr1.unshift("abc");
	console.log('returnData1='+returnData1);
	console.log('arr1='+arr1);

	var returnData2=arr1.shift();
	console.log('returnData2='+returnData2);
	console.log('arr1='+arr1);
}

