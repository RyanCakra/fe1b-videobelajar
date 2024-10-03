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

const generateData = () => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    const harga = `Rp ${faker.finance.amount(100, 500, 0)}k`;
    const hasDiscount = faker.datatype.boolean();
    const discount = hasDiscount ? `${faker.number.int({ min: 10, max: 70 })}%` : null;

    // Generate rate fields
    const rateAvg = faker.number.float({ min: 1, max: 5, multipleOf: 0.1 });
    const rateCount = faker.number.int({ min: 1, max: 500 });

    const item = {
      id: i + 1,
      bannerImg: faker.image.business(),
      judul: faker.commerce.productName(),
      desc: faker.commerce.productDescription(),
      profileImg: faker.image.avatar(),
      author: faker.person.fullName(),
      pekerjaan: faker.person.jobTitle(),
      harga: harga,
      discount: discount,
      category: faker.commerce.department(),
      durasi: `${faker.number.int({ min: 1, max: 10 })} jam`,
      rateAvg, // Send rateAvg to backend for further processing
      rateCount, // Send rateCount to backend for further processing
    };

    console.log('Generated item:', item); // Log the generated item for debugging
    data.push(item);
  }

  return data;
};

// Post generated data to your custom backend API
const postDataToBackendAPI = async (data) => {
  const apiEndpoint = 'http://localhost:8080/products'; // Update this to your actual backend API endpoint

  try {
    const token = await loginAndGetToken(); // Get JWT token

    for (const item of data) {
      console.log('Posting item:', item); // Log the item before sending
      await axios.post(apiEndpoint, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(`Posted item: ${item.judul}`);
    }
    console.log('All data posted successfully');
  } catch (error) {
    console.error('Error posting data to backend:', error);
  }
};

// Generate and post data
(async () => {
  const data = generateData();
  await postDataToBackendAPI(data);
})();
