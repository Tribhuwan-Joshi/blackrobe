"use client";
import { useState } from "react";
import { Button, Flex, TextArea } from "@radix-ui/themes";
import axios from "axios";
import Spinner from "../components/Spinner";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ContractDropdowns = () => {
  const [contractType, setContractType] = useState("");
  const [country, setCountry] = useState("");
  const [resolution, setResolution] = useState("");
  const [confidentiality, setConfidentiality] = useState("");
  const [indemnification, setIndemnification] = useState("");
  const [termination, setTermination] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log("session is ", session);
  const handleCreateContract = async () => {
    setError("");
    if (
      !(
        contractType &&
        country &&
        resolution &&
        confidentiality &&
        indemnification &&
        termination
      )
    ) {
      setError("Please Provide required Information");

      return;
    }
    try {
      setIsSubmitting(true);
      const contract = await axios.post("/api/contract", {
        contractType: contractType,
        country: country,
        resolution: resolution,
        confidentiality: confidentiality,
        indemnification: indemnification,
        termination: termination,
        additionalInfo: additionalInfo,
      });
      console.log("contract is ", contract);
      router.push("/contracts/" + contract.data.id);
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      console.log("error");
    }
  };

  return (
    <Flex
      my="8"
      direction="column"
      gap="8"
      justify="center"
      className="mx-auto w-[80%]"
    >
      <div>
        <label
          htmlFor="contractType"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Type of Contract <span className="text-red-500">*</span>
        </label>
        <select
          id="contractType"
          className="w-[90%] md:w-[60%] rounded-md"
          value={contractType}
          onChange={(e) => setContractType(e.target.value)}
        >
          <option value="">Select type of contract</option>
          <option value="Rent Agreement">Rent Agreement</option>
          <option value="Employment Contract">Employment Contract</option>
          <option value="Service Agreement">Service Agreement</option>
          <option value="Lease Agreement">Lease Agreement</option>
          <option value="Non-Disclosure Agreement">
            Non-Disclosure Agreement
          </option>
          <option value="Purchase Agreement">Purchase Agreement</option>
          <option value="Fixed Price Contract">Fixed Price Contract</option>
          <option value="Time and Materials Contract">
            Time and Materials Contract
          </option>
          <option value="Purchase Order">Purchase Order</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="country"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Country <span className="text-red-500">*</span>
        </label>
        <select
          id="country"
          className="w-[90%] md:w-[60%]"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select country</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
          <option value="Spain">Spain</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="resolution"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Dispute Resolution <span className="text-red-500">*</span>
        </label>
        <select
          id="resolution"
          className="w-[90%] md:w-[60%]"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
        >
          <option value="">Select dispute resolution method</option>
          <option value="Mediation">Mediation</option>
          <option value="Arbitration">Arbitration</option>
          <option value="Litigation">Litigation</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="confidentiality"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Confidentiality <span className="text-red-500">*</span>
        </label>
        <select
          id="confidentiality"
          className="w-[90%] md:w-[60%]"
          value={confidentiality}
          onChange={(e) => setConfidentiality(e.target.value)}
        >
          <option value="">Include confidentiality clause?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="indemnification"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Indemnification <span className="text-red-500">*</span>
        </label>
        <select
          id="indemnification"
          className="w-[90%] md:w-[60%]"
          value={indemnification}
          onChange={(e) => setIndemnification(e.target.value)}
        >
          <option value="">Include indemnification provision?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="termination"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Termination <span className="text-red-500">*</span>
        </label>
        <select
          id="termination"
          className="w-[90%] md:w-[60%]"
          value={termination}
          onChange={(e) => setTermination(e.target.value)}
        >
          <option value="">Select termination conditions</option>
          <option value="Breach of contract">Breach of contract</option>
          <option value="Mutual agreement">Mutual agreement</option>
          <option value="Bankruptcy">Bankruptcy</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="info"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Additional Information
        </label>
        <TextArea
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          size="3"
          id="info"
          className="w-[90%] md:w-[60%] border border-gray-700 text-2xl"
          placeholder="Information regarding the contract"
        />
      </div>
      {session ? (
        <div>
          {error && <p className="text-red-700 text-base">{error}</p>}
          <Button
            variant="classic"
            className="w-[200px] border"
            style={{ cursor: "pointer" }}
            onClick={handleCreateContract}
            disabled={isSubmitting}
          >
            Create Contract {isSubmitting && <Spinner />}
          </Button>
        </div>
      ) : (
        <Button
          variant="classic"
          style={{ cursor: "pointer" }}
          className="w-[200px] border"
          onClick={() => signIn("google")}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default ContractDropdowns;
