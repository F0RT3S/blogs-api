module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'posts_categories'
  },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      as: 'blog_posts',
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, // tabela de associação
      as: 'categories',
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategory;
}