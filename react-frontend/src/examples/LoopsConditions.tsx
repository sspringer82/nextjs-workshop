// const App: React.FC = () => {
//   // const movies = ['Die Schlümpfe', 'Shrek', 'Toy Story'];
//   const movies = [];

import type { ReactNode } from 'react';
import type { Movie } from '../types/Movie';

//   if (movies.length === 0) {
//     return <div>Keine Lieblingsfilme vorhanden.</div>;
//   }

//   return (
//     <div>
//       <h1>Meine Lieblingsfilme</h1>
//       {movies.map((movie) => (
//         <div>{movie}</div>
//       ))}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   // const movies = ['Die Schlümpfe', 'Shrek', 'Toy Story'];
//   const movies = [];

//   let content = <div>Keine Lieblingsfilme vorhanden.</div>;

//   if (movies.length > 0) {
//     content = movies.map((movie) => <div>{movie}</div>);
//   }

//   return (
//     <div>
//       <h1>Meine Lieblingsfilme</h1>
//       {content}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   // const movies = ['Die Schlümpfe', 'Shrek', 'Toy Story'];
//   const movies = [];

//   return (
//     <div>
//       <h1>Meine Lieblingsfilme</h1>
//       {movies.length === 0 ? (
//         <div>Keine Lieblingsfilme vorhanden.</div>
//       ) : (
//         movies.map((movie) => <div>{movie}</div>)
//       )}
//     </div>
//   );
// };

// const App: React.FC = () => {
//   // const movies = ['Die Schlümpfe', 'Shrek', 'Toy Story'];
//   const movies = [];

//   return (
//     <div>
//       <h1>Meine Lieblingsfilme</h1>

//       {movies.length === 0 && <div>Keine Lieblingsfilme vorhanden.</div>}
//       {movies.length > 0 && movies.map((movie) => <div>{movie}</div>)}
//     </div>
//   );
// };

function createContent(movies: Movie[]): React.ReactNode {
  let content: ReactNode = <div>Keine Lieblingsfilme vorhanden.</div>;

  if (movies.length > 0) {
    content = movies.map((movie, index) => (
      <div key={index}>{movie.title}</div>
    ));
  }

  return content;
}

const App: React.FC = () => {
  const movies: Movie[] = [
    { id: 1, title: 'Die Schlümpfe', year: 2011 },
    { id: 2, title: 'Shrek', year: 2001 },
    { id: 3, title: 'Toy Story', year: 1995 },
  ];

  return (
    <div>
      <h1>Meine Lieblingsfilme</h1>
      {createContent(movies)}
    </div>
  );
};

export default App;
