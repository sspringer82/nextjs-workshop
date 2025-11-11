// const App: React.FC = () => {
//   // const movies = ['Die Schlümpfe', 'Shrek', 'Toy Story'];
//   const movies = [];

import List from './List';

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

function createContent(movies) {
  let content = <div>Keine Lieblingsfilme vorhanden.</div>;

  if (movies.length > 0) {
    content = movies.map((movie) => <div>{movie}</div>);
  }

  return content;
}

const App: React.FC = () => {
  return <List />;
};

export default App;
