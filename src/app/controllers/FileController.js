import File from '../models/File';

class FileController {
    async store(req, res) {
        // return res.json(req.file); // quando usado o middleware upload.single('file') na rota, ele libera o req.file ou req.files se for mais de um arquivo no upload

        // originalname e filename vem do eq.file
        // name e path vem dos nomes dos campos na tabela
        const { originalname: name, filename: path } = req.file;

        const file = await File.create({
            name,
            path,
        });

        return res.json(file);
    }
}

export default new FileController();
