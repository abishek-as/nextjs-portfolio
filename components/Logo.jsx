import Link from "next/link";

const logo = () => {
  const name = "<> Abishek A S </>";
  return (
    <Link href="/">
      {/* <Image src='/logo.svg' width={54} height={54} priority alt="" /> */}
      <div className="font-bold text-4xl text-gray-900 dark:text-white">
        {name}
      </div>
    </Link>
  );
};

export default logo;
