import React, { Fragment } from 'react';

type LoginStatusProps = {
  feedback: number;
};

const LoginStatus: React.FC<LoginStatusProps> = (props: {
  feedback: number;
}) => {
  return (
    <Fragment>
      <div className="flex flex-row w-full items-center justify-center text-2xl gap-2">
        <span className="body">You are</span>
        {props.feedback === 0 ? (
          <span className="body-bold text-error-gradient">logged out!</span>
        ) : (
          <span className="body-bold text-success-gradient">logged in!</span>
        )}
      </div>
    </Fragment>
  );
};

export default LoginStatus;
