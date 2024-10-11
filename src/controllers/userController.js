
exports.getAllUsers = (req, res) => {
    const users = [{name: 'gustavo', id:0}, {name: 'jazinel', id:1}, {name: 'matias', id:2}];
    res.status(200).json(users); 
};