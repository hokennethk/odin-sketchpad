// initial vars
var gridSize = 16;

// Functions
// New Grid button
function newGrid() {
    var gridSize = prompt('Enter number of rows:');
    $("tbody").find("tr").remove();
    createGrid(gridSize);
}

function createGrid(gridSize) {
	// define tbody outside of for-loop for performance
	var tbody = $("#grid").find("tbody");


	// create initial 16x16 grid of divs
	for (i=0; i<gridSize; i++) {
	    tbody.append("<tr class='row'></tr>");
	}
	// define outside of for-loop for performance
	var trow = $("tr.row");

	for (i=0; i<gridSize; i++) {
	    trow.append("<td><div></div></td>");
	}

	/*
	Current table grid size is based off of height. Set width to be equal to height size for "squareness"
	*/
	var tableHeight = $('table#grid').height();
	$('table#grid').width(tableHeight);


	// highlight cells on hover, mouse enter
	$('td').find('div').hover(function(){
	    $(this).addClass('highlighted'), 
	    $(this).addClass('highlighted')
	});
}





$(document).ready(function() {	
	// create initial grid
	createGrid(gridSize);
});
// Main logic





