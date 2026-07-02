function Button({ text, onClick, variant }) {
  let bgClass = "bg-[#eae3dc] border-[#b4a597] text-[#434a59] text-2xl";

  if (variant === "blue") {
    bgClass = "bg-[#647198] border-[#414e73] text-white text-xl uppercase";
  } else if (variant === "red") {
    bgClass = "bg-[#d03f2f] border-[#93261a] text-white text-xl";
  }
  const isLarge = text === "RESET" || text === "=";

  return (
    <button
      onClick={() => onClick(text)}
      className={`
        ${isLarge ? "col-span-2 py-3" : "p-3"} 
        ${bgClass} 
        border-b-4 rounded-lg font-bold 
        hover:brightness-110 active:scale-95 
        transition duration-100
      `}
    >
      {text.toLowerCase()}
    </button>
  );
}

export default Button;
