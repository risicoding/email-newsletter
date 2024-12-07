import Form from "@/components/Form";
import Image from "next/image";

const page = () => {
  return (
    <div className=" h-full bg-slate-500 flex flex-col items-center justify-center p-10">
      <div className="flex flex-col w-full gap-4 px-8 py-12 md:py-16 bg-white items-center justify-center rounded-3xl shadow-md shadow-gray-800">

        <div className="size-24 bg-[#4A3AFF] bg-opacity-10  rounded-xl">
        <Image width='140' height='140' src='/email.svg' alt="Email Icon"/>

        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="inline-block text-2xl font-bold">
            Subscribe to our newsletter
          </h1>

        <div className=" text-gray-500 text-center text-[0.76rem]">
          <p>Recieve new articles and resources directly on your inbox.</p>
          <p>Fill your email below to join our email newsletter today.</p>
        </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default page;
