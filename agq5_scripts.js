// * Number 5 script
number5 = () => {
  let prev = 0;
  let sum = 1;
  let temp = 0;
  for (let i = 0; i < 10; i++) {
    document.querySelector("#output").innerHTML += ` ${prev}, `;
    temp = sum;
    sum += prev;
    prev = temp;
  }
  document.querySelector("#output").innerHTML += "...";
};

// * Number 6 script
number6 = () => {
  let num = document.querySelector("#num").value;
  const notLeapYear = num + " is not a Leap Year";
  const isLeapYear = num + " is a Leap Year";
  const invalidYear =
    "Year must be greater than 1582 - the first year of Gregorian calendar.";
  if (num < 1682) document.querySelector("#output").innerHTML = invalidYear;
  else {
    if (num % 4 === 0) {
      if (!(num % 400 === 0) && num % 100 === 0)
        document.querySelector("#output").innerHTML = notLeapYear;
      else document.querySelector("#output").innerHTML = isLeapYear;
    } else document.querySelector("#output").innerHTML = notLeapYear;
  }
};

// * Number 7 script
number7 = (val) => {
  document.querySelector("#output").innerHTML = "The Result is: ";
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  if (val === "multiply")
    document.querySelector("#output").innerHTML += num1 * num2;
  else if (val === "divide")
    document.querySelector("#output").innerHTML += num1 / num2;
};

// * Number 8 script
number8 = () => {
  document.querySelector("#output").innerHTML = "";
  const isCheckedCel = document.querySelector("#cel").checked;
  const isCheckedFahr = document.querySelector("#fahr").checked;
  let temp = document.querySelector("#temp").value;

  if (isCheckedCel)
    document.querySelector("#output").innerHTML = `${temp} °C is ${
      temp * (9 / 5) + 32
    } °F`;
  else if (isCheckedFahr)
    document.querySelector("#output").innerHTML = `${temp} °F is ${
      ((temp - 32) * 5) / 9
    } °C`;
};

// * Number 9 script
number9 = () => {
  for (let i = 0; i <= 15; i++) {
    document.querySelector("#output").innerHTML += `${i} is ${
      i % 2 == 0 ? "even" : "odd"
    }<br>`;
  }
};

// * Number 10 script
number10 = () => {
  alert("Duh, you are hovering!!");
};
