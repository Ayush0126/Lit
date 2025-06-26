'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const downloadJSON = (data: object[], filename: string) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

type Entity = {
  name: string;
  pan: string;
  admin: string;
  status: string;
  createdBy: string;
  createdOn: string;
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<'companyGroup' | 'entity'>('companyGroup');
  const [entities, setEntities] = useState<Entity[]>([]);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newEntity, setNewEntity] = useState<Entity>({
    name: '',
    pan: '',
    admin: '',
    status: 'Active',
    createdBy: 'System',
    createdOn: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const saved = localStorage.getItem('entities');
    if (saved) {
      setEntities(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('entities', JSON.stringify(entities));
  }, [entities]);

  const handleAddEntity = () => {
    if (editIndex !== null) {
      const updated = [...entities];
      updated[editIndex] = newEntity;
      setEntities(updated);
      setEditIndex(null);
    } else {
      setEntities((prev) => [...prev, newEntity]);
    }

    setNewEntity({
      name: '',
      pan: '',
      admin: '',
      status: 'Active',
      createdBy: 'System',
      createdOn: new Date().toISOString().split('T')[0],
    });

    setShowForm(false);
  };

  const handleEditFromHeader = () => {
    if (entities.length > 0) {
      setNewEntity(entities[entities.length - 1]);
      setEditIndex(entities.length - 1);
      setShowForm(true);
    }
  };

  const handleDownload = () => {
    downloadJSON(entities, 'entities.json');
  };

  const filteredEntities = entities.filter((entity) =>
    entity.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Top Nav */}
      <nav className="flex items-center justify-between bg-white shadow px-6 py-2">
        <div className="flex items-center space-x-12">
          <div className="text-xl font-bold text-blue-700 flex items-center">LIT</div>
          <div className="flex space-x-6 text-gray-700 font-medium">
            <button className="hover:text-blue-700">Dashboards</button>
            <button className="hover:text-blue-700">Calendar</button>
            <button className="hover:text-blue-700">Fetch</button>
            <button className="hover:text-blue-700">Reports</button>
            <button className="border-b-2 border-gray-300 text-gray-900 pb-1">Masters</button>
            <button className="hover:text-blue-700">Configurations</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600 text-sm">You are currently on</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-700">
            <option>Income Tax</option>
          </select>
          <div className="flex items-center space-x-1">
            <span className="text-gray-700 font-medium">Administrator</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </div>
      </nav>

      {/* Tabs */}
      <div className="bg-gray-200 px-6 pt-2">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 ${activeTab === 'companyGroup' ? 'bg-white border-b-4 border-blue-700 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-700'}`}
            onClick={() => setActiveTab('companyGroup')}
          >
            Company Group
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'entity' ? 'bg-white border-b-4 border-blue-700 text-blue-700 font-medium' : 'text-gray-600 hover:text-blue-700'}`}
            onClick={() => setActiveTab('entity')}
          >
            Entity
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="px-8 pt-6">
      {activeTab === 'companyGroup' && (
  <div>
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-700">Entity Management</h1>
      <div className="space-x-2">
        <button
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded shadow"
          onClick={() => setShowForm(!showForm)}
        >
          {editIndex !== null ? 'Edit Entity' : '+ Add Entity'}
        </button>
        <button
          className="border border-indigo-700 text-indigo-700 px-4 py-2 rounded hover:bg-indigo-50"
          onClick={handleEditFromHeader}
        >
          Edit
        </button>
        <button
          className="border border-gray-600 text-gray-700 px-4 py-2 rounded hover:bg-gray-100"
          onClick={handleDownload}
        >
          Download.xls
        </button>
      </div>
    </header>

    {showForm && (
      <div className="mb-6 p-4 border border-indigo-200 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-2 text-indigo-700">
          {editIndex !== null ? 'Edit Entity' : 'Add New Entity'}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Entity Name"
            className="border p-2 rounded text-gray-600"
            value={newEntity.name}
            onChange={(e) => setNewEntity({ ...newEntity, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="PAN"
            className="border p-2 rounded text-gray-600"
            value={newEntity.pan}
            onChange={(e) => setNewEntity({ ...newEntity, pan: e.target.value })}
          />
          <input
            type="text"
            placeholder="Admin"
            className="border p-2 rounded text-gray-600"
            value={newEntity.admin}
            onChange={(e) => setNewEntity({ ...newEntity, admin: e.target.value })}
          />
          <div className="col-span-3 flex space-x-4 mt-2">
            <label className="flex items-center text-gray-600">
              <input
                type="radio"
                checked={newEntity.status === 'Active'}
                onChange={() => setNewEntity({ ...newEntity, status: 'Active' })}
                className="mr-1"
              />
              Active
            </label>
            <label className="flex items-center text-gray-600">
              <input
                type="radio"
                checked={newEntity.status === 'Inactive'}
                onChange={() => setNewEntity({ ...newEntity, status: 'Inactive' })}
                className="mr-1"
              />
              Inactive
            </label>
          </div>
        </div>
        <button
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={handleAddEntity}
        >
          Save Entity
        </button>
      </div>
    )}

    <input
      type="text"
      placeholder="Search Entity Name"
      className="border border-gray-300 p-2 rounded w-1/2 mb-4 text-gray-600"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <table className="w-full border-collapse bg-white shadow-md rounded overflow-hidden">
      <thead className="bg-indigo-200 text-indigo-900">
        <tr>
          <th className="p-3 text-left">Entity Name</th>
          <th className="p-3 text-left">PAN</th>
          <th className="p-3 text-left">Entity Admin</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Created By</th>
          <th className="p-3 text-left">Created On</th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredEntities.length > 0 ? (
          filteredEntities.map((entity, idx) => (
            <tr key={idx} className="border-t hover:bg-indigo-50 text-gray-600">
              <td className="p-3">{entity.name}</td>
              <td className="p-3">{entity.pan}</td>
              <td className="p-3">{entity.admin}</td>
              <td className="p-3">{entity.status}</td>
              <td className="p-3">{entity.createdBy}</td>
              <td className="p-3">{entity.createdOn}</td>
              <td className="p-3">--</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={7} className="text-center p-6 text-gray-500">
              No Data
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)}


        {activeTab === 'entity' && (
          <div>
            <header className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold text-gray-700">All Entities</h1>
              <button className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50" onClick={handleDownload}>Download.xls</button>
            </header>
            <input
              type="text"
              placeholder="Search Entity Name"
              className="border border-gray-300 p-2 rounded w-1/2 mb-4 text-gray-600"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <table className="w-full border-collapse bg-white shadow-md rounded overflow-hidden">
              <thead className="bg-indigo-200 text-indigo-900">
                <tr>
                  <th className="p-3 text-left">Entity Name</th>
                  <th className="p-3 text-left">PAN</th>
                  <th className="p-3 text-left">Entity Admin</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Created By</th>
                  <th className="p-3 text-left">Created On</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntities.length > 0 ? (
                  filteredEntities.map((entity, idx) => (
                    <tr key={idx} className="border-t hover:bg-indigo-50 text-gray-600">
                      <td className="p-3">{entity.name}</td>
                      <td className="p-3">{entity.pan}</td>
                      <td className="p-3">{entity.admin}</td>
                      <td className="p-3">{entity.status}</td>
                      <td className="p-3">{entity.createdBy}</td>
                      <td className="p-3">{entity.createdOn}</td>
                      <td className="p-3">--</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center p-6 text-gray-500">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
