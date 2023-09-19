function populateBrands() {
  const brandSelect = document.getElementById("brand");

  fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand.codigo;
        option.text = brand.nome;
        brandSelect.appendChild(option);
      });
    });
}

function populateModels(brandCode) {
  const modelSelect = document.getElementById("model");

  while (modelSelect.firstChild) {
    modelSelect.removeChild(modelSelect.firstChild);
  }

  fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`
  )
    .then((response) => response.json())
    .then((data) => {
      data.modelos.forEach((model) => {
        const option = document.createElement("option");
        option.value = model.codigo;
        option.text = model.nome;
        modelSelect.appendChild(option);
      });
    });
}

populateBrands();

document.getElementById("brand").addEventListener("change", function () {
  const selectedBrand = this.value;
  if (selectedBrand !== "select") {
    populateModels(selectedBrand);
  }
});

document.getElementById("model").addEventListener("change", function () {
  const selectedBrand = document.getElementById("brand").value;
  const selectedModel = this.value;
  if (selectedBrand !== "select" && selectedModel !== "select") {
    populateYears(selectedBrand, selectedModel);
  }
});

function populateYears(brandCode, modelCode) {
  const yearSelect = document.getElementById("year");

  while (yearSelect.firstChild) {
    yearSelect.removeChild(yearSelect.firstChild);
  }

  fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${modelCode}/anos`
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((year) => {
        const option = document.createElement("option");
        option.value = year.codigo;
        option.text = year.nome;
        yearSelect.appendChild(option);
      });
    });
}
