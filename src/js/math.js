function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
}

export default getRandomInt();