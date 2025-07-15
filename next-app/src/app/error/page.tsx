import { NextPage } from 'next';
import ErrorComponent from './ErrorComponent';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorPage: NextPage = () => {
  return (
    <div>
      Works
      <ErrorBoundary fallback={<div>An error occurred!</div>}>
        <ErrorComponent />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorPage;
