export default function pagenation(model) {
    return async (req, res, next) => {
        const limitValue = parseInt(req.query.limit);
        const pageValue = parseInt(req.query.page);
        let result = {} 

        const startIndex = (pageValue - 1) * limitValue;
        const endIndex = pageValue * limitValue;

        if (endIndex < await model.countDocuments().exec()) {
            result.nextPage = {
                page: pageValue + 1,
                limit: limitValue
            }
        }    
        if(startIndex > 0) {
            result.previousPage = {
                page: pageValue - 1,
                limit: limitValue
            }
        }    
        try {
            result.result = await model.find().limit(limitValue).skip(startIndex).exec();
            res.pagination = result
            next();
        } catch (e) {
            res.status(500).json({ message: e.message });
        }    

    }
}