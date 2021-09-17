import { Box } from '@material-ui/core';
import './ErrorBoundary.css';
const ErrorBoundaryContainer = ({ children, error }) => {
  if (error) {
    return (
      <Box className="errorContent" my={4}>
        <div>{error}</div>
      </Box>
    );
  }
  return children;
};

export default ErrorBoundaryContainer;
