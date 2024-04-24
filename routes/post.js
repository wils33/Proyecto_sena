const Post = require("../modelos/Post");

router.post('/', async (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();//Metodo que guarda en la DB
        res.json(savedPost);
    } catch (error) {
        res.json({mesage:error});
    }
});

//Bloque para mostar solo post por ID

router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({mesage: error});
    }
});

//Bloque para borras un post

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (error) {
        res.json({mesage: error});
    }
}); 

//Actualizar un post

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne (
            {_id: req.params.postId},
            {$set: {title: req.body.title}});
            res.json(updatePost);
    } catch (error) {
        res.json({mesage: error});
    }
});

module.exports = router;
