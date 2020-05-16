import HelloWord from "../components/HelloWord";
import "isomorphic-fetch";
import Error from "next/error";

export async function getStaticProps(query) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); //http://localhost:3000/api/users -> esta api es loca se encuentra dentro de pages7api/user.js
    res.statusCode = 200;
    const users = await res.json();
    return {
      props: {
        users,
        statusCode: (res.statusCode = 200)
      }
    };
  } catch (error) {
    return {
      props: {
        users: null,
        statusCode: (res.statusCode = 503) //esto es para saber que hay un error
      }
    };
  }
}

const Home = props => {
  const { users, statusCode } = props;
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h1>Helvetica Neue Regular</h1>
      <p>abcdefghijklmnñopqrstuvwxyz</p>
      <p>ABCDEFGHIJKLMNÑOPQRSTUVWXYZ</p>
      <HelloWord />
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />;
    </>
  );
};

export default Home;
