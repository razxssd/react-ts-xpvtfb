import * as React from 'react';
import { images_url } from '../../../core';

export const HiddenGridComponent: React.FC = () => {
  return (
    <div className="rx-hidden-grid-container">
      <img src={images_url.hidden} alt="Hidden grid" />
    </div>
  );
};
