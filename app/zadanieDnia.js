//Twój kod

function sleepSort() {
  process.argv.forEach((arg, i) => {
    if(i !== 0 && i !== 1) {
      setTimeout(() => {console.log(arg);}, (parseInt(arg) * 1000))
    }
  });
}

sleepSort();