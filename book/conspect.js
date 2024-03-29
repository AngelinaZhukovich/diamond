



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
// alert(Number(str[0]) + Number(str[1]) + Number (str[2]) + Number (str[3]) + Number(str[4])); //== 15 переводим в Nomber, чтоб значения строк проссумировались

// let num = 12345;
// let str = String(num);
// alert(str[4] + str[3]+ str[2]+str[1]+str[0]); == 54321 если перевести в строку, то суммируется как строки (на строки распрост только * и / );

// let num = 12345;
// let str = String(num);
// alert(str[0] * str[1] * str[2] * str[3] * str[4]); - при умножении переводить в nomber нет смысла;

// let str = 'abcde'; 
// str[0] = '!';       - строки в JS не изменяемые;

// let num = 1;
// num += 3; // этот код полностью эквивалентен коду num = num + 3;
// alert(num);

// let num = 2;
// num /= 3;
// alert(num);


// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// alert(num);
// сокращенный вариант:
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// // alert(num);


// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// alert(num);        // сокращенный вариант:
// let num =10;
// num++;
// num++;
// num--;
// alert (num);

// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// alert(num2);               // выводит 4 потом 3

// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// alert(num2);                 // выводит 2 потом 2

// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// alert(num2);                    // вывод 2 потом 3

// let num1 = 3; // присвоено 3
// num1++;         // нет разницы до или после ++ все равно увеличит на 1 и = 4
// let num2 = num1--; // в num2 запишет 4, в num1 уменшит на 1 и = 3
// alert(num1++); // значение записывает, а увеличивает только после alert. т.е. будет 3
// alert(--num2);  //уменьшает на 1 сразу 4-1 =3     
// выводит 3 потом 3

// prompt('Ваше имя?'); // всплывающее окно с графой для ввода текста

// let name = prompt('Ваше имя?');
// alert('Ваше имя: ' + name);      

// Сокращенный вариант (без присваивания переменной):
// alert('Ваше имя: ' + prompt('Ваше имя?')); // если не присвоить переменную, то в Консоли не сохранятся данные.

// let Surname = prompt ('Ваша Фамилия');
// alert ('Ваша фамилия: ' + Surname);

// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// alert (Number (num1) + Number (num2)); // сложит числа как строки, но если добавить Number, то переведет в числа;(в консоли все равно как строки записывается)


// let S = prompt ('Введи сторону квадрата');
// alert ('Площадь квадрата равна: ' + S*S); т.к. умножение со строками работает без number, то переводить строку в число нет смысла;

// let length = prompt ('Введи длину прямоуголика:');
// let width = prompt ('Введи ширину прямоуголика:');
// alert ('Периметр введенного прямоугольника равен: ' + Number ( length*2 + width*2)); //умножение выполняется первым,для сложения нужен Number, т.к. prompt(строчный элемент);

// let arr = ['a', 'b', 'c'];
// alert(arr);
// console.log (arr);

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// console.log(arr[0]); // выведет 'пн'
// console.log(arr[1]); // выведет 'вт'
// console.log(arr[2]); // выведет 'ср'

// let arr = ['a', 'b', 'c', 'd'];
// alert (arr[0]+'+'+arr[1]+'+'+arr[2]+'+'+arr[3]); // получится строка 'a+b+c+d';

// let arr = [1, 2, 3];
// alert (arr[0]+arr[1]+arr[2]);    // cуммирует значения массива =6

// let arr = [2, 5, 3, 9];
// let num = arr[0]*arr[1];   // 2*5 умнажает 1-ый элемент на 2-ой (1-ый элемент является 0 -ым)
// let num1 = arr[2]*arr[3];
// let result = num +num1;
// alert (result);

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// console.log(arr.length) //Длина массива, так же, как и длина строки находится с помощью свойства length .. выведет 7

// Последний элемент массива также получается аналогично последнему символу строки:
// let arr = [1, 2, 7];
// console.log(arr[arr.length - 1]) // выведет 7

