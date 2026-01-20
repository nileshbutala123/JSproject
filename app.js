//document.body.style.backgroundColor = "yellow";
//document.getElementById("myh1").style.backgroundColor = "green";

const button = document.getElementById('btn');
const paragraph = document.getElementById('text');

let countMe = 1;



button.addEventListener('click', () => {

    paragraph.textContent = "Status Updated: Project Active " + countMe;
    countMe++;
    console.log("Button was clicked successfully.");
});

const projects = [
    { name: "Project A", status: "Active" },
    { name: "Project B", status: "Delayed" },
    { name: "Project C", status: "Active" }
];
projects.forEach(project => {if (project.status === "Delayed") {console.log(project.name + " is delayed.");}}); 

let arr = [1, 2, 3, 4];
let even = arr.filter(n => n % 2 === 0);
console.log("Even numbers: " + even); // for even numbers: 2,4
let squared = arr.map(n => n * n);
console.log("Squared numbers: " + squared); // for squared numbers: 1,4,9,16   
let sum = arr.reduce((acc, n) => acc + n, 0);
console.log("Sum of numbers: " + sum); // for sum: 10
let found = arr.find(n => n > 2);
console.log("First number greater than 2: " + found); // for first number greater than 2: 3
let hasNegative = arr.some(n => n < 0);
console.log("Array has negative number: " + hasNegative); // for checking negative number: false
let allPositive = arr.every(n => n > 0);
console.log("All numbers are positive: " + allPositive); // for checking all positive: true
let strArr = ["apple", "banana", "cherry"];
let lengths = strArr.map(s => s.length);
console.log("Lengths of strings: " + lengths); // for lengths: 5,6,6
let longWords = strArr.filter(s => s.length > 5);      
console.log("Words longer than 5 characters: " + longWords); // for words longer than 5 characters: banana,cherry
let concatenated = strArr.reduce((acc, s) => acc + ", " + s);
console.log("Concatenated string: " + concatenated); // for concatenated string: apple, banana, cherry  
let foundWord = strArr.find(s => s.startsWith("b"));
console.log("First word starting with 'b': " + foundWord); // for first word starting with 'b': banana

// Sample list of items
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Pineapple",
    "Mango"
  ];

  const itemList = document.getElementById('itemList');
  const searchInput = document.getElementById('searchInput');

  // Function to display items
  function displayItems(filteredItems) {
    itemList.innerHTML = ''; // Clear previous list
    filteredItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      itemList.appendChild(li);
    });
  }

  // Initial display of all items
  displayItems(items);

  // Listen for input changes and filter list
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = items.filter(item => item.toLowerCase().includes(searchTerm));
    displayItems(filtered);
  });
