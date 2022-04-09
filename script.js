function getColor(){
    let redValue=document.getElementById("redRange").value;
    let greenValue=document.getElementById("greenRange").value;
    let blueValue=document.getElementById("blueRange").value;
    let color= "rgb("+redValue+","+greenValue+","+blueValue+")";
    let hexColor= rgbToHex(parseInt(redValue),parseInt(greenValue), parseInt(blueValue));
    console.log(color);
    document.getElementById("rangeContainer").style.backgroundColor=""+color+"";
    document.getElementById("rgbValue").value=color;
    document.getElementById("hexValue").value=hexColor;
}function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  