// Элементы массивов, в отличие от символов строк, можно изменять:
// let arr = ['a', 'b', 'c'];
// arr[0] = '!';
// console.log(arr); // выведет ['!', 'b', 'c']

//Задача 16.8
// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = -2;
// arr[2] = -3;
// console.log(arr); //изменены все значения массива

// Перезапись:
// let arr = ['a', 'b', 'c'];
// arr[0] = arr[0] + '!';
// arr[1] = arr[1] + '!';
// arr[2] = arr[2] + '!';
// console.log(arr); // выведет ['a!', 'b!', 'c!']
// Предыдущий код можно переписать через оператор +=:
// let arr = ['a', 'b', 'c'];
// arr[0] += '!';
// arr[1] += '!';
// arr[2] += '!';
// console.log(arr); // выведет ['a!', 'b!', 'c!']

// let arr = ['a', 'b', 'c'];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// console.log(arr);

// let arr = [1, 2, 3, 4];
// arr[0]++;
// ++arr[1];
// arr[2]--;
// --arr[3];
// console.log(arr);   //2.3.2.3

// let arr = [1, 2, 3];
// // arr[0]++;
// // ++arr[1];
// // arr[2]++;
// console.log(arr);

// let arr = []; // создаем пустой массив
// arr[0] = 'a'; // в ключ 0 добавим элемент 'a'
// arr[1] = 'b'; // в ключ 1 добавим элемент 'b'
// arr[2] = 'c'; // в ключ 2 добавим элемент 'c'
// console.log(arr); // выведет ['a', 'b', 'c']

// let arr = [1, 2, 3];
// arr[3]=4;
// arr[4]=5;
// // console.log(arr);        // в массив добавлены еще два числа 
// console.log(arr.length);       // узнали колличество элементов в массиве


// На практике это означает увеличение длины массива:
// let arr = [1, 2, 3];
// arr[5] = '!';
// console.log(arr.length); // выведет 6, хотя в нем 4 элемента! Такие массивы, в которых присутствуют дыры, называются разреженными.

// В JavaScript есть способ указать ключи в явном виде - так, как нам нужно. Делается это с помощью объектов 
// (в других языках программирования они называются ассоциативными массивами или хешами).
// Объекты создаются с помощью фигурных скобок { }, внутри которых пишутся элементы этого объекта в формате ключ: значение.
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// console.log(obj[1]); // выведет 'пн'

// let obj = {1:'a',2:'b',3:'c'};
// console.log(obj);

// Данный объект корректный:
//let obj ={7: 'value1', 50: 'value2', 23: 'value3'}; -в отличии от массивов,у объектов нет увеличения длины,как и нет последовательности;

// let obj = {1: 'a', 2: 'b', 3: 'c'};
// alert(obj); // выведет [Object object]
// console.log(obj); // чтоб просмотреть весь объект, нужно выводить его в консоль;

// let obj = {key1: 'a', key2: 'b', key3: 'c'};
// console.log(obj['key1']); // выведет 'a';


//Задача 1.2
// let obj = {a: '1', b: '2', c: '3'};
// alert(Number(obj['a'])+ Number(obj['b'])+Number(obj['c']));

// Ключами объектов могут быть любые строки. Но есть, однако, ограничение: такие строки не могут
//  начинаться с цифры и не могут содержать внутри себя дефис, пробел и тому подобные вещи.
// Такие строки на самом деле являются допустимыми ключами, но только если их взять в кавычки:
// let obj = {'1key': 'a', 'key-2': 'b', key3: 'c'};
// console.log(obj['1key']); // выведет 'a'
// console.log(obj['key-2']); // выведет 'b'
// console.log(obj['key3']); // выведет 'c'

// let obj = {'1a':1, '2b':2, 'c-c': 3};
// alert (Number(obj['1a'])+ Number(obj['2b'])+Number(obj['c-c'])); // равно 6
// let obj = {'1a':1, '2b':2, 'c-c': 3};
// alert (obj['1a']+ obj['2b']+obj['c-c']);

