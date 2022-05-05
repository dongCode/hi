import { useEffect } from 'react';

const useMount = (fn: () => void) => {
  if (typeof fn !== 'function') {
    console.error(
      `
       useMount: parameter \`fn\` expected to be a function,
       but got "${typeof fn}".
       `,
    );
  }

  useEffect(() => {
    fn?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
