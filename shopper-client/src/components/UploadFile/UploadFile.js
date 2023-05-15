import "../UploadFile/UploadFile.css"
import React, { useState } from 'react';
import Papa from 'papaparse'; 

const UploadFile = () => {
  const [data, setData] = useState([]); 

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true, 
      complete: (results) => {
        setData(results.data); 
      },
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} accept=".csv" />
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default UploadFile;
