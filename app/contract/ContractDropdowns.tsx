"use client";
import { useState } from "react";
import { Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import Spinner from "../components/Spinner";

const ContractDropdowns = () => {
  const [contractType, setContractType] = useState("");
  const [country, setCountry] = useState("");
  const [law, setLaw] = useState("");
  const [resolution, setResolution] = useState("");
  const [confidentiality, setConfidentiality] = useState("");
  const [indemnification, setIndemnification] = useState("");
  const [termination, setTermination] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateContract = () => {
    // Call the API with the selected values
    // Add API call here
  };

  return (
    <Flex my="8" direction="column" gap="8" className="mx-auto">
      <div>
        <label
          htmlFor="contractType"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Type of Contract <span className="text-red-500">*</span>
        </label>
        <select
          id="contractType"
          className="w-[50%] rounded-md"
          value={contractType}
          onChange={(e) => setContractType(e.target.value)}
        >
          <option value="">Select type of contract</option>
          <option value="Employment Contract">Rent Agreement</option>
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
          className="w-[50%]"
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
          htmlFor="law"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Choice of Law <span className="text-red-500">*</span>
        </label>
        <select
          id="law"
          className="w-[50%]"
          value={law}
          onChange={(e) => setLaw(e.target.value)}
        >
          <option value="">Select governing law</option>
          <option value="New York">New York</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
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
          className="w-[50%]"
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
          className="w-[50%]"
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
          className="w-[50%]"
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
          className="w-[50%]"
          value={termination}
          onChange={(e) => setTermination(e.target.value)}
        >
          <option value="">Select termination conditions</option>
          <option value="Breach of contract">Breach of contract</option>
          <option value="Mutual agreement">Mutual agreement</option>
          <option value="Bankruptcy">Bankruptcy</option>
        </select>
      </div>
      <Button
        variant="classic"
        className="w-[200px] border"
        style={{ cursor: "pointer" }}
        onClick={handleCreateContract}
        disabled={isSubmitting}
      >
        Create Contract {isSubmitting && <Spinner />}
      </Button>
    </Flex>
  );
};

export default ContractDropdowns;


