const res = new XMLHttpRequest();
res.open("GET", 'https://getbananabudaewh.kro.kr/SecretApi/SendMessageInstead/w');
res.setRequestHeader('header', 'value');
res.send();

res.onload = () => {
 	console.log("IT LOADED");
  	console.log(res.response);
  	console.log(res.status);
  	console.log(res.statusText);
}

res.onerror = () => {
 	console.log("IT ERROR");
}
