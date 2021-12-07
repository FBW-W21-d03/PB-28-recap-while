let ungerade=[];
let num=1;


while(ungerade.length<1000){
    
   if (num%2!==0){
        ungerade.push(num)
       } 
 num+=2;
} 
console.log(ungerade);