
$(document).ready(function () {
    $("form#form").submit(function (event) {
        $("#form").hide();//hide the submit form

        //assign variables to the input
        var grocer1 = $("input#grocer1").val();
        var grocer2 = $("input#grocer2").val();
        var grocer3 = $("input#grocer3").val();

        //display the results
        $(".grocer1").text(grocer1);
        $(".grocer2").text(grocer2);
        $(".grocer3").text(grocer3);
        
        $("#results").show();

        event.preventDefault();
    });
});