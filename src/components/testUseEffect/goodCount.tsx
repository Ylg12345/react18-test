import { useEffect, useState } from "react";

const GoodCount = () => {

    // react18 严格模式下useEffect会执行两次, 清除副作用;

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <div>
      <h1>GoodCount: {count}</h1>
    </div>
  );
};

export default GoodCount;