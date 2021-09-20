//Dependencies
const Public_IP = require("public-ip")
const Request_IP = require("request-ip")
const Express = require("express")

//Variables
const Port = process.env.PORT || 8080
const Web = Express()

//Main
Web.use(Express.static(__dirname + "/public"))

Web.get("/api", function(req, res){
    const IP = Request_IP.getClientIp(req)
    
    APIWall()
    async function APIWall(){
        const Self_IP = await Public_IP.v4()

        if(IP == Self_IP){
            res.send("Test")
        }else{
            res.send("No permission.")
        }
    }
})

Web.listen(Port, ()=>{
    console.log(`Website is running in port ${Port}`)
})
