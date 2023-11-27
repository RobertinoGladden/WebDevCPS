const dataEndpoint = "https://backend-a1mv0rjx6-robertinogladden.vercel.app/api/";

const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");
const inputId = document.querySelector("#input-id");

btnSearch.onclick = async () => {
  try {
    const id = inputId.value; // Mendapatkan ID dari input field
    const response = await fetch(`${dataEndpoint}${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log(data); // Menampilkan data di konsol

    container.innerHTML = showElement(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = "<p>Data not found.</p>";
  }
};

function showElement(data) {
  if (!data) return "<p>Data not found.</p>";

  return `
    <div class="province">
      <h3>Provinsi: ${data.provinsi}</h3>
      <p>Kota: ${data.kota}</p>
      <p>Kecamatan: ${data.kecamatan}</p>
      <p>Desa: ${data.desa}</p>
    </div>
  `;
}
