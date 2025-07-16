import { getAllMovies } from '@/api/movies.api';
import { NextPage } from 'next';
import Link from 'next/link';
import { H1 } from './style';
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import DeleteForm from './DeleteForm';

const MoviesPage: NextPage = async () => {
  try {
    const movies = await getAllMovies();

    let content;

    if (movies.length === 0) {
      content = <div>No movies found</div>;
    } else {
      content = (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Year</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {movies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>
                  <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell>
                  <DeleteForm id={movie.id} />
                  {/* <DeleteButton id={movie.id} /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }

    return (
      <div>
        <H1>Movie list</H1>
        {content}
      </div>
    );
  } catch {
    return <div>An error occured</div>;
  }
};

export default MoviesPage;
