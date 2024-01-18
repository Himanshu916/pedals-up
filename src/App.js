// import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="w-[1200px] mx-auto">
      <header>
        <nav className="flex justify-between items-center">
          <div>
            <img src="" alt="" />
            <h3 className="font-bold">BADNFT</h3>
          </div>
          <ul className="flex gap-4 items-center">
            <li className="font-bold">Home</li>
            <li>Sold Nfts</li>
            <li>Sale Your NFT</li>
            <li>
              <button className="border-2  font-bold border-black rounded-lg px-4 py-2">
                Connect Wallet
              </button>
            </li>
          </ul>
        </nav>
        <h1 className="text-[3rem] mx-auto my-5 text-center font-bold w-[70%]">
          How to save money on taxes with unsellable NFTs
        </h1>
      </header>
      <SectionTwo />

      <SectionThree />
    </div>
  );
}

function SectionTwo() {
  return (
    <div className="flex justify-between items-center">
      <div className="my-2">
        <h2 className=" text-[1.8rem] w-64 font-bold">
          Are you stuck with NFTs that nobody wants to buy ?
        </h2>
        <div className="flex my-2 gap-3">
          <div className="flex ">
            <img className="w-8  rounded-full" src="images/facea.jpg" alt="" />
            <img className="w-8  rounded-full" src="images/faceb.jpg" alt="" />
            <img className="w-8  rounded-full" src="images/facec.jpg" alt="" />
          </div>
          <div>
            <p>Meet our</p>
            <p>Valuable Users</p>
          </div>
        </div>
      </div>
      <div>
        <img className="w-72" src="/images/nft.png" alt="pig" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-[1.5rem] ">20,152</h3>
            <div>
              <p>liquid NFTs</p>
              <p>purchased</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-[1.5rem] ">20,152</h3>
            <div>
              <p>liquid NFTs</p>
              <p>purchased</p>
            </div>
          </div>
        </div>
        <button className="border-2 font-bold border-black rounded-lg px-4 py-2">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

function SectionThree() {
  return (
    <div className="flex gap-4 mt-14">
      <div>
        <img src="images/pikachu.png" alt="" />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-2 px-2 py-2 rounded-full bg-black"></div>
              <div className="text-sm">
                <p>Total Sold NFTs on</p>
                <p>BAD NFT</p>
              </div>
            </div>
            <p className="font-bold text-[1.6rem] ml-6">2123</p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <div className="w-2 px-2 py-2 rounded-full bg-black"></div>
              <div className="text-sm">
                <p>Total Sold NFTs on</p>
                <p>BAD NFT</p>
              </div>
            </div>
            <p className="font-bold text-[1.6rem] ml-6">2123</p>
          </div>
        </div>
        <div className="flex flex-col mt-10 font-bold gap-2 px-5">
          <h2 className="font-bold text-[1.8rem]">BAD NFT</h2>
          <h3 className="font-bold text-[2rem]">
            The Ultimate Solution for NFT Losers
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            officiis itaque impedit pariatur illo porro distinctio qui maxime,
            accusamus temporibus eaque cumque magnam, quos eum blanditiis saepe!
            Excepturi, tempore expedita.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            reiciendis voluptas veritatis vero ullam ipsa laborum quae
            laudantium doloribus, enim consequatur similique dolor non sit
            voluptate alias iste hic optio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
