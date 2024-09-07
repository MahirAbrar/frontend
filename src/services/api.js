import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const getContacts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/contacts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

export const verifyContact = async (contactId) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/contacts/${contactId}`,
      {
        verified: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error verifying contact:", error);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/api/contacts/${contactId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};

export const addContact = async (contactData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/contacts`,
      contactData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding contact:", error);
    throw error;
  }
};
