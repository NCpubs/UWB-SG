document.addEventListener('DOMContentLoaded', function() {

  const tableBody = document.querySelector('table tbody');

  // Add a single click listener to the table body
  tableBody.addEventListener('click', function(event) {
    
    // Check if the clicked element has the class 'open-links-btn'
    if (event.target.classList.contains('open-links-btn')) {
      
      // 1. Find the parent row (tr) of the button that was clicked
      const row = event.target.closest('tr');
      
      // 2. Find all the cells (td) within THAT specific row
      const cells = row.querySelectorAll('td');
      
      // 3. Get the anchor tags from the 2nd, 3rd, and 4th cells
      // Note: querySelectorAll returns a list, so we use array indices (0-based)
      const link1 = cells[1].querySelector('a'); // 2nd cell
      const link2 = cells[2].querySelector('a'); // 3rd cell
      const link3 = cells[3].querySelector('a'); // 4th cell

      // 4. Programmatically click each link
      if (link1) link1.click();
      if (link2) link2.click();
      if (link3) link3.click();

      // Optional: Give the user feedback
      // console.log("Attempting to open links from the clicked row...");
      // alert("Check your browser for new tabs. You may need to disable pop-up blockers.");
    }
    
  });
  
});
