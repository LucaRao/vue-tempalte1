
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    "name": "supabase-vue-3",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    // # 扩展pkg#scripts
    scripts: {
        "dev": "vite --port 3000",
        "build": "vite build",
        "preview": "vite preview"
    }, 
    // # 扩展pkg#dependencies
    dependencies: {
      "vue": "^^3.2.47",
      "@supabase/supabase-js": "^2.21.0",
    }, 
    // # 扩展pkg#devDependencies
    devDependencies: {
      "@vitejs/plugin-vue": "^4.1.0",
      "vite": "^4.3.0"
    }
  });
//   # 复制template模版
  api.render('../template');
};

var vuerc = shell.exec('vue config', { silent:true }).stdout
var deleteConfigKey = 'useTaobaoRegistry'
if (new RegExp(deleteConfigKey).test(vuerc)) {
  shell.exec(`vue config --set ${deleteConfigKey} false`, { silent:true })
}
child.execSync(
  `vue create --preset multi-act --clone ${projectName}`,
  {
    stdio: 'inherit'
  }
);
fs.ensureDirSync(`${projectName}/${Configure.BaseUri}`)