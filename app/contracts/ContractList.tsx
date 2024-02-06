"use client";

import { Contract } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import Link from "next/link";

const ContractList = ({ contracts }: { contracts: Contract[] }) => {
  return (
    <Flex gap="2" direction="column">
      {contracts.map((c) => (
        <Link
          key={c.id}
          className="hover:underline decoration-blue-600 w-fit text-blue-800 block"
          href={`/contracts/${c.id}`}
        >
          {c.id}. {c.title}{" "}
        </Link>
      ))}
    </Flex>
  );
};
export default ContractList;
