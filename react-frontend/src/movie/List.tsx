import ListItem from './ListItem';
import Filter from './Filter';
import Form from './Form';
import useList from './useList';

const List: React.FC = () => {
  const {
    filteredFilms,
    handleDelete,
    handleCreate,
    error,
    inputRef,
    setFilter,
  } = useList();

  let content = <div>Keine Datensätze vorhanden</div>;

  if (filteredFilms.length > 0) {
    content = (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredFilms.map((movie) => (
              <ListItem key={movie.id} movie={movie} onDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <h1 className="headline">Movie List ({filteredFilms.length})</h1>

      <Form onCreate={handleCreate} />

      {error && (
        <div style={{ border: '5px solid red', color: 'hotpink' }}>
          {error.message}
        </div>
      )}
      <Filter inputRef={inputRef} setFilter={setFilter} />
      {content}
    </>
  );
};

export default List;
