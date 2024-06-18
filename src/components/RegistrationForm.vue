<template>
  <div class="registration-form">
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nom et prénom:</label>
        <input type="text" id="name" v-model="name" @input="validateName" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" @input="validateEmail" />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div>
        <label for="phone">Téléphone:</label>
        <input type="text" id="phone" v-model="phone" @input="validatePhone" />
        <span v-if="errors.phone">{{ errors.phone }}</span>
      </div>
      <div>
        <label for="postalCode">Code postal de résidence:</label>
        <input
          type="text"
          id="postalCode"
          v-model="postalCode"
          @input="validatePostalCode"
        />
        <span v-if="errors.postalCode">{{ errors.postalCode }}</span>
      </div>
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      postalCode: "",
      errors: {},
    };
  },
  methods: {
    validateName() {
      const regex = /^[a-zA-Z\s]*$/;
      this.errors.name = regex.test(this.name)
        ? ""
        : "Le nom et prénom ne doivent contenir que des lettres.";
    },
    validateEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errors.email = regex.test(this.email)
        ? ""
        : "L'email doit être au format nom@domaine.com.";
    },
    validatePhone() {
      const regex = /^\d{10}$/;
      this.errors.phone = regex.test(this.phone)
        ? ""
        : "Le téléphone doit contenir 10 chiffres.";
    },
    validatePostalCode() {
      const regex = /^\d{5}$/;
      this.errors.postalCode = regex.test(this.postalCode)
        ? ""
        : "Le code postal doit contenir 5 chiffres.";
    },
    submitForm() {
      this.validateName();
      this.validateEmail();
      this.validatePhone();
      this.validatePostalCode();

      if (
        !this.errors.name &&
        !this.errors.email &&
        !this.errors.phone &&
        !this.errors.postalCode
      ) {
        alert("Form submitted successfully!");
      }
    },
  },
};
</script>

<style>
.registration-form {
  max-width: 400px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
}
.registration-form div {
  margin-bottom: 1em;
}
.registration-form label {
  margin-bottom: 0.5em;
  color: #ffffff;
  display: block;
}
.registration-form input {
  border: 1px solid #cccccc;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  box-sizing: border-box;
}
.registration-form button {
  padding: 0.7em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 1em;
  cursor: pointer;
}
.registration-form button:hover {
  background-color: #0056b3;
}
.registration-form span {
  color: red;
  font-size: 0.875em;
}
</style>
