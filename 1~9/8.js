function real_nanjaeng(arr){
  let answer, sum = 0;
  for(x of arr){
      sum +=x;
  }
  console.log(sum);
  for(let i=0;i<8;i++){
    for(let j=i+1;j<9;j++){
      if((sum-(arr[i]+arr[j]))===100){
        arr.splice(j,1);
        arr.splice(i,1);
        break;
      }
    }
  }
  return arr;
}
let arr=[20,7,25,19,10,15,23,8,13];
console.log(real_nanjaeng(arr));
