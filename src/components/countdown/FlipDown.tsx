import React, { useState, useEffect, useRef } from 'react';

type ClockValues = {
  d: number; // Days
  h: number; // Hours
  m: number; // Minutes
  s: number; // Seconds
};

type FlipDownProps = {
  epoch: number; // Unix timestamp for the countdown end
};

const FlipDown: React.FC<FlipDownProps> = ({ epoch }) => {
  const [clockValues, setClockValues] = useState<ClockValues>({ d: 0, h: 0, m: 0, s: 0 });
  const [flipped, setFlipped] = useState<string[]>([]); // Store flipped rotor leaf values
  const countdownRef = useRef<NodeJS.Timeout>();
  const previousClockValues = useRef<ClockValues>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime() / 1000;
      let diff = epoch - now <= 0 ? 0 : epoch - now;
      const d = Math.floor(diff / 86400);
      diff -= d * 86400;
      const h = Math.floor(diff / 3600);
      diff -= h * 3600;
      const m = Math.floor(diff / 60);
      diff -= m * 60;
      const s = Math.floor(diff);

      setClockValues({ d, h, m, s });
    };

    countdownRef.current = setInterval(tick, 1000);

    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, [epoch]);

  useEffect(() => {
    const newFlipped: any = [];

    // Check each clock value for changes and update flipped status
    ['d', 'h', 'm', 's'].forEach((key, idx) => {
      const newValue = (clockValues as any)[key].toString().padStart(2, '0');
      const oldValue = (previousClockValues.current as any)[key].toString().padStart(2, '0');

      for (let i = 0; i < newValue.length; i++) {
        if (newValue[i] !== oldValue[i]) {
          const flipKey = `${key}-${i}`; // Unique key for each rotor leaf
          newFlipped.push(flipKey);

          setTimeout(() => {
            setFlipped((currentFlipped) => currentFlipped.filter((f) => f !== flipKey));
          }, 500);
        }
      }
    });

    setFlipped(newFlipped);
    previousClockValues.current = { ...clockValues };
  }, [clockValues]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const createRotorLeaf = (value: string, key: string) => (
    <div className={`rotor-leaf ${flipped.includes(key) ? 'flipped' : ''}`}>
      <figure className="rotor-leaf-rear">{value}</figure>
      <figure className="rotor-leaf-front">
        {flipped.includes(key) ? (parseInt(value) === 9 ? 0 : parseInt(value) + 1) : value}
      </figure>
    </div>
  );

  const createRotor = (value: string, keyPrefix: string, idx: number) => (
    <div className="rotor">
      {createRotorLeaf(value, `${keyPrefix}-${idx}`)}
      <div className="rotor-top">{value}</div>
      <div className="rotor-bottom">
        {flipped.includes(`${keyPrefix}-${idx}`) ? (parseInt(value) === 9 ? 0 : parseInt(value) + 1) : value}
      </div>
    </div>
  );

  const renderRotors = (timeValue: string, keyPrefix: string) => {
    return Array.from(timeValue).map((val, idx) => createRotor(val, keyPrefix, idx));
  };

  return (
    <div className="flipdown">
      <div className="rotor-group">
        <div className="rotor-group-heading" data-before="Days"></div>
        {renderRotors(pad(previousClockValues.current.d), 'd')}
      </div>
      <div className="rotor-group">
        <div className="rotor-group-heading" data-before="Hours"></div>
        {renderRotors(pad(previousClockValues.current.h), 'h')}
      </div>
      <div className="rotor-group">
        <div className="rotor-group-heading" data-before="Minutes"></div>
        {renderRotors(pad(previousClockValues.current.m), 'm')}
      </div>
      <div className="rotor-group">
        <div className="rotor-group-heading" data-before="Seconds"></div>
        {renderRotors(pad(previousClockValues.current.s), 's')}
      </div>
    </div>
  );
};

export default FlipDown;
