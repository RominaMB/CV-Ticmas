function dataChange(data) {
  let name = data.results[0].name.first + " " + data.results[0].name.last;
  console.log(name);
  let streetNumber = data.results[0].location.street.number;
  let streetName = data.results[0].location.street.name;
  let city = data.results[0].location.city;
  let state = data.results[0].location.state;
  let country = data.results[0].location.country;
  let latitude = data.results[0].location.coordinates.latitude;
  let longitude = data.results[0].location.coordinates.longitude;
  let adress = streetNumber + " " + streetName + ", " + city + ", " + state + ", " + country;
  let coordinates = `http://www.google.com/maps/place/${latitude},${longitude}`;
  console.log(coordinates);
  console.log(adress);
  let mainPhoto = data.results[0].picture.large;
  console.log(mainPhoto);
  let phonenumber = data.results[0].phone;
  let phonenumber_link = `phone:${phonenumber.split(" ").join("")}`;
  console.log(phonenumber);
  let email = data.results[0].email;
  console.log(email);
  let birthday = data.results[0].dob.date;
  birthday = birthday.slice(0, 10);
  console.log(birthday);
  document.getElementsByTagName("h1")[0].innerHTML = name;
  document.getElementById("main-photo-img").setAttribute("src", mainPhoto);
  document.getElementById("email-direction").innerHTML = email;
  document.getElementById("birthday-date").innerHTML = birthday;
  document.getElementById("birthday-date").setAttribute("datetime", birthday);
  document.getElementById("adress").innerHTML = adress;
  document.getElementById("adress").setAttribute("href", coordinates);
  document.getElementById("phonenumber").innerHTML = phonenumber;
  document.getElementById("phonenumber").setAttribute("href", phonenumber_link);
}
function showInfo(containedName, icon) {
  if (document.getElementById(containedName).style.display !== "none") {
    document.getElementById(containedName).style.display = "none";
    document.getElementById(icon).className = "fa-sharp fa-solid fa-eye";
  } else {
    document.getElementById(containedName).style.display = "block";
    document.getElementById(icon).className = "fa-sharp fa-solid fa-eye-slash";
  }
}
const API_URL = "https://randomuser.me/api/?gender=female";
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    dataChange(data);
  });
