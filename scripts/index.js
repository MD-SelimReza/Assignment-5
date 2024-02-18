let totalPrice = parseInt(document.getElementById('totalPrice').innerText);
let ticketCount = parseInt(document.getElementById('ticketCount').innerText);
let totalSeat = parseInt(document.getElementById('totalSeat').innerText);

const seatBooked = [];

const allSeat = document.querySelectorAll('.seatNo');

for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        const seatTitle = seat.innerText;

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
            }

        }
        seatBooked.push(seatTitle);
    })
}



const btnApply = document.getElementById('btn-apply');
const couponCode = document.getElementById('coupon-code');
const couponBox = document.getElementById('coupon-box');


if (seatBooked.length > 3) {

    btnApply.removeAttribute('disabled', true);

    btnApply.addEventListener('click', function (e) {
        if (textValue === 'NEW15') {
            couponBox.style.display = 'none';
            const discount = totalPrice * 0.15;

            const discountBox = document.getElementById('discount-box');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            p1.innerText = 'Discount';
            p2.innerText = `BDT ${discount}`;
            discountBox.appendChild(p1);
            discountBox.appendChild(p2);

            const grandTotal = totalPrice - discount;
            setInnerText('grandTotal', grandTotal);
        } else if (textValue === 'Couple 20') {
            couponBox.style.display = 'none';
            const discount = totalPrice * 0.2;

            const discountBox = document.getElementById('discount-box');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            p1.innerText = 'Discount';
            p2.innerText = `BDT ${discount}`;
            discountBox.appendChild(p1);
            discountBox.appendChild(p2);

            const grandTotal = totalPrice - discount;
            setInnerText('grandTotal', grandTotal);
        } else {
            alert`Invalid coupon`;
            couponCode.value = '';
        }
    })
}



const name = document.getElementById('name');
const phone = document.getElementById('phone');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function () {

})


function setInnerText(displayId, value) {
    document.getElementById(displayId).innerText = value;
}


