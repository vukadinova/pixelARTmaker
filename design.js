//variables for width, height and color of the field
var width = 20, height = 20, color = "#00bfff";

//set the value for the inputs for height and width with their default values
jQuery('#gridHeight').attr("value", width);
jQuery('#gridWidth').attr("value", height);

//variable to check if the mouse is still clicked
var isClicked = false;

function makeGrid(width, height)
{
	//delete the previous grid
	jQuery('tr').remove();
	
	var grid = jQuery('#grid');
	var row;
	
	for(var i = 0; i < width; ++i)
	{
		//add and get another row
		grid.append('<tr id="' + i + '"></tr>');
		row = jQuery('#' + i);
	
		//add the columns in the row
		for(var j = 0; j < height; ++j)
		{
			row.append('<td id="r' + i + 'd' + j + '"></td>');
            jQuery('#' + 'r' + i + 'd' + j).css("background-color", "white");
		}
	}
}

//generate the grid the first time
makeGrid(width,height);

//event listener for when the submit button is clicked
jQuery('button').on("click", function() {
	width = jQuery('#gridWidth').val();
	height = jQuery('#gridHeight').val();
	makeGrid(width,height);
});

//event listener for when the color is changed
jQuery('#color').on("change", function() {
	color = jQuery(this).val();
});

//event listener for when the mouse is clicked in the grid
jQuery('table').mousedown(function(e) {
	e.preventDefault(); //so that it does not think I'm trying to drag it someplace else
    var id = jQuery(e.target).attr('id');
    console.log(id);
	jQuery('#' + id).css("background-color", color);
	isClicked = true;
});

//event listener for when the mouse is clicked and over a cell in the table in the grid
jQuery('table').mouseover(function(e) {
	if(isClicked) {
        var id = jQuery(e.target).attr('id');
        jQuery('#' + id).css("background-color", color);
	}
});

//event listener for when the mouse is released
jQuery('body').mouseup(function(e) {
	isClicked = false;
});
