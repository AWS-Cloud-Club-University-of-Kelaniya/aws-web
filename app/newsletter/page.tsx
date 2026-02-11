"use client";

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">
        AWS Cloud Club Newsletter
      </h1>

      {/* PDF Viewer */}
      <iframe
        src="/Newsletter_Issue1_February2026.pdf"
        className="w-full md:w-3/4 h-[80vh] border rounded shadow"
        title="AWS Cloud Club Newsletter"
      ></iframe>

      {/* Optional download button */}
      <a
        href="/Newsletter_Issue1_February2026.pdf"
        download
        className="mt-4 px-6 py-2 bg-gradient-to-r from-[#FF9900] to-[#FFB444] text-[#232F3E] rounded hover:opacity-90 transition"
      >
        Download PDF
      </a>
    </div>
  );
}
