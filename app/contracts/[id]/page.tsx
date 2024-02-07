import prisma from "@/prisma/client";
import { Box } from "@radix-ui/themes";
import DeleteBtn from "./DeleteBtn";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const getContract = async () => {
    const contract = await prisma.contract.findUnique({
      where: { id: parseInt(params.id) },
    });
    return contract;
  };
  const contract = await getContract();
  if (!contract) notFound();
  return (
    <div className="m-5 md:m-10">
      <DeleteBtn contractId={params.id} />
      <Box className=" border border-gray-800 p-2 my-4 rounded-md">
        <h1 className="text-center text-3xl font-semibold">
          {contract?.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: contract!.content }} />;
      </Box>
    </div>
  );
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const contract = await prisma.contract.findUnique({
    where: { id: parseInt(params.id) },
  });
  return {
    title: contract?.title,
    description: "Details of issue" + contract?.id,
  };
}
export default page;
