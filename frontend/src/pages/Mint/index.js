import { useState } from "react";
import { FileIcon } from "@radix-ui/react-icons";
import Papa from "papaparse";

export default function Mint() {
  const [info, setInfo] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState("");
  const [fileName, setFileName] = useState("");
  const [csvFile, setCsvFile] = useState("");
  const [csvFileName, setCsvFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleCsvChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCsvFile(file);
      setCsvFileName(file.name);
    }
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "info":
        setInfo(event.target.value);
        break;
      case "tag":
        setTag(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleProcessCsv = () => {
    return new Promise((resolve, reject) => {
      if (!csvFile) {
        reject(new Error("No CSV file selected"));
        return;
      }

      Papa.parse(csvFile, {
        complete: (results) => {
          const jsonData = results.data.map((row) => ({
            ...row,
            image: fileName,
          }));
          resolve(jsonData);
        },
        error: (error) => {
          reject(error);
        },
        header: true,
      });
    });
  };

  const handleAddImageToJson = async (fileName) => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    console.log("Form submitted with the following details:");
    console.log("Image file:", fileName);
    console.log("CSV file:", csvFile ? csvFile.name : "No file selected");
    console.log("Tag:", tag);
    console.log("Community-specific information:", info);

    try {
      const processedCsv = await handleProcessCsv();
      console.log("Processed CSV data:", processedCsv);
      // You can add more processing logic here
    } catch (error) {
      console.error("Error processing CSV:", error);
    }

    setLoading(false);
  };

  return (
    <div className="">
      <div
        className="bg-[#17123d] relative brightness-150 bg-blend-hue"
        style={{ backgroundImage: "url('cover.png')" }}
      >
        {/* Hero */}
        <div className="px-[50px] py-[50px]  text-center sm:px-[100px]">
          <div className="grid ">
            <h1 className="text-[45px] pt-[20px] text-[30px] sm:text-[40px] font-extrabold">
               Empowering Communities, <br /> Celebrating Achievements!
            </h1>

            <p className="py-4 text-[#b2b0c6] text-[10px] sm:text-[13px] ">
              NFT Minting Platform for Community Certificates, Awards, and
              Tickets and more
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-semibold	text-[36px] text-center py-[100px]">Mint</h2>

      <div className="w-full max-w-4xl mx-auto items-center justify-center flex flex-col pb-5">
        <form
          className="shadow-md rounded-lg px-8 pb-[50px] flex flex-col w-full"
          onSubmit={handleSubmit}
        >
          {/* Upload image */}
          <div className="pb-5 appearance-none w-full">
            <label
              className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
              htmlFor="address"
            >
              Upload Image
            </label>
            <label
              htmlFor="image-upload"
              className="block w-full px-4 py-2 bg-white text-[#27289d] rounded-lg shadow-lg  cursor-pointer hover:bg-green-50  transition-all duration-300 ease-in-out text-right"
            >
              <span className="text-sm text-[#27289d] font-semibold">
                {fileName || "Select file"}
              </span>
              <input
                id="image-upload"
                type="file"
                className="hidden border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
                accept="image/*"
                placeholder="e.g., certificate design, event ticket, or award"
                onChange={handleFileChange}
              />
            </label>
            {fileName && (
              <p className="mt-2 text-sm text-gray-500 text-center">
                Selected file: {fileName}
              </p>
            )}
            <label
              className="block text-[#b4b5be] sm:text-[13px] pb-2 font-semibold leading-snug"
              htmlFor="address"
            >
              e.g., certificate design, event ticket, or award
            </label>
          </div>

          {/* Upload CSV */}
          <div className="pb-5 appearance-none w-full">
            <label
              className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
              htmlFor="address"
            >
              Details in a CSV file
            </label>
            <label
              htmlFor="csv-upload"
              className="flex items-center justify-between px-4 py-2 bg-white text-[#27289d] rounded-lg shadow-lg border border-[#27289d] cursor-pointer hover:bg-green-50 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center">
                <FileIcon className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">CSV File</span>
              </div>
              <span className="text-sm font-semibold">
                {csvFileName || "Select file"}
              </span>
              <input
                id="csv-upload"
                type="file"
                className="hidden"
                accept=".csv"
                onChange={handleCsvChange}
              />
            </label>
            {csvFileName && (
              <p className="mt-2 text-sm text-gray-600 text-center">
                Selected file: {csvFileName}
              </p>
            )}
            <label
              className="block text-[#b4b5be] sm:text-[13px] pb-2 font-semibold leading-snug"
              htmlFor="address"
            >
              This file should contain the full names of the recipients (first &
              last name)and their wallet addresses
            </label>
          </div>

          <div className="pb-5 appearance-none w-full">
            <label
              className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
              htmlFor="tag"
            >
              Tag
            </label>
            <input
              className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              id="tag"
              type="text"
              name="tag"
              value={tag}
              onChange={handleChange}
              placeholder="Enter one tag in form of a acronym"
            />
          </div>

          {/* Community information */}
          <div className="pb-5 appearance-none w-full">
            <label
              className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
              htmlFor="info"
            >
              Community-specific information
            </label>
            <input
              className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
              id="info"
              type="text"
              name="info"
              value={info}
              onChange={handleChange}
              placeholder="e.g., course name, award type, etc."
            />
          </div>

          <div className="bg-[#8080d7] px-5 py-2.5 rounded-full justify-center items-center gap-2 inline-flex">
            <button
              type="submit"
              className="text-white cursor-pointer w-full py-2 text-lg font-semibold"
              disabled={loading}
            >
              {loading ? "Minting..pls wait" : "Mint"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
