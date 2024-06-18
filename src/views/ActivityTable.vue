<template>
  <div>
    <h1>Activities JO 2024</h1>
    <div class="sort-panel">
      <input v-model="searchQuery" placeholder="Enter activity name" />
      <select v-model="ageCategory">
        <option value="All">All</option>
        <option value="Children">Children</option>
        <option value="Adults">Adults</option>
      </select>
      <router-link to="/" class="back-button">Back</router-link>
    </div>
    <div
      v-for="activity in filteredActivities"
      :key="activity.name"
      class="activity"
    >
      <h2>{{ activity.name }}</h2>
      <div
        v-for="session in filterSessions(activity.sessions)"
        :key="session.date + session.start_at"
        class="ticket"
      >
        <div class="ticket-content">
          <div class="ticket-info">
            <p><strong>Date:</strong> {{ session.date }}</p>
            <p>
              <strong>Time:</strong> {{ session.start_at }} -
              {{ session.end_at }}
            </p>
            <p><strong>Option:</strong> {{ session.option }}</p>
            <p><strong>Category:</strong> {{ session.categories }}</p>
            <p><strong>Age Category:</strong> {{ session.age_category }}</p>
            <p><strong>Registered:</strong> {{ session.registered }}</p>
            <p>
              <strong>Available Places:</strong>
              {{ session.available_places }}
            </p>
          </div>
          <div class="ticket-action">
            <RouterLink to="/session">Next step</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
      searchQuery: "",
      ageCategory: "All",
    };
  },
  computed: {
    filteredActivities() {
      return this.activities.filter((activity) => {
        const matchesSearchQuery = activity.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());

        const hasMatchingSessions = activity.sessions.some((session) => {
          return (
            this.ageCategory === "All" ||
            session.categories === this.ageCategory
          );
        });

        return matchesSearchQuery && hasMatchingSessions;
      });
    },
  },
  methods: {
    filterSessions(sessions) {
      return sessions.filter((session) => {
        return (
          this.ageCategory === "All" || session.categories === this.ageCategory
        );
      });
    },
  },
  created() {
    fetch("/data_activities.json")
      .then((response) => response.json())
      .then((data) => {
        this.activities = data;
      });
  },
};
</script>

<style>
.activity {
  margin-bottom: 40px;
}

.ticket {
  border: 2px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  color: black;
}

.ticket-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.ticket-info {
  flex: 1;
  margin-right: 20px;
}

.ticket-info p {
  margin: 5px 0;
}

.ticket-action {
  display: flex;
  align-items: center;
}

.ticket button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.ticket button:hover {
  background-color: #45a049;
}

.sort-panel {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.sort-panel input {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  flex: 1;
}

.sort-panel select {
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

.sort-panel .back-button {
  background-color: rgb(0, 138, 184);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

.sort-panel .back-button:hover {
  background-color: #007bb5;
}
</style>
