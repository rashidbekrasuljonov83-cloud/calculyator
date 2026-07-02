import Button from "./button";
import { useState } from "react";
function Calculyator() {
  const [display, setDisplay] = useState("0");
  const buttons = [
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { text: "DEL", variant: "blue" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "+" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "-" },
    { text: "." },
    { text: "0" },
    { text: "/" },
    { text: "x" },
    { text: "RESET", variant: "blue" },
    { text: "=", variant: "red" },
  ];
  const handleButtonClick = (val) => {
    let current = display === "399,981" ? "" : display;

    if (val === "RESET") {
      setDisplay("0");
    } else if (val === "DEL") {
      setDisplay(current.length <= 1 ? "0" : current.slice(0, -1));
    } else if (val === "=") {
      try {
        const tozalanganKod = current.replace(/x/g, "*");
        const natija = new Function(`return ${tozalanganKod}`)();
        setDisplay(String(natija));
      } catch {
        setDisplay("Xato");
      }
    } else {
      setDisplay(current === "0" ? val : current + val);
    }
  };

  return (
    <div className="h-screen bg-amber-700 flex items-center justify-center  p-4 ">
      <div className="w-full max-w-md space-y-5">
        <div className="flex justify-between items-end text-white px-1">
          <span className="text-3xl font-bold tracking-wide">calc</span>
          <div className="flex items-center space-x-6 text-xs uppercase tracking-widest font-bold">
            <span className="mb-1 text-[10px]">theme</span>
            <div>
              <div className="flex justify-between text-[10px] px-2 mb-1">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className="w-14 h-6 bg-[#242c44] rounded-full p-1 flex items-center">
                <div className="w-4 h-4 bg-[#d03f2f] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#e39023] text-white text-right text-4xl font-bold py-6 px-6 rounded-xl tracking-wide">
          {display}
        </div>

        <div className="bg-[#e39023] p-6 rounded-xl shadow-2xl grid grid-cols-4 gap-4">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              text={btn.text}
              variant={btn.variant}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculyator;
