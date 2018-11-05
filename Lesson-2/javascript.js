var name = 'Victoria';
var age = 24;

if (age >= 18) {
    console.log(name + ' is of legal age to drink alcohol!');
} else {
    console.log(name + ' has a little bit of growing up to do!');
}



var legalAge = false;

if (legalAge) {
    console.log(name + ' is of legal age to drink alcohol!');
} else {
    console.log(name + ' has a little bit of growing up to do!');
}



var isMarried = true;

if (!isMarried){
    console.log('not married');
} else {
    console.log('is married');
}

// Nested example plz

// ternary operator

var isOfAge = (age < 18) ? "you too young" : "bruh you old";

console.log(isOfAge);

// switch statement

var ageType = "child";

switch (ageType){
    case "child":
        console.log('This person is a ' + ageType);
        break;
    case "teenager":
        console.log('This person is a ' + ageType);
        break;
    case "adult":
        console.log('This persona is an ' + ageType);
        break;
    case "senior":
        console.log('This person is a ' + ageType);
        break;
    default:
        console.log('whats your age again?');
}

// Truthy/Falsy values

var nameFalsy;

if (nameFalsy){
    console.log('My name is' + nameFalsy);
} else {
    console.log('My name has not be defined!: ' + nameFalsy);
}

var age;

if (age || age == 0){
    console.log('this statement is DEFINED');
} else {
    console.log('this statement is UNDEFINED');
}

