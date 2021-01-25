page = 0

animeList(page);
findAnime(page)

document.getElementById('nextpage').addEventListener('click', function(){
    $("#mainpage").empty()
    page+=1
    animeList(page);
})

document.getElementById('preivouspage').addEventListener('click', function(){
    if (page > 0){
        $("#mainpage").empty()
        page-=1
        animeList(page);
    }
    else{
        $("#mainpage").empty()
        animeList(page);
    }
})



function findAnime(page){
    document.getElementById('search-btn').addEventListener('click', function(){
        $("#mainpage").empty()
        const searchdata = document.getElementById('search-txt').value
        convertedData = searchdata.replace(/\s/g,"%20")
        fetch("https://kitsu.io/api/edge/anime?filter[text]="+searchdata)
        .then(res=>res.json())
        .then(newdata=>{
            for (i=0;i<newdata["data"].length;i++){
                console.log(newdata["data"][i]);
                console.log("in loop: "+i)
                createDiv(newdata["data"][i])
            }
            function createDiv(anime){
                // variables needed for div
                let anime_id = anime["id"]
                let en_title = anime["attributes"]['canonicalTitle']
                let jp_title = anime["attributes"]['titles']['ja_jp']
                let age_rating = anime["attributes"]["ageRating"]
                let age_Rguide = anime["attributes"]["ageRatingGuide"]
                let coverImageLink = anime["attributes"]["posterImage"]["original"]
                let air_date = anime["attributes"]["startDate"]
                let status = anime["attributes"]["status"]
    
                // creating div
                animeDiv = document.createElement('div');
                animeDiv.classList.add('anime-card')
                animeDiv.id = 'animeId';
                animeDiv.innerHTML = "\
                <h3>"+anime_id+"</h3>\
                <h1>"+en_title+"</h1>\
                <h2>"+jp_title+"</h2>\
                <img src='"+coverImageLink+"' alt='anime-cover-picture'>\
                <h3>Air Date: "+air_date+"</h3>\
                <h3>Status: "+status+"</h3>\
                <h3>Age Rating: "+age_rating+"</h3>\
                <h3>Age Guide: "+age_Rguide+"</h3>\
                ";
                $(".page").append(animeDiv);
                document.getElementById("animeId").onclick = function() {directLink()};
                function directLink(){
                    console.log("hi")
                    let slug = anime["attributes"]["slug"]
                    location.replace("https://kitsu.io/api/edge/anime/"+slug)
                }
            }
        })
        $(".button-container").empty()
    })
}




function animeList(page){
    fetch("https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]="+5*page)
    .then(res=>res.json())
    .then(data=>{
        for (i=0;i<data["data"].length;i++){
            console.log(data["data"][i]);
            console.log("in loop: "+i)
            createDiv(newdata["data"][i])
        }
        function createDiv(anime){
            // variables needed for div
            let anime_id = anime["id"]
            let en_title = anime["attributes"]['canonicalTitle']
            let jp_title = anime["attributes"]['titles']['ja_jp']
            let age_rating = anime["attributes"]["ageRating"]
            let age_Rguide = anime["attributes"]["ageRatingGuide"]
            let coverImageLink = anime["attributes"]["posterImage"]["original"]
            let air_date = anime["attributes"]["startDate"]
            let status = anime["attributes"]["status"]
            let slug = anime["attributes"]["slug"]
            // creating div
            animeDiv = document.createElement('div');
            animeDiv.classList.add('anime-card');
            animeDiv.id = 'animeId';
            animeDiv.innerHTML = "\
            <h3>"+anime_id+"</h3>\
            <h1>"+en_title+"</h1>\
            <h2>"+jp_title+"</h2>\
            <img src='"+coverImageLink+"' alt='anime-cover-picture'>\
            <h3>Air Date: "+air_date+"</h3>\
            <h3>Status: "+status+"</h3>\
            <h3>Age Rating: "+age_rating+"</h3>\
            <h3>Age Guide: "+age_Rguide+"</h3>\
            <h3>Anime Website ".link("https://kitsu.io/anime/"+slug)+"</h$ git clone --mirror git3>\
            ";
            $(".page").append(animeDiv);
        }
        
    })    
}