import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import dayjs from "dayjs";

function NavBar() {
  return (
    <nav className="main-container mt-6 mb-4 p-4 border grid grid-cols-5 gap-2">
      <div className="col-span-1 text-center">
        <h2 className="text-4xl font-bold">{dayjs().format("YY.MM.DD")}</h2>
        <p className="text-lg">{true ? "오늘은 경기가 없어요!" : ""}</p>
      </div>
      <div className="col-span-4 border">BANNER AREA</div>
    </nav>
  );
}

export default NavBar;
