//1. Target Element COM Raferences
const midtermInput = document.getElementById("midterm-input");
const finalInput = document.getElementById("final-input");
const computeBtn = document.getElementById("compute-btn");
const outputMatrix = document.getElementById("output-matrix");

//2. Core Operational Computation Function
function calculateGradePayload() {
    
    //Tris whitespace from the raw input string
    const trimmedInputMidterm = midtermInput.value.trim();
     const trimmedInputFinal = finalInput.value.trim();

    // Convert the trimmed Input value into a number
    let midtermScore = Number(trimmedInputMidterm);
    let finalScore = Number(trimmedInputFinal);

    let computedScore = (midtermScore * 0.45) + (finalScore * 0.55);
    console.log(computedScore);

    // 3. Validation Logic using standard if/else
    if (trimmedInputMidterm === "" && trimmedInputFinal === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid Final Grade and Midterm Grade before submitting..</strong>";
        return;

    } else if (trimmedInputMidterm === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please don't put an empty input on the midterm grade.</strong>";
        return;

    } else if (trimmedInputFinal === "") {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please don't put an empty input on the final grade.</strong>";
        return;

    } else if (isNaN(trimmedInputMidterm) && isNaN(trimmedInputFinal)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid input score. </strong>";
        return;

    } else if (isNaN(trimmedInputMidterm)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid input score on the midterm grade.</strong>";
        return;

    } else if (isNaN(trimmedInputFinal)) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Error: Please enter a valid input score on the final grade.</strong>";
        return;

    } else if (computedScore < 0) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Range Violation: Score must be between 0 and 108.</strong>";
        return;

    } else if (computedScore > 100) {
        outputMatrix.innerHTML = "<strong class='text-danger'>Range Violation: Score must be between 0 and 108.</strong>"; 
        return;
    }
    
    let statustext = "";
    let statusColorClass = "";

    if (computedScore === 100) {
        statustext = "A+";
        statusColorClass = "text-success";

    } else if (computedScore <= 74) {
        statustext = "Failed";
        statusColorClass = "text-danger";

    } else if (computedScore >= 96) {
        statustext = "A";
        statusColorClass = "text-success";

    } else if (computedScore >= 90) {
        statustext = "B";
        statusColorClass = "text-success";

    }  else if (computedScore >= 86) {
        statustext = "C";
        statusColorClass = "text-success";
        
    } else if (computedScore >= 81) {
        statustext = "D";
        statusColorClass = "text-success";
    

    } else if (computedScore >= 75) {
        statustext = "E";
        statusColorClass = "text-warning";
    }        

    else {
        statustext = "Failed";
        statusColorClass = "text-danger";
    }

    outputMatrix.innerHTML =
     "<h4>Final Score: " + computedScore + "%" + "</h4>" + 
    "<h1 class='display-4 " + statusColorClass + " fw-bold'>" + statustext + "</h1>";
} 

    computeBtn.addEventListener("click", calculateGradePayload);
