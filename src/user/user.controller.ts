import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() body) {
        return this.userService.create(body);
    }

    @Get()
    read() {
        return this.userService.read()
    }

    @Get(':id')
    readOne(@Param() params) {
        return this.userService.readOne(params)
    }
}