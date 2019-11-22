import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
    async index(req, res) {
        const isProvider = await User.findOne({
            where: {
                id: req.userId,
                provider: true,
            },
        });

        if (!isProvider) {
            return res.json({
                error: 'Only providers can load notifications',
            });
        }

        const notifications = await Notification.find({
            user: req.userId,
        })
            .sort({ createdAt: 'desc' }) // No mongo db os campo são criados em camel case
            .limit(20);

        return res.json(notifications);
    }

    async update(req, res) {
        // const notification = await Notification.findById(req.params.id);

        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true } // new : true -> para retornar o novo registro atualizado
        );

        return res.json(notification);
    }
}

export default new NotificationController();
