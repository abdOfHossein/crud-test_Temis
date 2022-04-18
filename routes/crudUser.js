const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/user/creat', async (req, res) => {

    try {
        const { firstName, lastName, userName, password } = req.body;
        if (!firstName || !lastName || !userName || !password) {

            res.json({
                status: 'success',
                result: {
                    msg: 'you must  enter firstName, lastName, userName, password '
                }

            })

        }
        const user = await User.create({
            firstName,
            lastName,
            userName,
            password

        });
        if (user) {
            res.json({
                status: 'success',
                result: {
                    article: 'user created'
                }

            })
        }

    } catch (error) {
        res.json({
            status: 'unsuccess',
            result: {
                msg: error
            }

        })
    }
});


router.get('/user/read', async (req, res) => {
    try {
        const user = await User.find({});
        if (user) {
            res.json({
                status: 'success',
                result: {
                    article: 'user read'
                }

            });
        }

    } catch (error) {
        res.json({
            status: 'success',
            result: {
                msg: error
            }
        })
    }
});


router.put('/user/update/:id', async (req, res) => {
    try {
        const { firstName, lastName, userName, password } = req.body;
        if (!firstName || !lastName || !userName || !password) {

            res.json({
                status: 'success',
                result: {
                    msg: 'you must  enter firstName, lastName, userName, password '
                }

            })

        }
        const user = await User.findByIdAndUpdate(req.params.id, { firstName, lastName, userName, password });
        if (user) {
            res.json({
                status: 'success',
                result: {
                    article: 'user updated'
                }
            });
        }

    } catch (error) {
        res.json({
            status: 'success',
            result: {
                msg: error
            }
        })
    }
});

router.delete('/user/delete/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (user) {
            res.json({
                status: 'success',
                result: {
                    article: 'user deleted'
                }
            });
        }

    } catch (error) {
        res.json({
            status: 'success',
            result: {
                msg: error
            }
        })
    }

});

module.exports = router;