const createDivElementInBody = (divElementId: string) => {
  const divElement = document.createElement("div");
  divElement.setAttribute("id", divElementId);
  document.body.appendChild(divElement);

  return divElement;
};

export default createDivElementInBody;