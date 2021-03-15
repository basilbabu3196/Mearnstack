function displayCountryData() {
    let name = document.querySelector("#cname").value

    alert(name);
    var request = new XMLHttpRequest()
    request.open("get", `https://restcountries.eu/rest/v2/name/${name}`)
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) & (request.status < 300)) {
                let data = JSON.parse(request.responseText)

                let flag = data[1].flag;
                let population = data[1].population;
                let currency = data[1].currencies[0].name;
                let html_data = ""
                html_data += `<div class="card" style="width: 18rem;">
                <img src="${flag}" class="card-img-top" alt="...">
                <h3>country_name:${c_name}</h3>
                <h3>population:${population}</h3>
                <h3>currency:${currency}</h3>
                <div class="card-body">
                  <p class="card-text"></p>
                </div>
              </div>`

                document.querySelector("#result").innerHTML = html_data



            }
        }
    }
}

function sele() {



    var request = new XMLHttpRequest()
    request.open("get", `https://restcountries.eu/rest/v2/name/..`)
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if ((request.status >= 200) & (request.status < 300)) {
                let data = JSON.parse(request.responseText)
                var n = 1000;
                for (i = 1; i <= n; i++)
                    let c_name = data[i].name;

                html_data += `<option>${flag}</option>`

                name.innerHTML = html_data


            }
        }
    }
}