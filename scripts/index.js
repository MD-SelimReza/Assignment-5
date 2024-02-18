let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let ticketCount = parseInt(document.getElementById('ticketCount').innerText);
let totalSeat = parseInt(document.getElementById('totalSeat').innerText);

const btnApply = document.getElementById('btn-apply');
const seatBooked = [];

let count = 0;

const allSeat = document.querySelectorAll('.seatNo');
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        const seatTitle = seat.innerText;
        if (count >= 3) {
            btnApply.removeAttribute('disabled');
            couponCode.removeAttribute('disabled');
        };
        count++;

        if (seatBooked.includes(seatTitle)) {
            alert`Already booked this ticket.`;
        } else {
            if (seatBooked.length >= 4) {
                alert`You buy no ticket any more.`;
            } else {
                e.target.style.backgroundColor = '#1DD100';
                e.target.style.color = '#FFFFFF';

                const seatName = document.getElementById('seatName');
                const seatClass = document.getElementById('seatClass');
                const seatPrice = document.getElementById('seatPrice');
                const p1 = document.createElement('p');
                const p2 = document.createElement('p');
                const p3 = document.createElement('p');
                p1.innerText = seatTitle;
                p2.innerText = 'Economoy';
                p3.innerText = '550';
                seatName.appendChild(p1);
                seatClass.appendChild(p2);
                seatPrice.appendChild(p3);

                const price = parseInt(document.getElementById('price').innerText.split(' ')[0]);
                totalPrice += price;

                ticketCount += 1;
                totalSeat -= 1;

                setInnerText('totalPrice', totalPrice);
                setInnerText('grandTotal', totalPrice);
                setInnerText('ticketCount', ticketCount);
                setInnerText('totalSeat', totalSeat);
            };

        };
        seatBooked.push(seatTitle);
    });
};


const couponCode = document.getElementById('coupon-code');
const couponBox = document.getElementById('coupon-box');

function discountedPriseCalculate(discountPercentage) {
    couponBox.style.display = 'none';
    const discount = totalPrice * discountPercentage;

    const discountBox = document.getElementById('discount-box');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.innerText = 'Discount';
    p2.innerText = `BDT ${discount}`;
    discountBox.appendChild(p1);
    discountBox.appendChild(p2);

    const grandTotal = totalPrice - discount;
    setInnerText('grandTotal', grandTotal);
}

couponCode.addEventListener('keyup', function (e) {
    const textValue = e.target.value;
    if (textValue === 'NEW15') {
        btnApply.addEventListener('click', function () {
            discountedPriseCalculate(0.15);
        });
    } else if (textValue === 'Couple 20') {
        btnApply.addEventListener('click', function () {
            discountedPriseCalculate(0.2);
        });
    };
});


const name = document.getElementById('name');
const phone = document.getElementById('phone');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function () {

})


function setInnerText(displayId, value) {
    document.getElementById(displayId).innerText = value;
}


