import React from "react";

type CircleStepProps = {
  step: number;
  isActive: boolean;
};

export const CircleStep = React.forwardRef<HTMLDivElement, CircleStepProps>(
  ({ step, isActive }, ref) => {
    return (
      <div className={`circle ${isActive ? "active" : ""}`} ref={ref}>
        {step}
      </div>
    );
  }
);