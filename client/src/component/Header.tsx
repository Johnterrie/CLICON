import React from "react";

const Header = () => {
  return (
    <section className="h-[65vh] w-4/5 mt-3 flex flex-col justify-between">
      <div className="h-[50vh] flex justify-between">
        <div className="w-[57vw] h-full bg-grey-main">
          <p>THE BEST PLACE TO PLAY</p>
          <h1>Xbox Consoles</h1>
          <p>
            Save up to 50% on select Xbox games. Get 3 months of PC Game Pass
            for $2 USD.
          </p>
          <button>SHOP NOW </button>

          <div>...</div>
        </div>

        <div className="h-full w-[22vw] flex flex-col justify-between">
          <div className="w-full h-[24vh]  bg-black ">hello</div>
          <div className="w-full h-[24.5vh] bg-grey-main">hello</div>
        </div>
      </div>

      <div className="border border-grey-800 w-full h-[13vh]">hello</div>
    </section>
  );
};

export default Header;
