import axios from 'axios'

const request=axios.create({
   baseURL:'http://123.207.32.32:9001/',
   timeout:10000
})

export default request