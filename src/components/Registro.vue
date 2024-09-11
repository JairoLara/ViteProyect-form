<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const name = ref('');
    const lastName = ref('');
    const year = ref('');
    const phone = ref('');
    const address = ref('');
    const email = ref('');
    const datos = ref<any[]>([]);
    const errorName = ref('');
    const errorLastName = ref('');
    const errorYear = ref('');
    const errorPhone = ref('');
    const errorAddress = ref('');
    const errorEmail = ref('');

    const reset = () => {
      name.value = '';
      lastName.value = '';
      year.value = '';
      phone.value = '';
      address.value = '';
      email.value = '';

      errorName.value = '';
      errorLastName.value = '';
      errorYear.value = '';
      errorPhone.value = '';
      errorAddress.value = '';
      errorEmail.value = '';
    };

    const validar = () => {
      let isValid = true;

      if (!name.value) {
        errorName.value = 'Name is required';
        isValid = false;
      } else {
        errorName.value = '';
      }

      if (!lastName.value) {
        errorLastName.value = 'Last Name is required';
        isValid = false;
      } else {
        errorLastName.value = '';
      }

      if (!year.value) {
        errorYear.value = 'Year of Birth is required';
        isValid = false;
      } else {
        errorYear.value = '';
      }

      if (!phone.value) {
        errorPhone.value = 'Phone is required';
        isValid = false;
      } else {
        errorPhone.value = '';
      }

      if (!address.value) {
        errorAddress.value = 'Address is required';
        isValid = false;
      } else {
        errorAddress.value = '';
      }

      if (!email.value) {
        errorEmail.value = 'Email is required';
        isValid = false;
      } else {
        errorEmail.value = '';
      }

      return isValid;
    };

    // agregar los datos atabla
    const enviar = () => {
      if (validar()) {
        
        datos.value.push({
          name: name.value,
          lastName: lastName.value,
          year: year.value,
          phone: phone.value,
          address: address.value,
          email: email.value
        });
        reset();
      }
    };

    return {
      name,
      lastName,
      year,
      phone,
      address,
      email,
      datos,
      errorName,
      errorLastName,
      errorYear,
      errorPhone,
      errorAddress,
      errorEmail,
      reset,
      enviar
    };
  }
});
</script>

<template>
  <div class="registro">
    <h4>Registro</h4>
    <hr>
    <div>
      <label for="name" class="textos">Nombre:</label>
      <input v-model="name" type="text" id="name"/>
      <span v-if="errorName" style="color: red;">{{ errorName }}</span>
    </div>

    <div>
      <label for="lastName" class="textos">Apellido:</label>
      <input v-model="lastName" type="text" id="lastName" />
      <span v-if="errorLastName" style="color: red;">{{ errorLastName }}</span>
    </div>

    <div>
      <label for="year" class="textos">Año nacimiento:</label>
      <input v-model="year" type="number" id="year" />
      <span v-if="errorYear" style="color: red;">{{ errorYear }}</span>
    </div>

    <div>
      <label for="phone" class="textos">Telefono:</label>
      <input v-model="phone" type="tel" id="phone" />
      <span v-if="errorPhone" style="color: red;">{{ errorPhone }}</span>
    </div>

    <div>
      <label for="address" class="textos">Contrasena:</label>
      <input v-model="address" type="text" id="address" />
      <span v-if="errorAddress" style="color: red;">{{ errorAddress }}</span>
    </div>

    <div>
      <label for="email" class="textos">Email:</label>
      <input v-model="email" type="email" id="email" />
      <span v-if="errorEmail" style="color: red;">{{ errorEmail }}</span>
    </div>
    <hr>
    
      <button @click="enviar">Registrar</button>
      <button @click="reset">Limpiar</button>

    <table v-if="datos.length" border="1" style="margin-top: 20px;">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Año nacimiento</th>
          <th>Telefono</th>
          <th>Contraseña</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in datos" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.lastName }}</td>
          <td>{{ data.year }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.registro{
  border: 1px solid;
  padding-inline: 30px;
}
.textos{
  display: block;
  width: 100%;
}
span{
  display: block;
  width: 100%;
}
</style>