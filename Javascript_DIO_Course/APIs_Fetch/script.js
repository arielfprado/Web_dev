//creating the base URL to make easier to reuse this URL if necessary
const BASE_URL = "https://thatcopy.pw/catapi/rest/";

//definig the button from HTML into the JavaScript file
const catBtn = document.getElementById("change_cat");

//defining the image element from HTML into the JavaScript file
const catImg = document.getElementById("cat");

const getCats = async () => {
    try {
        //creating the fetch to get the information from the API
        const data = await fetch(BASE_URL);
        //converting the string into .json format
        const json = await data.json();

        //The webpurl will be returned because jpeg from url is too large and too slow to load
        return json.webpurl;

        /*another way to execute the same actions:
        const data = await fetch(BASE_URL);
        .then(res => res.json());
        .catch(e => console.log(e.message));
        return data.webpurl*/
    }
    catch (e) {
        console.log(e.message);
    }   
};

const loadImg = async () => {
    //as the getCats function returns the webpurl, the catImg source will be changed to this webpurl
    catImg.src = await getCats();
}

//adding this listener will attribute the function for the button
catBtn.addEventListener("click", loadImg);

//in the first loading of the page, an image already must be called from the API
loadImg();

