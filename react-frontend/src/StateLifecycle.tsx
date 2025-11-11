import { useEffect, useState } from 'react';

const StateLifecycle: React.FC = () => {
  console.log('Render');
  const [movies, setMovies] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setMovies(['Die Schlümpfe', 'Shrek', 'Toy Story']);
    }, 500);
  }, []);

  // useEffect(() => {
  //   // Mount
  // }, []);
  // useEffect(() => {
  //   // Update
  // }, [movies]);
  // useEffect(() => {
  //   return () => {
  //     // Unmount
  //   };
  // });

  function handleClick() {
    // Überschreiben
    //setState(['Avatar', 'A-Team', 'Avengers']);
    // Aktualisieren
    setMovies((prevState) => {
      const clone = structuredClone(prevState);
      clone.push('Avatar 2');
      return clone;
    });
    console.log('clicked');
  }

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie}>{movie}</div>
      ))}

      <button onClick={handleClick}>add</button>
    </div>
  );
};

export default StateLifecycle;
