const bmiForm = document.getElementById("bmi-form");
const bmiResult = document.getElementById("bmi-result");
const clearBtn = document.getElementById("clear-btn");

if (bmiForm) {
    bmiForm.addEventListener("submit", function(e){
        e.preventDefault();
        
        const age = parseInt(document.getElementById("age").value);
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const height = parseFloat(document.getElementById("height").value);
        const weight = parseFloat(document.getElementById("weight").value);
        
        if (!genderElement) {
            bmiResult.innerHTML = '<span style="color:red;">Please select a gender!</span>';
            return;
        }

        if (age <= 0 || isNaN(age) || height <= 0 || isNaN(height) || weight <= 0 || isNaN(weight)) {
            bmiResult.innerHTML = '<span style="color:red;">Please enter valid numeric values for Age,Height, and Weight!</span>';
            return;
        }

        const gender = genderElement.value;
        
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        let category = "";
        
        if(bmi < 18.6) category = "Underweight 😞";
        else if(bmi <= 24.9) category = "Normal 👍";
        else category = "Overweight 😥";

        bmiResult.innerHTML = `
            BMI: <span>${bmi}</span> (${category})<br>
            Age: ${age}, Gender: ${gender}
        `;
    });
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        if (bmiForm) {
            bmiForm.reset();
            bmiResult.innerHTML = "";
        }
    });
}

const ageForm = document.getElementById("age-form");
const ageResult = document.getElementById("age-result");

if (ageForm) {
    ageForm.addEventListener("submit", function(e){
        e.preventDefault();
        const dob = document.getElementById("dob").value;
        
        if(!dob){
            ageResult.innerHTML = '<span style="color:red;">Please enter your date of birth!</span>';
            return;
        }

        const birthDate = new Date(dob);
        const today = new Date();
        
        if(birthDate > today){
            ageResult.innerHTML = '<span style="color:red;">Future date invalid!</span>';
            return;
        }

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageResult.innerHTML = `Your Age: <span>${age}</span> years`;
    });
}