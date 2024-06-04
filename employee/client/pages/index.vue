<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4 underline">EMPLOYEE LIST</h1>
    <button @click="navigateTo('/AddEmp')" class="action-btn">NEW</button>
    <table class="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr class="bg-pink-500 text-white">
          <th class="border border-gray-300 py-2 px-4">ID</th>
          <th class="border border-gray-300 py-2 px-4">Firstname</th>
          <th class="border border-gray-300 py-2 px-4">Lastname</th>
          <th class="border border-gray-300 py-2 px-4">Department</th>
          <th class="border border-gray-300 py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index" class="border border-gray-300">
          <td class="border border-gray-300 py-2 px-4">{{ user.ID }}</td>
          <td class="border border-gray-300 py-2 px-4">{{ user.fname }}</td>
          <td class="border border-gray-300 py-2 px-4">{{ user.lname }}</td>
          <td class="border border-gray-300 py-2 px-4">{{ user.Department }}</td>
          <td class="border border-gray-300 py-2 px-4">
            <button @click="navigateToUpdateForm(user.ID)" class="action-btn-update">Update</button>
            <button @click="deleteUser(user.ID)" class="action-btn-delete">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://localhost:8080/api/load'); 
        this.users = response.data;
      } catch (error) {
        console.error('Error making GET request:', error);
      }
    },
    navigateToUpdateForm(id) {
      this.$router.push(`/updateForm/${id}`);
    },
    async deleteUser(userId) {
      try {
        const response = await axios.delete(`http://localhost:8080/api/${userId}`);
        this.users = this.users.filter(user => user.ID !== userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async updateUser(user) {
      console.log(user)
    }
  },
};
</script>

<style scoped>
.action-btn {
  @apply bg-green-500 text-white py-1 px-3 rounded-3xl mr-2;
}
.action-btn-update{
  @apply bg-blue-500 text-white py-1 px-3 rounded-3xl mr-2;
}
.action-btn-delete {
  @apply bg-red-500 text-white py-1 px-3 rounded-3xl mr-2;
}

.action-btn:hover {
  @apply bg-blue-700;
}

</style>

