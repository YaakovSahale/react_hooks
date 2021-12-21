import { useEffect } from "react";
import moment from "moment";

const Clock = () => {
  useEffect(() => {
    handle = setInterval(writeTime, 1000);
    console.log("useEffect is called");
    return unmountHandler;
  }, []);

  let handle = null;
  function unmountHandler() {
    console.log("unmount phase - clock");
    clearInterval(handle);
  }

  function writeTime() {
    const now = moment();
    document.title = now.format("HH:mm:ss");
  }

  return <div>clock</div>;
};

export default Clock;
