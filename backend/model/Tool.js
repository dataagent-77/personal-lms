const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
  name: String,
  type: String,
  pricing: { type: String, enum: ['Free', 'Paid'] },
  linkedProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('Tool', ToolSchema);
