document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.querySelector('.btn-search');
  const keywordInput = document.querySelector('.keyword');
  const searchResults = document.querySelector('.search-results');

  searchButton.addEventListener('click', async () => {
    const id = parseInt(keywordInput.value.trim());

    if (!isNaN(id)) {
      try {
        const response = await fetch(`/api/data/${id}`); // Mengambil data dari endpoint '/api/data/:id'
        if (!response.ok) {
          throw new Error('Data not found');
        }

        const foundData = await response.json();

        searchResults.innerHTML = '';

        const listItemProvince = document.createElement('li');
        listItemProvince.textContent = `Province: ${foundData.provinsi}`;
        searchResults.appendChild(listItemProvince);

        const listItemCity = document.createElement('li');
        listItemCity.textContent = `City: ${foundData.kota}`;
        searchResults.appendChild(listItemCity);

        const listItemSubdistrict = document.createElement('li');
        listItemSubdistrict.textContent = `Subdistrict: ${foundData.kecamatan}`;
        searchResults.appendChild(listItemSubdistrict);

        const listItemVillage = document.createElement('li');
        listItemVillage.textContent = `Village: ${foundData.desa}`;
        searchResults.appendChild(listItemVillage);
      } catch (error) {
        console.error('Error:', error.message);
        searchResults.innerHTML = `<li>${error.message}</li>`;
      }
    } else {
      searchResults.innerHTML = '<li>Please enter a valid ID</li>';
    }
  });
});
