const counter = () => {
  for (let i = 0; i <= 4; i++) {
    setTimeout(() => console.log(i), 1000);
  }
};

counter();

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const updateUsers = users.map((user) => {
  let member = user.id === 2 ? {...user, name: 'hector'}: user
  return member;
});


console.log(updateUsers)