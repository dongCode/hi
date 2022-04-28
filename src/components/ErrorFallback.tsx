import { TErrorFallback } from '@/types';
import { Typography } from 'bellejs';

const ErrorFallback: TErrorFallback = ({ error }) => (
  <div className="g-center g-vh100">
    <Typography.Text type={'danger'}>
      {error?.message}
    </Typography.Text>
  </div>
);

export default ErrorFallback;
