const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');


router.post('/comment/creat', async (req, res) => {

    try {
        const { writer, text } = req.body;
        if(!writer || !text){
            res.json({
                status: 'success',
                result: {
                    msg: 'writer and text must fill'
                }

            })

        }
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

    } catch (error) {
        res.json({
            status: 'unsuccess',
            result: {
                msg:error
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
                msg:error
            }

        })
    }
});


router.put('/comment/update/:id', async (req, res) => {
    try {
        const { writer, title} = req.body;
        if(!writer || !title){
            res.json({
                status: 'success',
                result: {
                    msg: 'for update comment you must fill writer and update'
                }

            });
        }
        const comment = await Comment.findByIdAndUpdate(req.params.id, { writer, title });
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
                msg:error
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
                msg:error
            }
        })
    }
});

module.exports = router;