import NovelModel from "../model/Novel.js";

// POST Requests
export const AddNovel = async (req, res) => {

    const { novelName, novelAuthor, genre, rating, description, publishedBy, noOfPages } = req.body;

    const insertNovel = new NovelModel({
            novelName: novelName,
            novelAuthor: novelAuthor,
            genre: genre,
            rating: rating,
            description: description,
            publishedBy: publishedBy,
            noOfPages: noOfPages,
        });
        if(req.file) {
            insertNovel.backgroundImg = req.file.path
        }
        else if (req.body.backgroundImg) {
            insertNovel.backgroundImg = req.body.backgroundImg
        }
        console.log(insertNovel);
      try {
        const result = await insertNovel.save();
        console.log("Added Novel Successfully");
        res.status(201).json({ success: true, message: "Added Novel Successfully", result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

// GET Requests
export const getNovelBasedOnName = async (req, res) => {
    const { novelName } = req.body;

    const getNovel = {
        novelName: novelName,
    }

    try {
        const result = await NovelModel.find(getNovel);
        console.log("Received Novel SUccessfully");
        res.status(200).json({ success: true, message: "Received Novel SUccessfully", result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const getNovelBasedOnId = async (req, res) => {
    const { id } = req.params;

    const getNovel = {
        id: id,
    }

    try {
        const result = await NovelModel.findById(id);
        console.log("Received Novel Successfully");
        res.status(200).json({ success: true, message: "Received Novel Successfully", result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const getAllNovel = async (req, res) => {  
    try {
        let {result, nextPage, previousPage} = res.pagination
        if (result) {
            console.log("Received Novels Successfully");
            res.status(200).json({ success: true, message: "Received Novels Successfully", nextPage, previousPage, result });
        } else {
            console.log("There are no novels in the DB");
            res.status(200).json({ success: true, message: "DB is Empty", result });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}