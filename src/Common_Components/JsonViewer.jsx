import React from 'react';
const JsonViewer = ({ data }) => {
  // Function to determine the color of the value
  const getColor = (value) => {
    if (value === null) return 'green';
    if (typeof value === 'string') return 'red';
    if (typeof value === 'number' || typeof value === 'boolean') return 'blue';
    return 'black';
  };
  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '1rem', borderRadius: '5px' }} className='overflow-x-auto'>
        <div>
            <span>&#10100;</span>
                {Object.entries(data).map(([key, value]) => (
                    <>
                    <div key={key} className='px-4 '>
                    <span style={{ color: 'purple' }}>"{key}"</span>:&nbsp;
                    <span style={{ color: getColor(value) }}>
                        {value === null ? 'null' : JSON.stringify(value)}
                    </span>,
                    </div>
                    </>
                ))}
            <span>&#10101;</span>
        </div>

    </div>
  );
};
export default JsonViewer;