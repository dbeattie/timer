//WHAT WAS THIS FOR???
// const readline = require('readline');
// const ask = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//SHOULD CREATE A BEEP: process.stdout.write('\x07');

// ALARM CLOCK VAMPED UP 

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  } else if (key === 'b') {
    console.log(`BEEP`);
    return process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log('BEEP!');
      return process.stdout.write('\x07');
    }, key * 1000);
  } else {
    process.stdout.write('.');
  }
});

//console.log('after callback');

//ask.question('Press ctrl^c to quit', (response) => {
  // process.on('exit', (code) => {
  //     console.log('Thanks for using me, ciao!');
  // }); 





// ask.question('Press b to Beep:', (response) => {
//     if (response === 'b') {
//       console.log('beep');
//       console.log('BEEP!');
//       return process.stdout.write('\x07');
//     } ask.question('Input any number from 1-9 to set timer:', (response) => {
//       if (response >= 1 || response <= 9) {
//         console.log(`Setting timer for ${response} seconds...`);
//         const timer = function(response) {
//           for (const num of response) {
//              setTimeout(() => {
//               console.log('BEEP!');
//               return process.stdout.write('\x07');  
//              }, num * 1000);
//          };
//          };
//          timer(response);
//     }
//     });
// });    


// ask.question('Account #', (account) => {
//   ask.question('Last name of account holder for Account #'+account, (name) => {
//     console.log('Welcome M ', name)
//   })
// })

  // ask.question('Last name of account holder for Account #'+response, (name) => {
  //   console.log('Welcome M ', name)
  // })

// if (ask.input === 'b') {
//   console.log('beep')

// // ask.question('C:\\> ',function(command) {
// //  console.log(` Volume in drive C has no label.
// //  Volume Serial Number is LHL-TORONTO
// //  Directory of C:\\
// // 30/07/2019  11:00 AM    <DIR>          .
// // 30/07/2019  11:00 AM    <DIR>          ..
// // `)
// // })

//   })
// })

// const data = process.argv
// let number = data.slice(2).filter(function(number){return number > -1});