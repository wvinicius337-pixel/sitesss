import React from "react";

const INSTA_LOGO =
  "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/cb9918c06_icons8-instagram-48.png";
const WHATSAPP_LOGO =
  "https://media.base44.com/images/public/6abb38dc29f7f2f0f80b8d38/a52cd1440_icons8-whatsapp-48.png";

export function InstagramLogo({ size = 20, className = "" }) {
  return (
    <img
      src={INSTA_LOGO}
      alt="Instagram"
      width={size}
      height={size}
      className={`inline-block object-contain ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
}

export function WhatsAppLogo({ size = 20, className = "" }) {
  return (
    <img
      src={WHATSAPP_LOGO}
      alt="WhatsApp"
      width={size}
      height={size}
      className={`inline-block object-contain rounded-[22%] ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
    />
  );
}