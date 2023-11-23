window.onload = function () {
  rangeMin();
  rangeMax();
};

const minVal = document.querySelector(".min-val");
const maxVal = document.querySelector(".max-val");
const inputMin = document.querySelector(".min-input");
const inputMax = document.querySelector(".max-input");
const minTooltip = document.querySelector(".min-tooltip");
const maxTooltip = document.querySelector(".max-tooltip");
const minGap = 0;
const range = document.querySelector(".slider-track");
const minValue = parseInt(minVal.min);
const maxValue = parseInt(maxVal.max);

function rangeMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if(gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }
  minTooltip.innerHTML = "$" + minVal.value
  inputMin.value = minVal.value
  sliderColor()
}

function rangeMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if(gap <= minGap) {
    maxVal.value = parseInt(minVal.value) + minGap;
  }
  maxTooltip.innerHTML = maxVal.value
  inputMax.value = maxVal.value
  sliderColor()
}

function sliderColor() {
  range.style.left = (minVal.value / maxValue) * 100 + "%";
  minTooltip.style.left = (minVal.value / maxValue) * 100 + "%";
  range.style.right = 100 - (maxVal.value / maxValue) * 100 + "%";
  maxTooltip.style.right = 100 - (maxVal.value / maxValue) * 100 + "%";
}

function setMinInput() {
  let minPrice = parseInt(inputMin.value);
  if(minPrice < minValue) {
    inputMin.value = minValue
  }
  minVal.value = inputMin.value;
  rangeMin()
}

function setMaxInput() {
  let maxPrice = parseInt(inputMax.value);
  if(maxPrice > maxValue) {
    inputMax.value = maxValue
  }
  maxVal.value = inputMax.value;
  rangeMax()
}


