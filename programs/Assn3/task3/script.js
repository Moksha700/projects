// Person constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    };

    this.incrementAge = function() {
        this.age++;
    };
}

let person;

function createPerson() {
    // Get values from input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);

    // Create a new Person object
    person = new Person(firstName, lastName, age);

    // Display the full name and age
    document.getElementById('fullName').textContent = `Full Name: ${person.getFullName()}`;
    document.getElementById('currentAge').textContent = `Age: ${person.age}`;

    // Show the increment age button
    document.getElementById('incrementAgeButton').style.display = 'inline-block';
}

function incrementAge() {
    // Increment the person's age
    person.incrementAge();

    // Update the age display
    document.getElementById('currentAge').textContent = `Age: ${person.age}`;
}