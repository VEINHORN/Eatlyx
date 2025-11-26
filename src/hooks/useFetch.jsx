import { useEffect, useState } from "react";

const STORAGE_KEY = "apiCallsLogs";

const logInLocalStorage = (url, status, body) => {
  const logItem = { url, status, body };
  const payloadLog = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...payloadLog, logItem]));
};

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then(async (res) => {
        const body = await res.json();
        return [res.status, body];
      })
      .then(([status, body]) => {
        if (!isMounted) return;

        logInLocalStorage(url, status, body);
        setData(body);
      })
      .catch((err) => {
        console.error("useFetch error:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return data;
};
