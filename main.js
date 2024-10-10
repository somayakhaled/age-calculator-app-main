let dayError = document.querySelector('.dayError');
let monthError = document.querySelector('.monthError');
let yearError = document.querySelector('.yearError');

function resetErrorState(inputFeild, ErrorElement){
    inputFeild.style.borderColor = "hsl(0, 0%, 86%)";
    inputFeild.style.color = "hsl(0, 0%, 8%)";

    const labels = document.getElementsByTagName('label');
    for(let label of labels){
        if(label.getAttribute('for') === inputFeild.id){
            label.style.color = "hsl(0, 1%, 44%)";
            break;
        }
    }

    ErrorElement.innerHTML = "";
}

document.getElementById('day').addEventListener("input", () => 
    resetErrorState(document.getElementById('day'), dayError));

document.getElementById('month').addEventListener("input", () => 
    resetErrorState(document.getElementById('month'), monthError));

document.getElementById('year').addEventListener("input", () => 
    resetErrorState(document.getElementById('year'), yearError));

function calculateAge() {  
    const inputDay = parseInt(document.getElementById('day').value);  
    const inputMonth = parseInt(document.getElementById('month').value);  
    const inputYear = parseInt(document.getElementById('year').value);  

    document.querySelector('.dayError').innerHTML = "";  
    document.querySelector('.monthError').innerHTML = "";  
    document.querySelector('.yearError').innerHTML = "";  
    document.getElementById('day').style.borderColor = "";  
    document.getElementById('month').style.borderColor = "";  
    document.getElementById('year').style.borderColor = "";  
    document.querySelector('label[for="day"]').style.color = "";  
    document.querySelector('label[for="month"]').style.color = "";  
    document.querySelector('label[for="year"]').style.color = "";

    let isValid = true;  
    const currentYear = new Date().getFullYear();

    if (isNaN(inputDay)) {  
        dayError.innerHTML = "This field is required";  
        document.getElementById('day').style.borderColor = "hsl(0, 100%, 67%)";  
        document.querySelector('label[for="day"]').style.color = "hsl(0, 100%, 67%)";  
        isValid = false;  
    } else if (inputDay < 1 || inputDay > 31) {   
        dayError.innerHTML = "Must be a valid day";  
        document.getElementById('day').style.borderColor = "hsl(0, 100%, 67%)";  
        document.querySelector('label[for="day"]').style.color = "hsl(0, 100%, 67%)";  
        isValid = false;  
    }  

    if (isNaN(inputMonth)) {  
        monthError.innerHTML = "This field is required";  
        document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";  
        document.querySelector('label[for="month"]').style.color = "hsl(0, 100%, 67%)";  
        isValid = false;  
    }  else if(inputMonth < 1 || inputMonth > 12){
        monthError.innerHTML = "Must be a valid month";  
        document.getElementById('month').style.borderColor = "hsl(0, 100%, 67%)";  
        document.querySelector('label[for="month"]').style.color = "hsl(0, 100%, 67%)";  
        isValid = false; 
    }

    if (isNaN(inputYear)) {  
        yearError.innerHTML = "This field is required";  
        document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";  
        document.querySelector('label[for="year"]').style.color = "hsl(0, 100%, 67%)";  
        isValid = false; 
        
    } else if(inputYear < 1 || inputYear > currentYear){
        yearError.innerHTML = "Must be a valid year";  
        document.getElementById('year').style.borderColor = "hsl(0, 100%, 67%)";  
        document.querySelector('label[for="year"]').style.color = "hsl(0, 100%, 67%)";  
        isValid = false; 
    }  

    if (!isValid) {  
        return;   
    } 
    
    const birthDate = new Date(inputYear, inputMonth - 1, inputDay);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if(days < 0){
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }

    document.getElementById("years").innerHTML = years;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;

}