// function highAndLow(numbers){
//     num = numbers.split(' ');
//     var max =parseInt(num);
//     var min =parseInt(num);

//     if (num.length = 1) {
//         return(max + " " + min);
//       }

//       else {
//               for (i=0;i<num.length;i++) {
//                 if (parseInt(num[i])>max) {
//                     max = parseInt(num[i]);
//                 }
//                 else if (parseInt(num[i])<min) {
//                     min = parseInt(num[i]);
//                 }
//                 else if (max ==min){

//                 }
//               }
//             }
//             return(max + " " + min);
// }-----------------------------------------------------------возвращает наибольшее и наименьшее значение из массива (дана строка с пробелами)


// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
     
//     }
//   }         --- (...args) -  используется, когда нам неизвестно, сколько элементов будет в задаче/ Math.min - ищет самое маленькое значение массива


// или 
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min.apply( null, args )
     
//     }
//   }


//5.

// for (var i = 0; i < text.length; i++)
// Это просто перебирает каждую букву в текстовом параметре.

// var code = text.toUpperCase().charCodeAt(i)
// Это начинает определять положение буквы в алфавите. В основном это говорит: "для каждого персонажа вtext, вернуть его код символа charCodeAt(i).

// if (code > 64 && code < 91) {
// result += (code - 64) + " "
// };
// Как и сказано в первом комментарии, коды символов для прописных букв от A до Z начинаются с 65 (A) и заканчиваются на 90 (Z). Следовательно, нам нужны коды только для букв от A до Z (например, нас не волнуют коды для пробелов или кавычек). Поскольку мы хотим, чтобы A было равно 1, мы должны вычесть 64 из кода символа (65–64 = 1, аналогично для B, 66–64 = 2 и т. Д.).

// result += (code - 64) + " "
// Эта часть добавляет наши отфильтрованные буквенные коды к результату и добавляет пространство для удобства чтения. Он делает это для каждого кода символа, отфильтрованногоif заявление.

// return result.slice(0, result.length-1);  или return result.trim()/ убрать последний и первый пробел   - замена введенного текса цифрами алфавита


//5.
// function abbrevName(name){
  
//     var initials = name.match(/\b(\w)/g);
//     return initials.join('.').toUpperCase();
  
//   }------------------------ Из ФИО оставляет инициалы, а .join('.') разделяет их точкой , .toUpperCase() - капс; 





// Задача 16.1-16.3
// Создайте массив с элементами 'a', 'b' и 'c'. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.
// Решение:
// let arr = ['a', 'b' , 'c'];
// alert (arr[0]+'+'+arr[1]+'+'+arr[2]);
// // console.log (arr);

// Задача 16.4
// Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
// let arr=[1,2,3];
// console.log (arr[0]+arr[1]+arr[2])

// Задача 16.5
// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, 
// присвойте переменной result. Выведите на экран значение этой переменной.
// let arr=[2,5,3,9];
// let multiply = arr[0]*arr[1];
// let multiply1 = arr[2]*arr[3];
// let result = multiply+multiply1;
// console.log (result)

// Задача 16.6
// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
// let arr = [1,,,89,876543,2];
// console.log(arr.length)

// let obj = {key1: 'a', key2: 'b', key3: 'c'};
// console.log(obj.key1);

// Задача 17.5
// Дан объект:
// let obj = {key1: 1, key2: 2, key3: 3};
// // Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.
// // let obj = {key1: 1, key2: 2, key3: 3};
// console.log(obj.key1+obj.key2+obj.key3);

// Задача 17.6
// Дан объект:
//let obj = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
// К каким элементам этого объекта допустимо обращение через свойство, а к каким - нет?
//console.log(obj.b2); // которые начинаются с буквы и не имеют -,+...

// Задача 17.7
// Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями.
//  Выведите на экран фамилию, имя и отчество через пробел.

// let user = {name:'Angelina', surname: 'Zhukovich', patronymic:'Vyacheslavovna' };
// alert (user.surname+' '+user.name+' '+ user.patronymic)

