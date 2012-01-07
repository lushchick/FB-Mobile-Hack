
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express', foo: 'Hello, world!', query: req.query, body: req.body })
};
