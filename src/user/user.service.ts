import { Injectable, Post, Get, Patch, Put, Delete } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) { }

    @Post()
    async create({ name, email, password }: CreateUserDTO) {
        return this.prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
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