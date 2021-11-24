Vue.component("descripciones", {
  props: {
    comidas: Array
  },
  template: `<table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comida in comidas" :key="comida.id" >
          <td>{{comida.name}}</td>
          <td>{{comida.description}}</td>
          <td>{{comida.price}}</td>
      </tr>
    </tbody>
  </table>`
});

var app = new Vue({
  el: "#app",
  data: {
    comidas: [
      { id: 0, name: "Pasta", description: "Acompañado de salsas", price: 500 },
      {
        id: 1,
        name: "Hamburguesa",
        description: "Pan, carne, lechuga, tomate",
        price: 300
      },
      { id: 2, name: "Pizza", description: "salsa y mozzarella", price: 600 },
      { id: 3, name: "Milanesa", description: "Carne o Pollo", price: 300 }
    ],
    bebidas: [
      { id: 4, name: "Gaseosas", description: "Pepsi, Coca", price: 500 },
      { id: 5, name: "Jugos", description: "Limon, Naranja", price: 300 }
    ],
    postres: [
      { id: 6, name: "Pastel", description: "Chocolate, Vainilla", price: 500 },
      {
        id: 7,
        name: "Helados",
        description: "Americana, Choco, Frutilla",
        price: 300
      }
    ]
  },

  methods: {},
  computed: {}
});
