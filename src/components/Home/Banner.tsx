const Banner = () => {
  return (
    <div className="h-[160px] bg-slate-100">
      <div className="relative">
        <img src="/sample.webp" className="h-[160px] w-full object-cover" />
        <div className="absolute bottom-3 left-3 ">
          <p className="  text-white text-lg text-bold">배너 텍스트</p>
          <p className=" text-white text-sm">배너 텍스트 세부 내용</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
