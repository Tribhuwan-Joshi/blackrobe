import { Box, Button, Flex } from "@radix-ui/themes";

const ContractDropdowns = () => {
  return (
    <Flex my="8" direction="column" gap="8" className="mx-auto">
      <div>
        <label
          htmlFor="contractType"
          className="text-sm block font-semibold text-gray-600 mb-1"
        >
          Type of Contract <span className="text-red-500">*</span>
        </label>
        <select id="contractType" className="w-[50%]">
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
        <select id="country" className="w-[50%]">
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
        <select id="law" className="w-[50%]">
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
        <select id="resolution" className="w-[50%]">
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
        <select id="confidentiality" className="w-[50%]">
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
        <select id="indemnification" className="w-[50%]">
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
        <select id="termination" className="w-[50%]">
          <option value="">Select termination conditions</option>
          <option value="Breach of contract">Breach of contract</option>
          <option value="Mutual agreement">Mutual agreement</option>
          <option value="Bankruptcy">Bankruptcy</option>
        </select>
      </div>
      <Button variant="classic" className="w-[200px]">
        Create Contract
      </Button>
    </Flex>
  );
};

export default ContractDropdowns;
