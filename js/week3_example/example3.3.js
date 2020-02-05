//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/MegaCities.geojson", {
        dataType: "json",
        success: callback
    });
};

//define callback function
function callback(response, status, jqXHRobject){

    //TASKS USING THE DATA GO HERE
    console.log(response);

};

$(document).ready(jQueryAjax);