function main() {
    //using fetch to consume the end point

    const getData = async() => {
        const response = await fetch("https://swapi.dev/api/people");
        const data = await response.json();
        return data
    }
    getData();

    //create a function to render actual data
    const renderData = async() => {
        const rendData = await getData();
        const actualData = rendData.results;
        let html = ""

        //loop over array object to display character card
        actualData.forEach((element) => {
            let htmlSegment = `
            <div class="col-md-4 col-lg-3 position-relative m-4">
            <div class="card" style="max-width: 18rem; height: 10rem;">
            <img src="/images/card-image.webp" class="img-rounded image-shadow position-absolute shadow" alt="star-wars" style="bottom: 2rem; right: -4rem; width: 5rem;"/>
            <div class="card-body">
              <h5 class="card-title fs-6">CHARACTER</h5>
              <details>
              <summary>
                <small class="card-text text-muted d-block">Name: ${element.name}</small>
              </summary>
          
                <small class="card-text text-muted d-block">Gender: ${element.gender}</small>
                <small class="card-text text-muted d-block">Height: ${element.height}</small>
              </details>
            </div>
          </div>
          </div>
         `
         html += htmlSegment
        });
        //select the container to insert the card and display it
        let container = document.querySelector(".charCard");
        container.innerHTML = html;
    }
    renderData();
}
main()

module.exports = { main }
