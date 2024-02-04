import type { Metadata } from "next";
import axios from "axios";
import ContractDropdowns from "./components/ContractDropdowns";
import { Box } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box mt="4">
      <p className="bg-blue-600 mx-auto rounded-md line text-white md:leading-8 text-lg md:text-xl p-2 md:p-3">
        Blackrobe is a cutting-edge platform that utilizes AI to generate legal
        contracts quickly and accurately. Say goodbye to the hassle of drafting
        legal documents and hello to a more efficient and streamlined process
        with Blackrobe.
      </p>
      <ContractDropdowns />
    </Box>
  );
}

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Create personalized contracts with the aid of our AI assistant.",
};
