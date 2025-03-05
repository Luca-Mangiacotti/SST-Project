import { useState } from "react";
import { Link } from "react-router";
// Import dei componenti
import TravelData from "../data/TravelData";

export default function HomePage() {
  const [Travels, setTravels] = useState(TravelData);
  const [NewTravels, setNewTravels] = useState({
    destination: "",
    departure_date: "",
    return_date: "",
  });

  const aggiungiTravelso = (e) => {
    e.preventDefault();
    setTravels([...Travels, { id: Travels.length + 1, ...NewTravels }]);
    setNewTravels({ destination: "", departure_date: "", return_date: "" });
  };

  return (
    <>
      {Travels.map((travel) => (
        <div key={travel.id}>
          <h1>{travel.destination}</h1>
          <h3>Data di inizio: {travel.departure_date}</h3>
          <h3>Data di ritorno: {travel.return_date}</h3>
          <Link to={`/detail/${travel.id}`}>
            <button className="bg-red-200"> vai al dettaglio </button>
          </Link>
        </div>
      ))}

      <form onSubmit={aggiungiTravelso} className="mt-4">
        <input
          type="text"
          placeholder="Destinazione"
          value={NewTravels.destination}
          onChange={(e) =>
            setNewTravels({ ...NewTravels, destination: e.target.value })
          }
          className="border p-2 rounded mr-2"
          required
        />
        <input
          type="date"
          value={NewTravels.departure_date}
          onChange={(e) =>
            setNewTravels({ ...NewTravels, departure_date: e.target.value })
          }
          className="border p-2 rounded mr-2"
          required
        />
        <input
          type="date"
          value={NewTravels.return_date}
          onChange={(e) =>
            setNewTravels({ ...NewTravels, return_date: e.target.value })
          }
          className="border p-2 rounded mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Aggiungi Viaggio
        </button>
      </form>
    </>
  );
}
