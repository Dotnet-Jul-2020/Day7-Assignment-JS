//while loop

let x = 0;
console.log(`The data type of x is ` + typeof{x});
while(x<=10){
    console.log(`The value of x is ` + x);
    x ++;
}

//do while loop
let y=10;
console.log(`The data type of y is ` + typeof{y});
do{
    y--;
    console.log(`The value of y is ` + y);
}while(y>0);

//switch cases

let i=9;
console.log(`The data type of i is ` +  typeof{i});
switch (i)
{
    case 0:
        console.log('i is zero.');
        break;
    case 1:
        console.log('i is one.');
        break;
    case 2:
        console.log('i is two.');
        break;
    default:
        console.log('i is greater than 2.');
        break;

}