'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

interface SearchResult {
  title: string
  content: string
  slug: string
}

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    setQuery(searchTerm)
    
    // Lógica de busca (implementar)
    // Por enquanto, apenas um exemplo
    if (searchTerm) {
      setResults([
        { 
          title: 'Nephiluns', 
          content: 'Realidade mística...', 
          slug: 'nephiluns' 
        }
      ])
    } else {
      setResults([])
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar realidades..."
          value={query}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 rounded-lg 
                     bg-das-xiii-purple/50 
                     text-white 
                     placeholder-gray-300 
                     focus:outline-none 
                     focus:ring-2 
                     focus:ring-purple-600"
        />
      </div>
      {results.length > 0 && (
        <ul className="absolute z-10 w-full 
                       bg-das-xiii-purple 
                       rounded-b-lg 
                       shadow-lg 
                       mt-1">
          {results.map((result) => (
            <li 
              key={result.slug}
              className="px-4 py-2 
                         hover:bg-purple-700 
                         cursor-pointer 
                         text-white"
            >
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}