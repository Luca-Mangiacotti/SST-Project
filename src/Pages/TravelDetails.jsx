import { useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

//import dei dati
import TravelData from "../data/TravelData";

export default function TravelDetails() {
  const { id } = useParams();
  const currentTravel = TravelData[id - 1];
  console.log(currentTravel);
  console.log(currentTravel.participants);
  const [searchUser, setsearchUser] = useState("");

  const filteredParticipants = currentTravel.participants.filter(
    (participant) =>
      participant.full_name.toLowerCase().includes(searchUser.toLowerCase())
  );
  return (
    <div>
      <Link to="/">
        <button className="bg-red-200"> torna alla home </button>
      </Link>
      <div className="py-5">
        <h1>{currentTravel.destination}</h1>
        <h3>{currentTravel.departure_date}</h3>
        <h3>{currentTravel.return_date}</h3>
        <h3>{currentTravel.description}</h3>
      </div>

      {/* RUBRICA VIAGGIO */}
      <div>
        {currentTravel.participants.length > 0 && (
          <section className="mt-4">
            <h2>Rubrica</h2>

            <input
              type="text"
              placeholder="Cerca partecipante..."
              value={searchUser}
              onChange={(e) => setsearchUser(e.target.value)}
              className="border p-2 mb-4 w-full"
            />

            {filteredParticipants.map((partecipant) => (
              <div key={partecipant.user_id}>
                <h3>{partecipant.full_name}</h3>
                <h3>{partecipant.phone_number}</h3>
                <h3>{partecipant.email}</h3>
                <h3>{partecipant.tax_code}</h3>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
