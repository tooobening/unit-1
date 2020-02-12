// function debugCallback(response){
	
// 	$("#myDiv").append('GeoJSON data: ' + JSON.stringify(mydata));
// };

function debugAjax(){
	
	//var mydata;
	//console.log("ln9")

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			
			mydata = response; // add this line
			//debugCallback(mydata);
			$("#myDiv").append('<br>17. GeoJSON data:<br>' + JSON.stringify(mydata));

		}

	});
	var mydata;
	$("#myDiv").append('<br>22. GeoJSON data:<br>' + JSON.stringify(mydata));



};

//$("#mydiv").append('GeoJSON data: ' + JSON.stringify(mydata));
//debugAjax();
$(document).ready(debugAjax);