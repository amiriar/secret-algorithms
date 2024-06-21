function NotFoundHandler(app){
    app.use((req,res,next) =>{
        res.status(404).json({
            message: "route Not found"
        })
    })
}
module.exports = NotFoundHandler