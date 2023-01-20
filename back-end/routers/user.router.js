const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
})

router.get('/:eid', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.eid)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.put('/:eid', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.eid)
        if (user) {
            await user.update(req.body, { fields: ["name", "email", "password", "role"] })
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/:eid', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.eid)
        if (user) {
            await user.destroy()
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
});

module.exports = router;