import "./preloader.css";

const Preloader = () => {
  return (
    <div className="preloader h-[100vh] w-full fixed  flex flex-col justify-center items-center">
      <div className="flex gap-1">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <p className="text mt-[1.5rem] text-3xl font-medium">LOADING...</p>
    </div>
  );
};

export default Preloader;
