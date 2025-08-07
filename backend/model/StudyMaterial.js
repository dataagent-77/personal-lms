const mongoose = require('mongoose');

const StudyMaterialSchema = new mongoose.Schema({
  name: String,
  link: String,
  linkedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('StudyMaterial', StudyMaterialSchema);
