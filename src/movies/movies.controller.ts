import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

//4행에서 /movies url로 해주어야한다. 즉 엔트리포인트 역할(라우터 역할)
@Controller('movies')
export class MoviesController {
    //import하는 부분도 수동으로 되는 게 아니라 실제적으로 작성을 해줘야한다.
    constructor(private readonly moviesService: MoviesService) { }

    // GET의 이부분은 express.js의 어플리케이션 라우터
    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll();
    }

    //서치의 위치가 밑에 있는 GET보다 위에 있어야한다. 그래야만 잘 작동이 된다 
    // /search?year=2000
    // @Get("search")
    // search(@Query("year") searchingYear: string) {
    //     return `We are seacrhing for a moive with a made after: ${searchingYear}`
    // }

    //키포인트는 id의 값을 받는다
    //nextjs는 요청을 하려면 우리가 작성해줘야한다.
    //즉 @Param을 요청하는 부분이다.
    //그리고 데코레이터에 있는 라우터메소드 이름과 파람의 아이디가 같아야한다.

    //@Param('id') 값을 가져온다.
    @Get("/:id")
    getOne(@Param('id') movieId: number): Movie {
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData)
    }
    //url 에서 id를ㄹ 가져와서 movieId라는 string 타입의 변수에 저장
    @Delete("/:id")
    remove(@Param('id') movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch("/:id")
    pacth(@Param('id') movieId: number, @Body() updateData) {
        return this.moviesService.update(movieId, updateData)
    }



}
