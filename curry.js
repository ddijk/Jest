module.exports = curry

function curry(f) {

   return (...b) => {

        let args = b;
        let n = f.length;
        const curryN = (...c) => {
            if (n - args.length - c.length <= 0) {
                return f(...args, c);
            }

            args = [...args, ...c];

            console.log('args', args);

            return curryN;
        }

        if ( args.length >= n) {
            return curryN();
        }
        return curryN;
    }
}
