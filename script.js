function getColor(){
    let redValue=document.getElementById("customRange1").value;
    let greenValue=document.getElementById("customRange2").value;
    let blueValue=document.getElementById("customRange3").value;
    let color= "rgb("+redValue+","+greenValue+","+blueValue+")";
    let hexColor= redValue.toString(16)+""+greenValue.toString(16)+""+blueValue.toString(16);
    console.log(color);
    document.getElementById("rangeContainer").style.backgroundColor=""+color+"";
    document.getElementById("rgbValue").value=color;
    document.getElementById("hexValue").value="#"+parseInt(redValue).toString(16)+""+parseInt(greenValue).toString(16)+""+parseInt(blueValue).toString(16);
}