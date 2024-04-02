const notFound =(req,res)=>{
    res.status(404).send("the route provided not found");
}
export default notFound;