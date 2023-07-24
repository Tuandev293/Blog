const App = () => {
  return (
    <div className="mx-auto">
      <div className="bg-[#D2D6DB] min-h-[900px]">
        <div className="bg-[#EFF0F3] px-24 flex justify-between mb-44 min-h-[86px]">
          <img src="/public/Logo.png" alt="" className="max-h-[45px] my-auto" />
          <div className="my-auto">
            <ul className="flex items-center justify-center gap-x-12">
              <li>Home</li>
              <li>Category</li>
              <li>About Me</li>
            </ul>
          </div>
          <div className="my-auto">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold">
              Log in
            </button>
          </div>
        </div>
        <div className="flex justify-between px-24">
          <div className="max-w-[664px]">
            <h1 className="text-[64px] max-w-[617px] font-bold">
              Hi, i'm Dasteen Front end dev
            </h1>
            <p className="text-[#9A9494] text-xl mb-[30px]">
              On this blog I share tips and tricks, frameworks, projects,
              tutorials, etc Make sure you subscribe to get the latest updates
            </p>
            <div className="w-full flex gap-5">
              <input
                type="text"
                placeholder="Enter your email here..."
                className="pr-[200px] pl-6 py-[21px] rounded-lg"
              />
              <button className="bg-blue-600 px-[23px] py-[20px] rounded-lg text-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="">
            <img src="/public/Banner.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#D2D6DB] min-h-[500px] px-[94px] py-[67px]">
        <div className="flex justify-between mb-[50px]">
          <span className="text-2xl font-bold">Browse the category</span>
          <span className="text-xl font-bold">See All Category</span>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="pl-[30px] pt-[65px] pb-[95px] pr-[130px] bg-white rounded-lg">
              <img src="/public/Frame.png" alt="" className="mb-[30px]" />
              <h1>CSS</h1>
            </div>
            <div className="pl-[30px] pt-[65px] pb-[95px] pr-[130px] bg-white rounded-lg">
              <img src="/public/Frame.png" alt="" className="mb-[30px]" />
              <h1>CSS</h1>
            </div>
            <div className="pl-[30px] pt-[65px] pb-[95px] pr-[130px] bg-blue-600 rounded-lg">
              <img src="/public/Frame.png" alt="" className="mb-[30px]" />
              <h1>CSS</h1>
            </div>
            <div className="pl-[30px] pt-[65px] pb-[95px] pr-[130px] bg-white rounded-lg">
              <img src="/public/Frame.png" alt="" className="mb-[30px]" />
              <h1>CSS</h1>
            </div>
            <div className="pl-[30px] pt-[65px] pb-[95px] pr-[130px] bg-white rounded-lg">
              <img src="/public/Frame.png" alt="" className="mb-[30px]" />
              <h1>CSS</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-[94px]">
        <div className="">
          <div className="flex justify-between">
            <span className="font-bold text-2xl">Featured Article</span>
            <span className="font-bold text-xl">See All Article</span>
          </div>
          <div className="pt-[30px]">
            <div className="bg-white flex">
              <div className="p-5 bg-[#ffffff]">
                <div className="mb-[80px]">
                  <img src="/public/Article.png" alt="" className="mb-[25px]" />
                  <h1 className="text-xl font-bold text-left">
                    Fundamental of javascript
                  </h1>
                </div>
                <div className="flex gap-x-[15px] items-center">
                  <img src="/public/Ellipse.png" alt="" />
                  <div className="">
                    <h1 className="font-semibold text-base">Dasteen</h1>
                    <p className="text-sm">Jan 10, 2022 | 3 min read</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#ffffff]">
                <div className="mb-[80px]">
                  <img src="/public/Article.png" alt="" className="mb-[25px]" />
                  <h1 className="text-xl font-bold text-left">
                    Fundamental of javascript
                  </h1>
                </div>
                <div className="flex gap-x-[15px] items-center">
                  <img src="/public/Ellipse.png" alt="" />
                  <div className="">
                    <h1 className="font-semibold text-base">Dasteen</h1>
                    <p className="text-sm">Jan 10, 2022 | 3 min read</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#ffffff]">
                <div className="mb-[80px]">
                  <img src="/public/Article.png" alt="" className="mb-[25px]" />
                  <h1 className="text-xl font-bold text-left">
                    Fundamental of javascript
                  </h1>
                </div>
                <div className="flex gap-x-[15px] items-center">
                  <img src="/public/Ellipse.png" alt="" />
                  <div className="">
                    <h1 className="font-semibold text-base">Dasteen</h1>
                    <p className="text-sm">Jan 10, 2022 | 3 min read</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#ffffff]">
                <div className="mb-[80px]">
                  <img src="/public/Article.png" alt="" className="mb-[25px]" />
                  <h1 className="text-xl font-bold text-left">
                    Fundamental of javascript
                  </h1>
                </div>
                <div className="flex gap-x-[15px] items-center">
                  <img src="/public/Ellipse.png" alt="" />
                  <div className="">
                    <h1 className="font-semibold text-base">Dasteen</h1>
                    <p className="text-sm">Jan 10, 2022 | 3 min read</p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-[#ffffff]">
                <div className="mb-[80px]">
                  <img src="/public/Article.png" alt="" className="mb-[25px]" />
                  <h1 className="text-xl font-bold text-left">
                    Fundamental of javascript
                  </h1>
                </div>
                <div className="flex gap-x-[15px] items-center">
                  <img src="/public/Ellipse.png" alt="" />
                  <div className="">
                    <h1 className="font-semibold text-base">Dasteen</h1>
                    <p className="text-sm">Jan 10, 2022 | 3 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
