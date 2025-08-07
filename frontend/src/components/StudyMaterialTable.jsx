import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function StudyMaterialTable() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/study-materials').then(res => setMaterials(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Study Materials</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((item, idx) => (
            <tr key={idx} className="border-t">
              <td>{item.name}</td>
              <td><a href={item.link} target="_blank" className="text-blue-500 underline">View</a></td>
              <td>{item.linkedProjects?.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
