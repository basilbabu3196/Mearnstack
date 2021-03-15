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

                console.log(data);



            }
        }
    }
}