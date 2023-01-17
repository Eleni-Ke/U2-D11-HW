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
        
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              data-toggle="modal" data-target="#id${dataArray[i].id}Modal"
            >
              View
            </button>
            <div
            class="modal fade"
            id="id${dataArray[i].id}Modal"
            tabindex="-1"
            aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="id${dataArray[i].id}Label">${dataArray[i].id}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                        </div>
                        <div class="modal-body">
                            <img
                            src=${dataArray[i].src.large}
                            alt="animal picture"
                            class="card-img-top"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="xMidYMid slice"
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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

const getForest = () => {
  fetch("https://api.pexels.com/v1/search?query=forest", options)
    .then((response) => response.json())
    .then((forestData) => displayForest(forestData));
};

const displayForest = (forestData) => {
  let carouselInner = document.querySelector("#carouselInner");
  let forestArray = forestData.photos;
  carouselInner.innerHTML = `<div class="carousel-item active"><img src="${forestArray[0].src.large}" class="d-block w-100" alt="forest picture" /></div>`;
  for (let i = 1; i < forestArray.length; i++) {
    carouselInner.innerHTML += `<div class="carousel-item">
    <img src="${forestArray[i].src.large}" class="d-block w-100" alt="..." />
  </div>`;
  }
};

window.onload = () => {
  getForest();
};
