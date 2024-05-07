import { TypeGetPosition } from "src/types/types";

export const getPosition: TypeGetPosition = (coordinates) => {
  let positionLeft = coordinates[0];
  const positionTop = coordinates[1] - 54;
  const conteinerWidth = coordinates[2];
  if (positionLeft < conteinerWidth / 2) {
    positionLeft = positionLeft >= 60 ? positionLeft - 60 : positionLeft;
  } else {
    positionLeft =
      positionLeft + 60 >= conteinerWidth
        ? positionLeft - 120
        : positionLeft - 60;
  }
  return [positionLeft, positionTop];
};
