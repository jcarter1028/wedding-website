"use client";

interface TextProps {
  text: string;
  alignment?: "left" | "right" | "center";
  bold?: boolean;
}

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Text({
  text,
  alignment = "center",
  bold = false,
}: TextProps) {
  return (
    <p
      className={`${alignmentClasses[alignment]} text-gray-600 text-lg ${
        bold ? "font-semibold" : "font-normal"
      } my-4`}
    >
      {text}
    </p>
  );
}
