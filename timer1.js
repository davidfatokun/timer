let args = process.argv;
args = args.slice(2)
let i = 0;
for (const arg of args) {
    setTimeout(() => {
        if (i != (args.length - 1)) {
            process.stdout.write(arg + "s " + "Alarm! ");
        } else {
            process.stdout.write(arg + "s " + "Alarm!\n");
        }
        process.stdout.write('\x07');
    }, arg*1000) // <= 1s delay to make it noticeable. Can dial it down later.
}
