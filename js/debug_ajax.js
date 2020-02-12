//initialize function called when the script loads
function initialize(){
	cities();
	debugAjax(); //Debug1: call debugAjax funciton after cities functions!
};
//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];
	//append the table element to the div
	$("#myDiv").append("<table>");
	//append a header row to the table
	$("table").append("<tr>");
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    addColumns(cityPop);
    addEvents();
};

function addColumns(cityPop){
    $('tr').each(function(i){

    	if (i == 0){

    		$(this).append('<th>City Size</th>');  //spelling correct:append
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium'; //Uppercase correct:citySize

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>'); //(this) ; <td>
    	};
    });
};

function addEvents(){
	$('table').mouseover(function(){

		var color = "rgb(";

		for (var i=0; i<3; i++){
			
			var random = Math.round(Math.random() * 255);

			color += random; //random is a var instead of a "string"

			if (i<2){
				color += ",";

			} else {
				color += ")";
			};
		
		$(this).css('color', color);
		};  //delete redundant ")"	
	})
	
	//click listener with anonymous handler function
	//correct the .on() function in the addEvents() function
	$('table').on('click', function(){
		alert('Hey, you clicked me!');
	});

};

// Debug2: delete this debugCallback function because it is duplicated 
// function debugCallback(response){
	
// 	$("#myDiv").append('GeoJSON data: ' + JSON.stringify(mydata));
// };

function debugAjax(){
	
	//Debug3: I define the variable in the $.ajax() fuction, so I delete the line below.
	//var mydata; 

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			
			mydata = response; // add this line (=Debug3)
			//debugCallback(mydata); (=Debug2)
			$("#myDiv").append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));

		}

	});

};
//Debug3: delete this part because it has existed in the debugAjax() function
//$("#mydiv").append('GeoJSON data: ' + JSON.stringify(mydata));

//call the initialize function when the document has loaded
$(document).ready(initialize);

