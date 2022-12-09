import react from "react";
import { Context } from "../App.js";
import { useContext } from "react";
import { useEffect } from "react";

const MemberProfile = () => {
  const { members, setMember } = useContext(Context);
  //You are returning the entire set of members here instead of the individual member.
  //Members does not have first_name, last_name, rank, or dod_id keys so all will be undefined.
  return (
    <div>
      <h1>Suckers!</h1>
      <h3>{members.first_name}</h3>
      <h3>{members.last_name}</h3>
      <h3>{members.rank}</h3>
      <h3>{members.dod_id}</h3>
    </div>
  );
};

export default MemberProfile;
