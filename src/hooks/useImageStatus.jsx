import { useEffect, useState } from "react";

function useImageStatus(imgLink) {
  const [imgLoading, setImgLoading] = useState(true);
  const [imgLoadError, setImgLoadError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imgLink;

    img.onload = () => setImgLoading(false);

    img.onerror = () => setImgLoadError(true);
  }, [imgLink]);

  return { imgLoading, imgLoadError };
}

export default useImageStatus;
