import Card from '../models/Card';

export default async (req, res, next) => {
  const { id } = req.params;
  const card = await Card.findByPk(id);

  if (!card) {
    res.json({ error: 'Card not found.' });
  }
  req.card = card;

  next();
};
