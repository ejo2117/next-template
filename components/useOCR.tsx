import { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";

const useOCR = () => {
  const [worker, setWorker] = useState<Tesseract.Worker>();

  useEffect(() => {
    const setupWorker = async () => {
      const w = await createWorker({
        logger: (m) => console.log(m),
      } as const);

      setWorker(w);
    };
    setupWorker();
  }, []);

  return worker;
};

export default useOCR;
