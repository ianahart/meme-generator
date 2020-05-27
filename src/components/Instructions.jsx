import React from 'react';

import '../css/Instructions.css';

const Instructions = () => {
  return (
    <div>
      <p>
        Screenshot on Mac:{' '}
        <span className="instruction">Shift + Command + 4</span>
      </p>
      <p>
        Screenshot on Windows:{' '}
        <span className="instruction">Windows + Shift + S</span>
      </p>
    </div>
  );
};

export default Instructions;
