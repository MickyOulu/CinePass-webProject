import { useState, useEffect } from "react";
import ShowTable from "./Showtable";
import AddShowModal from "./AddShowModal";

export default function ManageShows() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/shows");
      const data = await res.json();
      setShows(data);
    } catch (err) {
      console.log("Error fetching shows:", err);
    }
  };

  const handleAddShow = async (newShow) => {
    await fetch("http://localhost:5000/api/shows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newShow),
    });

    fetchShows();
    setIsAddModalOpen(false);
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Shows</h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search shows..."
          className="bg-[#0f2b3a] p-3 rounded-lg w-80 border border-[#24566d]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-lg"
        >
          + Add New Show
        </button>
      </div>

      <ShowTable
        shows={shows.filter((s) =>
          s.name.toLowerCase().includes(search.toLowerCase())
        )}
      />

      {isAddModalOpen && (
        <AddShowModal
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleAddShow}
        />
      )}
    </div>
  );
}


