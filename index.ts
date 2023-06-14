import express from 'express';
import bodyParser from "body-parser";
import morgan from "morgan"
const app = express()
const port = 4312
app.use(bodyParser.json())
app.use(morgan('common'))
app.get('/',(req, res) => {
    res.json({
        message : "hê lô , mày yếu không"
    })
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)

})