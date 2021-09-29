let day = 100;
const isFirst = day >= 1 && day <=9;
const isSecond = day >= 10 && day <=19;
const isThird = day >= 20 && day <=29;
const isFourth = day >= 30 && day <=31;


switch(true){
    case isFirst:
        console.log('first decade');
        break;
    case isSecond:
            console.log('second decade');
            break;
    case isThird:
                console.log('third decade');
                break;
    case isFourth:
        console.log('fourth decade');
        break;
    default:
        console.log('Invalid');
    }


let num = 2;
let isSimple = true;
for (let i = 1; i <= num; i++){
    if (num % i === 0){
        isSimple = false;
        break;
    }
}

console.log(isSimple ? 'Простое' : 'Сложное');


for (let i = 2; i <= 10; i++){
    for(let j = i; j <= i-1; j++){
        if(j % i === 0){
            console.log(i);
            break;
        }
    }
}