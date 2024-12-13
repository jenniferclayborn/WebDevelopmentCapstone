// Select submit button
const submitButton = document.getElementById('submitButton');

// Add click event listener to submit button
submitButton.addEventListener('click', () => {
  // Redirect to a new page
  window.location.href = 'weeklydata.html';
});

// Select upload button
uploadButton = document.getElementById('uploadButton');

// Add click event listener to upload button
uploadButton.addEventListener('click', () => {
  // post file to database and redirect to a new page
  window.location.href = 'dashboard.html';
// Redirect to a new page - add post to data here to post the uploaded data to the react database

});