import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Movie = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group col-span-1 transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50 cursor-pointer">
      <Image
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
        }
        layout="responsive"
        height={360}
        width={640}
        className="rounded-t-sm"
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl group-hover:font-bold text-white transition-all duration-100 ease-in-out">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 transition duration-100 ease-in-out">
          {movie.release_date || movie.first_air_date} •{"  "}
          <ThumbUpIcon className="h-4 ml-1" /> {" " + movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Movie;
