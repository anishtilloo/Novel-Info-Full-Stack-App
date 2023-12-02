import path from "path"
import multer from 'multer'
import { error } from "console"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(error, 'uplodes/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    }
})