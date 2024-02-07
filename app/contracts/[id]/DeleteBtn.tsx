"use client";

import Spinner from "@/app/components/Spinner";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteBtn = ({ contractId }: { contractId: string }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  async function deleteContract(contractId: string) {
    try {
      setIsDeleting(true);
      const res = await axios.delete("/api/contract/" + contractId);
      if (res.status == 200) {
        router.push("/contracts");
      } else if (res.status == 500) {
        setError("UnExpected Error Occur");
        setIsDeleting(false);
      }
    } catch (err) {
      console.log(err);
      setIsDeleting(false);
    }
  }
  return (
    <>
      <Button
        variant="soft"
        color="red"
        disabled={isDeleting}
        onClick={() => deleteContract(contractId)}
      >
        Delete Contract {isDeleting && <Spinner />}
      </Button>
      {error && <p className="text-sm">{error}</p>}
    </>
  );
};
export default DeleteBtn;
