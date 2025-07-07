import { defineConfig } from 'vite'
//Install node types before calling below import
import {fileURLToPath} from "url";
import path from 'path';
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //Targets - file extensions
      include:[
        /\.[tj]sx?$/, //Regex which says t or j followed by sx // tsx, js ? next to x says it can happen xero or one time js, ts
         /\.vue$/, //$ at the end says it ends with vue
      ],
      //globals - libraries
      imports:["vue", "vue-router", "pinia"],
      //other settings/files/dirs to import
      dts:true, //Autoimport all the files that ends with d.ts
      //AutoImport inside vue template
      vueTemplate:true,
      eslintrc:{enabled:true}
    }),
  ],
  base: "./",
  resolve:{
    alias:{
      //Two methods available
      //Method 1 : using fireURLtoPath(keep adding other path as needed)
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      //Method 2 : using path
      "@components": path.resolve(__dirname, "src/components"),
      "@pages" : path.resolve(__dirname, "src/@Pages")
    }
  }
})
