const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project