import { tradingInstruments } from "../utils/constants";
import { cn } from "../utils/cn";
import USFlag from "/assets/usa-flag.png";
import BelgiumFlag from "/assets/belgium-flag.png";

const TradingInstrumentList = () => {
  return (
    <div className="w-full">
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
                  alt=""
                />
              </div>
              <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-500  mt-4 border-[1.5px] border-white -ml-4">
                <img
                  className="object-cover object-center  w-full h-full"
                  src={BelgiumFlag}
                  alt=""
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

          {/* Right Section: Change, Current Value, Low/High */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            {/* Current Value and Low/High */}
            <div className="text-right flex items-center gap-2">
              <div
                className={cn(
                  "text-lg font-semibold flex flex-col gap-1.5 leading-tight",
                  instrument.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                <span
                  className={cn(
                    "font-medium",
                    instrument.isPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {" "}
                  {instrument.currentValue.toLocaleString()}{" "}
                </span>
                <span className="text-gray-400">
                  L:{instrument.low.toLocaleString()}
                </span>
              </div>

              <div
                className={cn(
                  "text-lg font-semibold flex flex-col gap-1.5 leading-tight",
                  instrument.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                <span
                  className={cn(
                    "font-medium",
                    instrument.isPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  {" "}
                  {instrument.currentValue.toLocaleString()}{" "}
                </span>
                <span className="text-gray-400">
                  H:{instrument.high.toLocaleString()}
                </span>
              </div>

              {/* <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
              
                <span
                  className={cn(
                    "font-medium",
                    instrument.isPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  H:{instrument.high.toLocaleString()}
                </span>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradingInstrumentList;
