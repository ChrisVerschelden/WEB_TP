const key = 'a3732a1074e2403ce364ad6e71eb998cb';
const baseURL = 'https://api.tisseo.fr/v1/lines.json'
const headers = new Headers();
const options = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
};
const button_all_lines = document.querySelector('#getAllLines');
const list_lines = document.querySelector('#listLines');
const details = document.querySelector('#details');
const details_depart = document.querySelector('#details_depart');

button_all_lines.addEventListener('click', () => {
    list_lines.innerHTML = "";
    fetch('https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb')
        .then((data) => {
            if(data.status == 200){
                return data.json();
            }
        }).then((data) => {
            for (const ligne of data.lines.line) {
                const li = document.createElement("li")
                li.innerText = "nom: " + ligne.name;
                li.addEventListener('click', () => {
                    afficher(ligne.id)
                });
                list_lines.appendChild(li);
                //list_lines.innerHTML += "<li onclick='afficher(" + ligne.id + ")'> nom: " + ligne.name + "</li>";
            }
        })
})

function afficher(id){
    details.innerHTML = ""
    fetch('https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId=' + id)
    .then((data) => {
        if(data.status == 200){
            return data.json();
        }
    }).then((data) => {
        console.log(data)
        for (const stop of data.physicalStops.physicalStop) {
            const li = document.createElement("li")
            li.innerText = "nom: " + stop.name + " zone : " + stop.stopArea.cityName + " " + stop.stopArea.name;
            li.addEventListener('click', () => {
                afficher_passage(stop.id)
            });
            details.appendChild(li);
            //details.innerHTML += "<li onclick='afficher_passage(" + stop.id + ")'> nom: " + stop.name + " zone : " + stop.stopArea.cityName + " " + stop.stopArea.name + "</li>";
        }
    })
}

function afficher_passage(id){
    details_depart.innerHTML = "";
    fetch('https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId=' + id)
    .then((data) => {
        if(data.status == 200){
            return data.json();
        }
    }).then((data) => {
        console.log(data)
        for (const depart of data.departures.departure) {
            details_depart.innerHTML += "<li> ligne: " + depart.line.name + "(" + depart.line.shortName + ") depart à : " + depart.dateTime + "</li>";
        }
    })
}