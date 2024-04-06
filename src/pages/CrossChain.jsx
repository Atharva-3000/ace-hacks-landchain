import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import "./cross.css";
const config = {
  showHamburgerMenu: false,
  env: "mainnet"
};

function CrossChain() {
  return (
    <div className=" bg-gradient flex flex-col gap-5 min-w-full justify-center items-center ">
      <h1 className="mt-10 text-6xl font-bold text-black tracking-wide">
        CrossKit
      </h1>
      <p className="font-sans text-2xl text-slate-400">Transfer from one chain to another in few clicks</p>
      <div className="rounded-2xl lg:w-1/2">
      <WormholeConnect config={config} />
      </div>
    </div>
  );
}

export default CrossChain;
