import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const RouteChangeSpinner = ({ delay = 0, minDuration = 800 }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimer;
    let hideTimer;

    if (delay > 0) {
      showTimer = setTimeout(() => setVisible(true), delay);
      hideTimer = setTimeout(() => setVisible(false), delay + minDuration);
    } else {
      setVisible(true);
      hideTimer = setTimeout(() => setVisible(false), minDuration);
    }

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      setVisible(false);
    };
  }, [location, delay, minDuration]);

  return visible ? <LoadingSpinner /> : null;
};

export default RouteChangeSpinner;
