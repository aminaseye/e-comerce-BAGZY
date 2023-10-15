

import Router from './routers/Router'

const App = () => {
  const data : any = [
    {
        id : 1,
        nameProduct : "MINIBAG CLAUDE DE LONA",
        price : 25,
        color : "cafe",
        img : '/assets/products/minibolso/MINIBOLSO1.png'

    },
    {
        id : 2,
        nameProduct : "gloss",
        price : 15,
        color : "orange"
    },
    {
        id : 3,
        nameProduct : "bandolera",
        price : 30,
        color : "red"
    },
    {
        id : 4,
        nameProduct : "hermes",
        price : 100,
        color : "violet"
    },
    {
        id : 5,
        nameProduct : "lacey",
        price : 50,
        color : "salmon",
        img : '/assets/products/bolso_coach/COACHBEIGE1.png'
    }
]

localStorage.setItem('data', JSON.stringify(data))
/*if(!localStorage.getItem('data')){
  localStorage.setItem('data', JSON.stringify(data))
}*/
  return (
    <Router />
  )
}

export default App