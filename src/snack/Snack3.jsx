// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse

// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.
// Cosa deve fare?
// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:

// import useCustomPointer from "./useCustomPointer";
// ​
// function App() {
//   const customPointer = useCustomPointer("🔥");
// ​
//   return (
//     <div>
//       <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
//       {customPointer}
//     </div>
//   );
// }
// ​
// export default App;
// ​
import { useState, useEffect } from 'react';

function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y - 20, 
        left: position.x - 20, 
        pointerEvents: 'none', 
        zIndex: 9999, 
        transform: 'translate(-50%, -50%)', 
      }}
    >
      {content}
    </div>
  );
}

export default useCustomPointer;