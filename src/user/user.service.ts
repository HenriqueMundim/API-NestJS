import { Injectable, Post, Get, Patch, Put, Delete } from '@nestjs/common'

@Injectable()
export class UserService {

    @Post()
    async create(body) {
        return { body }
    }

    @Get()
    async read() {
        return { users: [] }
    }

    @Get()
    async readOne(id) {
        return {
            user: [],
            id
        }
    }

    @Put()
    async update(body, id) {
        return {
            method: 'Put',
            body,
            id
        }
    }

    @Patch()
    async updatePartial(body, id) {
        return {
            method: 'Patch',
            body,
            id
        }
    }

    @Delete()
    async delete(id) {
        return {
            id
        }
    }

}