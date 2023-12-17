import { Injectable, Post, Body, Get, Param } from '@nestjs/common'

@Injectable()
export class UserService {
    @Post()
    async create(@Body() body) {
        return { body }
    }

    @Get()
    async read() {
        return { users: [] }
    }

    @Get()
    async readOne(@Param() params) {
        return { user: [] }
    }
}