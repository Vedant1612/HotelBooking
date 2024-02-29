let totalCost;
let roomCost;
let kidsMeal;
let extraBedCost;

BookingForm = document.getElementById("bookingForm");

fullName = document.getElementById("name");
email = document.getElementById("email");
checkInDate = document.getElementById("check-in");
numOfNights = document.getElementById("numberOfNights");
roomType = document.getElementById("room-type");
numberOfAdults = document.getElementById("adults");
numberOfChildren = document.getElementById("children");
wifi = document.getElementById("wifi");
poolView = document.getElementById("pool-view");
gardenView = document.getElementById("garden-view");
ac = document.getElementById("ac");
extraBeds = document.getElementById("extra_beds");
promoTxt = document.getElementById("promo");
bookingBtn = document.getElementById("bookNow");
numOfRooms = document.getElementById("numberOfRooms");

currentBooking = document.getElementById("current-booking");
ovreallBooking = document.getElementById("overallBookingDisplay");

window.addEventListener("load", init);
BookingForm.addEventListener("input", bookingUpdate);
bookingBtn.addEventListener("click",confirmBooking);

function init(){  
    currentBooking.innerHTML = 
    `
      <tr>
        <td>Check-in Date:</td>
        <td style="width:65%"></td>
      </tr>
      <tr>
        <td>Number of Nights:</td>
        <td></td>
      </tr>
      <tr>
        <td>Room Type:</td>
        <td></td>
      </tr>
      <tr>
        <td>Number of Adults:</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Number of Children:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>WiFi:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Pool View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Garden View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>A/C:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Extra Beds:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>RS 0.00</td>
      </tr>`;

  ovreallBooking.innerHTML =
  `
  <tr>
    <td>Full Name:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Email:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Check-in Date:</td>
    <td style="width:65%">-</td>
  </tr>
  <tr>
    <td>Number of Nights:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Room Type:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Number of Adults:</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Number of Children:</td>
    <td>0</td>
  </tr>
  <tr>
    <td>WiFi:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Pool View:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Garden View:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>A/C:</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Extra Beds:</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Total:</td>
    <td>RS 0.00</td>
  </tr>`;
}
function bookingUpdate(){
  if(roomType.value === "Single"){
    roomCost = 25000;
  }
  else if(roomType.value === "Double"){
    roomCost = 35000;
  }
  else if(roomType.value === "Triple"){
    roomCost = 40000;
  }
  else{
    roomCost = 0
  }
  kidsMeal = numberOfChildren.value*5000;
  extraBedCost = extraBeds.value*8000;
  
  totalCost = (roomCost*numOfRooms.value + kidsMeal + extraBedCost)*numOfNights.value;

  if(promoTxt.value === "123"){
    totalCost = totalCost - totalCost*5/100;
  }

  currentBooking.innerHTML = 
  `
    <tr>
      <td>Check-in Date:</td>
      <td>${checkInDate.value}</td>
    </tr>
    <tr>
      <td>Number of Nights:</td>
      <td>${numOfNights.value}</td>
    </tr>
    <tr>
      <td>Room Type:</td>
      <td>${roomType.value} x ${numOfRooms.value}</td>
    </tr>
    <tr>
      <td>Number of Adults:</td>
      <td>${numberOfAdults.value}</td>
    </tr>
    <tr>
      <td>Number of Children:</td>
      <td>${numberOfChildren.value}</td>
    </tr>
    <tr>
      <td>WiFi:</td>
      <td>${wifi.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>Pool View:</td>
      <td>${poolView.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>Garden View:</td>
      <td>${gardenView.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>A/C:</td>
      <td>${ac.checked ? 'Yes' : 'No'}</td>
    </tr>
    <tr>
      <td>Extra Beds:</td>
      <td>${extraBeds.value}</td>
    </tr>
    <tr>
        <td>Total:</td>
        <td style="width:65%">RS ${totalCost.toFixed(2)}</td>
      </tr>`;
}
function confirmBooking(evt){
  if (BookingForm.checkValidity()) {
    evt.preventDefault();
    alert("Booking one. Successfully !!!");
    ovreallBooking.innerHTML = 
    `
      <tr>
        <td>Full Name:</td>
        <td>${fullName.value}</td>
      </tr>
      <tr>
        <td>Email:</td>
        <td>${email.value}</td>
      </tr>
      <tr>
        <td>Check-in Date:</td>
        <td>${checkInDate.value}</td>
      </tr>
      <tr>
        <td>Check-out Date:</td>
        <td>${numOfNights.value}</td>
      </tr>
      <tr>
        <td>Room Type:</td>
        <td>${roomType.value} x ${numOfRooms.value}</td>
      </tr>
      <tr>
        <td>Number of Adults:</td>
        <td>${numberOfAdults.value}</td>
      </tr>
      <tr>
        <td>Number of Children:</td>
        <td>${numberOfChildren.value}</td>
      </tr>
      <tr>
        <td>WiFi:</td>
        <td>${wifi.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Pool View:</td>
        <td>${poolView.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Garden View:</td>
        <td>${gardenView.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>A/C:</td>
        <td>${ac.checked ? 'Yes' : 'No'}</td>
      </tr>
      <tr>
        <td>Extra Beds:</td>
        <td>${extraBeds.value}</td>
      </tr>
      <tr>
          <td>Total:</td>
          <td style="width:65%">LKR ${totalCost.toFixed(2)}</td>
        </tr>`;
    
    BookingForm.reset();
    
    currentBooking.innerHTML = 
    `
      <tr>
        <td>Check-in Date:</td>
        <td style="width:65%"></td>
      </tr>
      <tr>
        <td>Check-out Date:</td>
        <td></td>
      </tr>
      <tr>
        <td>Room Type:</td>
        <td></td>
      </tr>
      <tr>
        <td>Number of Adults:</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Number of Children:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>WiFi:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Pool View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Garden View:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>A/C:</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Extra Beds:</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>LKR 0.00</td>
      </tr>`;

    ovreallBooking.scrollIntoView({behavior: 'smooth'});
  }
}

