import { useEffect, useRef } from "react";
import QRCode from "qrcode";

// Renders a real, scannable QR code client-side (no backend/API call).
// Pass `href` to also make it tappable, for viewers on the device itself.
export default function QRCodeBlock({ value, href, size = 128 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, value, {
      width: size,
      margin: 1,
      color: { dark: "#7a1128", light: "#ffffff" },
    });
  }, [value, size]);

  const canvas = (
    <canvas
      ref={canvasRef}
      className="shrink-0 rounded-xl border border-neutral-200 bg-white p-2 shadow-soft"
    />
  );

  if (!href) return canvas;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Open link"
      className="shrink-0 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
    >
      {canvas}
    </a>
  );
}
