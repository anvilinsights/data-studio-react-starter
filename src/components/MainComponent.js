import React from 'react';
import MyTable from './MyTable';

const MainComponent = props => {
  if (!props.fields || !props.tables || !props.tables.DEFAULT) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <MyTable />
    </React.Fragment>
  );
};

export default MainComponent;
