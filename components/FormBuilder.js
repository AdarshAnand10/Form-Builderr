import React, { useState } from 'react';

const FormBuilder = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    setQuestions([...questions, { type, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <button onClick={() => addQuestion('categorize')}>Add Categorize Question</button>
      <button onClick={() => addQuestion('cloze')}>Add Cloze Question</button>
      <button onClick={() => addQuestion('comprehension')}>Add Comprehension Question</button>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <h2>{question.type} Question</h2>
            {/* Render question-specific UI here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
