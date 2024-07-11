import { useState, useEffect, useLayoutEffect } from "react";

function useLayoutEffectApp1() {
  const [count, setCount] = useState(0);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect", count);
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
  }, [count]);

  return;
  <div>
    <span>count: {count}</span>
    <button>Update</button>
  </div>;
}

export default useLayoutEffectApp1;
