import { useState, useEffect } from "react";

function useStoreData() {
  const [storeData, setStoreData] = useState(null);

  useEffect(() => {
    const fetchStore = async () => {
      try {
        const response = await fetch("./storeData.json"); // Ensure correct path
        const data = await response.json();
        setStoreData(data);
      } catch (error) {
        console.error("Failed to fetch store data:", error);
      }
    };

    fetchStore();
  }, []);

  return storeData;
}

export default useStoreData;
