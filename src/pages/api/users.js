export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify([
      {
        id: 1,
        name: "Renny"
      },
      {
        id: 2,
        name: "pedro"
      },
      {
        id: 3,
        name: "jose"
      },
      {
        id: 4,
        name: "juan"
      },
      {
        id: 5,
        name: "leonard"
      },
      {
        id: 6,
        name: "eduardp"
      },
      {
        id: 7,
        name: "nose"
      },
      {
        id: 8,
        name: "tampoco"
      },
      {
        id: 9,
        name: "menos"
      },
      {
        id: 10,
        name: "ni idea"
      }
    ])
  );
};
