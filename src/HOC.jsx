import React from 'react';
const withExtraInfo = (OriginalComponent) => {
  return () => (
    <div>
      <OriginalComponent/>
      <p>Modified ....</p>
    </div>
  );
};
const SimpleComponent = () => <div>Original Component</div>;
const EnhancedComponent = withExtraInfo(SimpleComponent);
export default EnhancedComponent;