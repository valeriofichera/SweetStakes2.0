import { useEffect, useState } from 'react';

import transactions from '../transactions/Events';

interface StyleSequence {
  color: string;
  delay: number;
}

function Status() {
  const [sequenceIndex, setSequenceIndex] = useState<number>(0);
  const sequence: StyleSequence[] = [
    { color: 'red', delay: 1000 },
    { color: 'blue', delay: 2000 },
    { color: 'green', delay: 3000 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSequenceIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }, sequence[sequenceIndex].delay);

    return () => clearTimeout(timer);
  }, [sequenceIndex, sequence]);

  const currentStyle: React.CSSProperties = {
    color: sequence[sequenceIndex].color,
  };

  return (
    <div style={currentStyle}>
      <h1>My Component</h1>
      <h2>{transactions[0].title}</h2> {/* Display the title of transaction1 */}
    </div>
  );
}

export default Status;