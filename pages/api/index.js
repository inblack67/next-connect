import nextConnect from 'next-connect';
import handler from '../../src/handler'

export default handler.get((req, res) => {
  return res.status(200).json({ success: true, msg: 'API up and running' })
})
  .post((req, res) => {
    throw new Error('Server error');
  })