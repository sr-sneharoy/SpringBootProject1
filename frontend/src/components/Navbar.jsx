const Navbar = () => {
  return (
    <div className="bg-slate-600 flex  items-center justify-between px-10 h-10 pb-1.5">
      <h1 className="text-green-500 text-xl font-semibold">EM Services</h1>
      <div className="text-white flex gap-4">
        <a className="hover:text-green-500 font-semibold" href="/">
          Home
        </a>
        <a className="hover:text-green-500 font-semibold" href="/">
          Profile
        </a>
        <a className="hover:text-green-500 font-semibold" href="/">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Navbar;