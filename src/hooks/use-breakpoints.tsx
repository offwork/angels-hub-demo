"use client"
import { useCallback, useEffect, useRef, useState } from "react";

export default function useBreakpoint() {
  const initialDimensionRef = useRef(false);
  const [breakpoints, setBreakpoints] = useState({
    mobile: false,
    tablet: false,
    desktop: false,
  });

  const initialScreenSize = useCallback(() => {
    if (!initialDimensionRef.current) {
      const mobileResolution = window.innerWidth <= 640 ? true : false;
      const tabletResolution = window.innerWidth > 640 && window.innerWidth < 1023 ? true : false;
      const desktopResolution = window.innerWidth >= 1024 ? true : false;
      setBreakpoints({
        mobile: mobileResolution,
        tablet: tabletResolution,
        desktop: desktopResolution,
      });
      initialDimensionRef.current = true;
      return
    }
  }, []);

  const onScreenResize = useCallback((e: UIEvent) => {
    const mainWindow = e.currentTarget as Window;
    const mobileResolution = mainWindow.innerWidth <= 640 ? true : false;
    const tabletResolution = mainWindow.innerWidth > 640 && mainWindow.innerWidth < 1023 ? true : false;
    const desktopResolution = mainWindow.innerWidth >= 1024 ? true : false;
    setBreakpoints({
      mobile: mobileResolution,
      tablet: tabletResolution,
      desktop: desktopResolution,
    })
  }, []);

  useEffect(() => {
    initialScreenSize();
    window.addEventListener("resize", onScreenResize, false);
    return () => window.removeEventListener("resize", onScreenResize, false);
  }, [initialScreenSize, onScreenResize]);

  return breakpoints;
}
