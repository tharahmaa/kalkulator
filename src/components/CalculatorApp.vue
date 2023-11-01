<template>
  <div class="calculator">
    <div class="display">
      <input v-model="expression" @input="updateResult" />
      <div class="result">{{ result }}</div>
    </div>
    <div class="buttons">
      <button @click="clearExpression">C</button>
    </div>
    <div class="buttons">
      <button @click="appendToExpression('1')">1</button>
      <button @click="appendToExpression('2')">2</button>
      <button @click="appendToExpression('3')">3</button>
      <button @click="appendToExpression('+')">+</button>
    </div>
    <div class="buttons">
      <button @click="appendToExpression('4')">4</button>
      <button @click="appendToExpression('5')">5</button>
      <button @click="appendToExpression('6')">6</button>
      <button @click="appendToExpression('-')">-</button>
    </div>
    <div class="buttons">
      <button @click="appendToExpression('7')">7</button>
      <button @click="appendToExpression('8')">8</button>
      <button @click="appendToExpression('9')">9</button>
      <button @click="appendToExpression('/')">/</button>
    </div>
    <div class="buttons">
      <button @click="appendToExpression('.')">.</button>
      <button @click="appendToExpression('0')">0</button>
      <button @click="appendToExpression('*')">×</button>
      <button @click="evaluate()">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expression: "",
      result: "",
    };
  },
  methods: {
    appendToExpression(character) {
      this.expression += character;
    },
    updateResult() {
      this.calculateResult();
    },
    calculateResult() {
      try {
        const fn = new Function('return ' + this.expression);
        this.result = fn();
      } catch (error) {
        console.error("Error:", error);
        this.result = "Error";
      }
    },
    clearExpression() {
      this.expression = "";
      this.result = "";
    },
    evaluate() {
      this.calculateResult();
    },
  },
};
</script>

<style>
.buttons {
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex: 0 0 calc(33.33% - 10px); /* Mengatur lebar masing-masing kolom */
  margin: 5px;
}

.buttons button {
  width: 100%;
  height: 50px;
  font-size: 20px;
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

</style>