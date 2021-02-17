const express = require('express')
const Project = require('../models/project')
const router = new express.Router()

router.post('/projects', async (req, res) => {
  const project = new Project(req.body)

  try {
    await project.save()
    res.status(201).send(project)
  }catch(e){
    res.status(400).send()
  }
})

router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find({})
    res.status(200).send(projects)
  }catch(e){
    res.status(400).send()
  }
})

router.get('/projects/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const project = await Project.findOne({ _id })
    if(!project){
      return res.status(404).send()
    }
    res.status(200).send(project)
  }catch(e){
    res.status(400).send()
  }
})

router.patch('/projects/:id', async (req, res) => {
  const _id = req.params.id

  const keys = Object.keys(req.body)
  const allowedUpdates = ['title', 'details', 'complete']
  const isValidUpdate = keys.every(key => {
    return allowedUpdates.includes(key)
  })

  if(!isValidUpdate){
    return res.status(400).send('Invalid update')
  }

  try {
    const project = await Project.findOne({ _id })
    if(!project){
      res.status(404).send()
    }
    keys.forEach(key => project[key] = req.body[key])
    await project.save()
    res.status(200).send(project)
  }catch(e){
    res.status(400).send()
  }
})

router.delete('/projects/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const project = await Project.findOneAndDelete({ _id })
    if(!project){
      return res.status(404).send()
    }
    res.status(200).send(project)
  }catch(e){
    res.status(400).send()
  }
})

module.exports = router