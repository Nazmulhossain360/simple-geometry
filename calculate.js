
function calculateTriangleArea(){
    // get triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    const triangleArea = 0.5*base*height;
    console.log(triangleArea)


    // display triangle area
    const triangleAreaSapn = document.getElementById('triangle-area');
    triangleAreaSapn.innerText = triangleArea;

    const areaResult = document.getElementById("triangle-result").style.display="block";

    
}