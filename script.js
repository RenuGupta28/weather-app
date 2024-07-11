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
    let splitDate = time.split(` `) [0]
    let splitTime = time.split(` `) [1]
    let currentDay = getDayName(new Date (splitDate).getDay())
  temperatureField.innerText = temp;
  locationField.innerText = locationName;
  dateandTimefield.innerText = `${splitdate} ${currentDay} ${splitTime}`;
  conditionField.innerText = condition;
}
function searchforlocation(e) {
  e.preventDefault();
  target = searchField.value;

  fetchResults(target);
}
fetchResults(target);

function getDayName(number)
switch(number){
    case 0:
        return `sunday`
        case 1: 
        return `Monday`
        case 2:
            return `Tuesday`
            case 3:

            return `wednesday`
        case 4:

        return `Thursday`
        case 5:
            return `Friday`
            case 6:
    return `Saturday`}
