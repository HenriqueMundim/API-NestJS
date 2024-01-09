import { Injectable, Post, Get, Patch, Put, Delete } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdatePutUserDTO } from './dto/update-put-user.dto'
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto'

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
        return this.prisma.user.findMany()
    }

    @Get()
    async readOne(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    @Put()
    async update(data: UpdatePutUserDTO, id: number) {
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    @Patch()
    async updatePartial(data: UpdatePatchUserDTO, id: number) {
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    @Delete()
    async delete(id) {
        return {
            id
        }
    }

}