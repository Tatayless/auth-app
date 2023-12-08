import React, { Fragment } from 'react';

const LandingPage = () => {
  return (
    <Fragment>
      <div className="flex w-full items-center justify-center">
        <span className="text-5xl flex flex-col gap-4 text-center">
          <span className="body">Welcome to the</span>
          <span className="body-bold text-6xl text-gradient">
            Authentication
          </span>
          <span className="body">App</span>
        </span>
      </div>
    </Fragment>
  );
};

export default LandingPage;
