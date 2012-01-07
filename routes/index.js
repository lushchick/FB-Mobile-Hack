
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log(req.query, req.body);
    res.render('index', { title: 'Express', foo: 'Hello, world!' })
};
