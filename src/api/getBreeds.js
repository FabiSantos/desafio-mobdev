const getBreeds =  async () => {
    const url = "https://dog.ceo/api/breeds/list/all";
    const res = await fetch(url);
    const breeds = await res.json();
    console.log('breedsaaaaaa',breeds.message);

    
    return breeds.message;
}

export default getBreeds;