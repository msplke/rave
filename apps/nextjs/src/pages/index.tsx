import type { NextPage } from "next";
import { UserButton } from "@clerk/nextjs";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex h-screen flex-col items-center">
        <UserButton afterSignOutUrl="/" />
      </main>
    </>
  );
};

export default Home;
