
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // Clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // Get Google Streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // Change Greeting
    $greeting.text('Here\'s whats going on in ' + cityStr + '...');


    // Get NYTimes AJAX request







    return false;
};

$('#form-container').submit(loadData);


//google maps api key --- AIzaSyD8L8orMfK_bgGx23qTe0_R9fXLKoUW_aY

//nyt api key --- d1c01672f6764643b1246859928dda34