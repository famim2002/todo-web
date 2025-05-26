import React from 'react'

const Home = () => {
  return (
    <section className="px-2 py-14">
      <div className="container flex flex-col gap-20">
        <h1 className=" header-css">todo list</h1>
        <div className="content-box-css">
          <input type="text" placeholder="your text" className="input-css" />
          <div className="flex gap-5">
            <button className="input-btn-css">submit</button>
            {/* <button className="input-btn-css"></button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
