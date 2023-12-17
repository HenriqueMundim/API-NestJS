import { Injectable, Post, Body } from '@nestjs/common'

@Injectable()
export class UserService {
    @Post()
    async create(@Body() body) {
        return { body }
    }
}