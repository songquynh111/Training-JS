// 1.Pending
// 2.Fulfilled
// 3.Rejected

var promise = new Promise(
    function(resolve, reject) {
        resolve([
            {
                name:'js'
            }
        ]);
        // reject('Loi');
    }
)
// Data return từ 'then' trước sẽ trả về ở 'then' sau
// Nếu 'then' trước KHÔNG return về 1 Promise thì sẽ chạy luôn xuống 'then' tiếp theo
// Nếu 'then' trước return về 1 Promise thì phải đợi chạy hết Promise đó mới chạy đến 'then' tiếp theo ( 'then' tiếp theo này là của Promise trả về từ then trước đó)
promise
    .then(function(course){
        // console.log(course);
        return 1;
    })
    .then(function(data){
        // console.log(data);
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve([1,2,3])
            }, 3000);
        })
    })
    .then(function(data){
        // console.log(data);
    })
    .catch(function(error){
        // console.log(error);
    })
    .finally(function(){
        // console.log('Finally');
    })

    /**====================================================== */
function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        },ms)
    })
}
sleep(1000)
    .then(function() {
        // console.log(1);
        return sleep(1000)
    })
    .then(function() {
        // console.log(2);
        return new Promise(function(resolve,reject){
            reject('Loi')
        })
    })
    .then(function() {
        // console.log(3);
        return sleep(1000)
    })
    .then(function() {
        // console.log(4);
        return sleep(1000)
    })
    .catch(function(error) {
        // console.log(error);
    })
    
        /**====================================================== */

    var successPromise = Promise.resolve('Success')
    // var rejectPromise = Promise.reject('Loi')
    successPromise
        .then(function(result){
            // console.log(result);
        })
        .catch(function(error) {
            // console.log(error);
        })
    
        /**====================================================== */

    // Sử dụng khi 2 promise trả về 2 dữ liệu ko liên quan và muốn kết hợp sử dụng 2 dữ liệu đó về sau
    // 2 Promise ban đầu sẽ chạy song song
    var promise1 = new Promise(function(resolve) {
            setTimeout(function(){
                resolve([1])
            }, 1000);
    })
    var promise2 = new Promise(function(resolve) {
            setTimeout(function(){
                resolve([2,3])
            }, 3000);
    })
    var promise3 = new Promise(function(resolve,reject) {
            setTimeout(function(){
                reject('Loi!')
            }, 3000);
    })
    // var promise3 = Promise.reject('Loi ne!')
    Promise.all([promise1,promise2,promise3])
        .then(function(result) {
            console.log(result);
            var result1 = result[0]
            var result2 = result[1]
            // console.log(result1.concat(result2)); 
        })
        .catch(function(error) {
            console.log(error);
        })

        const logger =  (log) => {
            console.log(log);
        }
        logger('asdasdad');