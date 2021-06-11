const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    }
);

class Conversation extends Sequelize.Model { }
Conversation.init({
    // Model attributes are defined here
    conversationID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    startDate: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Conversation' // We need to choose the model name
});

class Message extends Sequelize.Model { }
Message.init({
    // Model attributes are defined here
    messageID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    startDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Message' // We need to choose the model name
});

class Thought extends Sequelize.Model { }
Thought.init({
    // Model attributes are defined here
    thoughtID: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
        // allowNull defaults to true
    },
    startDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Thought' // We need to choose the model name
});

// In a One-To-Many relationship: ON DELETE defaults to SET NULL and ON UPDATE defaults to CASCADE.
// per https://sequelize.org/master/manual/assocs.html

Conversation.hasMany(Message);
Message.belongsTo(Conversation, {
    foreignKey: 'conversationID'
});
Message.hasMany(Thought);
Thought.belongsTo(Message, {
    foreignKey: 'messageID'
});

// TODO: Add mock data when initializing database / performing migration so the table is not empty intitially

module.exports = {
    sequelize: sequelize,
    Conversation: Conversation,
    Message: Message,
    Thought: Thought
};
