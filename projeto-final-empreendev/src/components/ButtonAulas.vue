<template>
  <div>
    <button class="btn-aulas" @click="ativar">Clique Aqui!</button>
    <span v-show="ativou">
      <table>
        <tr>
          <td>dia da semana</td>
          <td>Horário</td>
        </tr>
        <tr>
          <td>Segunda-feira</td>
          <td>
            09:00 <br />
            11:00 <br />
            13:00 <br />
            14:00 <br />
          </td>
        </tr>
        <tr>
          <td>terça-feira</td>
          <td>
            09:00 <br />
            10:00 <br />
            11:00 <br />
            15:00 <br />
          </td>
        </tr>
        <tr>
          <td>Quarta-feira</td>
          <td>
            09:00 <br />
            15:00 <br />
            20:00 <br />
          </td>
        </tr>
        <tr>
          <td>Quinta-feira</td>
          <td>
            09:00 <br />
            17:00 <br />
            20:00 <br />
          </td>
        </tr>
        <tr>
          <td>Sexta-feira</td>
          <td>Não temos horário disponível</td>
        </tr>
      </table>
    </span>
  </div>
</template>
<script>
export default {
  name: "ButtonAulas",
  data() {
    return {
      ativou: false,
    };
  },
  methods: {
    ativar() {
      this.ativou = !this.ativou;
    },
  },
};
</script>
<style scoped>
.btn-aulas {
  background-color: #ca8b67cb;
  font-family: "Lato";
  font-size: 20px;
  padding: 5px;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  cursor: pointer;
  
}

.btn-aulas:hover {
  background-color: rgb(199, 176, 141);
}

table {
  width: 250px;
  border-collapse: collapse;
}
td {
  border: 1px solid black;
  padding: 3px;
}
h4 {
  text-align: center;
}

</style>