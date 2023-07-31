import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider.tsx";
import stETHLogo from "@assets/steth.svg";

type EarnBlockProps = {
  title: string;
  stakeTooltip?: string;
  multiplier?: boolean;
  multiplierTooltip?: string;
  buttons?: {
    text: string;
    link: string;
  }[];
};

const EarnBlock: React.FC<EarnBlockProps> = ({
  title,
  stakeTooltip,
  multiplier,
  multiplierTooltip,
  buttons
}) => {
  return (
    <div
      className={
        "flex flex-col gap-4 justify-between w-full p-4 md:pl-20 card first:rounded-t-xl last:rounded-b-xl relative"
      }
    >
      <img
        src={stETHLogo}
        alt=""
        className={
          "w-[48px] h-[48px] absolute left-4 top-4 border-2 border-neutral-900 rounded-full p-2 invisible md:visible"
        }
      />
      <div
        className={
          "flex flex-col md:flex-row justify-between md:items-center gap-4"
        }
      >
        <div className={"flex flex-row gap-4 text-left items-center"}>
          <div>
            <h3>{title}</h3>
          </div>

          {buttons &&
            buttons.map((button, index) => {
              return (
                <Link to={button.link} key={index}>
                  <button className={"hollow rounded-3xl"}>
                    {button.text}
                  </button>
                </Link>
              );
            })}
        </div>
        <div className={"flex flex-row gap-4 text-left"}>
          <div>
            {multiplier ? (
              <>
                <p>1x APR: 15%</p>
                <p className={"text-amber-400"}>4x APR: 60%</p>
              </>
            ) : (
              <>
                <p>APR:</p>
                <p>15.00%</p>
              </>
            )}
          </div>
          <div>
            <p>TVL:</p>
            <p>$20,000,000</p>
          </div>
          <div>
            <p>Staked:</p>
            <p>$100,000</p>
          </div>
        </div>
      </div>
      <div className={"flex flex-row justify-between items-center gap-4"}>
        <h3 className={"w-full text-left md:mr-8"}>Earned: $10,000</h3>
        <div className={"w-full text-left"}>
          {multiplier ? (
            <h3>
              Boost
              <Tooltip.Provider delayDuration={0}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <InfoCircledIcon
                      className={"inline-block ml-1"}
                      style={{
                        width: "0.9em"
                      }}
                    />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      sideOffset={5}
                      className={
                        "bg-black text-white p-2 rounded-md border-amber-400 border-[1px] text-[0.8em]"
                      }
                    >
                      {multiplierTooltip}
                      <Tooltip.Arrow className="fill-amber-400" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </h3>
          ) : null}
        </div>
        <button className="w-1/2 hollow">Withdraw</button>
      </div>
      <div
        className={
          "flex flex-col md:flex-row justify-between items-center gap-4"
        }
      >
        <div
          className={
            "flex flex-row w-full justify-start items-center gap-4 md:mr-8"
          }
        >
          <div className={"text-left whitespace-nowrap"}>
            <p>ADO Earned: 5,000</p>
            <p>esADO Earned: 5,000</p>
          </div>
          <button className={"emphasis md:grow-0 grow px-8"}>Claim</button>
        </div>
        <div className={"w-full text-left"}>
          {multiplier ? (
            <Slider maxTime={"3 months"} maxMultiplier={4} />
          ) : null}
        </div>
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className="emphasis w-1/2 whitespace-nowrap">
                Stake
                {stakeTooltip && (
                  <InfoCircledIcon className={"inline-block ml-1"} />
                )}
              </button>
            </Tooltip.Trigger>
            {stakeTooltip && (
              <Tooltip.Portal>
                <Tooltip.Content
                  sideOffset={5}
                  className={
                    "bg-black text-white p-2 rounded-md border-amber-400 border-[1px] text-[0.8em]"
                  }
                >
                  {stakeTooltip}
                  <Tooltip.Arrow className="fill-amber-400" />
                </Tooltip.Content>
              </Tooltip.Portal>
            )}
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  );
};

const earnConfigs: EarnBlockProps[] = [
  {
    title: "ETH or stETH",
    stakeTooltip: "Enjoy yield while keeping your stETH"
  },
  {
    title: "aUSD",
    buttons: [
      {
        text: "Mint aUSD",
        link: "/mint-redeem"
      },
      {
        text: "Buy aUSD",
        link: "/mint-redeem"
      }
    ]
  },
  {
    title: "aUSD-USDC",
    multiplier: true,
    multiplierTooltip:
      "The longer you select, the greater your reward multiplier",
    buttons: [
      {
        text: "Add Liquidity",
        link: "/mint-redeem"
      }
    ]
  },
  {
    title: "ADO-ETH",
    multiplier: true,
    multiplierTooltip:
      "The longer you select, the greater your reward multiplier",
    buttons: [
      {
        text: "Add Liquidity",
        link: "/mint-redeem"
      }
    ]
  },
  {
    title: "Stake esADO",
    multiplier: true,
    multiplierTooltip: "The longer you select, the greater your reward",
    buttons: [
      {
        text: "ADO > esADO",
        link: "/mint-redeem"
      },
      {
        text: "Buy ADO",
        link: "/mint-redeem"
      }
    ]
  }
];

const Earn: React.FC = () => {
  return (
    <div className={"page-content"}>
      <div className={"my-8"}></div>
      <h1 className={"text-left"}>TVL: $35,000,000</h1>
      <div className={"my-8"}></div>
      <div>
        {earnConfigs.map((config, index) => {
          return <EarnBlock key={index} {...config} />;
        })}
      </div>
    </div>
  );
};

export default Earn;
