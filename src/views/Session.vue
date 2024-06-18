<template>
  <div>
    <h1>Your choice</h1>
    <div class="session-details">
      <p><strong>Date:</strong> {{ session.date }}</p>
      <p>
        <strong>Time:</strong> {{ session.start_at }} - {{ session.end_at }}
      </p>
      <p><strong>Option:</strong> {{ session.option }}</p>
      <p><strong>Category:</strong> {{ session.categories }}</p>
      <p><strong>Age Category:</strong> {{ session.age_category }}</p>
      <p><strong>Registered:</strong> {{ session.registered }}</p>
      <p><strong>Available Places:</strong> {{ session.available_places }}</p>
    </div>
    <button @click="confirmRegistration">Confirmation</button>
    <p v-if="successMessage" class="success-message">
      L'inscription a été enregistrée avec succès.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      successMessage: false,
    };
  },
  computed: {
    session() {
      const {
        date,
        start_at,
        end_at,
        option,
        categories,
        age_category,
        registered,
        available_places,
      } = this.$route.params;

      return {
        date,
        start_at,
        end_at,
        option,
        categories,
        age_category,
        registered,
        available_places,
      };
    },
  },
  methods: {
    confirmRegistration() {
      // Here you can add any logic needed to handle the registration confirmation
      this.successMessage = true;
    },
  },
};
</script>

<style scoped>
.session-details {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: black;
}

.session-details p {
  color: black;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  color: green;
}
</style>
