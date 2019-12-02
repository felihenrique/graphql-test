import { MiddlewareFn } from 'type-graphql';

export const Teste: MiddlewareFn = async ({ args, context, info, root }, next) => {
    console.log(info.fieldNodes[0].selectionSet.selections);
    return next();
};
