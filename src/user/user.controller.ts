import { Controller, Post, Body, Get, Param, Put, Patch } from "@nestjs/common";
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
        return this.userService.read();
    }

    @Get(':id')
    readOne(@Param() params) {
        return this.userService.readOne(params);
    }

    @Put(':id')
    update(@Body() body, @Param() params) {
        return this.userService.update(body, params);
    }

    @Patch(':id')
    updatePatial(@Body() body, @Param() params) {
        return this.userService.updatePartial(body, params);
    }
}