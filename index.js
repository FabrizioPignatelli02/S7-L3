const url = "https://striveschool-api.herokuapp.com/books";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((obj) => {
    console.log("obj", obj);

    obj.forEach((book) => {});
  });
