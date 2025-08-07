import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function ToolDropdown({ selectedTools, onChange }) {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/tools').then(res => setTools(res.data));
  }, []);

  const handleAddTool = () => {
    const name = prompt("Enter new tool name:");
    const type = prompt("Enter tool type:");
    const pricing = prompt("Free or Paid?");
    if (name && type && pricing) {
      axiosInstance.post('/api/tools', { name, type, pricing }).then(res => {
        setTools(prev => [...prev, res.data]);
      });
    }
  };

  return (
    <div>
      <select
        className="border p-1 rounded"
        multiple
        value={selectedTools}
        onChange={e => {
          const selected = Array.from(e.target.selectedOptions, option => option.value);
          onChange(selected);
        }}
      >
        {tools.map(tool => (
          <option key={tool._id} value={tool._id}>{tool.name}</option>
        ))}
      </select>
      <button className="ml-2 bg-green-500 text-white px-2 py-1 rounded" onClick={handleAddTool}>
        + New Tool
      </button>
    </div>
  );
}