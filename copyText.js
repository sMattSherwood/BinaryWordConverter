function copyText(){
    // the binary variable will store the binary textbox data
    let binary = document.getElementById('output');
    binary.select(); 
    binary.setSelectionRange(0,99999); // this is for mobile

    // this will copy text for the users clipboard
    navigator.clipboard.writeText(binary.value);
}