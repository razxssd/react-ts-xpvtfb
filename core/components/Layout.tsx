import * as React from 'react';

interface ILayout {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="rx-layout">
      <div className="rx-container">{children}</div>
    </div>
  );
};
