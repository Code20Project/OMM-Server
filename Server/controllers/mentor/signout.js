module.exports = {
    get: (req, res) => {
        console.log('/mentor/signout');
        res.json({ message: 'ok!' });
    },
};
