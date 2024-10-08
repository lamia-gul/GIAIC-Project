// main.ts
// Function to toggle the visibility of all fieldsets
function toggleFieldsetsVisibility() {
    // Select all fieldset elements
    var fieldsets = document.querySelectorAll('fieldset');
    // Iterate over each fieldset and toggle its visibility
    fieldsets.forEach(function (fieldset) {
        if (fieldset.style.display === 'none') {
            fieldset.style.display = 'block';
        }
        else {
            fieldset.style.display = 'none';
        }
    });
}
// Event listener for the toggle button
var toggleButton = document.getElementById('toggleSectionsBtn');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleFieldsetsVisibility);
}
