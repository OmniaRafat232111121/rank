'use client'
import React, { useState } from 'react';
import Container from './Container';
import { toast } from 'react-toastify';

const RankTable = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
 

  const tableData = [
    { query: 'Sample Query 1', sourceUrl: 'URL 1', rankWindow: 1, rankMobile: 2, date: '2023-10-25' },
    { query: 'Sample Query 2', sourceUrl: 'URL 2', rankWindow: 3, rankMobile: 4, date: '2023-10-26' },
    { query: 'Sample Query 3', sourceUrl: 'URL 1', rankWindow: 1, rankMobile: 2, date: '2023-10-25' },
    { query: 'Sample Query 4', sourceUrl: 'URL 2', rankWindow: 3, rankMobile: 4, date: '2023-10-26' },  { query: 'Sample Query 1', sourceUrl: 'URL 1', rankWindow: 1, rankMobile: 2, date: '2023-10-25' },
    { query: 'Sample Query 5', sourceUrl: 'URL 2', rankWindow: 3, rankMobile: 4, date: '2023-10-26' },  { query: 'Sample Query 1', sourceUrl: 'URL 1', rankWindow: 1, rankMobile: 2, date: '2023-10-25' },
    { query: 'Sample Query 6', sourceUrl: 'URL 2', rankWindow: 3, rankMobile: 4, date: '2023-10-26' },  { query: 'Sample Query 1', sourceUrl: 'URL 1', rankWindow: 1, rankMobile: 2, date: '2023-10-25' },
   
  ];
  const handleRowSelection = (index: number) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filteredData = tableData.filter((row) =>
      row.query.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(filteredData);
    toast.success('search is founded')
    setSearchQuery('')
  
  };
  
  return (
    <div>
    <div className="mb-3 mx-auto text-left p-10">
      <form onSubmit={handleSearchSubmit}> {/* Form for search query */}
        <div className="md:w-[900px]  w-[500px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 md:w-full w-[500px]">
            <input
              type="text"
              placeholder="Enter Query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit" 
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
      <Container>
        <div className="mb-4 md:p-10 p-0">
          <table className="min-w-full divide-y divide-gray-200
          ">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Selection
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Query
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Source URL
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Rank Window
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Rank Mobile
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Update</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Delete</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => handleRowSelection(index)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.query}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.sourceUrl}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.rankWindow}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.rankMobile}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{row.date}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <button className="bg-blue-600 text-white rounded-md p-2
                    hover:bg-white hover:text-blue-600 ">Update</button>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <button className="bg-red-600 text-white
                    rounded-md p-2
                     hover:bg-white hover:text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </Container>
    </div>
  );
};

export default RankTable;
