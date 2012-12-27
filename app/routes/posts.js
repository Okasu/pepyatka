var models = require('../models');

exports.add_routes = function(app) {
  // app.get('/posts', function(req, res){
  //   res.render('posts');
  // });

  app.get('/v1/posts/:postId', function(req, res) {
    models.Post.find(req.params.postId, function(post) {
      res.jsonp(post);
    })
  })

  app.post('/posts', function(req, res){
    attrs = req.body
    // TODO -> User.newPost(new models.Post(attrs)
    attrs.user_id = req.session.user_id

    post = new models.Post(attrs)

    post.save(function() {
      res.redirect('/')
    })
  });
}
