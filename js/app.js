import {Api_key} from '../js/api_key.js'

const container = document.querySelector('.container')
const container_Geral = document.querySelector('.container_Geral')

function fetchMovie () {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(json => fetchElement(json))
}

function repeat(number){
    for(let i =1; i <= number; i++){
        fetchMovie(i)
    }
}

function fetchElement(json) {
    const image_path = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
   
    json.results.forEach(element => {
        const image_path = 'https://image.tmdb.org/t/p/w200'
        const container_Geral = document.querySelector('.container_Geral')

        const container = document.createElement('div')
        container.classList.add('container')
        
        const content = document.createElement('div')
        content.classList.add('content')
    
        const divImg = document.createElement('div')
        divImg.classList.add('img')

    
        const img = document.createElement('img')
        divImg.appendChild(img)
        img.src= `${image_path}${element.poster_path}`

        const span = document.createElement('span')
        span.classList.add('span')
        span.textContent = element.vote_average
        

        const titles = document.createElement('div')
        titles.classList.add('tittles')

        titles.appendChild(span)
    
        const title = document.createElement('div')
        title.classList.add('title')
        title.textContent = element.original_title
    
        const subtitle = document.createElement('div')
        subtitle.textContent = element.release_date
        subtitle.classList.add('subtitle')
    
        titles.appendChild(title)
        titles.appendChild(subtitle)
        container.appendChild(divImg)
        content.appendChild(titles)
        container.appendChild(content)
        container_Geral.appendChild(container)

    });
}

repeat(1)



