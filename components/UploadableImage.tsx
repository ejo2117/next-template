"use client";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import useOCR from "./useOCR";
import styles from "../app/page.module.css";

export interface IUploadableImageProps {}

export default function UploadableImage(props: IUploadableImageProps) {
  const [image, setImage] = useState<string>();
  const [ocrOutput, setOcrOutput] = useState<Tesseract.RecognizeResult>();
  const inputRef = useRef<HTMLInputElement>(null);
  const reader = new FileReader();

  const worker = useOCR();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", () => setImage(reader.result as string));
  };

  useEffect(() => {
    const parse = async () => {
      if (!image) return;

      await worker?.loadLanguage("eng");
      await worker?.initialize("eng");
      await worker?.setParameters({
        tessedit_char_whitelist: "+-0123456789.ODSPHCYLAXID",
      });
      const result = await worker?.recognize(image);
      setOcrOutput(result);
      worker?.terminate;
    };

    parse();
  }, [image]);

  return (
    <div className={styles.ocrContainer}>
      <div className={styles.imageContainer}>
        {image && <img src={image} />}
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={(e) => handleFileChange(e)}
        />
      </div>
      {ocrOutput && <p className={styles.ocrResult}>{ocrOutput.data.text}</p>}
    </div>
  );
}
