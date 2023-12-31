import { useAtomValue } from "jotai";
import { ADOState, esADOState, getAllPrices } from "@src/state";
import "./index.css";
import { commas, formatEtherToNumber } from "@src/utils/number.tsx";
import { Link } from "react-router-dom";
import GenesisPool from "./GenesisPool.tsx";

const Stats = () => {
  const {
    normalizedEthPrice,
    normalizedAUSDPrice,
    normalizedAdoPrice
  } = useAtomValue(getAllPrices);

  const TVL = commas(98765432);

  const totalAUSD = commas(98765432);

  const totalRevenue = commas(98765432);

  const insurance = commas(98765432);

  const ADOStats = useAtomValue(ADOState);

  const esADOStates = useAtomValue(esADOState);

  return (
    <div className={"page-content"}>
      <div className={"flexStack gap-4 items-start md:justify-between mb-4"}>
        <h1>Stats(Technical Preview)</h1>
        <div className={"flex gap-4 md:gap-8 justify-between w-full md:w-fit"}>
          <div className={"stack gap-0 text-right"}>
            <span>$ADO Price</span>
            <span>${normalizedAdoPrice}</span>
          </div>
          <div className={"stack gap-0 text-right"}>
            <span>$aUSD Price</span>
            <span>${normalizedAUSDPrice}</span>
          </div>
          <div className={"stack gap-0 text-right"}>
            <span>$stETH Price</span>
            <span>${normalizedEthPrice}</span>
          </div>
        </div>
      </div>
      <div className={"flexStack justify-between gap-4"}>
        <div className={"stats-card stack card"}>
          <h3>Overview</h3>
          <div className="divider"></div>
          <div className="item">
            <span>Total Value Locked</span>
            <span>${TVL}</span>
          </div>
          <div className="item">
            <span>Total aUSD</span>
            <span>${totalAUSD}</span>
          </div>
          <div className="item">
            <span>Total Revenue</span>
            <span>${totalRevenue}</span>
          </div>
          <div className="item">
            <span>Adscendo Insurance</span>
            <span>${insurance}</span>
          </div>
        </div>
        <div className={"stats-card stack card"}>
          <h3>Revenue</h3>
          <div className="divider"></div>
          <div className="item">
            <span>Revenue claimed for aUSD</span>
            <span>${TVL}</span>
          </div>
          <div className="item">
            <span>Revenue claimed for buy back</span>
            <span>${totalAUSD}</span>
          </div>
          <div className="item">
            <span>Revenue from Mint&Redeem</span>
            <span>${totalRevenue}</span>
          </div>
        </div>
      </div>
      <h1 className={"mt-8 text-left mb-6"}>Tokens(Technical Preview)</h1>
      <div className={"flexStack justify-between gap-4"}>
        <div className={"stats-card stack card"}>
          <h3>ADO</h3>
          <div className="divider"></div>
          <div className="item">
            <span>Price</span>
            <span>${normalizedAdoPrice}</span>
          </div>
          <div className="item">
            <span>Circulating ADO</span>
            <span>{formatEtherToNumber(ADOStats.totalSupply)}</span>
          </div>
          <div className="item">
            <span>Circulating esADO</span>
            <span>{formatEtherToNumber(esADOStates.totalSupply)}</span>
          </div>
          <div className="item">
            <span>Circulating Market Cap</span>
            <span>${insurance}</span>
          </div>
          <div className="item">
            <span>ADO Stack APR</span>
            <span className={"text-amber-400"}>${insurance}</span>
          </div>
          <div className="divider"></div>
          <div className={"flexRow gap-4 mt-10"}>
            <Link to={"/stack"} className={"grow"}>
              <button disabled className={"emphasis"}>
                Stack ADO
              </button>
            </Link>
            <Link to={"/buy"} className={"grow"}>
              <button disabled className={"emphasis"}>
                Buy ADO
              </button>
            </Link>
          </div>
        </div>
        <GenesisPool />
      </div>
    </div>
  );
};
export default Stats;
