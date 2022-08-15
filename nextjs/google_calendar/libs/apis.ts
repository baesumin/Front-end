export const exampleApi = {
  getData: () =>
    fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
      res.json(),
    ),
}
