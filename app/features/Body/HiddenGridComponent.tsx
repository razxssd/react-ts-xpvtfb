import * as React from 'react';
import hidden from '../../../assets/icons/hidden.png';

export const HiddenGridComponent: React.FC = () => {
  return (
    <div className="rx-hidden-grid-container">
      <img src={hidden} alt="Hidden grid" />
    </div>
  );
};
