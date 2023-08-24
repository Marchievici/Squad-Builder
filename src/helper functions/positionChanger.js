export const changePosToFitSquad = (position) => {
  if (
    position === "LW" ||
    position === "RW" ||
    position === "CF" ||
    position === "LF" ||
    position === "RF"
  ) {
    position = "ST";
  } else if (
    position === "CDM" ||
    position === "CAM" ||
    position === "RM" ||
    position === "LM"
  ) {
    position = "CM";
  } else if (
    position === "LB" ||
    position === "RB" ||
    position === "LWB" ||
    position === "RWB"
  ) {
    position = "CB";
  } else {
    return position;
  }
  return position;
};
