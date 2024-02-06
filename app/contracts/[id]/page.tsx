import prisma from "@/prisma/client";
import { Box } from "@radix-ui/themes";

const page = async ({ params }: { params: { id: string } }) => {
  const getContract = async () => {
    const contract = await prisma.contract.findUnique({
      where: { id: parseInt(params.id) },
    });
    return contract;
  };
  const contract = await getContract();
  return (
    <Box className="m-10 border border-gray-800 p-2 rounded-md">
      <h1 className="text-center text-3xl font-semibold">{contract?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contract!.content }} />;
    </Box>
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
