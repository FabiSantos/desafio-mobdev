const getDogImages = async (breedName) => {
    console.log('breedName',breedName);


        const url = `https://dog.ceo/api/breed/${breedName}/images`;
        const res = await fetch(url);
        const images = await res.json();
        console.log('images',images.message);
    
        return images.message;
}


export default getDogImages;