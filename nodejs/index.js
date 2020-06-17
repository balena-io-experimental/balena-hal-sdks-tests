const BalenaHal = require("balena-hal").BalenaHal;
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/*blink /sys/class/leds/led0*/
async function blink() {
  while (true) {
    BalenaHal.leds.write(0, 0);
    await sleep(2000);
    BalenaHal.leds.write(0, 1);
  }
}
console.log("Blinking...");
blink();
