interface BarProps {
  value?: number;
  className?: string;
  showValue?: string;
  striped?: string;
  animate?: string;
}
const Bar = ({ value, className, showValue, striped, animate }: BarProps) => {

  return (
    <div
      className={`flex flex-col text-center whitespace-nowrap justify-center h-full progress-bar  ${className} ${
        striped ? "stripes" : ""
      }
      ${animate ? "animate-stripes" : ""}
      `}
      style={{ width: `${value}%` }}
    >
      {showValue && (
        <span className="text-[10px] text-white font-bold">{value + "%"}</span>
      )}
    </div>
  );
};
export default Bar;