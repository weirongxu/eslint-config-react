import { useEffect, useState } from 'react';

function useValue(v: number) {}

export function App() {
  useValue(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useValue(value);
    window.focus();
    const divs = document.body.querySelectorAll('div');
    setValue(1);
    // React Hook useEffect has a missing dependency (eslint react-hooks/exhaustive-deps)
  }, []);
  return <div>Hello</div>;
}
