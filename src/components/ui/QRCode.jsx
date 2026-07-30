import { useEffect, useRef } from "react";
import QRCode from "qrcode";

// Renders a real, scannable QR code client-side (no backend/API call).
export default function QRCodeBlock({ value, size = 128 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 1,
      color: { dark: "#0a4fb3", light: "#ffffff" },
    });
  }, [value, size]);

  return (
    <canvas
      ref={canvasRef}
      className="shrink-0 rounded-xl border border-slate-200 bg-white p-2 shadow-soft"
    />
  );
}
