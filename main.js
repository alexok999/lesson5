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



// СТРОКИ
console.log('hi');
// \n - перенос строки
// \t - Табуляция
// \' - Вывести кавычку



let str = 'Hello world';
console.log(str.length); // Длина строки
console.log(str[0]); // Вывод первого символа


str = str + ' Some text here';
console.log(str);


let city = 'kharkiv';
console.log(city.toUpperCase());
console.log(city[0].toUpperCase());



let str2 = 'hello, my name is Alex';
console.log(str2.indexOf('name'));   // индекс где находится текст

console.log(str2.includes('city')); // поиск элемента в тексте - показывает тру фолс

console.log(str2.startsWith('my')); // начинается ли строка на этот текст
console.log(str2.endsWith('Alex')); // проверяет заканчивается ли строка на этот текст




let b = 'big journey';
console.log(b.slice(1, 12)); //Обрезает строку до этого символа

let new1 = b + b.slice(1, 12);
console.log(new1);


let num = 3;

let num2 = 3.2; // нельзя через запятую

let num3 = 1e6; // 1 с 6 нольями
let num4 = 1e-6; // 0.0000 01;
console.log(num4);


let num5 = '12';
console.log(Number(num5));

console.log(num.toString()) ; // Число к строке



//ЧИСЛА
// Math.floor - округляет число в меньшую строну
let nu = 100.55;
let n1u = 100.35;
let n2u = 100.9;

console.log(Math.floor(nu));
console.log(Math.floor(n1u));
console.log(Math.floor(n1u));



// Math.ceil - в большую сторону

let nu1 = 100.55;
let n1u1 = 100.35;
let n2u1 = 100.9;

console.log(Math.ceil(nu1));
console.log(Math.ceil(n1u1));
console.log(Math.ceil(n1u1));


// Math.round - к ближайшему
let nu11 = 100.55;
let n1u11 = 100.35;
let n2u11 = 100.9;

console.log(Math.round(nu11));
console.log(Math.round(n1u11));
console.log(Math.round(n2u11));


// null  / unfinity / -infinity

console.log(NaN === NaN);
// isNan

let inCorrect = '123123asd';
let correct = '1234';
console.log(isNaN(inCorrect));
console.log(isNaN(correct));


// isFinite - Метод проверки, если число true, если нет - false

console.log(isFinite(Infinity));



// parseInt - целое число выводит
// parseFloat - выводит десятично



let strr = '123.22';

console.log(parseInt(strr));
console.log(parseFloat(strr));


//Functions
// function declaration 
//function exspression
// arrow functions
// function constructor



//func declaration - стандартная функция
function sayhi(){
    console.log('hi');
}
sayhi();



function calcSum(a, b){
    console.log(`Sum is ${a + b}`);
}

calcSum(1, 2);



function getSum(a, b){
    return a + b;  // любой код который написан ниже return не выполняется
}

getSum(1, 3);
console.log(getSum(1, 3));




let value = getSum(1, 5);
console.log(value);



// функция всегда по дефолту возвращает undefined
