import { useState, useEffect, useLayoutEffect } from "react";

function getNumber() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
}

function useLayoutEffectApp2() {
  const [numbers, setNumbers] = useState([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nums: number[] = getNumbers();
    if (!nums) setNumbers(nums);
  }, []);

  useLayoutEffect(()=>{
    if(numbers.length === 0) {
      return ;
    }
      ref.current?.scrollTop = ref.current?.scrollHeight
  }, [])

  return <div style={{ height: "300px , border : 1px solid blue" }}></div>;
}

export default useLayoutEffectApp2;
