import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //pipe 파이프 즉 우리가 expree.js에서 사용되던 미들웨어의 개념 소스가 지나갈 때 유효성 검사
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true, // 리퀘스트 요청부터 보호 해주는 옵션
    transform: true, //NextJS는 타입을 받아서 넘겨줄 때 자동으로 타입도 변환해 준다. 리퀘스트할 때마다 실제 타입으로 변환해준다.
  }))

  await app.listen(3000);
}
bootstrap();
