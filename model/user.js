// In-memory database for simplicity
let users = [
    { _id: '1', email: 'test@example.com', username: 'testuser', password: 'password123' }
];

class User {
    static findOne(query) {
        const user = users.find(u => u.email === query.email);
        return Promise.resolve(user);
    }

    static findById(id) {
        const user = users.find(u => u._id === id);
        return Promise.resolve(user);
    }
}

module.exports = User;
