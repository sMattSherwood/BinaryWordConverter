const inputText = document.querySelector('.userInput textArea'); // this will look into the user input textarea
const outputText = document.querySelector('.binaryOutput textArea'); // this will look into the binary output textarea
// create an event listener to take the input form inputText and write it in binaryOutput
inputText.addEventListener("input", updateValue);
// this will write the text into outputText
function updateValue(event){
    let inputValue = event.target.value; // the outputText querySelector is ussing innerHTML to get the live input of a user
    const textArray = inputValue.split(''); // this will seperate the incoming values into an array for each character.
    const lastArrayItem = textArray[textArray.length -1]; // this will select the most recently inputted value into the array
    console.log(inputValue);
    //console.log(textArray[0], "array");

    // create an array that will store the binary code using the string values
    let binaryOutput = arraySorter(textArray);
    outputText.innerHTML = binaryOutput;
    // event.target.value is setting the outputText value by taking in a user input and storing it into a string every time a user enters a key in a keyboard
}
// function that will take two varibles 
function arraySorter(array){
    // lets say our array has a value of {'j','e','f','f'} we want to have a second array store the corisponding binary array 
    // {'01101010','01100101','01100110','01100110'}
    const binaryArray = []; // currently empty array
    for(let i = 0; i < array.length; i++){
       let binary = binaryConversion(array[i]); // stores a single character from the array
       binaryArray.push(binary); //this should push a value to the end of the array
    }
    return binaryArray;
}
// this function will have all the cases of characters to binary
function binaryConversion(input){
    let inputAnswer = '';
    switch(input){
        case '!': 
            inputAnswer = '00100001';
            break;
        case '"':
            inputAnswer = '00100010';
            break;
        case '#':
            inputAnswer = '00100011';
            break;
        case '$':
            inputAnswer = '0100100';
            break;
        case '%':
            inputAnswer = '00100101';
            break;
        case '&':
            inputAnswer = '00100110';
            break;
        case "'":
            inputAnswer = '00100111';
            break;
        case '(':
            inputAnswer = '00101000';
            break;
        case ')':
            inputAnswer = '00101001';
            break;
        case '*':
            inputAnswer = '00101010';
            break;
        case '+':
            inputAnswer = '00101011';
            break;
        case ',':
            inputAnswer = '00101100';
            break;
        case '-':
            inputAnswer = '00101101';
            break;
        case '.':
            inputAnswer = '00101110';
            break;
        case '/':
            inputAnswer = '00101111';
            break;
        case '0':
            inputAnswer = '00110000';
            break;
        case '1':
            inputAnswer = '00110001';
            break;
        case '2':
            inputAnswer = '00110010';
            break;
        case '3':
            inputAnswer = '00110011';
            break;
        case '4':
            inputAnswer = '00110100';
            break;
        case '5':
            inputAnswer = '00110101';
            break;
        case '6':
            inputAnswer = '00110110';
            break;
        case '7':
            inputAnswer = '00110111';
            break;
        case '8':
            inputAnswer = '00111000';
            break;
        case '9':
            inputAnswer = '00111001';
            break;
        case ':':
            inputAnswer = '00111010';
            break;
        case ';':
            inputAnswer = '00111011';
            break;
        case '<':
            inputAnswer = '00111100';
            break;
        case '=':
            inputAnswer = '00111101';
            break;
        case '>':
            inputAnswer = '00111110';
            break;
        case '?':
            inputAnswer = '00111111';
            break;
        case '@':
            inputAnswer = '01000000';
            break;
        case 'A':
            inputAnswer = '01000001';
            break;
        case 'B':
            inputAnswer = '01000010';
            break;
        case 'C':
            inputAnswer = '01000011';
            break;
        case 'D':
            inputAnswer = '01000100';
            break;
        case 'E':
            inputAnswer = '01000101';
            break;
        case 'F':
            inputAnswer = '01000110';
            break;
        case 'G':
            inputAnswer = '01000111';
            break;
        case 'H':
            inputAnswer = '01001000';
            break;
        case 'I':
            inputAnswer = '01001001';
            break;
        case 'J':
            inputAnswer = '01001010';
            break;
        case 'K':
            inputAnswer = '01001011';
            break;
        case 'L':
            inputAnswer = '01001100';
            break;
        case 'M':
            inputAnswer = '01001101';
            break;
        case 'N':
            inputAnswer = '01001110';
            break;
        case 'O':
            inputAnswer = '01001111';
            break;
        case 'P':
            inputAnswer = '01010000';
            break;
        case 'Q':
            inputAnswer = '01010001';
            break;
        case 'R':
            inputAnswer = '01010010';
            break;
        case 'S':
            inputAnswer = '01010011';
            break;
        case 'T':
            inputAnswer = '01010100';
            break;
        case 'U':
            inputAnswer = '01010101';
            break;
        case 'V':
            inputAnswer = '01010110';
            break;
        case 'W':
            inputAnswer = '01010111';
            break;
        case 'X':
            inputAnswer = '01011000';
            break;
        case 'Y':
            inputAnswer = '01011001';
            break;
        case 'Z':
            inputAnswer = '01011010';
            break;
        case '[':
            inputAnswer = '01011011';
            break;
        case "'\'":
            inputAnswer = '01011100';
            break;
        case ']':
            inputAnswer = '01011101';
            break;
        case '^':
            inputAnswer = '01011110';
            break;
        case '_':
            inputAnswer = '01011111';
            break;
        case '`':
            inputAnswer = '01100000';
            break;
        case 'a':
            inputAnswer = '01100001';
            break;
        case 'b':
            inputAnswer = '01100010';
            break;
        case 'c':
            inputAnswer = '01100011';
            break;
        case 'd':
            inputAnswer = '01100100';
            break;
        case 'e':
            inputAnswer = '01100101';
            break;
        case 'f':
            inputAnswer = '01100110';
            break;
        case 'g':
            inputAnswer = '01100111';
            break;
        case 'h':
            inputAnswer = '01101000';
            break;
        case 'i': 
            inputAnswer = '01101001';
            break;
        case 'j':
            inputAnswer = '01101010';
            break;
        case 'k':
            inputAnswer = '01101011';
            break;
        case 'l':
            inputAnswer = '01101100';
            break;
        case 'm':
            inputAnswer = '01101101';
            break;
        case 'n':
            inputAnswer = '01101110';
            break;
        case 'o':
            inputAnswer = '01101111';
            break;
        case 'p':
            inputAnswer = '01110000';
            break;
        case 'q':
            inputAnswer = '01110001';
            break;
        case 'r':
            inputAnswer = '01110010';
            break;
        case 's':
            inputAnswer = '01110011';
            break;
        case 't':
            inputAnswer = '01110100';
            break;
        case 'u':
            inputAnswer = '01110101';
            break;
        case 'v':
            inputAnswer = '01110110';
            break;
        case 'w':
            inputAnswer = '01110111';
            break;
        case 'x':
            inputAnswer = '01111000';
            break;
        case 'y':
            inputAnswer = '01111001';
            break;
        case 'z':
            inputAnswer = '01111010';
            break;
        case '{':
            inputAnswer = '01111011';
            break;
        case '|':
            inputAnswer = '01111100';
            break;
        case '}':
            inputAnswer = '01111101';
            break;
        case '~':
            inputAnswer = '01111110';
            break;
        default:
            console.log('not valid character');
    }
    return inputAnswer;
}