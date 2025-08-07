import { useEffect, useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export default function RepositoryTable() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/repository').then(res => setRepos(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Repository</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>Link</th>
            <th>Category</th>
            <th>Utilization</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo, idx) => (
            <tr key={idx} className="border-t">
              <td><a href={repo.link} className="text-blue-500 underline" target="_blank">{repo.link}</a></td>
              <td>{repo.category}</td>
              <td>{repo.utilization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}