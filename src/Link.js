const axiose = require('axios')
const qs = require('qs')

let axios = axiose.create()
let base = 'http://49.235.44.150:8080/blog/'
process.stdin.setEncoding('utf8')
process.stdin.on('data',(input)=>{
    axios.defaults.withCredentials = true
    input = input.toString().trim()
    let info = input.split(' ')
    let data = {}
    url = info[0]
    for(let i = 1; i<info.length; i++){
        let vk = info[i].split(':')
        data[vk[0]] = vk[1]
    }

    console.log(base+url)
    if (JSON.stringify(data) !== '{}') {
        console.log(data)
        axios.post(base + url, qs.stringify(data))
            .then(response => {
                console.log('-------------------------------------------------------------------')
                console.log('response :        ' + response.data)
                console.log('-------------------------------------------------------------------')
            })
            .catch(err => {
                console.log(err.data)
            })
    }
    else
        axios.post(base+url)
            .then(response=>{
                console.log('-------------------------------------------------------------------')
                console.log('response :        '+response.data)
                console.log('-------------------------------------------------------------------')
            })
            .catch(err=>{
                console.log(err.data)
            })

})