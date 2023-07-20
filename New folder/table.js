
    // Get references to the form and search input
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchResultsDiv = document.getElementById('searchResults');

    // Sample data for demonstration purposes
    const sampleData = [
        'Apple',
        'Banana',
        'Orange',
        'Pineapple',
        'Grapes',
        'Mango',
        'Watermelon',
    ];

    // Function to perform the search
    function performSearch(event) {
        event.preventDefault(); // Prevent form submission and page reload

        const searchTerm = searchInput.value.toLowerCase();

        // Filter the sampleData based on the search term
        const searchResults = sampleData.filter(item =>
            item.toLowerCase().includes(searchTerm)
        );

        // Display the search results
        displayResults(searchResults);
    }

    // Function to display the search results
    function displayResults(results) {
        searchResultsDiv.innerHTML = '';

        if (results.length === 0) {
            searchResultsDiv.innerHTML = '<p>No results found.</p>';
        } else {
            results.forEach(result => {
                const resultElement = document.createElement('p');
                resultElement.textContent = result;
                searchResultsDiv.appendChild(resultElement);
            });
        }
    }