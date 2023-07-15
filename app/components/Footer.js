// TODO: add daily circle
const Footer = () => {

    return (
      <footer className="bg-[#F6F6F6] py-6 px-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left">
            <h4 className="text-4xl font-bold mb-9">Daily</h4>
            <ul>
              <li className="mb-7 text-lg">Product</li>
              <li className="mb-7 text-lg">Who We Are?</li>
              <li className="mb-7 text-lg">More</li>
            </ul>
          </div>
          <div className="md:w-1/2 text-right">
            <div className="mb-7 text-lg">+371 28149374</div>
            <div className="mb-7 text-lg">info@usedaily.io</div>
            <div className="mb-7 text-lg">Svetes iela 24 - 4,<br></br> Jelgava, Latvia</div>
          </div>
        </div>
        <div className="text-center mt-6 mb-10">
          <p className="text-sm">2023 @ Latvia Energetics Ltd. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  