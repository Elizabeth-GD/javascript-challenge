var ufoData = data;

var tbody = d3.select("tbody");

function buildTable(ufoData) {

    tbody.html("");

    ufoData.forEach((dataRow) => {

        var row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {

    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");

    var city = d3.select("#city").property("value");

    var state = d3.select("#state").property("value");

    var country = d3.select("#country").property("value");

    var shape = d3.select("#shape").property("value");

    let filteredData = ufoData;


    if (date) {

        filteredData = filteredData.filter(row => row.datetime === date);
    }

    if (city) {

        filteredData = filteredData.filter(row => row.city === city);
    }

    if (state) {

        filteredData = filteredData.filter(row => row.state === state);
    }

    if (country) {

        filteredData = filteredData.filter(row => row.country === country);
    }

    if (shape) {

        filteredData = filteredData.filter(row => row.shape === shape);
    }

    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(ufoData);