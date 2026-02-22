/** @format */

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  return [isOnlineStatus];
};
export default useOnlineStatus;
