const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');


router.post('/comment/creat', async (req, res) => {

    try {
        const { writer, text } = req.body;
        const comment = await Comment.create({
            writer,
            text

        });

        if (comment) {
            res.json({
                status: 'success',
                result: {
                    article: 'comment created'
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


router.get('/comment/read', async (req, res) => {
    try {
        const comment = await Comment.find({});
        if (comment) {
            res.json({
                status: 'success',
                result: {
                    article: 'comment read'
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


router.put('/comment/update/:id', async (req, res) => {
    try {
        const { writer, title, text } = req.body;
        const comment = await Comment.findByIdAndUpdate(req.params.id, { writer, title, text });
        if (comment) {
            res.json({
                status: 'success',
                result: {
                    article: 'comment updated'
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

router.delete('/comment/delete/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.id);
        if (comment) {
            res.json({
                status: 'success',
                result: {
                    article: 'comment deleted'
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