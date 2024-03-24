// ---------- portfolio project start ------------
function loadPortfolio(){
    fetch('../Data/data.json')
    .then(res => res.json())
    .then(data => displayProject(data))
}
loadPortfolio();

function displayProject(data) {
    const myproject = document.getElementById('projects')

    for(const protfolio of data){
        const div = document.createElement('div');
        div.innerHTML = `
      
        <div class="shadow pb-4 mb-4">
        <div class="item" style="height: 320px; overflow: hidden;">
        <img src="${protfolio.images}" class="img-fluid mb-4 w-full  rounded" alt="" >
      </div>
       </div>
        `;
        myproject.appendChild(div);
    }
}