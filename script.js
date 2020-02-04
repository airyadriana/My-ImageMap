function parseSourceParam() {
  const locString = window.location;
  console.log("locString=" + locString);

  const urlParams = new URLSearchParams(locString.search);
  var source = urlParams.get('source');
  console.log(source);

  if (source == "cia") {
    document.getElementById("us").href="https://www.cia.gov/library/publications/the-world-factbook/geos/us.html";

    document.getElementById("au").href="https://www.cia.gov/library/publications/the-world-factbook/geos/as.html";
  }
  
}