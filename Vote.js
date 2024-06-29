import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vote = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = () => {
    axios.get('http://localhost:5000/api/poll')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => console.error('Error fetching candidates:', error));
  };

  const handleVote = (candidate) => {
    axios.post('http://localhost:5000/api/vote', { candidateId: candidate.id })
      .then(() => {
        fetchCandidates(); // Fetch the updated poll results
      })
      .catch(error => console.error('Error voting:', error));
  };

  return (
    <div className="container mt-5">
      <h1 className='mb-4'>Candidates</h1>
      <div className="row">
        {candidates.map((candidate, index) => (
          <div key={index} className="col">
            <div className="card shadow mt-3 mb-3" style={{ width: "20rem" }}>
              <img src={candidate.candidateImage} className="card-img-top" alt={candidate.candidateName} height="200px" />
              <div className="card-body bg-white">
                <h3 className="card-title text-center">{candidate.candidateName}</h3>
                <h4 className="card-text text-center">{candidate.candidateAge}</h4>
                <h5 className="card-text text-center">{candidate.candidatePlace}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <button 
                    className="btn btn-primary px-5 mx-5" style={{ width: '75%' }} 
                    onClick={() => handleVote(candidate)}
                  >
                    VOTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vote;


