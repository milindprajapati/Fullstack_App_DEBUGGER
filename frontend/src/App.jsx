import { useState, useEffect } from 'react'
import ContactList from './ContactList'
import ContactForm from './ContactForm'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [isModalOpen, setIsModelOpen] = useState(false)
  useEffect( () => {
    fetchContacts()
  }, [])

  const fetchContacts = async() => {
      const response = await fetch("http://127.0.0.1:5000/contacts")
      const data = await response.json()
      setContacts(data.contacts)
      console.log(data.contacts)
  } 
  
  const closeModal = () => {
    setIsModelOpen(false)
  }
  
  const openCreateModal = () => {
    if(!isModalOpen)setIsModelOpen(true)
  }
  return (<>
  <ContactList contacts={contacts} /> 
  <button onClick={openCreateModal}>Create New Contact</button>
  {
    isModalOpen && <div className="Modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <ContactForm />
      </div>
    </div>
  }
  
  </>)
}

export default App
