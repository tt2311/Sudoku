function generateBoard(){
	let x = 0; let y = 0; 
	for(x = 0; x < 9; x++){
		let outercell = document.createElement("div"); 
		outercell.className = "row"; 
		outercell.id = "row" + x; 
		for (y = 0; y < 9; y++){
			let cell = document.createElement("div"); 
			cell.className = "col"
			cell.id = "col" + y; 

			var input = document.createElement("input"); 
			input.className = "userInput"
			input.id = "cell"
			input.setAttribute("type", "number");
			input.setAttribute("min","1");
			input.setAttribute("max","9"); 
			input.setAttribute("value","");
			cell.appendChild(input);  
			outercell.appendChild(cell); 
			document.getElementById("game1").appendChild(outercell); 
		}		
	}
}



function getNumbers(){
	let grabRow = document.getElementsByClassName("row"); 
	let x = 0; let n = 0; let o = 5; let p = 6; 
	for(x = 0; x < 3 ; x++){
		grabRow[x].childNodes[n].childNodes[0].value = "1"; 
		grabRow[x].childNodes[n+2].childNodes[0].value = "3"; 
		n = n +3;	

		if(o == 11){
			o = 2;
		}
		grabRow[x].childNodes[o].childNodes[0].value = "9"; 
		o = o +3;	

		if(p == 9){
			p = 0;
		}
		grabRow[x].childNodes[p].childNodes[0].value = "4"; 
		p = p +3;	
	}
	n = 1; o = 6; 
	for(x = 3; x < 6 ; x++){	
		grabRow[x].childNodes[n].childNodes[0].value = "1"; 
		grabRow[x].childNodes[n + 1].childNodes[0].value = "2"; 	
		n = n +3;	

		if(o == 9){
			o = 0;
		}
		grabRow[x].childNodes[o].childNodes[0].value = "3"; 
		o = o +3;
	}

	n = 2; p = 3; o = 0; 
	for(x = 6; x < 9 ; x++){
		grabRow[x].childNodes[n].childNodes[0].value = "1"; 
		n = n +3; 	

		if(p == 9){
			p = 0;
		}
		grabRow[x].childNodes[p].childNodes[0].value = "5"; 
		p = p +3;	

		grabRow[x].childNodes[o].childNodes[0].value = "8"; 
		o = o +3;	

	}	

}

function getHint(){ 
	let grabRow = document.getElementsByClassName("row"); 
	let x = 0; i = 7; 
	for(x = 0; x < 3 ; x++){
		if(i == 10){
			i = 1;
		}
		grabRow[x].childNodes[i].childNodes[0].value = "5"; 
		i = i +3;	
	}

	i = 5;
	for(x = 3; x < 6 ; x++){	 	
		if(i == 11){
			i = 2;
		}
		grabRow[x].childNodes[i].childNodes[0].value = "8";
		grabRow[x].childNodes[i-1].childNodes[0].value = "7"; 
		i = i +3;
	}
	i = 4; 
	for(x = 6; x < 9 ; x++){
		if(i == 10){
			i = 1;
		}
		grabRow[x].childNodes[i].childNodes[0].value = "6";	
		grabRow[x].childNodes[i+1].childNodes[0].value = "7";	
		i = i +3; 
	}

	document.getElementById("tries").innerHTML ="Number of Tries : 2"; 
}

function getHint2(){
	//getHink1();  
	let grabRow = document.getElementsByClassName("row"); 
	let x = 0; i = 3; 
	for(x = 0; x < 3 ; x++){
		if(i == 9){
			i = 0;
		}
		grabRow[x].childNodes[i].childNodes[0].value = "7";	
		i = i +3; 
	}

	i = 0;
	for(x = 3; x < 6 ; x++){	 	
		grabRow[x].childNodes[i].childNodes[0].value = "9"; 
		i = i +3;		
	}

	i = 1; 
	for(x = 6; x < 9 ; x++){
		grabRow[x].childNodes[i].childNodes[0].value = "9"; 
		i = i +3;
	}
	document.getElementById("tries").innerHTML ="Number of Tries : 1"; 

}

function getHint3(){
	getHint();
	getHint2(); 
	let grabRow = document.getElementsByClassName("row"); 
	let j = 1; k = 4; l = 8;
	for (let x = 0; x < 3; x++){
		grabRow[x].childNodes[j].childNodes[0].value = "2";
		j = j+3; 

		if (k ==10){
			k = 1;
		}
		grabRow[x].childNodes[k].childNodes[0].value = "8";
		k = k +3; 

		if (l ==11){
			l = 2;
		}
		grabRow[x].childNodes[l].childNodes[0].value = "6";
		l = l +3; 
	}

	j = 3; k = 7; l = 8;
	for (let x = 3; x < 6; x++){
		if (j == 9){
			j = 0;
		}
		grabRow[x].childNodes[j].childNodes[0].value = "6";
		j = j+3; 

		if (k ==10){
			k = 1;
		}
		grabRow[x].childNodes[k].childNodes[0].value = "4";
		k = k +3; 

		if (l ==11){
			l = 2;
		}
		grabRow[x].childNodes[l].childNodes[0].value = "5";
		l = l +3; 
	}

	j = 6; k = 7; l = 8;
	for (let x = 6; x < 9; x++){
		if (j == 9){
			j = 0;
		}
		grabRow[x].childNodes[j].childNodes[0].value = "2";
		j = j+3; 

		if (k ==10){
			k = 1;
		}
		grabRow[x].childNodes[k].childNodes[0].value = "3";
		k = k +3; 

		if (l ==11){
			l = 2;
		}
		grabRow[x].childNodes[l].childNodes[0].value = "4";
		l = l +3; 
	}
	
	document.getElementById("tries").innerHTML ="Keep Playing More Sudoku to get the hang of it!"; 
 
}

function submit(){
	var totalValues = document.querySelectorAll("input#cell.userInput"); 
	let sumTotal = 0; 

	for(let x = 0; x < totalValues.length; x++){
		let tempValue = parseInt(totalValues[x].value); 
		sumTotal = sumTotal + tempValue; 
	}

	if(sumTotal == 405){
		alert("CONGRATS! YOU COMPLETED THE PUZZLE!"); 
	}else{
		alert("SOMETHING WENT WRONG!, TRY AGAIN");
		var tries = document.getElementById("tries").innerHTML 
		if (tries[18] == 3){
			document.getElementById("tries").innerHTML ="Number of Tries : 2"; 
		}else if(tries[18] == 2){
			document.getElementById("tries").innerHTML ="Number of Tries : 1"; 

		}else{
			document.getElementById("tries").innerHTML ="Keep Playing More Sudoku to get the hang of it!"; 

		}

	}

}


