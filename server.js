const app = require("./app/app")
const config = require("./app/config/configuracion");
 
app.listen(config.PORT,()=>{
    console.log("Aplicacion corriendo en el puerto ", 
    config.PORT);
})