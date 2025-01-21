const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    const cars = ['BMW'];
    const root = $('#root');
    const input = $('.input');
    const submit = $('#submit');
    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1);
        },
        render() {
            const html = cars.map( (car,index) => `
                    <li>
                        ${car}
                        <span class="delele" data-index="${index}">&times</span>
                    </li>
                `).join('')

            root.innerHTML = html;
        },
        handleDelete(e) {
            const deleteBtn = e.target.closest('.delele')
            if (deleteBtn) {
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render();
            }
        },
        init() {
            // var _this = this; với TH viết  submit.onclick = function() {}
            submit.onclick = () => {
                // arrow function không có context => this sẽ lấy context bên ngoài => this = (this bên ngoài)
                const car = input.value;
                this.add(car);
                this.render();
                input.value = null;
                input.focus();
            }
            root.onclick = this.handleDelete.bind(this)
            this.render();

        }
    }
})();

// app.init();


/**====================================================================== */
var courses = [
    {
        name: 'js',
        coin: 680,
        isFinished: false
    },
    {
        name: 'php',
        coin: 860,
        isFinished: false
    },
    {
        name: 'java',
        coin: 980,
        isFinished: false
    }
]


Array.prototype.filter2 = function(callback){
    var output = [];
    for (var index in this){
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index],index,this)
            if (result) {
                output.push(this[index])
            }
        }
    }

    return output;
}
var courseFilter = courses.filter(function(course,index,array) {
    return course.coin == 680
})

// console.log(courseFilter);

Array.prototype.some2 = function(callback) {

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index],index,this)
            if (result) {
                return true;
            }
        }
    }
    return false;
}
var courseSome = courses.some2(function(course,index,ary) {
    return course.isFinished == true;
})
// console.log(courseSome);

Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}

var courseEvery = courses.every2(function(course,index,ary) {
    return course.isFinished === false;
})
// console.log(courseEvery);
/**====================================================================== */

Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for ( i; i < this.length; i++) {
        result = callback(result,this[i],i,this)
    }
    return result;
}

const numbers = [1,2,3,4,5]
const result = numbers.reduce2((total, number, index, ary) => {
    return total + number
},10)
// console.log(result);

function createCar (obj) {
    // obj = JSON.parse(JSON.stringify(obj));
    obj = {...obj}
    obj.name = 'MErcedes'
    return obj;
}
const car = {
    name: 'BMW'
}
const newCar = createCar(car);
console.log(newCar);
console.log(car);