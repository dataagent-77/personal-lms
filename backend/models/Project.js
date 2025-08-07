const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  name: String,
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  tools: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tool' }],
  references: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Repository' }],
  progress: Number,
  expectedTime: String,
  stages: Array
});
module.exports = mongoose.model('Project', ProjectSchema);
