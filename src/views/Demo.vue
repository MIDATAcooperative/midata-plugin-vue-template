<template>
  <div>
    <h1>{{ $t("title") }}</h1>
    <button
      class="btn btn-primary"
      @click="getPatientName()"
    >
      Get Patient Name
    </button>
    <div v-if="patient && patient.name && patient.name.length" class="alert alert-info mt-3">
      Patient Name: <b>{{ patient.name[0].given[0] }} {{ patient.name[0].family }}</b>
    </div>
  </div>
</template>
<script>
import midataServer from "vue-midata/midata.js";
import midataPortal from "vue-midata/midataPortal.js";

export default {
  data: () => ({
    patient : {}
  }),

  created: function () {
   
  },
  
  methods: {
    getPatientName() {
        midataServer.fhirSearch("Patient", { _id : midataPortal.owner }, true)
        .then((result) => this.$data.patient = result[0] );
    }
  },
};
</script>
<style>
  h1 { color:red }
</style>