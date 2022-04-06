const getBreeds =  async () => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const res = await fetch(url);
    const breeds = await res.json();
    console.log(breeds);
    
    return breeds;
}

export default getBreeds;