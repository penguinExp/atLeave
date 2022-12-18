import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSupabase } from './core/supabase';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AtLeave API Docs')
    .setDescription(
      'This APIs are used by, AtLeave Landing Page to communicate with the backend',
    )
    .setVersion('1.0.0')
    .addTag('AtLeave')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    origin: true,
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });

  // Initialising the database client
  initSupabase();

  await app.listen(8888);
}
bootstrap();
