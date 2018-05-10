$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                '<br>'
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="jumbotron jumbotron-fluid">'+
                '<div class="row">' + 
                '<div class="col-xs-6 col-sm-3 col-md-3 col-lg-2"><img src=' + data[i].photo + ' class="thumbnail" /></div>' +
                '<div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 text-center">'  + data[i].name   + 
              '<center>' +data[i].rating + '</center>' +'<center><span class="rating-static rating-'+ data[i].rating*10+'"></span></center>';+'</div>' +'</div>'+'</div>'
               +'</div>'+
              '</a>';
                $('#searchresult').append(row);
            }
        });
    });    
});