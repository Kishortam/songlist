import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [songs, setSongs] = useState([])
  const [query, setQuery] = useState('')
  const [type, setType] = useState('')

  // fetch songs
  // const fetchSongs = async () => {
  //   const res = await axios.get('http://localhost:4000/songs', {
  //     params: { query, type },
  //   })
  //   setSongs(res.data)
  // }

  // for deployment, after backend deployed
  const fetchSongs = async () => {
    const res = await axios.get('https://music-app-backend-t9xa.onrender.com/songs', {
      params: { query, type },
    })
    setSongs(res.data)
  }

  // toggle favorite
  // const toggleFavorite = async (id: number) => {
  //   await axios.patch(`http://localhost:4000/songs/${id}/favorite`)
  //   fetchSongs()
  // }


  // for deployment, after backend deployed
  const toggleFavorite = async (id: number) => {
    await axios.patch(`https://music-app-backend-t9xa.onrender.com/songs/${id}/favorite`)
    fetchSongs()
  }

  useEffect(() => {
    fetchSongs()
  }, [query, type])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">🎵 Music App</h1>

        <div className="flex gap-4 mb-6">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Search by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Filter by type..."
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <ul className="space-y-4">
          {songs.map((song: any) => (
            <li key={song.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">{song.title}</p>
                <p className="text-sm text-gray-500">{song.type}</p>
              </div>
              <button
                onClick={() => toggleFavorite(song.id)}
                className={`px-4 py-2 rounded-md text-white ${
                  song.isFavorite ? 'bg-red-200 hover:bg-red-600' : 'bg-blue-200 hover:bg-blue-600'
                }`}
              >
                {song.isFavorite ? '❤️' : '🤍'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
