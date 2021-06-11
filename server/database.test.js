const db = require('./database');
beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

// Conversation Tests
test('create conversation', async () => {
    expect.assertions(1);
    const conversation = await db.Conversation.create({
        conversationID: 1,
        title: 'Test Title',
        startDate: new Date('August 19, 1975 23:15:30'),
    });
    expect(conversation.id).toEqual(1);
    // expect(conversation.title).toEqual('Test Title');
});
test('get conversation', async () => {
    expect.assertions(2);
    const conversation = await db.Conversation.findByPk(1);
    expect(conversation.title).toEqual('Test Title');
    expect(conversation.startDate).toEqual(new Date('August 19, 1975 23:15:30'));
});
test('delete conversation', async () => {
    expect.assertions(1);
    await db.Conversation.destroy({
        where: {
            id: 1
        }
    });
    const conversation = await db.Conversation.findByPk(1);
    expect(conversation).toBeNull();
});

// Message Tests
test('create message', async () => {
    expect.assertions(1);
    const message = await db.Message.create({
        messageID: 1,
        conversationID: 1,
        title: 'Test Title',
        startDate: new Date('August 19, 1975 23:15:30'),
    });
    expect(message.id).toEqual(1);
});
test('get message', async () => {
    expect.assertions(2);
    const message = await Message.findAll({ where: { conversationID: 1 } })[0];
    expect(message.title).toEqual('Test Title');
    expect(message.startDate).toEqual(new Date('August 19, 1975 23:15:30'));
});
test('delete message', async () => {
    expect.assertions(1);
    await db.Message.destroy({
        where: {
            id: 1
        }
    });
    const message = await db.Message.findByPk(1);
    expect(message).toBeNull();
});

// TODO: More Messages Tests

// Trying to findAll messages for non-existent conversation associations 
// returns a result with length property of 0

// Thought Tests
test('create thought', async () => {
    expect.assertions(1);
    const thought = await db.Thought.create({
        thoughtID: 1,
        messageID: 1,
        title: 'Test Title',
        startDate: new Date('August 19, 1975 23:15:30'),
    });
    expect(thought.id).toEqual(1);
    // expect(thought.title).toEqual('Test Title');
});
test('get thought', async () => {
    expect.assertions(2);
    const thought = await Thought.findAll({ where: { messageID: 1 } })[0];
    expect(thought.title).toEqual('Test Title');
    expect(thought.startDate).toEqual(new Date('August 19, 1975 23:15:30'));
});
test('delete thought', async () => {
    expect.assertions(1);
    await db.Thought.destroy({
        where: {
            id: 1
        }
    });
    const thought = await db.Thought.findByPk(1);
    expect(thought).toBeNull();
});

// TODO: More Thoughts Tests

// Trying to findAll thoughts for non-existent message associations 
// returns a result with length property of 0

afterAll(async () => {
    await db.sequelize.close();
});
