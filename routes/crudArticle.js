const express = require('express');
const router = express.Router();
const Article = require('../models/article');


router.post('/article/creat', async (req, res) => {

    try {
        const { writer, title } = req.body;
        if(!writer || !title){
            res.json({
               
                status: 'unsuccess',
                result: {
                    msg: 'artile must have writer and title',
                }

            })
            return;
        }
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

    } catch (error) {
        console.log(error);
        res.json({
            status: 'unsuccess',
            result: {
                msg:error
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
        const { writer, title} = req.body;
        if(!writer|| !title){
            res.json({
               
                status: 'unsuccess',
                result: {
                    msg: 'for update artile must enter writer and title',
                }

            })
            return;
        }
        const article = await Article.findByIdAndUpdate(req.params.id, { writer, title });
        if (article) {
            res.json({
                status: 'success',
                result: {
                    article: 'article updated'
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            status: 'unsuccess',
            result: {
                msg:error
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