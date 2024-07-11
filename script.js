// http://api.weatherapi.com/v1/current.json?key=021008e175c842cda0c91311241107&q=Mumbai&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dateandTimefield = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form?.addEventListener(`submit`, searchforlocation);

let target = "Mumbai";
const fetchResults = async (targetLocation) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=021008e175c842cda0c91311241107&q=${targetLocation}&aqi=no`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  let locationName = data.location.name;
  let time = data.location.localtime;

  let temp = data.current.temp_c;
  let condition = data.current.condition.text;
  updateDetails(temp, locationName, time, condition);
};
function updateDetails(temp, locationName, time, condition) {
  temperatureField.innerText = temp;
  locationField.innerText = locationName;
  dateandTimefield.innerText = time;
  conditionField.innerText = condition;
}
function searchforlocation(e) {
  e.preventDefault();
  target = searchField.value;

  fetchResults(target);
}
fetchResults(target);
