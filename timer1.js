// ALARM CLOCK
const data = process.argv.slice(2);
let numbers = data.filter(number => {
  return number > 0;
});

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      console.log('BEEP!');
      return process.stdout.write('\x07');
    }, num * 1000);
  }
};

timer(numbers);