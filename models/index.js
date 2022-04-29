// require the data from the User model
const User = require('./User');
// require the data from the Post model
const Post = require('./Post');
// require the data from the Vote model
const Vote = require('./Vote');
// require the data from the Comment model
const Comment = require('./Comment');

// create associations to how the tables will relate to each other setting the user id as the foreign key
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

// make the reverse association of the post table to the user table. this says that the post can belong to one user but not many
Post.belongsTo(User, {
    foreignKey: 'user_id',
}); 

User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });
  
  Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
  });

Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

// export the User & Post object
module.exports = { User, Post, Vote };