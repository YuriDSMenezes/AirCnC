const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({ //forma como vai armazernas os uploads
        destination: path.resolve(__dirname,'..',"..","uploads"), //pasta que serão salvas as fotos / resolve para voltar paginas
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    }),
}