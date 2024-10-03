import { faker } from '@faker-js/faker';
import axios from 'axios';

// Function to login and get JWT token
async function loginAndGetToken() {
  try {
    const response = await axios.post('http://localhost:8080/login', {
      email: 'admin@example.com', // Replace with valid admin email
      password: 'adminpassword', // Replace with valid admin password
    });
    return response.data.token;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Unable to get JWT token');
  }
}

// Function to generate user data (with controlled values)
export const generateUserData = () => {
  const users = [];
  const validGenders = ['Male', 'Female', 'Other']; // Define acceptable gender values

  for (let i = 0; i < 10; i++) {
    const randomGender = validGenders[Math.floor(Math.random() * validGenders.length)];
    const plainPassword = faker.internet.password(); // Generate a plain password

    users.push({
      fullname: faker.person.fullName(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: plainPassword, // Use plain password
      phone: faker.phone.number(),
      gender: randomGender, // Use the controlled gender value
    });
  }

  return users;
};

// Post generated user data to the backend API (with JWT token)
export const postUserDataToBackendAPI = async (users) => {
  const userApiEndpoint = 'http://localhost:8080/users'; // Update to match your backend API endpoint

  try {
    const token = await loginAndGetToken(); // Get JWT token

    for (const user of users) {
      await axios.post(userApiEndpoint, user, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the JWT token in Authorization header
        },
      });
      console.log(`Posted user: ${user.fullname}`);
    }

    console.log('All user data posted successfully');
  } catch (error) {
    console.error('Error posting user data to backend:', error);
  }
};

// Generate and post user data
async function execute() {
  const users = generateUserData(); // Generate user data
  await postUserDataToBackendAPI(users); // Post user data to the backend
}

execute();
