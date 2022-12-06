import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

// const app = createApp({
//     data() {
//       return {
//         count: 0,
//       };
//     },
//   });

//   app.mount("#app");

createApp(App).mount("#app");

//　에러처리
// createApp(App).config.errorHandler = (err) => {
//     console.log('에러떳다')
// }
