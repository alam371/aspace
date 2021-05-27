import Products from "./Products";
import styles from "./Main.module.css";
import { useState, useEffect } from 'react';

function Main({ handleClick, count }) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // const nasaAPIKey = `JKrYOKMNCsHxZ5tuUYVyD2CYR1yoXgeS7Wx059wb`;
    // const nasaAPIKey2 = `9eh7z2yurqfS1OMQJYlblHfTgkx0E9duuAkemvgy`;
    // const startDate =`2020-09-10`;
    // const endDate =`2020-09-19`;
    // const apiCall = "https://api.nasa.gov/planetary/apod?api_key=JKrYOKMNCsHxZ5tuUYVyD2CYR1yoXgeS7Wx059wb&start_date=2020-09-10&end_date=2020-09-19";
    // const myAPICall = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}&start_date=${startDate}&end_date=${endDate}`;
    // const demoCall = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
    // const pokemonAPI = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`;

    // mock data
    // const someData = [
    //     {copyright: "Andrea Alessandrini",
    //         date: "2020-07-08",
    //         explanation: "What is that fuzzy streak extending from Mercury? …round the Globe: Notable Images Submitted to APOD",
    //         hdurl: "https://apod.nasa.gov/apod/image/2007/MercuryTail_Alessandrini_1804.jpg",
    //         media_type: "image", title: "Mercury's Sodium Tail",
    //         url: "https://apod.nasa.gov/apod/image/2007/MercuryTail_Alessandrini_960.jpg"},
    //     {copyright: "Emmanuel Paoly",
    //         date: "2020-07-09",
    //         explanation: "These silvery blue waves washing over a tree-lined… a clear location above the northeastern horizon.",
    //         hdurl: "https://apod.nasa.gov/apod/image/2007/noctilucentNeowisePaoly.jpg",
    //         media_type: "image",
    //         title: "Noctilucent Clouds and Comet NEOWISE",
    //         url: "https://apod.nasa.gov/apod/image/2007/noctilucentNeowisePaoly600h.jpg"},
    //     {copyright: "it was missing",
    //         date: "2020-07-10",
    //         explanation: "Rounding the Sun on July 3rd and currently headed …Earth's Surface: Notable Images Submitted to APOD",
    //         hdurl: "https://apod.nasa.gov/apod/image/2007/ISS063-E-39888.JPG",
    //         media_type: "image", service_version: "v1",
    //         title: "Comet NEOWISE from the ISS",
    //         url: "https://apod.nasa.gov/apod/image/2007/ISS063-E-39888_APOD1050.jpg"}];

    useEffect(() => {
        async function fetchMyData() {
            try {
                setIsLoaded(true);
                const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=JKrYOKMNCsHxZ5tuUYVyD2CYR1yoXgeS7Wx059wb&start_date=2020-09-10&end_date=2020-09-19');
                const apiData = await response.json();
                //const apiData = await response;
                setData(apiData);
                console.log('apiData', apiData);
            } catch (err) {
                setError(err)
                setIsLoaded(false);
                throw err;
            }
        }

        fetchMyData();
    },[]);


    return (
        <main className={styles.main} count={count} handleClick={handleClick}>
            {error ? ( !isLoaded ? <div>Loading...</div> : <div>Error: {error.message}</div> ) : <Products items={data} handleClick={handleClick}/>}
        </main>
    )

}

export default Main;