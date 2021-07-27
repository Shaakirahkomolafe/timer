const process = require('process');

const args = process.argv.slice(2);
const timer = (args) => {
  // if (args.length === 0)
  args.forEach((delayTime) => {
    if (delayTime > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delayTime * 1000);

    }
  });

};
timer(args);