import Image from "next/image";

const content = [
  {
    id: 1,
    title: "Setup and connect your wallet.",
    description:"Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.<br>You can also use the app without a wallet, but you won't be able to mint or buy Nerkos.",
    link: "#",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/setup.png" alt="setup and connect wallet" layout="fill" objectFit="contain" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Create your own digital artwork",
    description:
      "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artwork's & digital artwork.<br>Starting the production on the procedurally generated planets and the smart contract for minting.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/create.png" alt="create your own artwork" layout="fill" objectFit="contain" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Choose a platform to sell your NFT",
    description:
      "Earn ETH and BIT for all your NFTs that you sell on our marketplace.<br>You can also buy NFTs from other creators and support them.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image src="/choose.png" alt="choose a platform to sell" layout="fill" objectFit="contain" />
      </div>
    ),
  },
];

export default content;
