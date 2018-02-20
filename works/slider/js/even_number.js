function sortNumbers(ageArray){
    var sorted = {
        even:[],
        odd:[]
    };
    for(var i=0; i<ageArray.length; i++){        
        var number = ageArray[i];
        if (number%2 == 0){        
            sorted.even.push(number);
        }else{
            sorted.odd.push(number)
        }
    }
    return sorted;
}

var arr1 = [1,3,563,234,563,2135,3456,214];
var arr2 = [2,4,8,2345,3456,223567,12123,34];


var arr1Sorted = sortNumbers(arr1);
console.log(sortNumbers(arr1));
console.log(sortNumbers(arr2));

var textArea = document.getElementById('text');
var button = document.getElementById('send');
var option = document.getElementById('options');

//Dane testowe || Mock
textArea.value= "test\nasdasd\nasdasd";

var alphabet ="abcdefghijklmnopqrstuvwxyz";
var lettersArray = alphabet.split("");

button.addEventListener('click', getText);
var array=[];

function getText() {
    var tmp=[];

    if (array.length==0) {
        array=textArea.value.split('\n');
    }

    if(textArea.value){
        for (var i=0; i<array.length; i++){
            switch(option.value) {
                case "number": 
                    tmp[i] = (i+1) + ". " + array[i];
                    break;
                case "a":
                    tmp[i] = lettersArray[i] + ". " + array[i];
                    break;
                default:
                    tmp[i] = "*. " + array[i];
            }
        }
        textArea.value = tmp.join('\n');
    }

    console.log(array);
}
