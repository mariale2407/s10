function bmi(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let bmi =  (weight /(height *  height )*10000).toFixed(2);
    document.getElementById("result").innerHTML = "Your BMI is " + bmi;

    if(bmi <= 18.4) { 
        document.getElementById("message").innerHTML= "You are underweight"

    }  else if( bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("message").innerHTML = "You are in the Healthy Weight range."
    } else {
        document.getElementById("message").innerHTML = "your are over"
    }



}