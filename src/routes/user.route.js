import { Router } from "express";
import { registerUrl } from "../controllers/user.contoller.js";
import { upload } from "../middleweares/multer.middleweare.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount:1
        }

    ]),
    registerUrl
)


export default router