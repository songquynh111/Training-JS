function Animals(name,high) {
    this.name = name;
    this.high = high;
}

function Dainv(leg) {
    Animals.call(this, 'Dain', 75)
    this.leg = leg;
}
const me = new Dainv(2);
// console.log(me);

function logger(){
    // chuyển arguments thành mảng
    Array.prototype.forEach.call(arguments, item => {
        console.log(item);
    })

    const ary1 = Array.from(arguments);
    const ary2 = [...arguments];
    console.log(ary1,ary2);
}
logger(1,2);
