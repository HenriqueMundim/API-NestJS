import { Controller, Post, Body, Get, Param, Put, Patch, Delete } from "@nestjs/common";
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
    readOne(@Param() params) {
        return this.userService.readOne(params);
    }

    @Put(':id')
    update(@Body() body: UpdatePutUserDTO, @Param() params) {
        return this.userService.update(body, params);
    }

    @Patch(':id')
    updatePatial(@Body() body: UpdatePatchUserDTO, @Param() params) {
        return this.userService.updatePartial(body, params);
    }

    @Delete(':id')
    delete(@Param() params) {
        return this.userService.delete(params);
    }
}