// import html from './core.js'
// const cars = ['BMW','Merecedes','Guyndai']
// const isSuccess = true
// const output = html`
//     <h1>${isSuccess && 'Thành công'}</h1>
//     <ul>
//         ${cars.map(car => `<li>${car}</li>`).join('')}
//     </ul>
// `

// console.log(output);

import {attach} from './store.js'
import App from './components/App.js'
attach(App, document.getElementById('root'))