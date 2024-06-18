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
    <button @click="downloadPdf">Download PDF</button>
    <p v-if="successMessage" class="success-message">
      L'inscription a été enregistrée avec succès.
    </p>
  </div>
</template>

<script>
import jsPDF from "jspdf";

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
      this.successMessage = true;
    },
    downloadPdf() {
      const doc = new jsPDF();

      doc.text("Session Details", 10, 10);
      doc.text(`Date: ${this.session.date}`, 10, 20);
      doc.text(
        `Time: ${this.session.start_at} - ${this.session.end_at}`,
        10,
        30
      );
      doc.text(`Option: ${this.session.option}`, 10, 40);
      doc.text(`Category: ${this.session.categories}`, 10, 50);
      doc.text(`Age Category: ${this.session.age_category}`, 10, 60);
      doc.text(`Registered: ${this.session.registered}`, 10, 70);
      doc.text(`Available Places: ${this.session.available_places}`, 10, 80);

      doc.save("session-details.pdf");
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
  margin: 20px;
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
