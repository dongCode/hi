import { ErrorOrNull } from '@/types';
import { Component } from 'react';
import { TErrorFallback } from '@/types';

// https://github.com/bvaughn/react-error-boundary
class ErrorBoundary extends Component<
  React.PropsWithChildren<{ fallbackRender: TErrorFallback }>,
  { error: ErrorOrNull }
> {
  state = { error: null };

  // 当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}

export default ErrorBoundary;
