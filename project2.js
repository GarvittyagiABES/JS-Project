const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (isNaN(height) || height === "" || height < 0) {
    result.innerHTML = "Please give a valid height";
  } else if (isNaN(weight) || weight < 0 || weight === "") {
    result.innerHTML = "Please give a valid weight";
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    result.innerHTML = ` your BMI is ${bmi}`;

    const disclaimer = document.querySelector("#disclaimer");
    if (bmi < 18.6) {
      disclaimer.innerHTML = "You are Under weight";
    } else if (bmi > 24.9) {
      disclaimer.innerHTML = "You are Under weight";
    } else {
      disclaimer.innerHTML = "Congratulation!  You are normal ";
    }
  }
});
