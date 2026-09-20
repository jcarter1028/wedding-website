interface TextProps {
  text: string;
  alignment?: "left" | "right" | "center";
  bold?: boolean;
  italic?: boolean;
  size?: "normal" | "lg" | "xl";
}

const alignmentClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const sizeClasses = {
  normal: "text-base",
  lg: "text-xl",
  xl: "text-2xl",
};

export default function Text({
  text,
  alignment = "center",
  bold = false,
  italic = false,
  size = "normal",
}: TextProps) {
  return (
    <p
      className={`${alignmentClasses[alignment]} ${sizeClasses[size]} text-gray-600 ${
        bold ? "font-semibold" : "font-normal"
      } ${italic ? "italic" : ""} my-4 `}
    >
      {text}
    </p>
  );
}
