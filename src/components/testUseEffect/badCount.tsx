import { useEffect, useState } from "react";

const BadCount = () => {


  // react18 严格模式下useEffect会执行两次, 未清除副作用;

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>BadCount: {count}</h1>
    </div>
  );
};

export default BadCount;
