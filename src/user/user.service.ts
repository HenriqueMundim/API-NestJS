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
    async readOne(params) {
        return {
            user: [],
            params
        }
    }

    @Put()
    async update(body, params) {
        return {
            method: 'Put',
            body,
            params
        }
    }

    @Patch()
    async updatePartial(body, params) {
        return {
            method: 'Patch',
            body,
            params
        }
    }

    @Delete()
    async delete(params) {
        return {
            params
        }
    }

}