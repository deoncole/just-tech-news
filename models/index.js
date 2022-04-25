// require the data from the User model
const User = require('./User');
// require the data from the Post model
const Post = require('./Post');

// create associations to how the tables will relate to each other setting the user id as the foreign key
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// make the reverse association of the post table to the user table. this says that the post can belong to one user but not many
Post.belongsTo(User, {
    foreignKey: 'user_id',
});  

// export the User & Post object
module.exports = { User, Post };