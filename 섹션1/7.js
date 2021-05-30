function ten_buje(n, arr){
  let answer=0;
  for(let x of arr){
    if(x%10 ==n)answer++;
  }
  return answer;
}

arr=[25,33,11,47,53,13,33];
console.log(ten_buje(3,arr));
