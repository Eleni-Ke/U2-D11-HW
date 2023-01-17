const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 563492ad6f91700001000001bb185c4d5cc14cdf8663c54b71f46d55",
  },
};

const getImages = (query) => {
  fetch("https://api.pexels.com/v1/search?query=" + query, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data), modifyCards(data);
    })
    .catch((err) => console.error(err));
};

const modifyCards = (data) => {
  let cardRow = document.querySelector("#cardRow");
  let dataArray = data.photos;
  cardRow.innerHTML = "";
  for (let i = 0; i < dataArray.length; i++) {
    cardRow.innerHTML += `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img
        src=${dataArray[i].src.medium}
        alt="animal picture"
        class="card-img-top"
        width="100%"
        height="225"
        preserveAspectRatio="xMidYMid slice"
      />
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              onclick="this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);"
            >
              Hide
            </button>
          </div>
          <small class="text-muted">ID: ${dataArray[i].id}</small>
        </div>
      </div>
    </div>
  </div>`;
  }
};
