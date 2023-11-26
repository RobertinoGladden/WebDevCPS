const dataEndpoint = "https://backend-cps.vercel.app/api"; // Ubah sesuai dengan endpoint yang benar dari API provinsi sampai desa

const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");

btnSearch.onclick = () => {
  fetch(`${dataEndpoint}`) // Mengirim permintaan ke endpoint API provinsi sampai desa
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let elements = "";

      data.forEach((item) => {
        elements += showElement(item);
      });

      container.innerHTML = elements;
    });
};

function showElement(data) {
  return `
    <div class="province">
      <h3>Provinsi: ${data.provinsi}</h3>
      <p>Kota: ${data.kota}</p>
      <p>Kecamatan: ${data.kecamatan}</p>
      <p>Desa: ${data.desa}</p>
    </div>
  `;
}
