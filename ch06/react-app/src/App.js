import "./App.css";
import { useState, useEffect } from "react";

// function GithubUser({ name, bio, avatar }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <img src={avatar} height={150} alt={name} />
//       <p>{bio ? bio : "No bio"}</p>
//     </div>
//   );
// }

// // handle loading states when fetching
// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://api.github.com/users/tungolra`)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);
//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//   if (!data) return null;

//   return (
//     <GithubUser name={data.login} bio={data.bio} avatar={data.avatar_url} />
//   );
// }

// // fetch data from a GraphQL API
// const query = `
// query {
//   allLifts {
//     name
//     elevationGain
//     status
//   }
// }
// `;

// // specify headers and body for POST request
// const opts = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query }),
// };

// function Lift({ name, elevationGain, status }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>
//         {elevationGain} {status}
//       </p>
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://snowtooth.moonhighway.com/`, opts)
//       .then((response) => response.json())
//       .then(setData)
//       .then(() => setLoading(false))
//       .catch(setError);
//   }, []);

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error)}</pre>;
//   if (!data) return null;

//   return (
//     <div>
//       {data.data.allLifts.map((lift) => (
//         <Lift
//           name={lift.name}
//           elevationGain={lift.elevationGain}
//           status={lift.status}
//         />
//       ))}
//     </div>
//   );
// }

const tahoe_peaks = [
  {
    name: "Freel Peak",
    elevation: 10891,
  },
  {
    name: "Monument Peak",
    elevation: 10067,
  },
  {
    name: "Pyramid Peak",
    elevation: 9983,
  },
  {
    name: "Mt. Tallac",
    elevation: 9735,
  },
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// rendering data at the right time
function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This list is empty</p>}
      renderItem={(item) => <>{item.name}</>}
    ></List>
  );
}

export default App;
