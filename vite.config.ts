import { defineConfig } from 'vite'
import {devPlugin, getReplacer} from "./plugins/devPlugin";
import vue from '@vitejs/plugin-vue'
import optimizer from "vite-plugin-optimizer";
import {buildPlugin} from "./plugins/buildPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [optimizer(getReplacer()),devPlugin(), vue(), buildPlugin()]
})
