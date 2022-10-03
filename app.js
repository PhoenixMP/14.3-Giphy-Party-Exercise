const imgStyle = {
    'width': 'auto',
    'height': '300px'
}
const formStyle = {
    'text-align': 'center',
    'padding-bottom': '50px'
}
const titleStyle = {
    'color': 'white',
    'text-align': 'center',
    'font-size': '70px',
    'border-color': 'pink',
    'font-family': '"Lucida Console", "Courier New", "monospace"'
    
}

const buttonStyle = {
    'background-color': 'pink',
    'color': 'white',
    'border-color': 'pink',
    'margin': 'auto',
    'font-size': '20px'
}

$('body').css('background-color', '#36454F');
$('h1').css(titleStyle);
$('form').css(formStyle);
$('input').css("padding","5px")
$('button').css(buttonStyle).hover(function () {
    $(this).css("background-color", "white").css('color','pink');
}, function () {
    $(this).css("background-color", "pink").css('color', 'white');
}
)



const giphyAPIKey = 'GnYgkPVE7falIKf6255estySOZ392eKa';

async function getGif(api_key, q) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { api_key, q } });
    const index = Math.floor(Math.random() * res.data.data.length);
    return res.data.data[index].images.original.url;
}

$("#submit").on("click", async function (e) {
    e.preventDefault();
    const imgSRC = await getGif(giphyAPIKey, $('#search-word').val());
    $('#search-word').val('');
    $(`<img src=${imgSRC}>`).appendTo('#gifs');
    $('img').css(imgStyle);

  });

$('#remove').on("click", function (e) {
    e.preventDefault();
    $('img').remove();
})