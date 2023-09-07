function displayData(data) {
  console.log("Processing data:", data);
}

function loadData(callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const data = "Some fetched data";
    callback(data); // Call the provided callback function
  }, 1000);
}
console.log("Before");
loadData(displayData);
console.log("After");
