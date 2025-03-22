import React, { useRef, useEffect } from 'react';

const DivColo = () => {
  const butonRef = useRef(null);

  // Log after component mounts
  useEffect(() => {
    console.log('useEffect - Div Ref:', butonRef.current);
  }, []);

  function handleToggle() {
if(butonRef.current.style.display=="block"){
      butonRef.current.style.display="none"
}else{
   butonRef.current.style.display="block"
   butonRef.current.style.backgroundColor="blue"
}
  }

  return (
    <>
      <div
        ref={butonRef}
        style={{
          backgroundColor: 'red',
          width: '50px',
          height: '50px',
          border: '1px solid',
        }}
      ></div>
      <button onClick={handleToggle}>Toggle</button>
    </>
  );
};

export default DivColo;
