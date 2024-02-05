import Link from "next/link";

const About = () => {
  return (
    <div className="flex justify-center flex-col mx-3">
      <div className="text-center">hello world</div>

      <Link href={"/"}>
        <button className="p-2 bg-red-300 rounded-lg mt-3 w-full">home</button>
      </Link>
    </div>
  );
};

export default About;
