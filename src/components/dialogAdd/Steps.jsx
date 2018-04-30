import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ description, completed, needLine }) => (
  <div className="step-container">
    {
      needLine &&
      <div className={`line ${(completed) ? 'completed' : ''}`} />
    }
    <div className={`step ${(completed) ? 'completed' : ''}`}>
      <div className="indicator" />
      <div className="content-description">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

Step.propTypes = {
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  needLine: PropTypes.bool.isRequired,
};

const Steps = ({ list, stepHistory }) => (
  <div className="steps-wrapper">
    {
      list.map((item, i) => (
        <Step
          key={item.id}
          {...item}
          completed={stepHistory.filter(sh => sh.stepId === item.id).length > 0}
          needLine={i > 0}
        />))
    }
  </div>
);

Steps.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  stepHistory: PropTypes.arrayOf(PropTypes.shape({
    stepId: PropTypes.string,
  })).isRequired,
};

export default Steps;
