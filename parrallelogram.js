



function getInputById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue

}

function setInnerTextById(elementId, area){
    const element  = document.getElementById(elementId);
    element.innerText = area;
}

function calculateParallelogramArea(){
    const base= getInputById('parallelogram-base');
    // console.log('base value', base);
    const height = getInputById('parallelogram-height');
    // console.log('height value', height);
    const area = base*height;
    console.log(area)

    setInnerTextById('parallelogram-area', area)
    const areaResult = document.getElementById("parallelogram-result").style.display="block";
}
 
