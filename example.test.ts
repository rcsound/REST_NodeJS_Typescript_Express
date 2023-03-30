test("example", () => {
    const mock = jest.fn()
    console.log(mock)

    mock()

    expect (mock).toHaveBeenCalled();
})