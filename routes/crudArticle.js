const express = require('express');
const router = express.Router();
const Article = require('../models/article');


router.post('/article/creat', async (req, res) => {

    try {
        const { writer, title } = req.body;
        const article = await Article.create({
            writer,
            title

        });
        if (article) {
            res.json({
                status: 'success',
                result: {
                    article: 'article created'
                }

            })
        }

    } catch (err) {
        res.json({
            status: 'unsuccess',
            result: {
                error
            }
        })
    }
});


router.get('/article/read', async (req, res) => {
    try {
        const article = await Article.find({});
        if (article) {
            res.json({
                status: 'success',
                result: {
                    article: 'article read'
                }
            });
        }

    } catch (error) {
        res.json({
            status: 'success',
            result: {
                error
            }
        })
    }
});


router.put('/article/update/:id', async (req, res) => {
    try {
        const { writer, title, text } = req.body;
        const article = await Article.findByIdAndUpdate(req.params.id, { writer, title, text });
        if (article) {
            res.json({
                status: 'success',
                result: {
                    article: 'article updated'
                }
            });
        }
    } catch (error) {
        res.json({

            status: 'success',
            result: {
                error
            }
        })
    }
});

router.delete('/article/delete/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndRemove(req.params.id);
        if (article) {
            res.json({
                status: 'success',
                result: {
                    article: 'article deleted'
                }

            });
        }

    } catch (error) {
        res.json({
            status: 'success',
            result: {
                error
            }
        })
    }
});

module.exports = router;