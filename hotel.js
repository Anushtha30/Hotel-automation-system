function checkAvailability() {
    let name = document.getElementById("name").value;
    let arrival = document.getElementById("arrival").value;
    let duration = document.getElementById("duration").value;

    if (name && arrival && duration) {
        alert("Room is available!");
    } else {
        alert("Please fill all required fields.");
    }
}

function bookRoom() {
    let name = document.getElementById("name").value;
    let arrival = document.getElementById("arrival").value;
    let duration = parseInt(document.getElementById("duration").value, 10);
    let roomType = parseInt(document.getElementById("roomType").value, 10);
    let bedType = document.getElementById("bedType").value;
    let ac = parseInt(document.getElementById("ac").value, 10);

    if (name && arrival && duration > 0) {
        let totalAmount = (roomType + ac) * duration;

        document.getElementById("booking-summary").innerHTML = `
            <strong>Booking Summary</strong>
            <p>Name: ${name}</p>
            <p>Arrival Time: ${arrival}</p>
            <p>Duration of Stay: ${duration} days</p>
            <p>Room Type: ${document.getElementById("roomType").selectedOptions[0].text}</p>
            <p>Bed Type: ${bedType}</p>
            <p>AC/Non-AC: ${document.getElementById("ac").selectedOptions[0].text}</p>
            <p>Total Amount: $${totalAmount}</p>
        `;
        alert("Room booked successfully! Total Amount: $" + totalAmount);
    } else {
        alert("Please fill all required fields with valid values.");
    }
}