import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

//4행에서 /movies url로 해주어야한다. 즉 엔트리포인트 역할(라우터 역할)
@Controller('movies')
export class MoviesController {

    // GET의 이부분은 express.js의 어플리케이션 라우터
    @Get()
    getAll() {
        return "this will return movies";
    }

    //키포인트는 id의 값을 받는다
    //nextjs는 요청을 하려면 우리가 작성해줘야한다.
    //즉 @Param을 요청하는 부분이다.
    //그리고 데코레이터에 있는 라우터메소드 이름과 파람의 아이디가 같아야한다.

    //@Param('id') 값을 가져온다.
    @Get("/:id")
    getOne(@Param('id') movieId: string) {
        return `this will return one Movie ${movieId}`
    }

    @Post()
    create() {
        return 'This will create a movie';
    }
    //url 에서 id를ㄹ 가져와서 movieId라는 string 타입의 변수에 저장
    @Delete("/:id")
    remove(@Param('id') movieId: string) {
        return `This vill delete a moive with the id :${movieId}`
    }

    @Put('/:id')
    pacth(@Param('id') movieId: string) {
        return `This will pacth a movice with the id: ${movieId}`
    }

}
