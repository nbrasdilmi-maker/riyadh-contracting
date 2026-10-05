"use client";
import Image from "next/image";
import { useState } from "react";
import { resolveLabImage } from "@/lib/lab/imageResolver";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
  fit?: "cover" | "contain";
}

/** غلاف next/image الوحيد في المختبر — الاستبدال بـ ImageKit يتم من resolver فقط. */
export default function LabImage({ src, alt, fill, width, height, className, sizes, priority, objectPosition = "center", fit = "cover" }: Props) {
  const [err, setErr] = useState(false);
  const resolved = err ? "/lab/cover-mazalat.svg" : resolveLabImage(src);
  const style = { objectFit: fit, objectPosition };
  if (fill) {
    return (
      <Image
        src={resolved}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width:768px) 100vw, 50vw"}
        style={style}
        className={className}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        onError={() => setErr(true)}
      />
    );
  }
  return (
    <Image
      src={resolved}
      alt={alt}
      width={width ?? 1200}
      height={height ?? 750}
      sizes={sizes}
      style={style}
      className={className}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      onError={() => setErr(true)}
    />
  );
}
