import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import LoginStatus from '../components/LoginStatus';

const HomePage = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="flex flex-col w-screen gap-8 my-12">
        <div className="flex flex-col justify-self-start">
          <LandingPage />
        </div>
        <div className="flex flex-col justify-self-end">
          <LoginStatus feedback={0} />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
