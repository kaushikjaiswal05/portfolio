import { useEffect } from "react";

const Grained = ({ options }) => {
  useEffect(() => {
    const grained = (ele, opt) => {
      const element = document.getElementById(ele);
      if (!element) {
        console.error("Grained: cannot find the element with id " + ele);
        return;
      }

      const generateNoise = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = opt.patternWidth;
        canvas.height = opt.patternHeight;

        for (let w = 0; w < opt.patternWidth; w += opt.grainDensity) {
          for (let h = 0; h < opt.patternHeight; h += opt.grainDensity) {
            const rgb = (Math.random() * 256) | 0;
            ctx.fillStyle = `rgba(${rgb}, ${rgb}, ${rgb}, ${opt.grainOpacity})`;
            ctx.fillRect(w, h, opt.grainWidth, opt.grainHeight);
          }
        }
        return canvas.toDataURL("image/png");
      };

      const noise = generateNoise();
      element.style.backgroundImage = `url(${noise})`;
      element.style.position = "absolute";
      element.style.height = "100%";
      element.style.width = "100%";
      element.style.left = "0";
      element.style.top = "0";
    };

    grained("grained-background", options);
  }, [options]);

  return <div id="grained-background" />;
};

export default Grained;
