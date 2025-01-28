"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NewContactForm } from "./new-contact-form"

type Contact = {
  id: string
  name: string
  email: string
  phone: string
}

const initialContacts: Contact[] = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "555-555-5555" },
]

export function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [searchTerm, setSearchTerm] = useState("")
  const [showNewContactForm, setShowNewContactForm] = useState(false)

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm),
  )

  const addContact = (newContact: Omit<Contact, "id">) => {
    const contact = { ...newContact, id: Date.now().toString() }
    setContacts([...contacts, contact])
    setShowNewContactForm(false)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={() => setShowNewContactForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      {showNewContactForm && <NewContactForm onSubmit={addContact} onCancel={() => setShowNewContactForm(false)} />}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredContacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

