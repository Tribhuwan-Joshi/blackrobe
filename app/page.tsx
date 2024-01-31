import type { Metadata } from "next";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />     

    </>
  );
}

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Create personalized contracts with the aid of our AI assistant.",
};
