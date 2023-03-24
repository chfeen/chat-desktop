import * as VueRouter from "vue-router";
//路由规则描述数组
const routes = [
  { path: "/", redirect: "/chat" },
  // {
  //   path: "/WindowMain",
  //   component: () => import("./Window/WindowMain.vue"),
  //   children: [
  //     { path: "Chat", component: () => import("./Window/WindowMain/Chat.vue") },
  //     { path: "Contact", component: () => import("./Window/WindowMain/Contact.vue") },
  //     { path: "Collection", component: () => import("./Window/WindowMain/Collection.vue") },
  //   ],
  // },
  {
    path: "/chat",
    component: () => import("../pages/chat/index.vue"),
    children: [
      {path: 'chat1', component: () => import("../pages/chat/Chat1.vue")},
      {path: 'chat2', component: () => import("../pages/chat/Chat2.vue")},
    ]
  },
  {
    path: "/contact",
    component: () => import("../pages/contact/index.vue"),
  },
];
//导出路由对象
export let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
