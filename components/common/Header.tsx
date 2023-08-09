import dayjs from "dayjs";

type GameType = {
  type: "PL" | "KBO";
  date: string;
  home: string;
  away: string;
  stadium: string;
};

function NavBar() {
  // TODO PL / KBO 경기 일정 크롤링
  const todayGames: GameType[] = [
    {
      type: "KBO",
      date: "2023/08/10 18:00",
      home: "SSG 랜더스",
      away: "NC 다이노스",
      stadium: "SSG 랜더스필드",
    },
    {
      type: "PL",
      date: "2023/08/10 23:30",
      home: "ARSENAL",
      away: "MANCHESTER CITY",
      stadium: "WEMBLEY STADIUM",
    },
  ];
  const isNoGame = false;

  return (
    <nav className="main-container mt-6 mb-4 p-4 border gap-2 flex ">
      <div className="w-[30%] text-center">
        <h2 className="text-4xl font-bold mb-2">
          {dayjs().format("YY.MM.DD")}
        </h2>
        {isNoGame ? (
          <p className="text-lg">"오늘은 경기가 없어요!"</p>
        ) : (
          <div className="flex flex-col gap-2">
            {todayGames.map((t, index) => (
              <GameCard {...t} key={index} />
            ))}
          </div>
        )}
      </div>
      <div className="flex-grow border">BANNER AREA</div>
    </nav>
  );
}

function GameCard({ type, date, home, away, stadium }: GameType) {
  return (
    <div
      className="flex flex-col gap-0 justify-center w-fit m-auto border-l-2 pl-2"
      style={{ borderColor: type === "PL" ? "#5e03fc" : "#0356fc" }}
    >
      <div className="flex text-[11px] justify-between leading-none">
        <p>{dayjs(date).format("YY.MM.DD HH:mm")}</p>
        <p>at. {stadium}</p>
      </div>
      <div className="flex gap-2 font-bold justify-center leading-none">
        {home} <span className="text-gray-400 text-xs">VS</span> {away}
      </div>
    </div>
  );
}

export default NavBar;
