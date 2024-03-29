// Get all project items
const projectItems = document.querySelectorAll('.project');

// Get the search input element
const searchInput = document.getElementById('searchInput');

// Add an event listener to the search input
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through each project item
    projectItems.forEach(project => {
        const projectTitle = project.querySelector('h3').textContent.toLowerCase();
        const projectTags = Array.from(project.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
        const projectCategories = Array.from(project.querySelectorAll('.category')).map(category => category.textContent.toLowerCase());

        // Check if the project title, tags, or categories contain the search term
        const shouldDisplay = projectTitle.includes(searchTerm) ||
            projectTags.some(tag => tag.includes(searchTerm)) ||
            projectCategories.some(category => category.includes(searchTerm));

        // Show or hide the project item based on the search term
        project.style.display = shouldDisplay ? 'flex' : 'none';
    });
});

// Get all folder links
const folderLinks = document.querySelectorAll('.folder');

// Add click event listener to each folder link
folderLinks.forEach(link => {
    link.addEventListener('click', () => {
        const path = link.getAttribute('data-path');

        // Check if the path attribute is provided
        if (path) {
            // Transition to the specified page
            window.location.href = path;
        } else {
            // Toggle the dropdown menu
            link.classList.toggle('dropdown');
            const dropdownContent = document.createElement('div');
            dropdownContent.classList.add('dropdown-content');

            // Add dropdown items (you can customize this part)
            const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];
            dropdownItems.forEach(item => {
                const dropdownLink = document.createElement('a');
                dropdownLink.href = '#';
                dropdownLink.textContent = item;
                dropdownContent.appendChild(dropdownLink);
            });

            link.appendChild(dropdownContent);
        }
    });
});