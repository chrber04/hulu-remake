import requests from "../utils/requests";
import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative mb-24 mt-6">
      <div className="flex px-4 md:mx-2 lg:mx-6 xl:mx-8 whitespace-nowrap space-x-8 sm:space-x-20 md:space-x-24 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <Link href={`/?genre=${key}`} key={key}>
              <h2
                onClick={() => router.push(`/?genre=${key}`)}
                className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white text-xl sm:text-2xl active:text-green-500 select-none"
              >
                {title}
              </h2>
            </Link>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;
