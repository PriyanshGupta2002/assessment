import { tradingInstruments } from "../utils/constants";
import { cn } from "../utils/cn";
import USFlag from "/assets/usa-flag.png";
import BelgiumFlag from "/assets/belgium-flag.png";

const TradingInstrumentList = () => {
  return (
    <div className="w-full mb-6">
      {tradingInstruments.map((instrument) => (
        <div
          key={instrument.id}
          className="flex items-center justify-between px-4 py-4 border-b border-gray-800 last:border-b-0"
        >
          <div className="flex items-start gap-3 shrink-0">
            <div className="relative flex items-center mt-1">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-600 border-[1.5px] border-white">
                <img
                  className="object-cover object-center w-full h-full"
                  src={USFlag}
                  alt="US Flag"
                />
              </div>
              <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-500  mt-4 border-[1.5px] border-white -ml-4">
                <img
                  className="object-cover object-center  w-full h-full"
                  src={BelgiumFlag}
                  alt="Belgium Flag"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 leading-tight">
                {instrument.time}
              </span>
              <span className="text-sm text-white font-medium leading-tight mt-0.5">
                {instrument.currencyPair}
              </span>

              <div className="text-sm flex items-center gap-1 text-green-500 font-medium">
                +{instrument.change}
                <span className="text-gray-400 text-xs">
                  (+{instrument.changePercent}%)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 flex-1 justify-end">
            <div className="flex items-center gap-3">
              {instrument.tradeValues.map((tradeValue, index) => {
                const decimalIndex = tradeValue.value1.indexOf(".");

                const splitIndex =
                  decimalIndex !== -1 && decimalIndex > 0
                    ? decimalIndex - 1
                    : decimalIndex !== -1
                    ? decimalIndex
                    : tradeValue.value1.length;
                const beforeColored =
                  splitIndex > 0
                    ? tradeValue.value1.substring(0, splitIndex)
                    : "";
                const coloredPart = tradeValue.value1.substring(splitIndex);

                const getColorClass = () => {
                  if (tradeValue.degree === "high") return "text-green-500";
                  if (tradeValue.degree === "low") return "text-red-500";
                  return "text-white";
                };

                const label = tradeValue.degree === "low" ? "L" : "H";

                return (
                  <div
                    key={index}
                    className="text-base font-normal flex flex-col gap-1.5 leading-tight"
                  >
                    <span className="font-normal flex items-baseline">
                      {beforeColored && (
                        <span className="text-white">{beforeColored}</span>
                      )}
                      <span className={cn("font-normal ", getColorClass())}>
                        {coloredPart}
                      </span>
                    </span>
                    <span className="text-gray-400 font-normal">
                      {label}:{tradeValue.downValue}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradingInstrumentList;
