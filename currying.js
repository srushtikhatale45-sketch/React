let multiply=(x,y)=>{
 console.log(x * y);
}



let multi = function (x){
    return function (y){
          console.log(x * y);
    }


}
let multiplyByTwo = multi(2);
multiplyByTwo(5);
