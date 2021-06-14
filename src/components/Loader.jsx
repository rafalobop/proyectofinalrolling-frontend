import React from 'react';
import '../css/loader.css';
const Loader = () => {
  return (
    <>
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Loader;
