const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())
const tea = {
    'matcha':{
        'colour': 'jade green',
        'steepTime': 'none',
        'caffeineLevel': '35mg',
        'benefit': 'metabolism boost'
    },
    'chamomile':{
        'colour':'sunshiny yellow' ,
        'steepTime': '5 mins',
        'caffeineLevel': 'none',
        'benefit': 'sleep & relaxation',
    },
    'purple':{
        'colour':'purple' ,
        'steepTime': '3 mins',
        'caffeineLevel': '8.8mg',
        'benefit': 'weight loss'
    },
    'unknown':{
        'colour':'unknown' ,
        'steepTime': 'unknown',
        'caffeineLevel': 'unknown',
        'benefit': 'unknown'
    }
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})



app.get('/api/:name', (request,response) => {
    const teaName = request.params.name.toLowerCase()
    if(tea[teaName]){
        response.json(tea[teaName])

    }else{response.json(tea['unknown'])}
    //response.json(tea)
    //const teaName = request.params.name.toLowerCase()
   // if( tea[teaName] ){
       // response.json(tea[teaName])
    //}else{
     //   response.json(tea['unknown'])
   // }
    
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The Server is Running on port ${PORT}! You Better Go Catch It!`)
})
