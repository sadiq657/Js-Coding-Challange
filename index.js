const odd= document.getElementById("odd").value;
const originalArray= document.getElementById("originalArray").value;
const printName= document.getElementById("printName");
const factorial = document.getElementById("date").value;
const nameDisplay = document.getElementById('nameDisplay');

function ac()
{
  
    const num = prompt("Please enter a number:");

    if (num % 2 === 0){
         alert("your number is even")
    }

    else{
        alert('your number is odd')
    }


}


function rajini() {
    let go= prompt("please enter your name");
    let nameHtml = '<table>';
            for (let i = 1; i <= 5; i++) {
                nameHtml += `<tr><td>${i}</td><td>${go}</td></tr>`;
            }
            nameHtml += '</table>';
            kamal.innerHTML = nameHtml;
    }

function convertToUppercase() {
    let inputString = prompt("Please enter a string:");
    alert(inputString.toUpperCase());
}

function convertToLowercase() {
    let inputString = prompt("Please enter a string:");
    alert(inputString.toLowerCase());
}



function findFactorial() {
    let num = prompt("Please enter a number:");
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
    factorial *= i;
    document.getElementById("result").innerHTML = "Factorial of " + num + " is: " + factorial;
    }
    
}

function countVowels() {
    let str = document.getElementById("string").value;
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) 
        {let char = str[i];
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') 
        {vowelCount++;}
    document.getElementById("aeiou").innerHTML = "Number of vowels: " + vowelCount;
    }
    
    }

   

function addNumber() {
    const a1 = [23, 45, 89, 22, 77, 9];
    alert("Original Array: " + a1);
let newNumber = parseInt(prompt("Enter a new number:"));
a1.push(newNumber);
alert("Array after adding new number: " + a1);
}

function deleteNumber() {
    const a1 = [23, 45, 89, 22, 77, 9];
alert("Original Array: " + a1);
let numToDelete = parseInt(prompt("Enter the number to delete:"));
let index = a1.indexOf(numToDelete);
if (index !== -1) {
a1.splice(index, 1);
alert("Array after deleting number: " + a1);
} else {
alert("Number not found in array.");
}
}

function generateTable() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultDiv = document.getElementById('mamu');
    
    if (isNaN(number)) {
        resultDiv.innerHTML = '<p>Please enter a valid number.</p>';
        return;
    }

    let tableHtml = '<table>';
    tableHtml += '<tr><th>Expression</th><th>Result</th></tr>';

    for (let i = 1; i <= 10; i++) {
        tableHtml += `<tr><td>${i} x ${number}</td><td>${i * number}</td></tr>`;
    }

    tableHtml += '</table>';
    resultDiv.innerHTML = tableHtml;
}

function replaceText() {
    let text = document.getElementById("text");
    text.innerHTML = text.innerHTML.replace("front end", "Full Stack");
    }


    function checkDivisible() {
        let num = document.getElementById("babu").value;
        if (num % 6 == 0) {
        document.getElementById("golu").innerHTML = " this number divisible by 6";
        } else {
        document.getElementById("golu").innerHTML =  "this number not divisible by 6";
        }
        }

        function printTodayDate() {
            const today = new Date();
            const dateDisplay = document.getElementById('dateDisplay');
            dateDisplay.innerHTML = `<p>Today's date is: ${today.toDateString()}</p>`;
        }