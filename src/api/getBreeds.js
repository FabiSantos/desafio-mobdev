const url = "https://dog.ceo/api";
const getBreeds = async () => {
    const res = await fetch(`${url}/breeds/list/all`);
    const breeds = await res.json();
    return breeds.message;
};
const getDogImages = async (breedName) => {
    const res = await fetch(`${url}/breed/${breedName}/images`);
    const images = await res.json();
    return images.message;
}
export { getBreeds, getDogImages };
