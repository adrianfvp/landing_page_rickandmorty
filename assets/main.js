const content = document.getElementById('content-section');

const apiRick = async (page) => {
    let url = "https://rickandmortyapi.com/api/character/?page="+page;
    const api = await fetch(url); 
    const data = await api.json();
    content.innerHTML = ""
    data.results.map(item => {
        divItem = document.createElement('div')
        divItem.innerHTML = `
        <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <div class="info">
          <h3>${item.name}</h3>
          <h4>${item.status}</h4>
          <h4>${item.species}</h4>
          <h4 class="location">Location</h4>
          <h4>${item.origin.name}</h4>
        </div>
      </div>
      `
      content.appendChild(divItem);
    })
}
apiRick(1)