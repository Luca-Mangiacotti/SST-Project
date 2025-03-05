import { useState } from "react";
import { Link } from "react-router";
import { useParams } from "react-router";

// Import dei dati
import TravelData from "../data/TravelData";

export default function TravelDetails() {
  const { id } = useParams();
  const currentTravel = TravelData[id - 1];
  const [searchUser, setSearchUser] = useState("");
  const [participants, setParticipants] = useState(currentTravel.participants);
  const [newParticipant, setNewParticipant] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    tax_code: "",
  });

  const filteredParticipants = participants.filter((participant) =>
    participant.full_name.toLowerCase().includes(searchUser.toLowerCase())
  );

  const handleInputChange = (e) => {
    setNewParticipant({ ...newParticipant, [e.target.name]: e.target.value });
  };

  const handleAddParticipant = (e) => {
    e.preventDefault();
    setParticipants([
      ...participants,
      { ...newParticipant, user_id: Date.now() },
    ]);
    setNewParticipant({
      full_name: "",
      phone_number: "",
      email: "",
      tax_code: "",
    });
  };

  return (
    <div>
      <Link to="/">
        <button className="bg-red-200"> Torna alla home </button>
      </Link>
      <div className="py-5">
        <h1>{currentTravel.destination}</h1>
        <h3>{currentTravel.departure_date}</h3>
        <h3>{currentTravel.return_date}</h3>
        <h3>{currentTravel.description}</h3>
      </div>

      {/* Form per aggiungere partecipanti */}
      <div className="mt-4">
        <h2>Aggiungi Partecipante</h2>
        <form onSubmit={handleAddParticipant} className="space-y-2">
          <input
            type="text"
            name="full_name"
            placeholder="Nome completo"
            value={newParticipant.full_name}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Numero di telefono"
            value={newParticipant.phone_number}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newParticipant.email}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <input
            type="text"
            name="tax_code"
            placeholder="Codice fiscale"
            value={newParticipant.tax_code}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">
            Aggiungi
          </button>
        </form>
      </div>

      {/* Rubrica Viaggio */}
      <div>
        {participants.length > 0 && (
          <section className="mt-4">
            <h2>Rubrica</h2>
            <input
              type="text"
              placeholder="Cerca partecipante..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              className="border p-2 mb-4 w-full"
            />
            {filteredParticipants.map((participant) => (
              <div key={participant.user_id} className="border p-2 mb-2">
                <h3>{participant.full_name}</h3>
                <h3>{participant.phone_number}</h3>
                <h3>{participant.email}</h3>
                <h3>{participant.tax_code}</h3>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
