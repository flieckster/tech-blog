const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//force heroku

class Comment extends Model { }

// create fields/columns for comment model
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,

    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment

//// comment model