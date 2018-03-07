// Use FreeGeoIp API service
// You can find the documentation for this API at http://freegeoip.net
// Check out the documentation to see how to use this API

// Create a function that receives one argument (IP address)
// The function should send a request via Ajax and get data in XML format


// When data is received from the server, print out the name of the country the IP you provided when invoking the function belongs to
var xmlhttp = new XMLHttpRequest();
xmlhttp.open('GET','http://freegeoip.net/xml/4.2.2.2', false);
xmlhttp.onreadystatechange = function (response){
console.log(response);

var xmlDoc = response.target.responseXML;
console.log(xmlDoc);
var from = xmlDoc.getElementsByTagName('CountryName')[0].childNodes[0];
console.log(from);
xmlhttp.send();



//xmlhttp.load = function(){
    //var xmlDoc = xmlhttp.responseXML;
    
}


