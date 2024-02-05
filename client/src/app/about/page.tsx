import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-center flex-col mx-3">
      <div className="text-center">hello world</div>

      <Link href={"/"}>
        <button className="p-2 bg-red-300 rounded-lg mt-3 w-full">home</button>
      </Link>
      <Link href={"/about/2"}>
        <button className="p-2 bg-blue-400 rounded-lg mt-3 w-full">
          go to detail
        </button>
      </Link>
    </div>
  );
};

export default About;
