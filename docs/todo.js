


// Todo 1  //
// for a lack of better work.. prevent cheating
// if a problem is about a key-work/method... make sure it is used in the checked code.
const x = " let largest = numbers[0]; for (let i = 1; i < numbers.length; i++) { if (numbers[i] > largest) { largest = numbers[i]; } } return largest;";

const substring1 = "for (";
const substring2 = "for(";

if (x.includes(substring1) || x.includes(substring2)) {
    console.log("Substring found!");
} else {
    console.log("Substring not found.");
}