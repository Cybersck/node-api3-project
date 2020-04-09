module.exports = (req, res, next) => {
   let info = {
        Method: req.route.stack[0].method,
        URL: req.route.path, 
        Time: Date().toString()
   }
    console.table(info);
    next();
}
