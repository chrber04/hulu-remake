const HeaderItem = ({ Icon, text }) => {
  return (
    <li className="group flex flex-col justify-center items-center space-y-2 cursor-pointer w-12">
      <Icon className="inline-flex h-8 md:h-9 group-hover:animate-bounce group-hover:text-green-500 text-gray-100" />
      <p className="opacity-0 group-hover:opacity-95 group-hover:text-green-500 uppercase transition duration-200 ease-in-out font-medium tracking-widest text-gray-100 select-none">
        {text}
      </p>
    </li>
  );
};

export default HeaderItem;
