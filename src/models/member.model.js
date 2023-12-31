module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: sequelize.models.Project,
          key: "id",
        },
      },
      permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: sequelize.models.Permission,
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: sequelize.models.User,
          key: "id",
        },
      },
    },
    {
      tableName: "members",
    },
  );
  Member.associate = (model) => {
    Member.belongsTo(model.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
    });
    Member.belongsTo(model.Project, {
      foreignKey: "projectId",
      as: "project",
      onDelete: "CASCADE",
    });
    Member.belongsTo(model.Permission, {
      foreignKey: "permissionId",
      as: "permission",
    });
  };

  return Member;
};
