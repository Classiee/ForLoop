function printNumbers(){
    let stopValue = 256;
    for (let counter = 1; counter <= stopValue; counter *= 2){
        document.getElementById("numbers").innerHTML += '<li>' + counter + '</li>';
    }

    
}