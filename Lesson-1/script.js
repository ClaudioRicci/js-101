var massJohn = 60;
var heightJohn = 1.85;

var johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);

var massMark = 120;
var heightMark = 1.40;

var markBMI = massMark/(heightMark * heightMark);
console.log(markBMI);

var markIsFatter = markBMI > johnBMI;

console.log('Mark is fatter than John, right? ' + markIsFatter);

var massStephanie = 54;
var heightStephanieMult = 1.56 * 2;

var stephanieBmi = massStephanie / heightStephanieMult;

console.log('Stephanie\'s BMI is ' + stephanieBmi);