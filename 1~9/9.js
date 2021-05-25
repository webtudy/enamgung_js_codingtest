function A_out(s){
  s=s.replace(/A/gi,'#');

  return s;
}
let str="BANaNA";
console.log(A_out(str));
