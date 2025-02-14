document.addEventListener("DOMContentLoaded", () => {
    const slots = document.querySelectorAll(".slot");

    slots.forEach(slot => {
        slot.addEventListener("click", () => {
            if (!slot.classList.contains("booked")) {
                const confirmBooking = confirm("Confirm your booking?");
                if (confirmBooking) {
                    slot.classList.add("booked");
                    slot.innerText = `${slot.dataset.time} (Booked)`;
                }
            }
        });
    });
});