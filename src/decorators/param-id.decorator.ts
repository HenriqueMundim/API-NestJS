import { ExecutionContext, ParseIntPipe, createParamDecorator } from "@nestjs/common";

export const ParamId = createParamDecorator((_data: unknown, context: ExecutionContext) => {
    const id = context.switchToHttp().getRequest().params.id
    return new ParseIntPipe().transform(id, ParamId)
})

