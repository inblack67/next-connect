import nextConnect from 'next-connect';

export default nextConnect({
  onNoMatch(req, res) {
    return res.status(400).json({ success: false });
  }
})
  .get((req, res) => {
    res.send('API up and running');
    res.end();
  }).post((req, res) => {
    throw new Error('Server error');
  })