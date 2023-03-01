import Image from "next/image";
function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className=""
        />
      </div>
      {/* m */}
      <div></div>
      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
