import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = () => {
    axios.get('http://localhost:5000/api/results')
      .then(response => {
        console.log('Fetched results:', response.data); // Add logging
        setResults(response.data);
      })
      .catch(error => {
        console.error('Error fetching results:', error);
        setError('Error fetching results. Please try again later.');
      });
  };

  return (
    <div className="container mt-5">
      <h1>Results</h1>
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {results.map((candidate, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">{candidate.candidateName}</h3>
                <p className="card-text text-center">{candidate.votes} Votes</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
