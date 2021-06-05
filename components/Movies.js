import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mx-10 lg:mx-14">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
