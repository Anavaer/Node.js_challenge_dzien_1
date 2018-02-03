//Twój kod
console.log(process.argv);
let sum = 0;
function sumArgs() {
  process.argv.forEach((arg, i) => {
    if(i !== 0 && i !== 1) {
      sum += parseInt(arg);
    }
  });
  console.log(sum);
  return sum
}

sumArgs();