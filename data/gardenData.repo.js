module.exports = {

    save: async (ctx, next) => {

        //todo save
        const { gardenData } = ctx.request.body;

        next();
    }
}