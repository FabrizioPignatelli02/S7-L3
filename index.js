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

      const deleteBookButton = document.createElement("button");
      deleteBookButton.classList.add("btn");
      deleteBookButton.classList.add("border-0");
      deleteBookButton.classList.add("p-0");
      deleteBookButton.innerText = "❌";

      const buyBookButton = document.createElement("button");
      buyBookButton.classList.add("btn");
      buyBookButton.classList.add("border-0");
      buyBookButton.classList.add("p-0");
      buyBookButton.innerText = "🛒";

      const divButtonCard = document.createElement("div");
      divButtonCard.classList.add("d-flex");
      divButtonCard.classList.add("justify-content-around");

      divCard.appendChild(imgCard);
      divCard.appendChild(divCardBody);
      divCardBody.appendChild(title);
      divCardBody.appendChild(price);
      divButtonCard.appendChild(buyBookButton);
      divButtonCard.appendChild(deleteBookButton);
      divCardBody.appendChild(divButtonCard);
      library.appendChild(divCard);

      const articleShopping = document.createElement("li");

      const deleteArticleShopping = document.createElement("button");
      deleteArticleShopping.innerText = "❌";

      const dropdownMenu = document.getElementById("dropMenu");

      const titleArticle = document.createElement("p");
      titleArticle.classList.add("lessWord");
      titleArticle.innerText = book.title;

      const priceArticle = document.createElement("p");
      priceArticle.innerText = "€ " + book.price;

      const hr = document.createElement("hr");

      buyBookButton.onclick = () => {
        articleShopping.appendChild(titleArticle);
        articleShopping.appendChild(priceArticle);
        articleShopping.appendChild(deleteArticleShopping);
        articleShopping.appendChild(hr);

        dropdownMenu.appendChild(articleShopping);
      };
      deleteArticleShopping.onclick = () => {
        articleShopping.remove();
      };

      deleteBookButton.onclick = () => {
        divCard.remove();
        articleShopping.remove();
      };
    });
  });
