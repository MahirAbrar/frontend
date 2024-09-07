import React from "react";
import { useEffect, useState } from "react";
import { getContacts, deleteContact, verifyContact } from "../services/api";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contacts = await getContacts();
        setContacts(contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    try {
      deleteContact(id);
      setContacts((contacts) =>
        contacts.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleVerify = (id) => {
    try {
      verifyContact(id);
      setContacts((contacts) =>
        contacts.map((contact) =>
          contact.id === id ? { ...contact, verified: true } : contact
        )
      );
    } catch (error) {
      console.error("Error verifying contact:", error);
    }
  };

  const toggleRowExpansion = (id) => {
    setExpandedRows((expandedRows) => ({
      ...expandedRows,
      [id]: !expandedRows[id],
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Additional Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 && !loading && (
              <tr>
                <td colSpan="5" className="text-center">
                  No contacts found
                </td>
              </tr>
            )}

            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{`${contact.firstName} ${contact.lastName}`}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                  {contact.additionalInfo.length > 50 ? (
                    <>
                      {expandedRows[contact.id]
                        ? contact.additionalInfo
                        : `${contact.additionalInfo.substring(0, 50)}...`}
                      <button
                        className="btn btn-xs btn-link"
                        onClick={() => toggleRowExpansion(contact.id)}
                      >
                        {expandedRows[contact.id] ? "Show less" : "Show more"}
                      </button>
                    </>
                  ) : (
                    contact.additionalInfo
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-xs btn-success mr-2"
                    onClick={() => handleVerify(contact.id)}
                    disabled={contact.verified}
                  >
                    {contact.verified ? "Verified" : "Mark as verified"}
                  </button>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsList;
