<template>
  <v-app id="app">
    <v-container>
      <v-combobox
        label="ユーザの選択"
        :items="items"
        :value="value"
        item-text="name"
      >
        <template #prepend-item>
          <v-list-item @click="clickPrepend">
            <v-list-item-content>
              <v-list-item-title> モーダルを表示 </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-2 mb-1" />
        </template>
        <template #selection="{ item }"> {{ item.name }}</template>
        <template #item="{ item }">
          <div>
            <img :src="item.url" alt="" />
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </div>
        </template>
      </v-combobox>

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            モーダルダイアログ
          </v-card-title>

          <v-card-text> モーダルダイアログの内容 </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    items: [
      { name: "Ken", url: "https://picsum.photos/60/60", id: 1 },
      { name: "John", url: "https://picsum.photos/60/60", id: 2 },
    ],
    value: "",
  }),
  methods: {
    clickPrepend() {
      this.dialog = true;
      console.log("clickPrepend");
      this.$emit("click:prepend");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
