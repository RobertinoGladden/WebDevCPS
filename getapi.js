const dataEndpoint = "https://backend-a1mv0rjx6-robertinogladden.vercel.app/api/.";

const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");
const inputId = document.querySelector(".keyword");

btnSearch.onclick = () => {
  const keyword = keywordInput.value;
  fetch(`${dataEndpoint}/./${keyword}`)
    .then((res) => res.json())
    .then((data) =>{
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
