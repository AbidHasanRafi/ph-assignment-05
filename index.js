const allSeats = document.getElementById("allSeats");
const seatButton = document.getElementsByClassName("seatButton");
const appendedSection = document.getElementById("appended-section");
const apply = document.getElementById("apply");

let updateTotalPrice = 0;
let seatCount = 0;
let isSelected = false;
let isTyped = false;
let isPress = false;

for (const seat of seatButton) {
  seat.addEventListener("click", function () {
    if (seatCount < 4) {
      seat.classList.add("buttonBackgroundColor");
      seat.classList.add("text-white");
      seat.classList.remove("bg-[#F7F8F8]");
      seat.setAttribute("disabled", "");

      seatCount = seatCount + 1;
      setInnerTextWithIdAndValue("selected-seat-count", seatCount);

      const remainingSeat = getInnerTextValueFromId("remaining-seat");
      const updatedRemainingSeat = remainingSeat - 1;
      setInnerTextWithIdAndValue("remaining-seat", updatedRemainingSeat);

      const div = document.createElement("div");
      div.classList.add(
        "my-2",
        "flex",
        "justify-between",
        "text-[rgba(3,7,18,0.6)]"
      );

      const ticketPricePerSeat = getInnerTextValueFromId(
        "ticket-price-per-seat"
      );
      const p1 = document.createElement("p");
      const seatText = seat.innerText;
      p1.innerText = seatText;

      const p2 = document.createElement("p");
      p2.innerText = "Economy";

      const p3 = document.createElement("p");
      p3.innerText = ticketPricePerSeat;
      div.append(p1, p2, p3);
      appendedSection.appendChild(div);

      updateTotalPrice = seatCount * ticketPricePerSeat;
      setInnerTextWithIdAndValue("total-price", updateTotalPrice);
      const grandFinal = updateTotalPrice;
      setInnerTextWithIdAndValue("grand-total", grandFinal);

      isSelected = true;
      check();

      if (seatCount === 4) {
        apply.removeAttribute("disabled");
      }
    } else {
      alert("Maximum number of seats has been occupied!");
    }
  });
}

const hide = document.getElementById("hide-now");
const hidePress = document.getElementById("hide-press");
const hidePressFoot = document.getElementById("hide-press-foot");

apply.addEventListener("click", function () {
  const new15Coupon = getInnerTextFromId("new15");
  const couple20Coupon = getInnerTextFromId("couple20");
  const couponInputValue = getInputValueFromId("input-coupon");

  if (couponInputValue === new15Coupon) {
    const grandTotal15 = updateTotalPrice * 0.15;
    const grandFinal = updateTotalPrice - grandTotal15;
    setInnerTextWithIdAndValue("grand-total", grandFinal);
    hide.classList.add("hidden");
  } else if (couponInputValue === couple20Coupon) {
    const grandTotal20 = updateTotalPrice * 0.2;
    const grandFinal = updateTotalPrice - grandTotal20;
    setInnerTextWithIdAndValue("grand-total", grandFinal);
    hide.classList.add("hidden");
  } else {
    alert("Invalid coupon code!");
  }
});

function typeCheck() {
  isTyped = true;
  check();
}

function pressCheck() {
  isPress = true;
  check();
}

const visiblePopup = document.getElementById("success-message");
function check() {
  if (isSelected === true && isTyped === true && isPress === true) {
    visiblePopup.classList.remove("hidden");
    hidePress.classList.add("hidden");
    hidePressFoot.classList.add("hidden");
  }
}
