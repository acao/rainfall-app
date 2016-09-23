// // Use require so we only load the containers we need
// function getContainer(name){
//   return require(`./containers/${name}`)
// }
//
// // see: https://github.com/AlecAivazis/redux-responsive#the-responsive-state
// const routes = (browser) => {
//
//   path: '/',
//   component: getContainer('App'),
//   indexRoute: { component: Dashboard },
//   childRoutes: [
//     { path: 'about', component: About },
//     {
//       path: 'inbox',
//       component: Inbox,
//       childRoutes: [{
//         path: 'messages/:id',
//         onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
//       }]
//     },
//     {
//       component: Inbox,
//       childRoutes: [{
//         path: 'messages/:id', component: Message
//       }]
//     }
//   ]
// }
