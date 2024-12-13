import { useEffect } from "react";

const ScaleFactorCalculator = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const scaleFactor = window.devicePixelRatio;
            console.log(scaleFactor);
        
            if (scaleFactor > 1) {
              document.body.classList.add("high-dpi");
            }
          }
    },[])
}

export default ScaleFactorCalculator;