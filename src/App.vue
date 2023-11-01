<template>
  <div id="app">
    <CalculatorApp />
  </div>
</template>

<script>
import CalculatorApp from "@/components/CalculatorApp.vue";

export default {
  name: "App",
  components: {
    CalculatorApp,
  },
};
</script>



<style>
/* Gaya untuk kalkulator */
.calculator {
  background-color: #f3f3f3;
  border: 1px solid #ccc;
  width: 250px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 24px;
  text-align: right;
  margin-bottom: 10px;
  border-radius: 5px;
}

.result {
  font-weight: bold;
  margin-top: 10px;
}

.buttons button {
  width: 50px;
  height: 50px;
  font-size: 20px;
  margin: 5px;
  background-color: #2196F3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buttons button:hover {
  background-color: #1976D2;
}

/* Gaya khusus untuk tombol operator */
.operator {
  background-color: #FF5722;
}

.operator:hover {
  background-color: #E64A19;
}
</style>
