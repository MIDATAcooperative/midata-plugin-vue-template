<template>
  <div>
    <h1>{{ $t("title") }}</h1>
    <button
      class="btn btn-primary"
      @click="getPatientName()"
    >
      Get
    </button>
    {{ patient.name }}
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