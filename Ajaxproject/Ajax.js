

$.ajax({

      url:"http://api.icndb.com/jokes/random",

      method: 'GET',

      success:function(data) {

        console.log(data);

        $('#jokeNumber').html('Joke #'+ data.value.id);

        $('#joke').html(data.value.joke);

      }

   });
