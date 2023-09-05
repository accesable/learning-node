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

loadData(displayData);
