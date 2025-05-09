import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// start server and enable cors
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT ?? 4000;
  await app.listen(port);
}
bootstrap();
