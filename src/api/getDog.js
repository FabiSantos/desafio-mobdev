const getDog = async (breedId) => {
    console.log('breeeed', breedId);
    const url = !breedId || breedId === 0
        ? "https://api.thedogapi.com/v1/images/search"
        : "https://api.thedogapi.com/v1/images/search?breed_ids=" + breedId;

    console.log(url);
    const res = await fetch(url);

    const [data] = await res.json();

    let { url: image, breeds: [breed] } = data;

    if (!breed) {
        breed = {
            id: 0,
            name: 'au-au Random'
        }
    }

    const dog = {
        image,
        breed,
    }
    console.log(dog);

    return dog;
}


export default getDog;