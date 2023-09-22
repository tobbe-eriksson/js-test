let subject = "JavaScript";
console.log("Hello " + subject);

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");

let age = document.getElementById("age")
let testAge = document.getElementById("testAge")
let content = document.getElementById("content")

colorBtn.addEventListener("click", (e) => {
    console.log("Klick på knapp")

    let chosenColor = chooseColor.value; 
    console.log(chosenColor);
    document.body.style.backgroundColor = chosenColor;
})

testAge.addEventListener("click", (e) => {
    let getAge = age.value;

    console.log("age" + getAge);

    let yearsLeft = 18 - getAge;

    if (getAge < 18) {
        console.log("Mindre än 18");
        content.innerText = "Sorry, kom till tillbaks om " + yearsLeft + " år!";
    } else {
        console.log("Större än 18");
        content.innerText = "Vassego ta en öl!";
    }
})