import React from "react";
import { useParams } from "react-router-dom";

const ChallengePage: React.FC = () => {
  const { id } = useParams();

  const questions: { [key: string]: string } = {
    "1": "Question for Challenge 1",
    "2": "Question for Challenge 2",
    "3": "Question for Challenge 3",
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Challenge {id}</h1>
      <p>{questions[id || "1"]}</p>
      <button onClick={() => alert("Submit your answer!")}>Submit</button>
    </div>
  );
};

export default ChallengePage;
