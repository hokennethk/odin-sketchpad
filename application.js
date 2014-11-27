// initial gridSize
var gridSize = 16;

// Functions
// New Grid button
function newGrid() {
    var gridSize = prompt('Enter number of rows (1-128):');
    // check Input

    if (gridSize > 1 && gridSize < 129) {
	    $("tbody").find("tr").remove();
	    createGrid(gridSize);
	} else {
		alert('Please enter a valid input');
	}
}

function createGrid(gridSize) {
	// define tbody outside of for-loop for performance (don't know if this actually improved performance though...)
	var tbody = $("#grid").find("tbody");

	// add table rows
	for (i=0; i<gridSize; i++) {
	    tbody.append("<tr class='row'></tr>");
	}

	// define outside of for-loop for performance (don't know if this actually improved performance...)
	var trow = $("tr.row");

	// add table cells
	for (i=0; i<gridSize; i++) {
	    trow.append("<td><div></div></td>");
	}

	/*
	Current table grid size is based off of height. Set width to be equal to height size for "squareness"
	This is assuming browser size has a smaller height than width. Creates table width based off of max height size so
	that the whole grid/table fits in the current browser without having to scroll up/down

	Not required, but nice to have
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




