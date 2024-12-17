import {
  addYears,
  getYear,
  setYear,
  isBefore,
  isWithinInterval,
  isValid,
  parse,
} from "date-fns";

export const isSeason = (date, { start, end }) => {
  const currentYear = getYear(date);

  // Ignore year from config dates
  const startDate = setYear(start, currentYear);
  let endDate = setYear(end, currentYear);

  if (isBefore(endDate, startDate)) {
    endDate = addYears(endDate, 1);
  }

  const interval = {
    start: startDate,
    end: endDate,
  };

  return (
    isWithinInterval(date, interval) ||
    isWithinInterval(addYears(date, 1), interval)
  );
};

export const validateOptions = (
  { colors, intensity, duration, season },
  logger
) => {
  console.log("validateOptions", { colors, intensity, duration, season });
  const colorsArray = colors
    .split(",")
    .map((color) => color.trim())
    .filter(Boolean);
  const durationInt = parseInt(duration);
  const [seasonStart, seasonEnd] = season
    .split(",")
    .map((date) => date.trim())
    .map((date) => new Date(date));

  if (colorsArray.length === 0) {
    logger.error("Invalid colors provided, remove to use default option");
    return;
  }

  if (!["light", "regular", "blizzard"].includes(intensity)) {
    logger.error("Invalid intensity provided, remove to use default option");
    return;
  }

  if (isNaN(durationInt)) {
    logger.error("Invalid duration provided, remove to use default option");
    return;
  }

  if (!isValid(seasonStart) || !isValid(seasonEnd)) {
    logger.error("Invalid season provided, remove to use default option");
    return;
  }

  console.log("validateOptions", {
    colors: colorsArray,
    intensity: intensity,
    duration: durationInt * 1000,
    season: {
      start: seasonStart,
      end: seasonEnd,
    },
  });

  return {
    colors: colorsArray,
    intensity: intensity,
    duration: durationInt * 1000,
    season: {
      start: seasonStart,
      end: seasonEnd,
    },
  };
};
