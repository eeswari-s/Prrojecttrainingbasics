// if statement
//syntax
//if(condition){
//code
    
//`}

//


let age =20; 

if(age >=18){
    console.log("you can drive");
}


//if else 

    let age1 = 19;

    if(age1 >=18){
        console.log("you can drive");
    }
    else{
        console.log("you can not drive");
    }


    //3.else if

    let age2 = 17;

    if(age2 >=18){
        console.log("you can drive");
    }
    else if(age2 >=16){
        console.log("you can drive but not vote");
    }
    else{
        console.log("you can not drive");
    }


    //4.ternary operator

    //syntax:
    //condition ? true : false;

   let age3 =25; 

   let result = age3 >=18 ? "you can drive" : "you can not drive";

   console.log(result);


   //=======================================================================================

   //loop

   //while loop 

   //while(condition){
   //code
   //}
console.log("while");
   let i=1;

   while(i<=10){
    console.log(i);
    i++;
   }


   //6.do while 

   //do{
   //code 
   // 
    //}
    //while(condition);
console.log("do while");

    let j = 1;

    do{
        console.log(j);
        j++;
    }while(j<=10);

console.log("for")

    //7. for loop 

    //syntax:
    //for(initialization; condition; increment/decrement){
    //code
    //}

    for(let k=1; k<=10; k++){
        console.log(k);
    }

    


//array.forEach(function(item, index)=>{
    //code})


    let nums = [1,2,3,4,5,6,7,8,9,10];


  nums.forEach((num,index)=>{
    console.log(num);
  });
  




//   console.log("hello");

  function script(){
    console.log("hello world");
    console.log("hello world");
  }

  script();


  let a=10;

  function abc(){
    console.log(a);

  }

  abc();

  let b=20;



