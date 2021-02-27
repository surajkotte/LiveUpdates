function check(){
    var i=document.getElementById("inp").value;
    var s="    ";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+i+'&units=metric&appid=de0dfbcc606a7146a696c493e5dbce3d')
    .then(response => response.json())
    .then(data => {console.log(data);
    document.getElementById("deg").style.visibility="visible";
    document.getElementById("zone").style.visibility="visible";
    document.getElementById("min").style.visibility="visible";
    document.getElementById("max").style.visibility="visible";
    document.getElementById("des").style.visibility="visible";
    document.getElementById("humid").style.visibility="visible";
    document.getElementById("deg").innerHTML=data.main.temp+" &#8451;";
    document.getElementById("zone").innerHTML="Time Zone : "+data.timezone;
    document.getElementById("min").innerHTML="Minimum : "+data.main.temp_min+" &#8451;"+s;
    document.getElementById("max").innerHTML="Maximum : "+data.main.temp_max+" &#8451;";
    document.getElementById("des").innerHTML=data.weather[0].description;
    document.getElementById("humid").innerHTML="Humidity : "+data.main.humidity;
    })
    .catch(err => {
    document.getElementById("deg").style.visibility="hidden";
    document.getElementById("zone").style.visibility="hidden";
    document.getElementById("min").style.visibility="hidden";
    document.getElementById("max").style.visibility="hidden";
    document.getElementById("des").style.visibility="hidden";
    document.getElementById("humid").style.visibility="hidden";
    alert("wrong city name");})
}
