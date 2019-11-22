import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path'; // extname = retorna a extensão do arquivo, resolve = percorre caminho dentro da aplicação

export default {
    // storage -> como o multer vai guardar os arquivos
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'), // passa o caminho da pasta tmp/uploads para o resolve
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) return cb(err);

                return cb(
                    // cb seria a callback
                    null, // o primeiro parâmetro seria o erro, como não queremos exibir o erro, então passamos como null
                    res.toString('hex') + extname(file.originalname) // converte o nome para um conjunto de caracteres hexadecimais para não repetir o arquivo no diretório
                );
            });
        },
    }),
};
