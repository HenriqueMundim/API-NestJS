import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post()
    create(@Body() body: CreateUserDTO) {
        return this.userService.create(body);
    }

    @Get()
    read() {
        return this.userService.read();
    }

    @Get(':id')
    readOne(@Param('id', ParseIntPipe) id) {
        return this.userService.readOne(id);
    }

    @Put(':id')
    update(@Body() body: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
        return this.userService.update(body, id);
    }

    @Patch(':id')
    updatePatial(@Body() body: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id) {
        return this.userService.updatePartial(body, id);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id) {
        return this.userService.delete(id);
    }
}