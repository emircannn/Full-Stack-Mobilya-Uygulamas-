import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const port = process.env.PORT || 3100;
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('/api');
    await app.listen(port, () => {
        console.log(`listening on ${port}, mode: ${process.env.NODE_ENV}`);
    });
}
bootstrap();
