import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = -1;
    setDisplayedText('');
    const intervalId = setInterval(() => {
      if (index < text.length - 1) {
        if (text[index] === undefined) {
            setDisplayedText(text[0]);
        } else {
            setDisplayedText((prev) => prev + text[index]);
        }
        index += 1;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);
  return (
    <div style={{ wordWrap: 'break-word', whiteSpace: 'normal' }}>
      {displayedText}
    </div>
  );
};

export default TypewriterText;