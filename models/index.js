const User = require('./User');
const post = require('./Post');

User.hasMany(post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, post };