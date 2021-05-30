function s_num(arr){
  let min =arr[0];
  for(let i = 0;i<arr.length;i++){
    if(min > arr[i]) min = arr[i];
  }

  return min;
}
arr= [1,2,3,4,5,6,7]
console.log(s_num(arr));
