var n = Number(prompt("Введите число не равное 0 и 1", ""));

function fibonacchiRecursion(n){

    //F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2, n >=2
    //завершает работу, когда n = 0 или n = 1
    if (n == 0)
    {
        return 0;
        
    }else if(n == 1)
    {
        return 1;
        
    }
    //рекурсия/ 
    return fibonacchiRecursion(n-1) + fibonacchiRecursion(n-2);
}

//объявляем
fibonacchiRecursion(n);
//выводим результат на экран
//Результат выполнения функции
document.write("Результат выполнения функции через рекурсию ");
document.write(fibonacchiRecursion(n));
document.write("<hr>");


function fibonacchiCylce(n){
    
 var val1 = 1, val2 = 1;
 
 var result = val1 + val2;
 //Цикл здесь начинается с i=3, так как первое и второе числа Фибоначчи заранее записаны в переменные a=1, b=1.
  for (var i = 3; i <= n; i++) {
    //каждое слудующее число равно сумме двух других
    result = val1 + val2;
    val1 = val2;
    //приравниваем второму числу результат
    val2 = result;
  }
  return val2;
}
document.write("<br>"+"Результат выполнения функции через цикл ");
document.write(fibonacchiCylce(n));
document.write("<hr>");