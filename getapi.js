const dataEndpoint = "http://localhost:3000/api"; // Ubah sesuai dengan endpoint yang benar dari API provinsi sampai desa

const keywordInput = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");

btnSearch.onclick = () => {
  const keyword = keywordInput.value;
  fetch(`${dataEndpoint}/${keyword}`) // Mengirim permintaan ke endpoint API berdasarkan ID
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      container.innerHTML = showElement(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      container.innerHTML = "<p>Data not found.</p>";
    });
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
