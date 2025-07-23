import { useState } from 'react';
import './App.css'
import { CircleStep } from './components/CircleStep'

function App() {
  const stepList = [1, 2, 3, 4, 5];
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextButtonClick = () => {
    setCurrentStep(prev => Math.min(prev + 1, stepList.length));
  };

  const handlePrevButtonClick = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Calculate progress bar width as a percentage
  const progressPercent = ((currentStep - 1) / (stepList.length - 1)) * 100;

  return (
    <div className="container">
      <div className="progress-container">
        <div
          className="progress"
          style={{ width: `${progressPercent}%` }}
        ></div>
        {stepList.map((step, idx) => (
          <CircleStep
            key={step}
            step={step}
            isActive={idx < currentStep}
          />
        ))}
      </div>
      <div className="content">
        {stepList.map((step, idx) => (
          <div key={step} className={`step-content ${idx + 1 === currentStep ? "active" : ""}`}>
            Content for Step {step}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, soluta.</p>
          </div>
        ))}
      </div>
      <div className="btn-nav">
        <button
          type="button"
          className="btn"
          onClick={handlePrevButtonClick}
          disabled={currentStep === 1}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn"
          onClick={handleNextButtonClick}
          disabled={currentStep === stepList.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;