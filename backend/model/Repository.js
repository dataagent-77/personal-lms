const mongoose = require('mongoose');

const RepositorySchema = new mongoose.Schema({
  link: String,
  category: { type: String, enum: ['Tool', 'Study'] },
  utilization: { type: String, enum: ['Used', 'Not Used'] },
  usedInProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('Repository', RepositorySchema);
