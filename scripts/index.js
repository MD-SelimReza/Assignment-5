let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let ticketCount = parseInt(document.getElementById('ticketCount').innerText);
let totalSeat = parseInt(document.getElementById('totalSeat').innerText);

const btnApply = document.getElementById('btn-apply');

const seatBooked = [];
const allSeat = document.querySelectorAll('.seatNo');

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        const seatTitle = seat.innerText;

        if (ticketCount >= 3) {
            btnApply.removeAttribute('disabled');
            couponCode.removeAttribute('disabled');
        };

        if (seatBooked.includes(seatTitle)) {
            alert`Already booked this ticket.`;
        } else {
            seatBooked.push(seatTitle);

            if (seatBooked.length > 4) {
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

btnApply.addEventListener('click', function () {
    const textValue = couponCode.value;
    if (textValue === 'NEW15') {
        discountedPriseCalculate(0.15);
    } else if (textValue === 'Couple 20') {
        discountedPriseCalculate(0.2);
    } else {
        alert`Invalid coupon`;
        document.getElementById('coupon-code').value = '';
    };
});

const phone = document.getElementById('phone');
const nextBtn = document.getElementById('next-btn');

phone.addEventListener('keyup', function (e) {
    const phone = e.target.value.length;
    if (phone >= 7 && phone <= 11 && ticketCount >= 1) {
        nextBtn.removeAttribute('disabled');
    } else {
        nextBtn.setAttribute('disabled', true);
    };
});

function setInnerText(displayId, value) {
    document.getElementById(displayId).innerText = value;
};

function goHome() {
    location.reload();
};

