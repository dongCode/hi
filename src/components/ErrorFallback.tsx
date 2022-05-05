import { TErrorFallback } from '@/types';
import { Typography } from 'bellejs';

const ErrorFallback: TErrorFallback = ({ error }) => {
  console.error(error, 'error');
  return (
    <div className="g-center g-vh100">
      <Typography.Text type={'danger'}>页面崩溃了 :(</Typography.Text>
    </div>
  );
};

export default ErrorFallback;
