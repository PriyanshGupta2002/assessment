import { tradingInstruments } from "../utils/constants";
import { cn } from "../utils/cn";

const TradingInstrumentList = () => {
  return (
    <div className="w-full">
      {tradingInstruments.map((instrument) => (
        <div
          key={instrument.id}
          className="flex items-center justify-between px-4 py-4 border-b border-gray-800 last:border-b-0"
        >
          {/* Left Section: Time, Flags, and Currency Pair */}
          <div className="flex items-start gap-3 flex-shrink-0">
            {/* Placeholder for overlapping flags */}
            <div className="relative flex items-center mt-1">
              <div className="w-6 h-6 rounded-full bg-gray-600 border-2 border-gray-700"></div>
              <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-gray-700 -ml-2"></div>
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
            <div className="text-right">
              <div
                className={cn(
                  "text-lg font-semibold leading-tight",
                  instrument.isPositive ? "text-green-500" : "text-red-500"
                )}
              >
                {instrument.currentValue.toLocaleString()}
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                <span className="text-gray-400">
                  L:{instrument.low.toLocaleString()}
                </span>
                <span
                  className={cn(
                    "font-medium",
                    instrument.isPositive ? "text-green-500" : "text-red-500"
                  )}
                >
                  H:{instrument.high.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradingInstrumentList;
