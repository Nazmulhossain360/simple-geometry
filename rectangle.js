function calculateRectangleArea(){
     // get rectangle length
     const rectangleLengthInput = document.getElementById('rectangle-length');
     const rectangleLengthText = rectangleLengthInput .value;
     const length = parseFloat(rectangleLengthText);
     // get rectangle width
     const rectangleWdthInput = document.getElementById('rectangle-width');
     const rectangleWidthText = rectangleWdthInput.value;
     const width = parseFloat(rectangleWidthText);
 
     const rectangleArea = length*width;
     console.log(rectangleArea)
 
 
     // display Rectangle area
     const rectangleAreaSapn = document.getElementById('rectangle-area');
     rectangleAreaSapn.innerText = rectangleArea;
 
     const areaResult = document.getElementById("rectangle-result").style.display="block";
 
}

// parallelogram script 

// function calculateParallelogramArea(){
//      const parallelogarmBaseInput = document.getElementById('parallelogram-base');
//      const parallelogramBaseText = parallelogarmBaseInput.value;
//      const pbase = parseFloat(parallelogramBaseText);

//      // get parallelogram height
//      const parallelogarmHeightInput = document.getElementById('parallelogram-height');
//      const  parallelogarmHeightText = parallelogarmHeightInput.value;
//      const pheight = parseFloat(parallelogarmHeightText);
 
//      const parallelogramgramArea = pbase*pheight;
//      console.log(parallelogramgramArea)
 
 
//      // display Rectangle area
//      const parallelogramAreaSapn = document.getElementById('parallelogram-area');
//      parallelogramAreaSapn.innerText = parallelogramgramArea;
 
//      const areaResult = document.getElementById("parallelogram-result").style.display="block";
// }