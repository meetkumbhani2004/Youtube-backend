import { Router } from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUrl } from "../controllers/user.contoller.js";
import { upload } from "../middleweares/multer.middleweare.js"
import { verifyJWT } from "../middleweares/auth.middleweare.js";

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

router.route("/login").post(loginUser)

//secure routes
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)


export default router