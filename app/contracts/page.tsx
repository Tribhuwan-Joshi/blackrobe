import prisma from "@/prisma/client";
import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import ContractList from "./ContractList";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import { notFound, redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  const contracts = await prisma.contract.findMany({
    where: {
      userEmail: session?.user?.email!,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  const count = contracts.length;

  return (
    <Container mr="9" className="text-center">
      <h1 className="h2 mb-4 underline  mt-6 ">Saved Contracts - {count}</h1>
      <h2>{session?.user?.name}</h2>
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
