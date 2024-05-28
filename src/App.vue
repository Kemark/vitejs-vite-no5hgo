<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Calendar from 'primevue/calendar';
import Slider from 'primevue/slider';

const msg = ref('');
const date = ref('');
const value = ref(10);
</script>

<template>
  <main>
    <h2>1. Primevue InputText</h2>
    <InputText v-model="msg" />
    <p>{{ msg }}</p>

    <h2>2. Semantic HTML</h2>

    <h2>2.1 Unordered list</h2>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
    </ul>

    <h2>2.2 Ordered list</h2>
    <ol>
      <li>item 1</li>
      <li>item 2</li>
    </ol>
  </main>

  <nav>
    <h2>2.3 details/summary</h2>

    <details>
      <summary>Header I</summary>
      <div>Header 1 Content</div>
    </details>
    <details>
      <summary>Header II</summary>
      <div>Header 2 Content</div>
    </details>
    <details>
      <summary>Header III</summary>
      <div>Header 3 Content</div>
    </details>
  </nav>

  <nav>
    <h2>2.3.1 Primevue Accordion</h2>
    <Accordion>
      <AccordionTab header="Header I">
        <p class="m-0">Header 1 Content</p>
      </AccordionTab>
      <AccordionTab header="Header II">
        <p class="m-0">Header 2 Content</p>
      </AccordionTab>
      <AccordionTab header="Header III">
        <p class="m-0">Header 3 Content</p>
      </AccordionTab>
    </Accordion>
  </nav>

    <h1>3. Date</h1>

    <h2>3.1. Standard HTML</h2>
    <label for="date">Date: </label>
    <input type="date" id="date">

    <h2>3.2. Primevue Calendar</h2>
    <section>
      <Calendar v-model="date" />
    </section>
 
    <h1>4. Slider</h1>
    <section>
      <Slider v-model="value" :step="20" />
    </section>

  <section>

  </section>
</template>

<style scoped></style>
