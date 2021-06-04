import React, { useState, useEffect } from 'react';

const PasswordStrength = ({ counter }) => {
  const[width, setWidth] = useState(0);
  const[color, setColor] = useState('');

  const setPasswordStrength = () => ({
    width: `${width}%`,
    background: `${color}`,
    height: "10px"
  });

  useEffect(() => {
    switch(counter) {
      case 0:
        setWidth(0);
        break;
      case 1:
        setWidth(33);
        setColor('red');
        break;
      case 2:
        setWidth(66);
        setColor('orange');
        break;
      case 3:
        setWidth(100);
        setColor('yellow');
        break;
      case 4:
        setWidth(100);
        setColor('yellow');
        break;
      default:
        setWidth(0);
    }
  }, [counter])

  return (
    <div style={{ height: "10px"}}>
      <div style={setPasswordStrength()}>

      </div>
    </div>
  )
};

export default PasswordStrength;