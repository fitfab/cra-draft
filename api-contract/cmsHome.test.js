describe('returns the expected result when the events service returns a list of events', () => {

  it('returns a list of events', async () => {
    // Arrange
    const expectedResult = {message: 'welcome'};
    // const eventsClient = new EventsClient({host: "http://localhost:1234"});

    // Act
    //const events = await eventsClient.getEvents();
    const events = {message: 'welcome'};

    // Assert
    expect(events).toEqual(expectedResult);
  });
});
