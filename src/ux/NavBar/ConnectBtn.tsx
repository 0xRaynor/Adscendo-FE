import { Link } from "react-router-dom";
import { appURL, isLandingPage } from "@src/config.ts";
import { ConnectKitButton } from "connectkit";

const ConnectBtn = () => {
  const btnClassName = "bg-amber-600 rounded-2xl";

  if (isLandingPage) {
    return (
      <Link to={appURL} target={"_blank"}>
        <button className={btnClassName}>Launch App</button>
      </Link>
    );
  }

  return <ConnectKitButton />;
};

export default ConnectBtn;
