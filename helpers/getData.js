export const getdata = async () => {
    const data = await fetch(`https://app-restaurant-villa.herokuapp.com/productos`);
    const res = await data.json();
    return res;
}