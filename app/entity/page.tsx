'use client';
import React from 'react';

type Entity = {
  name: string;
  pan: string;
  admin: string;
  status: string;
  createdBy: string;
  createdOn: string;
};

type Props = {
  entities?: Entity[];
};

const EntityView = ({ entities = [] }: Props) => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans p-8">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4">All Entities</h1>

      <table className="w-full border-collapse bg-white shadow-md rounded overflow-hidden">
        <thead className="bg-indigo-200 text-indigo-900">
          <tr>
            <th className="p-3 text-left">Entity Name</th>
            <th className="p-3 text-left">PAN</th>
            <th className="p-3 text-left">Entity Admin</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Created By</th>
            <th className="p-3 text-left">Created On</th>
          </tr>
        </thead>
        <tbody>
          {entities.length > 0 ? (
            entities.map((entity, idx) => (
              <tr key={idx} className="border-t hover:bg-indigo-50">
                <td className="p-3 text-gray-600">{entity.name}</td>
                <td className="p-3 text-gray-600">{entity.pan}</td>
                <td className="p-3 text-gray-600">{entity.admin}</td>
                <td className="p-3 text-gray-600">{entity.status}</td>
                <td className="p-3 text-gray-600">{entity.createdBy}</td>
                <td className="p-3 text-gray-600">{entity.createdOn}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center p-6 text-gray-500">
                No entities found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntityView;
