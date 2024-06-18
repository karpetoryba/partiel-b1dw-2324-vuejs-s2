<template>
  <div>
    <h1>Session Details</h1>
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
  </div>
</template>

<script>
export default {
  computed: {
    session() {
      return {
        date: this.$route.params.date,
        start_at: this.$route.params.start_at,
        end_at: this.$route.params.end_at,
        option: this.$route.params.option,
        categories: this.$route.params.categories,
        age_category: this.$route.params.age_category,
        registered: this.$route.params.registered,
        available_places: this.$route.params.available_places,
      };
    },
  },
};
</script>

<style>
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
</style>
