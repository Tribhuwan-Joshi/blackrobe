import prisma from "@/prisma/client";
import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import ContractList from "./ContractList";

const page = async () => {
  const contracts = await prisma.contract.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  const count = await prisma.contract.count();

  return (
    <Container mr="9" className="text-center">
      <h1 className="h2 mb-4 underline  mt-6 ">Saved Contracts - {count}</h1>

      <ContractList contracts={contracts} />
    </Container>
  );
};
export default page;

export const metadata: Metadata = {
  title: "Blackrobe - Contract list",
  description: "View a summary of Contract",
};

export const dynamic = "force-dynamic";
