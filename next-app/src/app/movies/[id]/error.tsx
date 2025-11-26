'use client';

type Props = {
  error: Error;
};

const ErrorHandler: React.FC<Props> = ({ error }) => {
  return <div>whoops {error.message}</div>;
};

export default ErrorHandler;
