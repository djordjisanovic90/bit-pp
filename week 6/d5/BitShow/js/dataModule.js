
var dataModule = (function () {

    //ajax 
    const allShowsUrl = 'http://api.tvmaze.com/shows';
    $(function () {
        var request = $.get(allShowsUrl);
        request.done(function (response) {
            console.log(response);
            for (var i = 0; i < 50; i++) {
                var show_name = response[i].name;
                var image = response[i].image.medium;
                var eN = image + show_name;
                var entity = $('#content');

                console.log(show_name);
                entity.append(item);

                var item = $('<div class="card" style="width: 18rem;">' +
                    '<img class="card-img-top" src="' + image + '" alt="Card image' + 'cap">' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + show_name + '</p>' +
                    '</div>' +
                    '</div>')
            }
        });




    });

    $("#search").on('keyup', function () {



        var searchValue = $("#search").val();
        var showUrl = "http://api.tvmaze.com/search/shows?q=";
        var searchShowUrl = showUrl + searchValue;
        var request = $.get(searchShowUrl);

        request.done(function (response) {
            
            
            for (i = 0; i < response.length; i++) {
                var entity = $('#content');
                var entity2 = $('#content');
                var show_name = response[i].show.name;
                var image = response[i].show.image.medium;

                var item2 = $('<div class="card" style="width: 18rem;">' +
                    '<img class="card-img-top" src="' + image + '" alt="Card image' + 'cap">' +
                    '<div class="card-body">' +
                    '<p class="card-text">' + show_name + '</p>' +
                    '</div>' +
                    '</div>')

                console.log(response);
                entity.remove(item);
                entity2.append(item2);

            }
        });
    });

    // save id of each option !!!!!!!!!!!!!!!!!



    //tv shows constructor

    //show constructor


    //$('#content').value();


})();