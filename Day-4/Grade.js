function grade(totmarks,isExam)
  {
  if (isExam) {
    return totmarks >= 90;
  }
 return (totmarks >= 89 && totmarks <= 100);
 }

console.log(grade("34", " "));
console.log(grade("79", "true"));
console.log(grade("93", "true"));