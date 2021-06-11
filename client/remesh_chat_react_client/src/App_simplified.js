import React, { useMemo, useState, useEffect } from "react";
// import { Button } from 'reactstrap';
// import { Modal } from './components/Modal';
import Table from "./components/Table";
import axios from 'axios';

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "About This Conversation",
        // First group columns
        columns: [
          {
            Header: "Title",
            accessor: "title"
          },
          {
            Header: "Start Date",
            accessor: "start_date"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "View Associated Messages",
            accessor: "show.language"
          },
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       conversations: [],
//       messages: [],
//       thoughts: [],
//       loading: true
//     }
//   }

//   async fetchConversationsWithAxios() {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(res.data)
//     this.setState({ loading: false, conversations: res.data })
//   }

//   componentDidMount() {
//     this.fetchConversationsWithAxios();
//   }

//   render() {
    // const columns = useMemo(
    //   () => [
    //     {
    //       // first group - TV Show
    //       Header: "About This Conversation",
    //       // First group columns
    //       columns: [
    //         {
    //           Header: "Title",
    //           accessor: "title"
    //         },
    //         {
    //           Header: "Start Date",
    //           accessor: "start_date"
    //         }
    //       ]
    //     },
    //     {
    //       // Second group - Details
    //       Header: "Details",
    //       // Second group columns
    //       columns: [
    //         {
    //           Header: "View Associated Messages",
    //           accessor: "show.language"
    //         },
    //       ]
    //     }
    //   ],
    //   []
    // );

    // return (
    //   <div className="App">
    //     <Table columns={columns} data={data} />
    //   </div>
    // );
//   }
// }