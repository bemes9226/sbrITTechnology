import React, { useState, useMemo } from "react";

// Sample JSON data (this can come from an API or dynamic source)
const data = [
  { id: 1, name: "John Doe", age: 28, country: "USA" },
  { id: 2, name: "Jane Smith", age: 34, country: "Canada" },
  { id: 3, name: "Tom Wilson", age: 23, country: "UK" },
  { id: 4, name: "Mary Johnson", age: 45, country: "Australia" },
  { id: 5, name: "Mike Brown", age: 30, country: "USA" },
  { id: 6, name: "Sarah Davis", age: 27, country: "UK" },
  { id: 7, name: "James Miller", age: 36, country: "Canada" },
  { id: 8, name: "David Lee", age: 32, country: "Australia" },
  { id: 9, name: "Samantha Walker", age: 40, country: "USA" },
  { id: 10, name: "Emily Scott", age: 22, country: "UK" },
  { id: 11, name: "Chris Jackson", age: 29, country: "USA" },
  { id: 12, name: "Elizabeth Harris", age: 38, country: "Canada" },
  { id: 13, name: "Daniel Young", age: 42, country: "Australia" },
  { id: 14, name: "Linda Lee", age: 25, country: "USA" },
  { id: 15, name: "Richard King", age: 31, country: "UK" },
  { id: 16, name: "Megan Adams", age: 29, country: "Canada" },
  { id: 17, name: "Steven Clark", age: 34, country: "Australia" },
  { id: 18, name: "Victoria White", age: 27, country: "USA" },
  { id: 19, name: "Robert Harris", age: 45, country: "Canada" },
  { id: 20, name: "Jessica Carter", age: 28, country: "UK" },
];

export const DataTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof data)[0];
    direction: "asc" | "desc";
  }>({ key: "id", direction: "asc" });

  // Handle the sorting logic
  const sortedData = useMemo(() => {
    const sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [sortConfig]);

  // Search functionality (filter by name)
  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination: get the data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle sorting by column
  const requestSort = (key: keyof (typeof data)[0]) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Render table
  return (
    <div>
      <h2>Dynamic Table with Search, Sort, and Pagination</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "5px",
          border: "1px solid #ddd",
        }}
      />

      {/* Table */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th onClick={() => requestSort("id")}>
              ID{" "}
              {sortConfig.key === "id" &&
                (sortConfig.direction === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => requestSort("name")}>
              Name{" "}
              {sortConfig.key === "name" &&
                (sortConfig.direction === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => requestSort("age")}>
              Age{" "}
              {sortConfig.key === "age" &&
                (sortConfig.direction === "asc" ? "🔼" : "🔽")}
            </th>
            <th onClick={() => requestSort("country")}>
              Country{" "}
              {sortConfig.key === "country" &&
                (sortConfig.direction === "asc" ? "🔼" : "🔽")}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          Next
        </button>
        <button
          onClick={() =>
            handlePageChange(Math.ceil(filteredData.length / itemsPerPage))
          }
          disabled={
            currentPage === Math.ceil(filteredData.length / itemsPerPage)
          }
        >
          Last
        </button>
      </div>
    </div>
  );
};
