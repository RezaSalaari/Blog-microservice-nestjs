import { Transport } from "@nestjs/microservices";
import { ClientProviderOptions } from "@nestjs/microservices";

export const BLOG_MICROSERVICE: ClientProviderOptions = {
  name: 'BLOG_MICROSERVICE',
  transport: Transport.TCP,
  options: {
    port: 8000,
  }
}
