import './App.css'
// import "./index.jsx"
import { Card } from './card.jsx'

const profiles = [{
  id: 1,
  name: "Mark",
  title: "Front-End developer",
  bio: "I like to work with different front-end technologies and play video games."
},
{
  id: 2,
  name: "Tiffany",
  title: "Engineering manager",
  bio: "I have worked in tech for 15 years and love to help people grow in this industry."
},
{
  id: 3,
  name: "Doug",
  title: "Back-End developer",
  bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
}
]

function App() {
  return (
    <div className="flex-container">
      {
        profiles.map(profile => (
          <Card
            key={profile.id}
            title={profile.title}
            name={profile.name}
            bio={profile.bio}
          />
        ))
      }
    </div>
  )
}

export default App;