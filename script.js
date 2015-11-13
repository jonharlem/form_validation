// var form = $('#some-form');
// var input = $('#some-input');

// input.val(); // Get input value
// input.getAttr("name"); // Get input name
// input[0].checked; // Get the checked status of a checkbox or radio button
// input[0].disabled; // Get input disabled status

//Size and Delivery Fee
function pizzaCost(){
    var cost = 0;
    $("input[type='radio']:checked").each(function(){
        console.log($(this).val())
        cost+=parseInt($(this).val());
    });
    $("#totalCost").text(cost)
}
$().ready(function(){
    $("input[type='radio']").change(function(){
        pizzaCost()
    });
});



//Extras

//subtotal

//tax of 8%

//Delivery Fee

//total

//suggested tip of 15%