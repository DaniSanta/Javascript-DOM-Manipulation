// From (data.js)
var tableData = data;

// d3.select button
var button = d3.select("button");

// d3.select form-control
var form = d3.select("#form-control");

// d3.select the tableBody
var tableBody = d3.select("tbody")

// Create eventHandlers() function
button.on("click", eventHandler);
form.on("submit", eventHandler);

// Complete the eventHandler() function 
function eventHandler() {

  // PreventDefault refreshing
  d3.event.preventDefault();

  // .SelectAll rows 
  tableBody.selectAll("tr").remove()

  // d3.Select HTML of input element 
  var inputElement = d3.select("input");

  // Get (value) property of inputElement.
  var inputDate = inputElement.property("value");

  // Form input to filter the data by .datetime
  var sightings = tableData.filter(sighting => sighting.datetime === inputDate);

  // Arrays for each column (.map)
  var datetime = sightings.map(sighting => sighting.datetime);
  var city = sightings.map(sighting => sighting.city);
  var state = sightings.map(sighting => sighting.state);
  var country = sightings.map(sighting => sighting.country);
  var shape = sightings.map(sighting => sighting.shape);
  var durationMinutes = sightings.map(sighting => sighting.durationMinutes);
  var comments = sightings.map(sighting => sighting.comments);

  // A for loop to .append newRow(s) for the table 
  for (var sighting = 0; sighting < sightings.length; sighting++) {
    var newRow = tableBody.append("tr");
    newRow.append("td").text(datetime[sighting]);
    newRow.append("td").text(city[sighting]);
    newRow.append("td").text(state[sighting]);
    newRow.append("td").text(country[sighting]);
    newRow.append("td").text(shape[sighting]);
    newRow.append("td").text(durationMinutes[sighting]);
    newRow.append("td").text(comments[sighting]);
  }

};