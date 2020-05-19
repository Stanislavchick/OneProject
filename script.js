let image = [
    {image: 'gif/1.gif',
        text:'Бахни пенного с кентами, и не забудь купить фисташек.'},
    {image: 'gif/2.gif',
        text:'Закажи пиццы с Delivery! '},
    {image: 'gif/3.gif',
        text:'Займись совокуплением со своей половиной! '},
    {image: 'gif/4.gif',
        text:'Ну тут все просто, иди деградируй на диване.'},
    {image: 'gif/5.gif',
        text:'Пойди пойграй в игруху, займи первое место! '}
];

function imageRandom(arr) {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

let input = document.querySelector('.button');
let text = document.querySelector('.img');
let span = document.querySelector('span');

input.addEventListener('click', function () {
    let randomElement = imageRandom(image);
    smoothly(text, 'src', randomElement.image);
    smoothly(span,'textContent', randomElement.text)
});
console.log(span.textContent);