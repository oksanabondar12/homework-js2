var n = Number(prompt("Введіть число, окрім чисел 0 и 1", ""));

function fibonacchiRecursion(n){

    //F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2, n >=2
    //завершує роботу, коли n = 0 або n = 1
    if (n == 0)
    {
        return 0;
        
    }else if(n == 1)
    {
        return 1;
        
    }
    //рекурсія/ 
    return fibonacchiRecursion(n-1) + fibonacchiRecursion(n-2);
}

//оголошуємо
fibonacchiRecursion(n);
//виводимо результат на екран
//Результат виконання функції
document.write("Результат виконання функції через рекурсію ");
document.write(fibonacchiRecursion(n));
document.write("<hr>");


function fibonacchiCylce(n){
    
 var val1 = 1, val2 = 1;
 
 var result = val1 + val2;
 //Цикл туть починается з i=3, так як перше і друге числа Фібоначчі заздалегідь записані в змінні a=1, b=1.
  for (var i = 3; i <= n; i++) {
    //кожне наступне число дорівнює сумі двох наступних
    result = val1 + val2;
    val1 = val2;
    //прирівнюємо другому числу результат
    val2 = result;
  }
  return val2;
}
document.write("<br>"+"Результат виконання функції через цикл ");
document.write(fibonacchiCylce(n));
document.write("<hr>");