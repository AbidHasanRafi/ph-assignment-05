function getInnerTextFromId(elementId) {
  const element = document.getElementById(elementId);
  elementText = element.innerText;
  return elementText;
}

function getInputValueFromId(elementId) {
  const element = document.getElementById(elementId);
  elementValue = element.value;
  return elementValue;
}

function getInnerTextValueFromId(elementId) {
  const element = document.getElementById(elementId);
  elementValue = parseInt(element.innerText);
  return elementValue;
}

function setInnerTextWithIdAndValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
