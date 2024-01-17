import React, { useState } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap';

export default function AxiosDemo3() {
    const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=flowers'
      )
      const data = await response.json();
      setSearchResults(data.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
        <Form inline>
        <FormControl
          type="text"
          placeholder="Search for books..."
          className="mr-sm-2"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button variant="outline-primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((book) => (
              <li key={book.id}>
                <h3>{book.volumeInfo.title}</h3>
                {/* You can display other book information as needed */}
                <p>Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                <p>Publisher: {book.volumeInfo.publisher || 'Unknown'}</p>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  )
}