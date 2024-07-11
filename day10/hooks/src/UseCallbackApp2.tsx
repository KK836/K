import { useEffect, useState, useCallback } from "react";

function useCallbackApp2() {

  const [ Size, SetSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback
  const createBoxStyle = useCallback (()=>{

    backgroundcolorL: "pink"
    width `${size}px ,`
    height : {$size}px ,

   });


  return (
    <div>
      <input style={ backgoround: isDark ? "black" : "white"}}/>
      <br />
      <button>Change Theme</button>
    
    <Box createBoxStyle={createBoxStyle}></Box>
    </div>

  );
}

export default useCallbackApp2;
