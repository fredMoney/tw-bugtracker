const express = require("express");
const Project = require("../models/project.model");

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.findAll()
        res.status(200).json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const project = await Project.create(req.body)
        res.status(201).json(project)
    } catch (err) {
        next(err)
    }
})

router.get('/projects/:eid', async (req, res, next) => {
    try {
        const project = await Project.findByPk(req.params.eid)
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
})

router.put('/:eid', async (req, res, next) => {
    try {
        const project = await Project.findByPk(req.params.eid)
        if (project) {
            await project.update(req.body, { fields: ['name', 'repository'] })
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
        const project = await Project.findByPk(req.params.eid)
        if (project) {
            await project.destroy()
            res.status(202).json({ message: 'accepted' })
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (err) {
        next(err)
    }
});

module.exports = router;