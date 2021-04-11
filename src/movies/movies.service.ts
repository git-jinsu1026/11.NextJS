import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    //Movie[] 타입을 작성해준다.
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        const movie = this.movies.find(movie => movie.id === +id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID: ${id}`);
        }
        return movie
    }

    // deleteOne(id: string): boolean {
    //     this.movies.filter(movie => movie.id !== +id);
    //     return true;
    // }
    deleteOne(id: string) {
        this.getOne(id);
        this.movies.filter(movie => movie.id !== +id);
    }


    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    //데이터베이스를 사용하지 않는 점을 토대로
    // 우선 하나의 데이터를 가져온다
    // 데이터를 가져온거를 기존 데이터를 삭제
    // 삭제된 데이터를 새로운 데이터에 넣어준다.
    update(id: string, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({ ...movie, ...updateData });
    }

}
