import React, { useState } from "react";

// https://api.qrserver.com/v1/create-qr-code/?size=150×150&data=QR Code Generator
export const QrCodeGenerator = () => {
  const [Img, setImg] = useState("");
  const [Loading, setLoading] = useState(false);
  const [QrData, setQrData] = useState("");
  const [QrSize, setQrSize] = useState("");

  async function generateQRCode() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${QrSize}×${QrSize}&data=${encodeURIComponent(
        QrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR Code:", error);
      setImg("");
      alert("Error generating QR Code. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function downloadQRCode() {
    fetch(Img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading QR Code:", error);
      });
  }

  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      {Loading && <p>Please Wait...</p>}
      {Img && <img className="qr-code-image" src={Img} />}

      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR Code :{" "}
        </label>
        <input
          type="text"
          value={QrData}
          id="dataInput"
          placeholder="Enter Data for QR Code"
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image Size :{" "}
        </label>
        <input
          type="text"
          value={QrSize}
          id="sizeInput"
          placeholder="Enter Image Size"
          onChange={(e) => setQrSize(e.target.value)}
        />

        <button
          className="generate-button"
          disabled={Loading}
          onClick={generateQRCode}
        >
          Generate
        </button>
        <button className="download-button" onClick={downloadQRCode}>
          Download
        </button>
      </div>
      <p className="footer">
        Designed By{" "}
        <a href="https://github.com/alagarsamy-m" target="_blank">
          Alagarsamy M{" "}
        </a>
        .
      </p>
    </div>
  );
};
