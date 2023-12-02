import NovelModel from "../model/novel.js";

export const AddNovel = async (req, res) => {

    const { novelName, novelAuthor, genre, rating } = req.body;

    const insertNovel = new NovelModel({
            novelName: novelName,
            novelAuthor: novelAuthor,
            genre: genre,
            rating: rating
        });
      try {
        const result = await insertNovel.save();
        console.log("Added Novel Successfully");
        res.status(201).json({ success: true, message: "Added Novel Successfully", result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const getNovelBasedOnName = async (req, res) => {
    const { novelName } = req.body;

    const getNovel = {
        novelName: novelName,
    }

    try {
        const result = await NovelModel.find(getNovel);
        console.log("Recived Novel SUccessfully");
        res.status(200).json({ success: true, message: "Recived Novel SUccessfully", result });
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
        console.log("Recived Novel Successfully");
        res.status(200).json({ success: true, message: "Recived Novel SUccessfully", result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const getAllNovel = async (req, res) => {
    try {
        const result = await NovelModel.find();
        console.log("Recieved Novels Successfully");
        res.status(200).json({ success: true, message: "Recieved Novels Successfully", result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}