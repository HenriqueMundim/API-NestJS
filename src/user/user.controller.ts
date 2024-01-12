import { Controller, Post, Body, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { ParamId } from "src/decorators/param-id.decorator";

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
    readOne(@ParamId() id) {
        return this.userService.readOne(id);
    }

    @Put(':id')
    update(@Body() body: UpdatePutUserDTO, @ParamId() id) {
        return this.userService.update(body, id);
    }

    @Patch(':id')
    updatePatial(@Body() body: UpdatePatchUserDTO, @ParamId() id) {
        return this.userService.updatePartial(body, id);
    }

    @Delete(':id')
    delete(@ParamId() id) {
        return this.userService.delete(id);
    }
}