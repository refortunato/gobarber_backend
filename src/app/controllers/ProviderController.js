import User from '../models/User';
import File from '../models/File';

class ProviderController {
    async index(req, res) {
        const providers = await User.findAll({
            where: { provider: true },
            attributes: ['id', 'name', 'email', 'avatar_id'], // Para trazer apenas esses campos no json
            include: [
                {
                    model: File,
                    as: 'avatar',
                    attributes: ['name', 'path', 'url'],
                },
            ], // Relacionamentos
        });

        return res.json(providers);
    }
}

export default new ProviderController();
