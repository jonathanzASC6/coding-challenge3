let fizzBuzz = function(str1= 'fizz', str2='buzz', n1=3, n2=5){
    let arr = []
    for (let i=1; arr.length<100; i++){
        if(i % n1 === 0 && i % n2 === 0){
            arr.push(str1 + str2)
        } else if(i % n1 === 0){
            arr.push(str1);
        }
        else if(i % n2 === 0){
            arr.push(str2);
        }else{
            arr.push(i)
        }
    }


    return arr
};

console.log(fizzBuzz());

