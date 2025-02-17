// import React, {Component, useRef, useEffect} from 'react';

// class QRcode extends Component {
//     const 
//     render(){

//         return(
//             <></>
//         )
//     }
// }

// export default QRcode; 

import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

const QRCodeComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const url = "J.Pruthveeraj"; // Replace with your desired URL
        const canvas = canvasRef.current;
        await QRCode.toCanvas(canvas, url, {
          width: 180,
          margin: 2,
        });
      } catch (error) {
        console.error("Failed to generate QR Code", error);
      }
    };

    generateQRCode();
  }, []);

  return (
    <div className="col-1">
      <canvas
        ref={canvasRef}
        className="img-fluid rounded p-3"
        style={{ maxWidth: "180px", maxHeight: "180px" }}
      />
    </div>
  );
};

export default QRCodeComponent;
