
const Programs = () => {
  return (
    <div
      id="Programs"
      className="px-[10%] my-[80px] mx-auto flex flex-col md:flex-row 
      items-center justify-between gap-6"
    >
      {/* Card 1 */}
      <div className="relative flex basis-full md:basis-[48%] lg:basis-[31%] group cursor-pointer">
        <img src={program_1} alt="" className="w-full rounded-lg block" />
        <div
          className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] 
        flex flex-col items-center justify-center text-white rounded-lg 
        opacity-0 pt-[70%] group-hover:opacity-100 group-hover:pt-0 
        transition-all duration-1000 ease-in-out"
        >
          <img src={program_icon_1} alt="" className="w-16 mb-3" />
          <p>Graduation Degree</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative flex basis-full md:basis-[48%] lg:basis-[31%] group cursor-pointer">
        <img src={program_2} alt="" className="w-full rounded-lg block" />
        <div
          className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] 
        flex flex-col items-center justify-center text-white rounded-lg 
        opacity-0 pt-[70%] group-hover:opacity-100 group-hover:pt-0 
        transition-all duration-1000 ease-in-out"
        >
          <img src={program_icon_2} alt="" className="w-16 mb-3" />
          <p>Master Dgree</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative flex basis-full md:basis-[48%] lg:basis-[31%] group cursor-pointer">
        <img src={program_3} alt="" className="w-full rounded-lg block" />
        <div
          className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,15,152,0.3)] 
        flex flex-col items-center justify-center text-white rounded-lg 
        opacity-0 pt-[70%] group-hover:opacity-100 group-hover:pt-0 
        transition-all duration-1000 ease-in-out"
        >
          <img src={program_icon_3} alt="" className="w-16 mb-3" />
          <p>Post Dgree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
