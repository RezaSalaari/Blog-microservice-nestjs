import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AdminsModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { BlogsModule } from './blogs/blogs.module';
import { RolesGuard } from './gurad/roles.guard';
import { PostsModule } from './posts/posts.module';
import { PublicModule } from './public/public.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      renderPath: join(__dirname, '', 'views')
    }),
    ConfigModule.forRoot(),
    BlogsModule,
    PostsModule,
    PublicModule,
    UsersModule,
    AuthModule,
    AdminsModule
  ],
  controllers: [AppController],
  providers: [
    AppService, {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }, { useClass: RolesGuard, provide: APP_GUARD }]

})
export class AppModule { }

