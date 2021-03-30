import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  movies = [
    { title: 'The Incredibles', year: 2004, director: 'Brad Bird', gender: 'Animation', description: 'A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.', cover: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { title: 'Finding Nemo', year: 2003, director: 'Andrew Stanton', gender: 'Animation', description: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.', cover: 'https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { title: 'Toy Story', year: 1995, director: 'John Lasseter', gender: 'Animation', description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.', cover: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { title: 'Zack Snyder\'s Justice League', year: 2021, director: 'Zack Snyder', gender: 'Action', description: 'Determined to ensure Superman\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.', cover: 'https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg' },
    { title: '50 First Dates', year: 2004, director: 'Peter Segal', gender: 'Comedy', description: 'Henry Roth is a man afraid of commitment until he meets the beautiful Lucy. They hit it off and Henry think he\'s finally found the girl of his dreams until discovering she has short-term memory loss and forgets him the next day.', cover: 'https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_UX182_CR0,0,182,268_AL_.jpg' },
  ]
}
