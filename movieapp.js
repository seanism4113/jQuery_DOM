$('form').on('click', 'button', function(e){
    e.preventDefault();
    let newTitle = $('#movieTitle').val();
    let newRating = $('#rating').val();
    if (newTitle !== "" && newRating !== "" && newTitle.length > 1 && newRating >= 0 && newRating <= 10){
        const newLi = $('<li></li>').text(`{Title: ${newTitle}, Rating: ${newRating}}`);
        newLi.append($('<button>remove</button>'));
        $('#movieList').append(newLi);
        $('input').val("");
    }
});

$('#movieList').on('click', 'button', function(e){
    e.preventDefault();
    $(this).parent().remove();
});