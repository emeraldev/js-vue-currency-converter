<template>
  <div>
    <b-jumbotron class="convertor">
      <h1>Currency Convertor</h1>

      <div>
        <b-row>
          <b-col>
            <b-form-select v-model="selected" v-on:click="getRate(selected)">
              <option value="" selected disabled>Choose</option>
              <option v-for="country in countries" :value="country" :key="country">{{ country }}</option>
            </b-form-select>
          </b-col>
        </b-row>
      </div>
      <hr>
      <b-row>
        <b-col>
          <div role="group">
            <label for="input-live">Selected: {{ selected }} </label>
            <b-form-input
              id="input-live"
              type="number"
              min="1"
              v-model="amount"
              :state="nameState"
              :value="1"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your name"
              trim
            ></b-form-input>

            <b-form-invalid-feedback id="input-live-feedback">
              Enter a valid amount
            </b-form-invalid-feedback>

            <b-form-text id="input-live-help" v-if="rate.ZAR" >Currency Rate: {{ rate.ZAR }} </b-form-text>
          </div>
        </b-col>

        <b-col>
          <div role="group">
            <label for="input-live">South African ZAR</label>
            <b-form-input id="input-none" :value="convert" disabled placeholder="South African ZAR"></b-form-input>

            <b-form-text id="input-live-help">ZAR Amount Rate: {{ selected }}</b-form-text>
            <b-form-text id="input-live-help"></b-form-text>
          </div>
        </b-col>
      </b-row>

      <hr class="my-4">

      <b-button variant="success"  v-on:click="convertCalc(selected)">Convert</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    computed: {
      nameState() {
        return this.amount.length > 0 ? true : false
      }
    },
    data() {
      return {
        errors: [],
        amount: '',
        countries: [],
        selected: 'USD',
        rate: '14.8673127434',
        convert: ''
      }
    },
    mounted: function() {
      fetch('https://api.exchangeratesapi.io/latest?base=ZAR', {
      method: 'get'
      })
        .then((response) => {
          return response.json()
        })
        .then((jsonData) => {
          this.countries = Object.keys(jsonData.rates)
        })
    },
    methods: {
      convertCalc: function(selected){
        this.errors = [];

        if (!this.name) {
          this.errors.push('Amount required.');
        }

        let conv = this.selected
        
        this.getRate(selected)
        
        let d = this.rate.ZAR
          
        let f = d * this.amount
        this.convert =  f.toFixed(2)

      },
      getRate: function() {
        fetch('https://api.exchangeratesapi.io/latest?base='+ this.selected +'&symbols=ZAR', {
        method: 'get'
        })
          .then((response) => {
            return response.json()
          })
          .then((jsonData) => {
            this.rate = jsonData.rates
          });
      }
    }
  }
</script>

<style>
.convertor{
  margin-top: 10px;
}

#tb{
  content: center;
}
</style>