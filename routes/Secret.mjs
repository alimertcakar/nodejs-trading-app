import express from "express";
const router = express.Router();


//sadece test amaçlı. auth control yapılmadı.
router.get("/", (req, res) => {
    if (req.session.passport) {
        res.send("Giriş Başarılı! Anasayfadan devam edebilirsin.")
    }
    else {
        res.send("Giriş Başarısız. Kullanıcı adı şifreni kontrol et.")
    }
})



export default router;