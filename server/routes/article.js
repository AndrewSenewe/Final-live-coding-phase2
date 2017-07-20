var express = require('express');
var router = express.Router();
var conn = require('../controllers/article_c')

// post articles
router.post('/', conn.postArticles);

// get all articles
router.get('/', conn.getAllArticles);


//get one articles
router.get('/:articles_id', conn.getOneArticles);

//edit articles
router.put('/:articles_id', conn.editArticles);

// delete articles
router.delete('/:articles_id', conn.destroyArticles)

// get all articles by author
router.get('/author/:name', conn.getArticlesByAuthor);

// get all articles by category
router.get('/category/:category', conn.getArticlesByCategory);

module.exports = router;
