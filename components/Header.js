import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-end mt-6 md:mt-0 md:mx-6 lg:mx-10 xl:mx-14">
      <div>
        <ul className="flex flex-grow justify-evenly md:justify-start md:space-x-8 lg:space-x-12">
          <HeaderItem Icon={HomeIcon} text="Home" />
          <HeaderItem Icon={LightningBoltIcon} text="Trending" />
          <HeaderItem Icon={BadgeCheckIcon} text="Verified" />
          <HeaderItem Icon={CollectionIcon} text="Collections" />
          <HeaderItem Icon={SearchIcon} text="Search" />
          <HeaderItem Icon={UserIcon} text="Account" />
        </ul>
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        alt="Hulu Logotype"
        width={200}
        height={100}
        className="object-contain select-none"
      />
    </header>
  );
};

export default Header;
