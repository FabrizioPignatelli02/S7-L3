const url = "https://striveschool-api.herokuapp.com/books";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
    console.log("obj", obj);

    const library = document.getElementById("library");

    obj.forEach((book) => {
      const divCard = document.createElement("div");
      divCard.classList.add("card");

      const imgCard = document.createElement("img");
      imgCard.classList.add("card-img-top");
      imgCard.src = book.img;

      const divCardBody = document.createElement("div");
      divCardBody.classList.add("card-body");

      const title = document.createElement("h5");
      title.classList.add("card-title");
      title.innerText = book.title;

      const price = document.createElement("p");
      price.classList.add("card-text");
      price.innerText = "€ " + book.price;

      divCard.appendChild(imgCard);
      divCard.appendChild(divCardBody);
      divCardBody.appendChild(title);
      divCardBody.appendChild(price);
      library.appendChild(divCard);
    });
  });
