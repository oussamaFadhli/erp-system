import React, { useState, useEffect } from "react";

const TimeComponent: React.FC = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearTimeout(timeout);
  }, [dateTime]);
  return (
    <h1 className="relative left-72 top-2 text-xl font-bold text-gray-600">
      TIME:{dateTime.toDateString()},{dateTime.toLocaleTimeString()}
    </h1>
  );
};

export default TimeComponent;
