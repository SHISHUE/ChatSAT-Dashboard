import Card from "@/components/Card";

export default function Home() {
  return (
    <section className="lg:w-full lg:ml-[45%]">
      <div className=" w-full lg:py-[1.5vw] py-[4vw] md:py-2 lg:px-[2vw]">
        <h1 className="lg:text-[4vw] md:text-[40px] text-[7vw]  font-semibold text-[#f8f8f8] tracking-tight">
          Hey, <span className="text-[#edff86]">Name!</span>
        </h1>
        <h1 className="lg:text-[4vw] text-[5.4vw] md:text-[40px] w-full font-semibold text-[#f8f8f8] tracking-tight">
         {` How's your prep for the `}
          <span className="text-[#edff86]">March SAT</span>
        </h1>
      </div>

      <div className="lg:w-[90%] w-[100%] md:w-[90%] grid grid-cols-2 gap-[5vw] md:gap-3 lg:gap-8 px-[2vw] ">
        <Card topheading={"Last Practice Linear etc 28/02/23 "} title={"Practice"} description={"A description of the above parameter goes here."}/>
        <Card topheading={"Last Practice Linear etc 28/02/23 "} title={"Mock"} description={"A description of the above parameter goes here."}/>
        <Card topheading={"Last Practice Linear etc 28/02/23 "} title={"Exams"} description={"A description of the above parameter goes here."}/>
        <Card topheading={"Last Practice Linear etc 28/02/23 "} title={"Classes"} description={"A description of the above parameter goes here."}/>
        
      </div>
    </section>
  );
}
