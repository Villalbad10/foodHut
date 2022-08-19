export const verProductos = (data, cont) => {
    cont.innerHTML="";
    data.forEach(({ image, title, description, caregory }) => {
        cont.innerHTML += `
    <div class="tarjet">
    <img class="comid" src="${image}" alt="">
    <div class="detalle">
        <img class="user" src="./img/users.png" alt="">
        <img class="sta" src="./img/star.png" alt="">
        <span>(4.5)</span>
    </div>
    <h3>${title}</h3>
    <p>${description}</p>
    <button>Order Now</button>
</div>
    `
    });

}