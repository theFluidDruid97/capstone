import { Context } from "../App.js";
import { useContext } from "react";
import "./MemberProfile.css";
// import Training from "./TrainingDummy.js";
import NavBarTraining from "./NavBarTraining.js";

const MemberProfile = () => {
  const { members, id, training, setTraining, state, setState } =
    useContext(Context);
  const member = members.find((member) => {
    return member.id == id;
  });
  setState(member);

  return (
    <div className="Body">
      <NavBarTraining />
      <div className="Member">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>DoD Id</th>
              <th>Email</th>
              <th>Unit</th>
              <th>Office</th>
              <th>AFSC</th>
            </tr>
          </thead>
          <tbody>
            <tr key={state.id}>
              <td>{state.rank}</td>
              <td>{state.last_name}</td>
              <td>{state.first_name}</td>
              <td>{state.dod_id}</td>
              <td>{state.email}</td>
              <td>{state.unit}</td>
              <td>{state.office_symbol}</td>
              <td>{state.afsc}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th>Training Name</th>
              <th>Certification Duration</th>
            </tr>
          </thead>
          {training?.map((item) => {
            return (
              <tbody>
                <tr key={item.id}>
                  <td>{item.training_name}</td>
                  <td>{item.cert_duration}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default MemberProfile;
// =======
//     <Navigation />
//     <Container
//      className="Member">
//       <Table
//            striped
//            bordered
//            hover
//            responsive
//            variant="dark"
//            >
//         <thead>
//           <tr>
//             <th>Rank</th>
//             <th>Last Name</th>
//             <th>First Name</th>
//             <th>DoD Id</th>
//             <th>Email</th>
//             <th>Unit</th>
//             <th>Office</th>
//             <th>AFSC</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{state.rank}</td>
//             <td>{state.last_name}</td>
//             <td>{state.first_name}</td>
//             <td>{state.dod_id}</td>
//             <td>{state.email}</td>
//             <td>{state.unit}</td>
//             <td>{state.office_symbol}</td>
//             <td>{state.afsc}</td>
//           </tr>
//         </tbody>

//       </Table>
//       <Table bordered striped hover variant="dark">
//         <thead>
//           <tr>
//             <th>Training</th>
//             <th>Completion Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         {Training?.map((item, index) => {
//           return (
//             <tbody>
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.due_date}</td>
//                 <td>{item.status}</td>
//               </tr>
//             </tbody>
//           );
//         })}
//       </Table>
//     </Container>
//     </div>

//   );
// }
