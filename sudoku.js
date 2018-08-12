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
			input.id = "values"
			input.setAttribute("type", "number");
			input.setAttribute("min","1");
			input.setAttribute("max","9"); 
			cell.appendChild(input);  
			outercell.appendChild(cell); 
			document.getElementById("game1").appendChild(outercell); 


		}		
	}
}

