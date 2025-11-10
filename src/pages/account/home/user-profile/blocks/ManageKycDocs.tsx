import React, { useState } from "react";

const ManageKycDocs = () => {
  const [aadhaar, setAadhaar] = useState<File | null>(null);
  const [pan, setPan] = useState<File | null>(null);
  const [gst, setGst] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("KYC Docs Submitted:", { aadhaar, pan, gst });
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-semibold mb-4">Manage KYC Documents</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          Aadhaar Card
          <input type="file" onChange={(e) => setAadhaar(e.target.files?.[0] || null)} />
        </label>

        <label className="flex flex-col gap-2">
          PAN Card
          <input type="file" onChange={(e) => setPan(e.target.files?.[0] || null)} />
        </label>

        <label className="flex flex-col gap-2">
          GST Certificate (Optional)
          <input type="file" onChange={(e) => setGst(e.target.files?.[0] || null)} />
        </label>

        <button type="submit" className="btn btn-primary mt-3 w-fit">
          Submit Documents
        </button>
      </form>
    </div>
  );
};

export { ManageKycDocs };
