// let name  = 'Angelina';  - создание строки;
// alert('Hello, ' + name);

// let age = 27;
// alert ('Мне ' + age + ' лет'); - создание числа (с добавлением строк);

// alert('Angelina Zhukovich'.length); - length - свойство, в котором содержится длина строки;

// let str = `a
// b
// c`
// alert(`abc`); - косые ковычки предназанчены для многострочных строк;

// let c;
// alert (c); - undefined(не определен), т.к. значение переменной не определено;

// let a = null; - Это значение очень похоже на undefined, отличие в том, 
// alert(a);       что undefined - это не определенное значение, а null - определенное - ничего.


// let a = true;  - да;        Значения true и false обозначают истину и ложь соответственно. 
// let a = false; - нет;       Они используются для таких вещей, которые предполагают два варианта ответа - да или нет.
// alert (a);

// alert(NaN + 1); 
// alert('abc' * 3); - Значение NaN (Not-A-Number) обозначает не число.
// let str = '3';      Такое значение получается тогда, когда вы пытаетесь делать математические операции не с числами, а с чем-то другим.
// let str1 = 'abc';
// alert(str*str1);


// alert(10/0); - выведет Infinity      -обозначают соответственно бесконечность и минус бесконечность.
// alert(-10/0); - выведет -Infinity

// console.log(10/0);      - вывести в консоль;
// document.write(-10/0);  - вывести на экран;

// let a = '' + 3 + 1; - получится 31, т.к. 3 и 1 складываются как строки '3' '1' 
//                         (если '3'+ '1' то было бы 4, значения строк распознались бы как числа)
                        // значение стаки преобладает;

// let a = '2';
// let b = '3';
// document.write(Number(a) + Number(b)); - Number, применяется для того, чтобы строку преобразовать в число;

//let a = +'2'; // в переменную запишется число 2 (альтернатива Number);
// Пример:
// let a = +'2';
// let b = +'3';
// document.write(a+b)

// alert(Number('2s')); // выведет NaN, т.к. это не число

// let num = parseInt('12px'); -однако, иногда бывают дробными: '12.5px'. В этом случае функция parseInt пасует и выводит только целую часть:
// alert(num);

//  let num = parseFloat('12.5px');  //- извлекает число вместе с его дробной частью; Parse (разобрать) 
// alert(num);
// Пример:
// let a =  '5.5px';
// let b = '6.25px';
// alert(parseFloat(a)+parseFloat(b)+'px');

// let str = String(123); // теперь в переменной строка '123' (преобразование в строку);
// let num1 = 1;
// let num2 = 2;
// alert(String(num1) + num2) //- переменные сложены как строки

// чтобы найти длину строки, можно использовать свойство length.
// Оно, однако, работает только со строками, а будучи применено к числу, не будет работать:
// let num = 12345;
// alert(num.length); // выведет undefined, т.к. работает только со строками

// let num = 12345;
// let str = String(num);
// alert(str.length);        - преобразование из числа в строку, затем выведено кол-во символов;


// function rename (str){
//     const date = Date.now(); //36745678
//     const arr = str.split('.'); // ['test' 'pdf']
//     const ext = arr.pop (); //'pdf'

//     return  arr.join('.') + date + '.' + ext; // объединяет в одну строку 
// }


// document.write(a);

// let a = 3267890;
// alert (String(a).length); - .length считает длину строки

// let num = 12;
// let num1 = 156;
// alert (String(num).length);
// alert (String(num1).length);
// document.write((String(num).length) +(String(num1).length) ); - считает строки num и num1 и складывает их значение;


// Вот значения, которые при приведению к логическому типу дают false: 0, -0, +0, null, false, NaN, undefined, '' (пустая строка).
// Следующие значения являются строками, так как взяты в кавычки, и также приводятся к true: '0', 'false', 'NaN', 'null', 'undefined'.
// Вот значения, приводящиеся к true, но могущие вызвать у вас сомнения: -1, Infinity, -Infinity.

// let test = Boolean(false); - false
// alert(test);

// let test = Boolean(true); - true
// alert(test);

// let test = Boolean('true'); = true      ---------- приведены в строку;
// // alert(test);

// let test = Boolean('false'); - true
// alert(test);


// let str = 'abcde'; // строка  - начинается нумерация с 0;
// alert(str[0]); // выведет 'a'
// alert(str[1]); // выведет 'b'
// alert(str[2]); // выведет 'c'

// let str = 'abcde';
// console.log (str[4], str[3],str[2],str[1],str[0]);

// let str = 'abcde';
// let num = 4;
// alert (str[num]);

// let str = 'abcde';
// let last = str.length - 1; // номер последнего символа
// alert(str[last]); // выведет 'e'

// let str = 'Angelina';
// console.log (str [str.length -1]); - выводит 'a' - последний символ;

// let test = '12345';
// alert(test[0] + test[1]); // выведет '12' - суммирует как строки

// let test = '12345'; // строка
// alert(Number(test[0]) + Number(test[1])); // выведет 3

// let str = '12345';
// alert(Number(str[0])+Number(str[1])+Number(str[2])+Number(str[3])+Number(str[4]));

// let str = '12345';
// let num0 = str[0];
// let num1 = str[1];
// let num2 = str[2];
// let num3 = str[3];
// let num4 = str[4];
// alert(Number(num0)+Number(num1)); -- второй вариант для сложения чисел строки


// let num = 12345;
// let str = String(num);
// alert(Number(str[0]) + Number(str[1]) + Number (str[2]) + Number (str[3]) + Number(str[4])); == 15

let num = 12345;
let str = String(num);
alert(Number(str[4]) ,Number(str[3]) , Number(str[2]) ,Number(str[1]),Number (str[0])); 