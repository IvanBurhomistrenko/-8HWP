let numOrStr = prompt('input number or string');
console.log(numOrStr);
switch(numOrStr || isNaN(numOrStr)){
    case null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    default:
        if(isNaN(numOrStr)){
            console.log('number is Ba_NaN')
            break;
        };
        console.log('OK!');
        break;
}
    




    

    








