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

res.open("POST", 'https://getbananabudaewh.kro.kr/SecretApi/SendMessageInstead/w', true);
    		    		
    		console.log("[request url] : " + url);    		    	
    		console.log("[request method] : " + "POST");
    		console.log("");
    				
    		res.onreadystatechange = function() {
    			if (res.readyState == 4) {
    				if (res.status == 200 || res.status == 201){
    					console.log("[status] : " + res.status);
    					console.log("[response] : " + "[success]");    				   				    				
    					console.log("[response] : " + res.responseText);
    					console.log("");        				
    				}
    				else {
    					console.log("[status] : " + res.status);
    					console.log("[response] : " + "[fail]");    				   				    				
    					console.log("[response] : " + res.responseText);
    					console.log("");        				
    				}    				
    			}    			
    		}
    		res.send(null);
