const express = require("express");
const Ticket = require("../models/ticket.model");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tickets = await Ticket.findAll()
        res.status(200).json(tickets)
    } catch (err) {
        next(err)
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const ticket = await Ticket.create(req.body)
        res.status(201).json(ticket)
    } catch (err) {
        next(err)
    }
})

router.get('/:eid', async (req, res, next) => {
    try {
        const ticket = await Ticket.findByPk(req.params.eid)
        if (ticket) {
            res.status(200).json(ticket)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.put('/update/:eid', async (req, res, next) => {
    try {
        const ticket = await Ticket.findByPk(req.params.eid)
        if (ticket) {
            await ticket.update(req.body, { fields: ['title', 'description', 'projectName', 'assignee', 'priority', 'status', 'type', 'commitLink'] })
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const ticket = await Ticket.findByPk(req.params.id)
        if (ticket) {
            await ticket.destroy()
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;