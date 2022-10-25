'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'blogcle_posts',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _DataTypes) => {
    await queryInterface.dropTable('posts_categories');
  },
};
