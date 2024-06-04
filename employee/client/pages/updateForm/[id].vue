<template>
  
    <div class="form-container">
      <h1>UPDATE FORM</h1>
      <div>
        <label for="firstname">First Name:</label>
        <input v-model="firstname" type="text" id="firstname" name="firstname" required>
      </div>
      <div>
        <label for="lastname">Lastname:</label>
        <input v-model="lastname" type="text" id="lastname" name="lastname" required>
      </div>
      <div>
        <label for="department">Department:</label>
        <input v-model="Department" type="text" id="Department" name="Department" required>
      </div>
      <button @click="updateInfo">UPDATE</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  
  const route = useRoute();
  const id = route.params.id;
  
  
  const lastname = ref('');
  const firstname = ref('');
  const Department = ref('');
  
  const router = useRouter();
  
  const updateInfo = async () => {
    try {
      const formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        dept: Department.value
      };
  
      const response = await axios.put(`http://localhost:8080/api/${id}`, formData);
      console.log(response.status);
      console.log('Form updated successfully!', response.data);
      router.push('/');
  
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  </script>
  
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  
  .form-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  label {
    font-size: 16px;
    color: #555;
  }
  
  input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 100%;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
  