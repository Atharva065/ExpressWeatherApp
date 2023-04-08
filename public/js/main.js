const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_details = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_val = document.getElementById("temp_val");
const hideData = document.querySelector(".middle_layer");

const getInfo = async (e) => {
  e.preventDefault();
  let cityInfo = cityName.value;

  if (cityInfo === "") {
    city_details.innerText = "Please write the city name.";
    hideData.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&appid=7f9cdc67b5b5678d42593b62e85e3cc5&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);

      const arrData = [data];
      city_details.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_val.innerText = arrData[0].main.temp;

      let currWeather = arrData[0].weather[0].main;

      // for showing the icons of clouds,rain or sun

      if (currWeather == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (currWeather == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
      } else if (currWeather == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      }

      hideData.classList.remove("data_hide");
    } catch {
      city_details.innerHTML = "Please write correct city name.";
      hideData.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
