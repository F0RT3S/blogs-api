module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true 
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
  });

  Category.associate = (models) => {
   models.blogPost.belongsToMany(models.Category, {
    as: 'categories',
    foreignKey: 'post_id',
    otherKey: 'category_id',
   });

   models.Category.belongsToMany(models.blogPost, {
    as: 'blog_posts',
    foreignKey: 'post_id',
    otherKey: 'category_id',
   });
  };

  return Category;
};