import { createLogger } from "./logger.js";
import { validateOptions, isSeason } from "./options.js";

import snowfall from "./snowfall.js";

const currentScript = document.currentScript;
const colors = currentScript?.getAttribute("data-colors") || "#fff";
const intensity = currentScript?.getAttribute("data-intensity") || "regular";
const duration = currentScript?.getAttribute("data-duration") || "15";
const season =
  currentScript?.getAttribute("data-season") || "December 1, January 4";

const logLevel = currentScript?.getAttribute("data-log-level") || "warn";
const logger = createLogger(logLevel, "Let It Snow");

logger.info("Options", { colors, intensity, duration, season });

const initSnowfall = () => {
  const options = validateOptions(
    { colors, intensity, duration, season },
    logger
  );

  // If the options are not valid, skip the snowfall
  if (!options) return;

  try {
    if (isSeason(new Date(), options.season)) {
      logger.info("Initializing snowfall", options);
      snowfall(options);
    }
  } catch (error) {
    logger.error("Error initializing snowfall", error);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSnowfall);
} else {
  initSnowfall();
}
