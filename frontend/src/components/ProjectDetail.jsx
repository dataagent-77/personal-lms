import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import axiosInstance from '../utils/axiosInstance';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    axiosInstance.get(`/api/projects/${id}`).then(res => {
      setProject(res.data);
      const generatedNodes = res.data.stages?.map((stage, idx) => ({
        id: String(idx),
        data: { label: stage.name },
        position: { x: 100 * idx, y: 50 * idx }
      })) || [];
      setNodes(generatedNodes);
      setEdges([]); // edge logic can be implemented later
    });
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Project: {project?.name}</h2>
      <ReactFlow nodes={nodes} edges={edges} fitView style={{ height: 500 }}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
