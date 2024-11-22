import { useState } from "react";

export default function SearchBar({ data, setFilteredData }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const searchValue = event.target.value;

    setSearchTerm(searchValue);

    const filteredEvents = data.filter(
      (event) =>
        event.eventName.toLowerCase().includes(searchValue.toLowerCase()) ||
        event.tags.some((tag) =>
          tag.toLowerCase().includes(searchValue.toLowerCase())
        )
    );

    setFilteredData(filteredEvents);
  };

  return (
    <div className="input-group">
      <span className="input-group-text bg-transparent border-end-0 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ width: "20px" }}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </span>
      <input
        type="text"
        className="form-control border-start-0"
        placeholder="Search by title and tags"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
