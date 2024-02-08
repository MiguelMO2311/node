const app = require ('./app')
const cors = require ('cors')

app.listen (app.get ('port'), function ()

{
    console.log ('Server listen on port: '+ app.get('port'))
})