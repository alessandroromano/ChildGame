/**
*each element in this array represents the content of each hiding cards
*/

     var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
    /**
    *empty array for storing the memory values
    */
     var memory_values = [];
    /**
    * empty array for storing the memory tile ids
    */
     var memory_tile_ids = [];
    /**
    *array for keeping tiles flipped
    */
     var tiles_flipped = 0;
    /**
    *initialzie a shuffle method for the array
    */
     Array.prototype.memory_tile_shuffle = function(){
     var i = this.length, j, temp;
         while(--i > 0){
                j = Math.floor(Math.random() * (i+1));
                temp = this[j];
                this[j] = this[i];
                this[i] = temp;
    }
}
function newBoard(){
    /**
    *for each time a new board is generated make the tiles_flipped variable back to zero
    */
	   tiles_flipped = 0;
    /**
    *for the output creat an empty variable
    */
	   var output = '';
    /**
    *method for shuffeling the cards
    */
        memory_array.memory_tile_shuffle();
    /**
    *for-loop over the length of the array, so looping over all cards
    *add to the output_variable all the divs representing those cards
    *each div gets an id of the diynamic tile number
    *each div gets an oncklick-event with flipping method with div and data from array
    */
	   for(var i = 0; i < memory_array.length; i++){
		  output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
    /**
    * put output into the memory board chosen by id
    */
    document.getElementById('memory_board').innerHTML = output;
}
    /**
    *two arguments for each div
    */
function memoryFlipTile(tile,val){
    /**
    *only if the tile of the innerHTMl is empty AND the length of the memroy_values is less than 2 then run all of the code
    */
        if(tile.innerHTML == "" && memory_values.length < 2){
    /**
    *if true then card background gets a new color
    */
		tile.style.background = '#FFD700 ';
    /**
    *we place the value in the innerHTML tile
    */
		tile.innerHTML = val;
    /**
    *check if length of memory values is zero
    */
    /**
    *if zero then push the new value into the memory values array for the card which the user is clicking and we push the tiles id for the cards id into the memory *tiles id array
    */
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
    /**
    *if not zero means if already one card flipped over and the user is clicking a second card now
    */
    /**
    *push the new value into the memory values array for the card which the user is clicking and we push the tiles id for the cards id into the memory tiles id *array
    */
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
    /**
    *check if both cards are a match
    */
			if(memory_values[0] == memory_values[1]){
    /**
    *when we have a match then the tiles_flipped variable gets +2 -> the cards stay flipped over in the memory board
    */
				tiles_flipped += 2;
    /**
    *clear both arrays to make them ready for a new matching sequence
    */
				memory_values = [];
            	memory_tile_ids = [];
    /**
    *check to see if the whole board is cleared 
    */
    /**
    *board is cleared when the length of the memory array is equal with the number of flipped over cards
    */
				if(tiles_flipped == memory_array.length){
					alert("Well Done! Want to play again?");
    /**
    *new board gets generated for a new game
    */
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
    /**
    *else-condition when match is not made
    */
			} else {
				function flip2Back(){
    /**
    *flip the 2 tiles back over
    */
				    var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
    /**
    *get the background of the cards back to deafult and empty tiles
    */
				    tile_1.style.background = 'url(question_small.png) no-repeat center';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(question_small.png) no-repeat center';
            	    tile_2.innerHTML = "";
    /**
    *clear both arrays
    */
				    memory_values = [];
            	    memory_tile_ids = [];
				}
    /**
    *cards flip back when no match 
    */
				setTimeout(flip2Back, 700);
			}
		}
	}
}
/**
*generating new board
*/
newBoard();