import logo from "@/assets/logo.png";
import { routeConfigs } from "../../config";
import { useState } from "react";
import * as classNames from "classnames";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        className={classNames(
          "p-3 flex justify-center backdrop-blur-sm fixed md:sticky top-0 w-full  h-[100vh] md:h-auto md:visible",
          {
            invisible: !isMenuOpen
          }
        )}
        style={{
          background: "rgba(0, 0, 0, 0.20)"
        }}
      >
        <div
          className={"absolute top-4 left-4 md:invisible"}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <Cross1Icon />
        </div>
        <div
          className={
            "max-w-4xl flex-grow flex flex-col md:flex-row justify-start md:justify-between gap-4"
          }
        >
          <a href={"/"}>
            <img src={logo} className={"w-32 m-auto"} alt={"logo"} />
          </a>
          <div className={"flex items-center gap-4 flex-col md:flex-row"}>
            {routeConfigs.map(routeConfig => {
              return (
                <a href={"/weedpaper"} key={routeConfig.path}>
                  {routeConfig.name}
                </a>
              );
            })}
            <button className={"bg-amber-400 rounded-3xl"}>Launch App</button>
          </div>
        </div>
      </div>
      <div
        className={classNames("fixed top-4 left-4 md:invisible", {
          invisible: isMenuOpen
        })}
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <HamburgerMenuIcon />
      </div>
    </>
  );
};

export default NavBar;
